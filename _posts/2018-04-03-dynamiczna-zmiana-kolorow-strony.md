---
title: "Przełącznik motywów. Dynamiczna zmiana kolorów strony"
date: 2018-04-03 18:45:00 +01:00
author: kstawinski
layout: post
categories: javascript
img: theme-switcher-przelacznik-motywow-javascript.jpg
redirect_from:
  - /dynamiczna-zmiana-kolorow-strony/
---
Wielokrotnie na frontendowych grupach napotykałem pytania dotyczące stworzenia *theme switchera*. Jego zadaniem jest dopasowanie odpowiedniej wersji kolorystycznej witryny w zależności od ustawienia użytkownika. Rozwiązanie jest wbrew pozorom dosyć proste, choć zależy to od ilości obsługiwanych przypadków.

Chcąc wykorzystać maksymalny potencjał takiej funkcjonalności, można pokusić się na przykład o odczytywanie preferencji systemowych (patrz: [`prefers-color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) i w zależności od wyniku serwować jasny lub ciemny tryb. Dodatkowym atutem będzie zapisywanie wyboru użytkownika, co można rozwiązać za pomocą [`localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage). Kolejna rzecz: automatyczne włączanie ciemnego trybu o późnej godzinie. Jak widzisz, pomysłów na rozwój i implementację takiej funkcji jest dosyć sporo. **Poniższym wpisem przedstawię Ci, jak stworzyć dwa motywy strony, jak je zmieniać i ładować po odświeżeniu strony.**

**[🚀 Demo](https://frontboard.github.io/theme-switcher/)** / [Kod źródłowy](https://github.com/frontboard/theme-switcher)

## Logika skryptu
Przed rozpoczęciem kodowania warto byłoby zastanowić się, jak zaimplementować tę funkcję. Można podpinać i odpinać arkusze ze stylami, ale jest prostszy sposób:

- metoda [`classList.toggle()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) do manipulowania klasami,
- przygotowanie dwóch wersji kolorystycznych za pomocą odpowiedniej klasy (na potrzeby artykułu przyjmimy: `.darkmode`),
- `input[type="checkbox"]` w HTML-u, który po zmianie wartości uruchomi funkcję mającą dodać/usunąć klasę `.darkmode`.

## Style CSS dla obu wersji kolorystycznych
Na samym początku warto przygotować sobie plik CSS dla obydwóch wersji strony. W tym przypadku również mamy kilka możliwości. Jedną z nich jest skorzystanie z preprocesora CSS, np. SCSS. W drugim przypadku możemy skorzystać z [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) - i tak właśnie zrobimy.

Przykładowe rozwiązanie przy użyciu "czystego" **CSS**:
```css
body {
  background: #fff;
  color: #000;
}

body.darkmode {
  background: #000;
  color: #fff;
}
```

W przypadku skorzystania z CSS-owych zmiennych, **definiujemy zmienne z kolorami** i w każdym elemencie, gdzie `color` i `background-color` są ustawione na sztywno, **zmieniamy wartość na zmienną**.

```css
:root {
  --text-color: #000;
  --bg-color: #FFF;
}

.darkmode {
  --text-color: #FFF;
  --bg-color: #000;
}

body {
  color: var(--text-color);
  background: var(--bg-color);
}
```

## Przycisk do zmiany motywu
```html
<button id="theme-switcher">
  Toggle theme
</button>
```

That's all.

## Wykrycie żądania zmiany motywu
Aby wykryć kliknięcie przycisku `#theme-switcher`, skorzystam z metody [`addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener). Potrzebuję jeszcze stworzyć funkcję, która doda lub usunie klasę `darkmode` ze znacznika `body`. Posłuże się [funkcją strzałkową](/funkcje-strzalkowe-es6-javascript) - będzie najprościej.

```js
const button = document.querySelector('#theme-switcher');

const toggleTheme = () => document.querySelector('body').classList.toggle('darkmode');

button.addEventListener('click', toggleTheme);
```

## Zapis wyboru użytkownika
Aby nie powielać tych samych wartości w kilku miejscach, stwórzmy prostą konfigurację:

```js
const body = document.querySelector('body');

const config = {
  className: 'darkmode',
  cookieName: 'darkmode'
};
```

`config.cookieName` przyda się w dalszej części do tworzenia, usuwania i odczytu wartości `localStorage`.

Chcąc zapisać wybór użytkownika, należy rozwinąć istniejącą już funkcję `toggleTheme` o kilka metod `localStorage`. Poniższy kod używa już podstawionych wartości obiektu.

```js
const toggleTheme = () => {
  body.classList.toggle(config.className);

  if (body.classList.contains(config.className)) { // jeśli tryb został ustawiony jako ciemny
    localStorage.setItem(config.cookieName, 'true'); // definiuje wartość localStorage.darkmode
  } else {
    localStorage.removeItem(config.cookieName); // usuwa wartość localStorage.darkmode
  }
};
```

Wchodząc w konsolę i pobierając zapisaną (bądź nie) wartość `localStorage.getItem('darkmode')` otrzymasz:
* w przypadku trybu ciemnego: `"true"`
* w przypadku trybu jasnego: `null`

## Ładowanie motywu po odświeżeniu strony
Skoro zapis już działa, przydałoby się załadować motyw po odświeżeniu lub ponownym odwiedzeniu strony. Warto nadmienić, że w przypadku użycia [`sessionStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage) kod nie mógłby zadziałać, bo `sessionStorage` opróżnia się po zamknięciu karty w przeglądarce. `localStorage` ma bezterminową ważność.

Do załadowania motywu wykorzystam osobną funkcję, która sprawdzi czy istnieje wartość `localStorage.darkmode` - jeśli tak, nada klasę `darkmode` znacznikowi `body`.

```js
const loadDarkTheme = () => {
  if (localStorage.getItem(config.cookieName)) {
    body.classList.add(config.className);
  }
};
```

Tak utworzoną funkcję strzałkową można podpiąć do obiektu `window` na zdarzenie `load` (kod zostanie wykonany po załadowaniu strony).

```js
window.addEventListener('load', loadDarkTheme);
```

## Podsumowanie
Bardzo niskim nakładem pracy osiągnęliśmy ciekawą i stosowaną na wielu stronach funkcję. Myślę, że duża część użytkowników odwiedzających witrynę w nocy będzie Wam wdzięczna ;)
