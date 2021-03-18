---
title: "Funkcje strzałkowe (ES6) w JavaScript"
date: 2018-04-02 09:00:00 +01:00
author: Kacper Stawiński
layout: post
categories: javascript
img: /assets/img/funkcje-strzalkowe.jpg
---
*Fat arrow functions*, czyli grube funkcje strzałkowe to w dużym uproszczeniu skrócone wersje wyrażeń funkcyjnych przypisanych do zmiennych. Funkcje strzałkowe – jak dla mnie – oferują zdecydowanie przystępniejszą składnię. Istnieje jednak mała pułapka, na którą trzeba uważać – mowa o zakresie `this`.

## Różnice w składni funkcji strzałkowej
Stworzę teraz na 2 sposoby najbardziej podstawową funkcję, która zwróci mi string „Hello, world!”.

**Funkcja anonimowa przypisana do zmiennej:**

```javascript
const hello = function () {
  return "Hello, world!";
}
```

**Funkcja strzałkowa:**

```javascript
const world = () => "Hello, world!";
```

Jest różnica, prawda? Nie podaliśmy żadnych parametrów, dlatego nawiasy pozostają puste. Po wywołaniu obu funkcji oraz wrzuceniu ich do konsoli otrzymujemy zdublowany tekst: „Hello, world!”.

## Przekazywanie parametrów do funkcji strzałkowej
W nawiasach zapisujemy nazwy przekazywanych parametrów. W przypadku, gdy chcemy przekazać **1 parametr możemy pominąć nawiasy**. Jeżeli nie przekazujemy żadnych parametrów bądź przekazujemy **więcej niż 1 parametr, nawiasy okrągłe są konieczne**.

Tak więc:

```javascript
// Funkcja strzałkowa bez parametrów
() => {};

// Jeden parametr
(a) => {};
a => {};

// Więcej niż jeden parametr
(a, b) => {};
```

Stworzyłem funkcję `dodaj`, której zadaniem jest dodanie do siebie dwóch podanych liczb. Po wywołaniu (z parametrami `x=3, y=10`) i wrzuceniu do konsoli, otrzymujemy poprawny wynik: **13**.

## Domyślne parametry
Dzięki [ECMAScript](https://pl.wikipedia.org/wiki/ECMAScript) 2015 ustawianie domyślnych parametrów funkcji jest banalnie proste. Oczywiście, można skorzystać z operatora [typeof](https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Operatory/Operator_typeof) i porównania za pomocą [instrukcji warunkowej](/instrukcje-warunkowe-if-switch-javascript), ale skoro możemy zrobić to prościej – dlaczego nie?

```javascript
const about = (imie="Jan", age=10) => `Imię to ${imie}, wiek jest rowny ${age}`;
// => "Imię to Jan, wiek jest rowny 10
```

## Blok instrukcji

Chcąc, aby nasza funkcja strzałkowa robiła cokolwiek więcej, niż tylko zwracała dane, musimy zawrzeć jej ciało w nawiasach klamrowych.

```javascript
const min = (a, b) => {
    if(a>b) {
        return `Najmniejsza liczba z podanych jest równa ${b}`;
    } else if (b>a) {
        return `Najmniejsza liczba z podanych jest równa ${a}`;
    } else if (a === b) {
        return 'Podane liczby są równe';
    }
}

console.log(min(10, 5));
// => "Najmniejsza liczba z podanych jest równa 5"
```

## Zwracanie wartości, a blok instrukcji

Warto pamiętać, że w przypadku zastosowania bloku instrukcji, musimy sami skorzystać z polecenia [return](https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Polecenia/return).

```javascript
// tak NIE robić
const about = (name) => {`Imie: ${name}`};
const about = (name) => {
    `Imie: ${name}`
};

// tak robić
const about = (name) => {return `Imie: ${name}`};
const about = (name) => {
    return `Imie: ${name}`
};
```

## Zmiana kontekstu `this`

We wpisie „[Tworzenie obiektów w JavaScript](/tworzenie-obiektow-javascript)” pisałem o funkcji wewnątrz obiektu (krócej: o metodzie). Do opisania siebie za pomocą obiektu użyłem operatora `this`, który powinien odwołać się do obiektu i wskazanych wartości. Odwołał się, dane zostały poprawnie podstawione, wszystko działa. A jak będzie to wyglądało w przypadku funkcji strzałkowych?

Metoda `about` zapisana za pomocą zwykłej funkcji:

```javascript
const me = {
    name: "Adam",
    age: 10,
    about: function() {
        return `Jestem ${this.name}, mam ${this.age} lat.`;
    }
};

console.log(me.about());
```

Wynik: „Jestem Adam, mam 10 lat.”. Wszystko jest okej. A stwórzmy w metodzie `about` funkcję strzałkową:

```javascript
const me = {
    name: "X",
    age: 10,
    about: () => `Jestem ${this.name}, mam ${this.age} lat.`
};

console.log(me.about());
```

Wynik: „Jestem , mam undefined lat.”. Coś jest nie tak? Zależy z której strony na to spojrzeć ;) Jest to spowodowane tym, że **operator `this` w funkcjach strzałkowych ma kontekst zewnętrzny**, czyli nie wskazuje na miejsce, w którym został wywołany, a kieruje do obiektu `window`. Wykorzystanie jej w tym przypadku nie ma sensu i warto powrócić do zwykłej funkcji.

Gdyby stworzyć zmienne globalne `name` oraz `age`, funkcja strzałkowa pobrałaby z nich dane i wszystko **teoretycznie** byłoby w porządku.

## Podsumowanie

Funkcje strzałkowe to całkiem ciekawy temat, choć na pierwszy rzut oka nie taki prosty. Na pewno pojawią się jeszcze wpisy na ten temat. Tradycyjnie zapraszam do obserwowania [fanpage bloga](https://www.facebook.com/frontboardpl/).
