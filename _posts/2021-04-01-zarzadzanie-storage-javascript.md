---
title: Jak zarządzać Storage w JavaScript?
date: 2021-04-01 16:29:00 +0100
author: kstawinski
layout: post
categories: javascript
img: javascript-storage.jpg
---
Storage w JavaScript pełnią funkcję schowków na dane. Możesz w nich przechowywać informacje np. na temat wybranego motywu strony czy treść automatycznie zapisanej wiadomości. W dalszej części artykułu znajdziesz demo prezentujące różnice w wykorzystaniu `sessionStorage` i `localStorage`.

## Różnica między `sessionStorage`, a `localStorage`
W JavaScript dostępne mamy `sessionStorage` oraz `localStorage`. Różnica pomiędzy nimi jest **bardzo istotna**.

* **`sessionStorage` działa jedynie w obrębie danej sesji użytkownika**. Prościej mówiąc, jeśli zamkniesz kartę przeglądarki, dane znikają. W przypadku otworzenia kilku kart ze stroną, dla każdej z nich utworzony zostanie nowy obiekt `sessionStorage`.
* **`localStorage` przetrzymuje dane bezterminowo**. Nie stracisz ich do momentu czyszczenia danych przeglądąrki użytkownika czy wyjścia z trybu incognito.

## Dostępne metody Storage
Interfejs Storage oferuje 5 metod do pracy z nim. We wszystkich przykładach `storage` odnosi się zarówno do `localStorage`, jak i `sessionStorage`.

### [`setItem`](https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem)
Warto wspomnieć, że **dane w Storage przechowywane są jako ciągi znaków**. Wrzucając do Storage obiekt czy tablicę, musisz skorzystać z funkcji, która zamieni takie dane na tekst - [`JSON.stringify`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).

```js
storage.setItem(nazwa, wartość);
```

### [`getItem`](https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem)
Jako argument do metody `getItem` przekazujemy nazwę wartości, którą chcemy pobrać. Jeśli wartość nie istnieje w podanym obiekcie `Storage`, metoda zwraca `null`.

Mając na uwadze, że Storage przechowuje tylko tekst, aby operować np. na umieszczonym w nim obiekcie (przeparsowanym na string) musisz skorzystać z [`JSON.parse`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) po pobraniu wartości.

```js
storage.getItem(nazwa);
```

### [`removeItem`](https://developer.mozilla.org/en-US/docs/Web/API/Storage/removeItem)
Metoda `removeItem` służy usuwaniu danych ze schowka.

```js
storage.removeItem(nazwa);
```

### [`clear`](https://developer.mozilla.org/en-US/docs/Web/API/Storage/clear)
Chcąc wyczyścić cały obiekt `Storage`, możesz wykorzystać metodę `clear`. Nie przekazujesz żadnych argumentów, po prostu wywołujesz ją na `sessionStorage` lub `localStorage`.

```js
storage.clear();
```

### [`key`](https://developer.mozilla.org/en-US/docs/Web/API/Storage/key)
Metoda `key` wymaga argumentu i zwraca wartość `Storage` o przekazanym indeksie.

```js
storage.setItem('jeden', '1');
storage.setItem('dwa', '2');

console.log(storage.key(1));
// => "dwa"
```

## Demo wykorzystania Storage
Poniższe demo pokazuje różnicę pomiędzy zastosowaniem `localStorage`, a `sessionStorage` w praktyce. Klikając przycisk uruchomisz funkcję, która zwiększy wartości w obu schowkach. Jeśli otworzysz wpis w drugiej karcie, _kliknięcia w czasie tej sesji_ będą odpowiadały ilości kliknięć w danej karcie.

<script async src="//jsfiddle.net/c84nreo2/embed/result,js/"></script>

## Przełącznik motywów z wykorzystaniem `localStorage`
Jakiś czas temu stworzyłem [wpis opisujący proces tworzenia przełącznika motywów](/dynamiczna-zmiana-kolorow-strony) (tryb ciemny i jasny). Dzięki zastosowaniu `localStorage`, **użytkownik po odświeżeniu strony zobaczy ciemny motyw, o ile oczywiście taki wybrał**.

[**🚀 Demo przełącznika motywów**](https://frontboard.github.io/theme-switcher/)