---
title: Miernik siły hasła w JavaScript i HTML
date: 2021-04-19 19:15:00 +0100
author: kstawinski
layout: post
categories: javascript html
img: miernik-sily-hasla-javascript.jpg
---
Miernik siły hasła stanowi interesującą wskazówkę dla użytkownika podczas np. rejestracji konta. Warto przedstawić odwiedzającemu wymagania, jakie musi spełniać hasło, by zostało uznane za bezpieczne i pokazać siłę hasła za pomocą poniższej funkcji.

Jak powinno wyglądać bezpieczne hasło? Przede wszystkim, powinno składać się z kombinacji różnych znaków (małe i wielkie litery, cyfry, znaki specjalne). Równie ważna jest długość :) Tworząc 6 znakowe hasło składające się z małych liter polskiego alfabetu masz do dyspozycji **32^6 (1 073 741 824) możliwych kombinacji**. Wykorzystując na przykład: cyfry od 0 do 9 (dziesięć znaków), małe i wielkie litery polskiego alfabetu (sześćdziesiąt cztery znaki) i tworząc 16 znakowe hasło, tych kombinacji uzyskasz 74^16. No, dużo w każdym razie ;)

[👀 Zobacz demo poniżej](#demo)

## Szablon w HTML-u
Pracę nad miernikiem siły hasła zacznijmy od stworzenia w HTML-u pola tekstowego. Celowo używam typu `text` zamiast `password`, bo dzięki temu będziemy w stanie zobaczyć czy miernik reaguje prawidłowo na wprowadzane znaki.

```html
<input type="text">
```

Element [`meter`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter) będzie bazą całej funkcji. To w nim skonfigurujemy później jakie wartości są prawidłowe, a jakie nie i dzięki temu wyświetlimy pasek wypełniony odpowiednim kolorem.

```html
<meter min="0" max="100">
```

## Warunki bezpiecznego hasła
Na potrzeby projektu przyjmijmy, że bezpieczne hasło powinno:
* mieć **minimalną długość 15 znaków**,
* zawierać **minimum jedną wielką literę**,
* zawierać **minimum jedną małą literę**,
* zawierać **minimum jeden znak specjalny**.

Po spełnieniu wszystkich założeń, cały pasek wypełni się zielonym kolorem.

## Funkcja mierząca siłę hasła
Stwórzmy funkcję, której parametrem będzie hasło wprowadzone w polu `input`. Zawarta w niej tablica `conditions` przyjmie wartości logiczne przy każdym warunku do spełnienia, jako wynik dopasowania [wyrażenia regularnego](https://frontboard.pl/wyrazenia-regularne-regexp-javascript-wstep) do przekazanego hasła (poza pierwszym elementem, bo sprawdzamy tam długość hasła nie regexem, a operatorem).

```js
function passwordStrength(password) {
  const conditions = [
    password.length >= 15,
    /[0-9]/.test(password),
    /[a-ząćęłńóśźż]/.test(password),
    /[A-ZĄĆĘŁŃÓŚŹŻ]/.test(password),
    /[*.! @#$%^&(){}[\]:;<>,.?\/~_+\-=|]/.test(password)
  ];
}
```

Dla hasła `AAAł!@;` tablica `conditions` przyjmie poniższe wartośći:

```js
[
  false, // nieodpowiednia długość
  false, // brak cyfry
  true, // jest mała litera (ł)
  true, // jest wielka litera (A)
  true // jest znak specjalny (!)
]
```

### Obliczenie siły hasła
Aby uzyskać siłę hasła przeiterujemy tablicę z warunkami do spełnienia za pomocą [pętli `forEach`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach). Za każdym razem jeśli ten został uznany za prawdziwy, zwiększymy wartość zmiennej `strength` o taką samą wartość.

```js
function passwordStrength(password) {
  // tablica conditions

  let strength = 0;

  conditions.forEach((condition) => {
    if (condition) {
      strength += 100 / conditions.length;
    }
  });

  return strength;
}
```

Na końcu **funkcja zwraca siłę hasła od 0 do 100 (%)**.

### Podpięcie funkcji do pola tekstowego
Jakakolwiek zmiana w `input` powinna wywołać ponowne przeliczenie siły hasła. Obsłużymy to zdarzeniem `input` za pomocą [metody `addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener).

```js
document.querySelector('input').addEventListener('input', (event) => {
  document.querySelector('meter').value = passwordStrength(event.target.value);
});
```

Wartość elementu `meter` modyfikujemy przy użyciu funkcji `passwordStrength`, jako argument przekazując wartość wpisaną do `input`.

## Zmiana kolorów elementu `meter`
Aby znacznik `meter` reagował zmianą koloru na podstawioną wartość, należy wykorzystać trzy atrybuty: `low`, `optimum`, `high`. W przypadku gdy podstawimy wartość mniejszą niż ta określona w `low`, pasek wypełni się na czerwono. Kolor żółty odpowiada za `high`, zielony za `optimum`.

```html
<meter min="0" max="100" low="50" high="99" optimum="100">
```

## Płynna zmiana wartości `meter`
Stylowanie w moim przypadku zamyka się na określeniu sposobu animacji szerokości wypełnionego paska. Chcąc, aby miernik uzupełniał się płynnie, skorzystamy z trzech poniższych pseudoelementów i właściwości `transition`. 

```css
meter::-webkit-meter-optimum-value,
meter::-webkit-meter-suboptimum-value,
meter::-webkit-meter-even-less-good-value {
  transition: width 0.5s;
}
```

To wszystko! Zerknij na demo poniżej, a jeśli chcesz otrzymywać informacje między innymi o takich wpisach, zostaw swojego maila niżej 🙌

<div id="demo">
  <script async src="//jsfiddle.net/frontboard/job35mkh/embed/"></script>
</div>
