---
title: "Przełącznik motywów. Dynamiczna zmiana kolorów strony"
date: 2018-04-03 18:45:00 +01:00
author: Kacper Stawiński
layout: post
categories: javascript
img: theme-switcher-przelacznik-motywow-javascript.jpg
redirect_from:
  - /dynamiczna-zmiana-kolorow-strony/
---
Wielokrotnie na frontendowych grupach napotykałem pytania dotyczące stworzenia *theme switchera*. Jego zadaniem jest dopasowanie odpowiedniej wersji kolorystycznej witryny w zależności od ustawienia użytkownika. Rozwiązanie jest wbrew pozorom dosyć proste, choć zależy to od ilości obsługiwanych przypadków.

Najprostszym przypadkiem, którym zajmiemy się w dalszej części artykułu, będzie obsługa zmiany motywu strony po kliknięciu przycisku. Chcąc wykorzystać maksymalny potencjał takiej funkcjonalności, można pokusić się na przykład o odczytywanie preferencji systemowych (patrz: [`prefers-color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) i w zależności od wyniku serwować jasny lub ciemny tryb. Dodatkowym atutem będzie zapisywanie wyboru użytkownika, co można rozwiązać za pomocą [`localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage). Kolejna rzecz: automatyczne włączanie ciemnego trybu o późnej godzinie. Jak widzisz, pomysłów na rozwój i implementację takiej funkcji jest dosyć sporo.

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

## Podsumowanie
Bardzo niskim nakładem pracy osiągnęliśmy ciekawą i stosowaną na wielu stronach funkcję. Myślę, że duża część użytkowników odwiedzających witrynę w nocy będzie Wam wdzięczna ;)