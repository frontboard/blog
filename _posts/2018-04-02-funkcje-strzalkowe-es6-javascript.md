---
title: "Funkcje strzałkowe (ES6) w JavaScript"
date: 2018-04-02 09:00:00 +01:00
author: Kacper Stawiński
layout: post
categories: javascript
img: /assets/img/funkcje-strzalkowe.jpg
redirect_from:
  - /funkcje-strzalkowe-es6-javascript/
---
*Fat arrow functions*, czyli grube funkcje strzałkowe to w dużym uproszczeniu skrócone wersje wyrażeń funkcyjnych przypisanych do zmiennych. Funkcje strzałkowe – jak dla mnie – oferują zdecydowanie przystępniejszą składnię. Istnieje jednak mała pułapka, na którą trzeba uważać – mowa o zakresie [`this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this).

## Różnice w składni funkcji strzałkowej
Stworzę teraz na 2 sposoby najbardziej podstawową funkcję, która zwróci mi string „Hello, world!”.

**Funkcja anonimowa przypisana do zmiennej:**

```javascript
const hello = function () {
  return 'Hello, world!';
}
```

**Funkcja strzałkowa:**

```js
const hello = () => "Hello, world!";
```

Jest różnica, prawda? Nie podaliśmy żadnych parametrów, dlatego nawiasy pozostają puste. Po wywołaniu obu funkcji oraz wrzuceniu ich do konsoli otrzymujemy zdublowany tekst "Hello, world!".

## Przekazywanie parametrów do funkcji strzałkowej
W nawiasach zapisujemy nazwy deklarowanych parametrów. W przypadku, gdy chcemy zadeklarować **1 parametr możemy pominąć nawiasy**. Jeżeli nie deklarujemy żadnych parametrów bądź deklarujemy **więcej niż 1, nawiasy okrągłe są konieczne**.

Tak więc:

```js
// Brak parametrów
() => {};

// Jeden parametr
(a) => {};
a => {};

// Więcej niż jeden parametr
(a, b) => {};
```

Przykładowa, bardzo prosta funkcja strzałkowa będzie sprawdzać, czy przekazany argument jest liczbą. W pierwszym przypadku wynik takiej funkcji będzie prawdziwy, a w dwóch pozostałych fałszywy, ponieważ dwa przekazane argumenty nie są liczbą, a ciągiem znaków (typ `string` zamiast `number` - więcej przeczytasz w sekcji [`typeof` na MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)).

```js
const isNumber = (value) => typeof value === 'number';

console.log(isNumber(1)); // => true
console.log(isNumber('1')); // => false
console.log(isNumber(1 + '1')); // => false
```

## Domyślne parametry
Dzięki [ECMAScript](https://pl.wikipedia.org/wiki/ECMAScript) 2015 (ES6) ustawianie domyślnych parametrów funkcji jest banalnie proste. W przypadku wywołania funkcji bez przekazania argumentu, jeśli wartość parametru funkcji została domyślnie zadeklarowana, funkcja wykona się podstawiając tą domyślną wartość. Oczywiście, można skorzystać z [instrukcji warunkowej](/instrukcje-warunkowe-if-switch-javascript) lub operatora `typeof`, następnie przypisać "domyślną" wartość, ale skoro można zrobić to prościej - dlaczego by nie?

```js
const sayHello = (name = 'world') => `Hello ${name}`;

console.log(sayHello()); // => 'Hello world'
console.log(sayHello('XYZ')); // => 'Hello XYZ'
```

## Blok instrukcji
Chcąc, aby nasza funkcja strzałkowa robiła cokolwiek więcej, niż tylko zwracała dane, musimy zawrzeć jej ciało w nawiasach klamrowych. 

```js
const diff = (a, b) => {
	console.log(`Mathematical operation: ${a} - ${b}`);
	return a - b;
}

console.log(diff(10, 5)); // => 5
```

## Zwracanie wartości, a blok instrukcji
Warto pamiętać, że w przypadku zastosowania bloku instrukcji, musimy sami skorzystać z [polecenia `return`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return).

```js
// Niepoprawnie
const hi = (name) => { `Hi ${name}` };
const hi = (name) => {
    `Hi ${name}`
};

// Teoretycznie OK, ale to bez sensu
const hi = (name) => { return `Hi ${name}` };
const hi = (name) => {
    return `Hi ${name}`;
};

// Najlepsze rozwiązanie
const hi = (name) => `Hi ${name}`;
```

## Zmiana kontekstu `this`
We wpisie "[Tworzenie obiektów w JavaScript](/tworzenie-obiektow-javascript)" pisałem o funkcji wewnątrz obiektu (krócej: o metodzie). Do opisania siebie za pomocą obiektu użyłem operatora `this`, który powinien odwołać się do obiektu i wskazanych wartości. Odwołał się, dane zostały poprawnie podstawione, wszystko działa. A jak będzie to wyglądało w przypadku funkcji strzałkowych?

Metoda `price` zwracająca cenę produktu po odjęciu upustu (bez walidacji!) zapisana za pomocą zwykłej funkcji:

```javascript
const item = {
  fullPrice: 70,
  discount: 10,
  price: function() {
    return `${this.fullPrice - this.discount} zł`;
  }
};

console.log(item.price()); // => 60 zł
```

Wynik to "60 zł", a więc wszystko się zgadza. Korzystając z funkcji strzałkowej:

```javascript
const item = {
  fullPrice: 70,
  discount: 10,
  price: () => `${this.fullPrice - this.discount} zł`
};

console.log(item.price()); // => NaN zł
```

Wynik: "NaN zł". Coś jest nie tak? Zależy z której strony na to spojrzeć ;) Jest to spowodowane tym, że **operator `this` w funkcjach strzałkowych ma kontekst zewnętrzny**, czyli nie wskazuje na miejsce, w którym został wywołany, a kieruje do obiektu `window`. Wykorzystanie jej w tym przypadku nie ma sensu i warto powrócić do zwykłej funkcji.

Tradycyjnie zapraszam do obserwowania [fanpage bloga](https://www.facebook.com/frontboardpl/).
