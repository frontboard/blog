---
title: "Przełącznik motywów. Dynamiczna zmiana kolorów strony"
date: 2018-04-03 18:45:00 +01:00
author: Kacper Stawiński
layout: post
categories: javascript
img: /assets/img/theme-switcher.png
redirect_from:
  - /dynamiczna-zmiana-kolorow-strony/
---
Wielokrotnie na grupach związanych z językami HTML czy CSS napotykałem pytania dotyczące tzw. *theme switchera*. Jego zadanie to — zależnie od ustawienia użytkownika — serwowanie mu odpowiedniej wersji kolorystycznej strony. Rozwiązanie jest wbrew pozorom bardzo proste.

## Logika skryptu

Przed rozpoczęciem kodowania warto byłoby zastanowić się, jak zaimplementować tę funkcję. Możemy bawić się w podpinanie/odpinanie różnych arkuszy ze stylami, jednak istnieje dużo prostszy sposób:

- metoda `toggle()` do manipulowania klasami znacznika body,
- przygotowanie dwóch wersji kolorystycznych za pomocą odpowiedniej klasy (na potrzeby artykułu przyjmimy: `.dark`),
checkbox/switch button w HTML-u. Po zmianie wartości następuje uruchomienie funkcji `switchTheme()`, która ma na celu dodanie/usunięci klasy `.dark`, co spowoduje zastosowanie odpowiednich stylów.

## Style CSS dla obu wersji kolorystycznych

Na samym początku warto przygotować sobie plik .css ze stworzonymi już stylami dla obydwóch wersji strony. Zalecam skorzystanie z dowolnego preprocesora CSS (np. SCSS). Nie jest to niezbędne, ale zdecydowanie ułatwi przygotowywanie takiego arkusza.

**CSS**:
```css
body {
    background: #fff;
    color: #000;
}
body.dark {
    background: #000;
    color: #fff;
}
```

W przypadku skorzystania z **SCSS**:

```scss
body {
    background: #fff;
    color: #000;
}
body.dark {
    background: #000;
    color:#fff;
    
    // .element {}
    // itd.
}
```

**Ważna uwaga**: nie trzeba, a wręcz nie powinno się kopiować wszystkich stylów znaczników. Utrudni to ich późniejszą edycję. Kopiujemy jedynie wartości, które chcemy zmienić (na przykład: `background`, `background-color`, `color`).

## Przycisk do zmiany motywu

```html
<label><input type="checkbox" id="theme">Dark mode</label>
```

Tyle.

## Serce skryptu, czyli JavaScript

W JS-ie musimy obsłużyć dwie sprawy. Pierwsza z nich to **wykrycie zmiany wartości** checkboxa, druga to **dodanie lub usunięcie klasy** `.dark` ze znacznika `body`.

Wykrycie zmiany obsłużymy za pomocą metody [addEventListener](https://developer.mozilla.org/pl/docs/Web/API/Element/addEventListener):

```javascript
const themeCheckbox = document.querySelector('#themeCheckbox');
themeCheckbox.addEventListener('change', switchTheme);
```

Natomiast do klas będzie bardzo przydatna [classList.toggle](https://developer.mozilla.org/pl/docs/Web/API/Element/classList):

```javascript
function switchTheme () {
    const body = document.querySelector('body');
    body.classList.toggle('dark');
}
```

## Podsumowanie

Bardzo niskim nakładem pracy osiągnęliśmy ciekawą i stosowaną na wielu stronach funkcję. Myślę, że duża część użytkowników odwiedzających witrynę w nocy będzie Wam wdzięcznych.