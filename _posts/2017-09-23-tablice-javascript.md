---
title: Tablice w JavaScript
date: 2017-09-23T15:13:30+00:00
author: Kacper Stawiński
layout: post
categories: javascript
img: /assets/img/jsw60dni.png
redirect_from:
  - /tablice-javascript/
---
Zmienne kompletnie nie nadają się do przechowywania większej ilości danych. Chyba nie chcesz tworzyć 100 zmiennych tylko po to, aby zapisać w nich imię i nazwisko swojego klienta? Lepiej byłoby stworzyć jedną tablicę o nazwie `clients` i w niej trzymać dane, bo kod siłą rzeczy nie będzie tylko krótszy, ale i wydajniejszy.

## Konstrukcja tablicy w JavaScript
Skoro wiemy już co chcemy osiągnąć, zabierzmy się do działania. Budowa tablicy z początku może Ci nieco przypominać budowę zmiennej, bo początek to również słówko kluczowe.

```js
const clients = [];
```

Tak wygląda stworzona tablica o nazwie `clients`. Jeszcze nie umieściliśmy w niej danych, zrobimy to za moment. Dane w takiej tablicy umieszczamy pomiędzy nawiasami kwadratowymi. Każdy ciąg znaków musi być zapisany w cudzysłowie, jednak tablice mogą przyjmować jako wartości również obiekty, wartości logiczne czy funkcje.

```js
const clients = ['Jan Kowalski', 'Piotr Nowy'];
```

## Jak wyciągnąć wybranego klienta z tablicy?
Jako, że na razie wszystko wolę wrzucać do konsoli, tak samo będzie i w tym przypadku. Chcę pobrać dane pierwszego klienta, który został zapisany w tablicy.

```js
console.log(clients[1]);
```

Taki kod zwróci nam dane drugiego klienta, a to dlatego, że indeksowanie w JavaScript rozpoczyna się od 0, nie od 1. Stąd, chcąc pobrać dane Jana Kowalskiego powinniśmy do konsoli wywołać `clients[0]`:

```js
console.log(clients[0]);
```

## Jak wyświetlić wszystkie dane?
To proste. Nie określamy w funkcji `console.log`, którą wartość chcemy wyciągnąć i w efekcie JS podaje nam całą tablicę.

```js
const clients = ['Jan Kowalski', 'Piotr Nowy'];
console.log(clients);
```

## Dodawanie danych do tablicy
Używając [metody `push`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) postaramy się o wepchnięcie do tablicy jeszcze dwóch klientów, np. Marka Wiśniewskiego i Janusza Nowaka.

```js
clients.push();
```

Pozostało nam jeszcze uzupełnić nawiasy danymi. Do wyboru mamy dwie opcje: albo przekazujemy dwa nazwiska jako jeden argument, albo dwukrotnie wywołujemy metodę `push` podając osobne dane do każdej z nich.

```js
clients.push('Marek Wiśniewski');
clients.push('Janusz Nowak');
```

Ten kod będzie równoznaczny z tym:

```js
clients.push('Marek Wiśniewski', 'Janusz Nowak');
```

Jeżeli chcesz dodać dane na początku tablicy, skorzystaj z [metody `unshift`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift). Użycie [`push`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) spowoduje, że dane pojawią się na jej końcu.

## Usuwanie danych
Chcąc usunąć dane z tablicy możemy skorzystać z dwóch metod: [metoda `pop`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) spowoduje, że dane będą kasować się od końca, a [metoda `shift`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) usunie dane od początku. Obydwie metody zwracają usuniętą wartość.

```js
// Usunięcie ostatniej wartości
clients.pop();

// Usunięcie pierwszej wartości
clients.shift();
```

## Długość tablicy
Nic ma nic dziwnego w tym, że chcielibyśmy poznać liczbę klientów, których zapisaliśmy w naszej tablicy. O ile teraz policzenie klientów nie stanowi żadnego problemu, później może być nieco trudniej :) Skorzystamy w tym celu z [własności `length`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length).

```js
console.log(clients.length);
```

## Podsumowanie #006
Do ukończenia tego wpisu zabierałem się ponad 2 tygodnie (początkowo miał pojawić się 5 września) :) Myślę, że nieco przybliżyłem Wam temat przechowywania większej ilości danych za pomocą tablic w JavaScript, choć dobrym uzupełnieniem wpisu będzie [dokumentacja MDN nt. tablic](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array). Gdybyś miał jakieś pytania, opinię - zapraszam do komentowania, pisania na Facebooku ([kliknij tutaj](https://www.facebook.com/frontboardpl/)) czy pisania maili.
