---
title: Funkcje w JavaScript. Proste, a bardzo przydatne!
date: 2017-09-15T16:07:54+00:00
author: Kacper Stawiński
layout: post
categories: javascript
img: /assets/img/jsw60dni.png
redirect_from:
  - /funkcje-od-podstaw-javascript/
---
Podobnie jak zmienne, funkcje są jednymi z częściej wykorzystywanych elementów w danym języku programowania. Nic w tym dziwnego, skoro pozwalają one znacznie zmniejszyć objętość kodu. Kolejnym plusem jest ich elastyczność. Do stworzonej już funkcji możemy podstawiać różne dane, bez ingerencji w samą logikę.

## Konstrukcja funkcji

Jak już zdążyłem wspomnieć we wstępie, funkcje to często przydające się w programowaniu zagadnienie. Budowa najbardziej podstawowej funkcji, jaka może być, wygląda tak:

```js
function nazwaFunkcji (parametr1, parametr2) {
  // ciało funkcji
}
```

Nie koniecznie trzeba podawać do funkcji parametry. Jeśli funkcja ma być anonimowa, czyli nienazwana i przypisana do zmiennej, nazwa jest zbędna. Koniecznością jest jedynie słowo kluczowe `function`.

```js
const sum = function (a, b) { return a + b };
console.log(sum(1, 2)); // => 3
```

## Domyślne parametry funkcji

W standardzie [ECMAScript 2015 (ES6)](https://262.ecma-international.org/6.0/) wprowadzono funkcjonalność pozwalającą na domyślne parametryzowanie funkcji. Wówczas, w przypadku nieprzekazania argumentu podstawiona zostanie domyślna wartość.

```javascript
function showPI (pi = 3) {
  return pi + 0.14;
}
console.log(showPI()); // => 3.14
```

## Funkcja sprawdzająca temperaturę ciała

Skoczymy od razu na głęboką wodę. Chciałbym stworzyć funkcję `isTempNormal` z parametrem `temp`, której zadaniem będzie wyświetlić w oknie przeglądarki użytkownika informację, czy podana temperatura jest w normie, za niska lub za wysoka. Pomijam zakres "poprawnej temperatury" ciała. Dla uproszczenia przyjmijmy, że każda poza 36.6 jest nieprawidłowa. Zacznijmy od poprawnego zapisania szkieletu funkcji.

```js
function isTempNormal (temp) {
  document.write(`Podana temperatura to ${temp} stopni Celsjusza.`);
}
```

Nie musimy jeszcze sprawdzać czy ten kod działa. W zasadzie to nawet nie ma po co, bo jej nie wywołaliśmy. Dzięki mechanizmowi hoistingu nie ma znaczenia czy wywołamy funkcję na początku czy na końcu kodu. Jeśli chcesz wiedzieć nieco więcej na ten temat - odsyłam Cię [do tego wpisu](/zakres-zmiennych-zmienne-lokalne-globalne-javascript).

Funkcję wywołujemy poprzez podanie jej nazwy, ewentualnie uzupełnienia parametrów (czyli przekazania argumentów) i zakończenia średnikiem.

```js
isTempNormal(36.6);
```

W Twojej przeglądarce powinien pokazać się komunikat o podanej temperaturze. Teraz dzięki [instrukcjom warunkowym](/instrukcje-warunkowe-if-switch-javascript), które pozwolą na dopasowanie odpowiedniego wyniku, stworzymy kilka przykładowych informacji.

```js
function isTempNormal (temp) {
  if(temp == 36.6) {
    document.write('Temperatura jest w normie');
  }
  else if (temp > 36.6) {
    document.write('Temperatura jest za wysoka');
  }
  else if (temp < 36.6) {
    document.write('Temperatura jest za niska');
  }
}

isTempNormal(36.9);
```

Aby było wiadomo o jakiej temperaturze mowa, dzięki [template strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) w łatwy sposób wrzucimy wartość parametru `temp` do naszych komunikatów.

```js
function isTempNormal (temp) {
  if(temp == 36.6) {
    document.write(`Temperatura ${temp} jest w normie`);
  }
  else if (temp > 36.6) {
    document.write(`Temperatura ${temp} jest za wysoka`);
  }
  else if (temp < 36.6) {
    document.write(`Temperatura ${temp} jest za niska`);
  }
}
```

Teraz wywołaj funkcję z różnymi danymi i sprawdź, czy wszystko działa tak, jak powinno.

```js
isTempNormal(36.6);
isTempNormal(40);
isTempNormal(15.0);
isTempNormal(35.513145);
```

## Walidacja danych przekazywanych do funkcji
Przekazując do powyższej funkcji na przykład obiekt czy tablicę, z pewnością coś pójdzie nie tak. Należy zadbać o walidację danych, a więc w przypadku funkcji `isTempNormal` sugeruję sprawdzać, czy przekazano jakąkolwiek wartość i czy ta przekazana wartość jest liczbą.

```js
function isTempNormal (temp) {
  if (temp && !isNaN(temp)) {
    // tutaj wstaw kod z if-ami
  } else {
    document.write('Nie podano żadnej wartości lub jest ona nieprawidłowa.');
  }
}
```

Do sprawdzenia, czy przekazana wartość jest liczbą użyłem [funkcji `isNaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN) (is not a number) i jej wartość odwróciłem wykrzyknikiem.

## Funkcje strzałkowe
We wspomnianym wcześniej standardzie ECMAScript 2015, wprowadzone zostały między innymi funkcje strzałkowe, które oferują zdecydownaie krótszą składnię, nie posiadają własnego `this` (kierują do obiektu `window`). W kwietniu napisałem post nt. [funkcji strzałkowych w JavaScript](/funkcje-strzalkowe-es6-javascript). Zachęcam do lektury, bo to dosyć ciekawy temat.

Przykładowe wykorzystanie **funkcji strzałkowej**:
```js
const hi = () => 'Hello, world!';
```

Przykładowe wykorzystanie **funkcji anonimowej**:
```js
const hi = function () { return 'Hello, world!' };
```

Przykładowe wykorzystanie **klasycznej funkcji**:
```js
function hi () {
  return 'Hello, world!';
}
```

## Podsumowanie #005

Dzisiaj poznaliśmy funkcje w JavaScript. Ilość ich zastosować moglibyśmy mnożyć w nieskończoność, bo jak dowiesz się później, stanowią one fundament programowania. Bardzo ciężko byłoby tworzyć aplikacje bez ich użycia. Zachęcam do polubienia [fanpage Frontboard.pl](https://www.facebook.com/frontboardpl/), bo to tam najpierw pojawia się informacja o nowym poście.
