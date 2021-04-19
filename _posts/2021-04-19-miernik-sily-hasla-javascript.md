---
title: Miernik siły hasła w JavaScript i HTML
date: 2021-04-19 19:15:00 +0100
author: kstawinski
layout: post
categories: javascript html
img: miernik-sily-hasla-javascript.jpg
---
Miernik siły hasła stanowi interesującą wskazówkę dla użytkownika podczas np. rejestracji konta. Warto przedstawić odwiedzającemu wymagania, jakie musi spełniać hasło, by zostało uznane za bezpieczne i pokazać siłę hasła za pomocą poniższej funkcji.

Jak powinno wyglądać bezpieczne hasło? Przede wszystkim, powinno składać się z kombinacji różnych znaków (małe i wielkie litery, cyfry, znaki specjalne). Równie ważna jest długość :) Tworząc 6 znakowe hasło składające się z małych liter polskiego alfabetu masz do dyspozycji "jedynie" **32^6 (1 073 741 824) kombinacji**. Wykorzystując na przykład: cyfry od 0 do 9 (dziesięć znaków), małe i wielkie litery polskiego alfabetu (sześćdziesiąt cztery znaki) i tworząc 16 znakowe hasło, tych kombinacji uzyskasz 74^16. No, w każdym razie bardzo dużo...

[🚀 Demo](https://frontboard.github.io/password-strength-js/) / [Kod źródłowy](https://github.com/frontboard/password-strength-js)

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
Na potrzeby projektu przyjmijmy, że bezpieczne hasło (miernik przyjmie wówczas wartość 100) powinno:
* mieć **minimalną długość 15 znaków**,
* zawierać **minimum jedną wielką literę**,
* zawierać **minimum jedną małą literę**,
* zawierać **minimum jeden znak specjalny**.

## Funkcja mierząca siłę hasła
Stwórzmy funkcję, której parametrem jest hasło wprowadzone w polu `input`. Zawarty w funkcji obiekt `conditions` przyjmie wartości logiczne przy każdym warunku (jako test dopasowania [wyrażenia regularnego](https://frontboard.pl/wyrazenia-regularne-regexp-javascript-wstep) do przekazanego hasła) do spełnienia.

```js
function passwordStrength(password) {
  const conditions = {
    length: password.length >= 15,
    number: /[0-9]/.test(password),
    smallLetter: /[a-ząćęłńóśźż]/.test(password),
    capitalLetter: /[A-ZĄĆĘŁŃÓŚŹŻ]/.test(password),
    specialCharacter: /[*.! @#$%^&(){}[\]:;<>,.?\/~_+\-=|]/.test(password)
  };
}
```

Dla hasła `AAAł!@;` obiekt `conditions` przyjmie poniższe wartośći:

```js
{
  length: false, // nieodpowiednia długość
  number: false, // brak cyfry
  smallLetter: true, // jest mała litera (ł)
  capitalLetter: true, // jest wielka litera (A)
  specialCharacter: true, // jest znak specjalny (!)
}
```

### Obliczenie siły hasła
Aby uzyskać siłę hasła przeiterujemy obiekt z warunkami do spełnienia za pomocą [pętli `for...in`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in) i za każdym razem jeśli ten został uznany za prawdziwy, zwiększymy wartość zmiennej `strength` o wartość 100/n n-elementowego obiektu `conditions`. Może brzmi to trochę skomplikowanie, ale zobaczysz, że nie jest to trudne.

```js
function passwordStrength(password) {
  // obiekt conditions

  let strength = 0;
  for (const condition in conditions) {
    if (conditions[condition]) {
      strength += 100 / Object.keys(conditions).length;
    }
  }

  return strength;
}
```

[`Object.keys`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) zwraca tablicę z nazwami wartości, a [`length`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length) jej długość. Dlaczego korzystam z `Object.keys().length` zamiast po prostu wstawić `20`? **Przy dodaniu warunku nie będzie konieczna aktualizacja tej wartości**, JS zrobi to sam.

Na końcu **funkcja zwraca siłę hasła od 0 do 100 (%)**.

### Podpięcie funkcji do pola tekstowego
Jakakolwiek zmiana w `input` powinna wywołać ponowne przeliczenie siły hasła – obsłużymy to zdarzeniem `input` za pomocą [metody `addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener).

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
Stylowanie w przypadku tego projektu zamyka się na określeniu sposobu animacji szerokości wypełnionego paska pseudoelementów. Chcąc, aby miernik uzupełniał się płynnie, skorzystamy z trzech poniższych pseudoelementów. 

```css
meter::-webkit-meter-optimum-value,
meter::-webkit-meter-suboptimum-value,
meter::-webkit-meter-even-less-good-value {
  transition: width 0.5s;
}
```

To wszystko! Zerknij na demo poniżej, a jeśli chcesz otrzymywać informacje między innymi o takich wpisach, zostaw swojego maila niżej. 

<div>
  <iframe src="https://frontboard.github.io/password-strength-js/" style="width: 100%;min-height: 250px;"></iframe>
</div>