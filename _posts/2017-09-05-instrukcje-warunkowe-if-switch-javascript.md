---
title: "Instrukcje warunkowe - jak z nich korzystać?"
date: 2017-09-05T19:29:30+00:00
author: Kacper Stawiński
layout: post
categories: javascript
img: /assets/img/jsw60dni.png
redirect_from:
  - /instrukcje-warunkowe-jak-z-nich-korzystac/
---
Znając już kompletne podstawy JavaScript (mowa oczywiście o zmiennych, na które poświęciłem 3 wpisy) czas ruszyć dalej. Zabierzemy się za instrukcje warunkowe, znane również jako ify. Polegają one na wykonaniu X (if), jeżeli Y (warunek) się zgadza. Jeżeli nie, kod być może wykonuje czynność Z (else).

## Pierwsza instrukcja

Za pomocą JavaScriptu i instrukcji warunkowej sprawdzimy, czy użytkownik, który chce wejść na naszą stronę ma ukończone 18 lat. Wszystko na razie będzie bazowało na zmiennych, ale przyjdzie czas, że coś takiego napiszemy pobierając dane od odwiedzającego witrynę (a gdyby ktoś chciał już teraz to zrobić, na początek wystarczy [funkcja `prompt`](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)).

Konstrukcja instrukcji wygląda w następujący sposób:

```js
if (warunek) {
  // Wykonuje kod, jeśli warunek zwraca true (jest prawdziwy)
}
else {
  // Wykonuje kod, jeśli warunek zwraca false (jest fałszywy)
}
```

Dodawanie `else` nie jest konieczne. Możemy zostawić jedynie warunek, którego kod - jeżeli warunek nie zostanie spełniony - będzie pominięty.

## Instrukcja warunkowa w praktyce

Za pomocą zmiennych opiszmy Janka, który ma 14 lat i próbuje wejść na naszą stronę. Wymagany wiek do wejścia na stronę ustalmy jako 18. Ten przykład znalazłem w książce o JS, ale bardzo mi się spodobał, bo w prosty i praktyczny sposób pokazuje działanie instrukcji warunkowej.

```js
const userName = 'Janek'; // Imię
const userAge = 14;  // Wiek
const requiredAge = 18; // Wiek wymagany do wejścia na stronę
```

Zmienne z danymi mamy, więc czas na zapisanie pierwszej instrukcji.

```js
if (userAge < requiredAge) { // Jeżeli wiek jest mniejszy niż wymagany
 document.write(`Niestety ${userName}, ale nie możesz wejść na tę stronę.`); // Wyświetl komunikat
} // Koniec instrukcji
```

W przeglądarce (już nie w konsoli, bo użyliśmy `document.write`) widnieje teraz napis _"Niestety Janek, ale nie możesz wejść na tę stronę."_. Co się jednak stanie, jeżeli wiek użytkownika będzie większy niż 18 lat? Jak to sprawdzić? W tym wypadku jest to nieskomplikowane i są na to 2 sposoby. Pierwszy to `else`, a drugi `else if`.

```js
// Sposób z else, niepoprawny w tym przypadku
else {
  document.write(`Hej ${userName}`);
}

// Sposób z else if
else if (userAge >= requiredAge) {
  document.write(`Hej ${userName}`);
}
```

Wykorzystanie `else` w tym przypadku byłoby złym rozwiązaniem, bo kod wykona się w każdej sytuacji, gdy wiek użytkownika nie jest mniejszy niż wymagany. Postawiając dowolny ciąg znaków do zmiennej `userAge` wyjątek `else` przepuści użytkownika dalej i wyświetli komunikat powitalny. Lepiej byłoby tutaj zastosować `else if`, a `else` stosować na końcu z informacją o błędzie.

Jeżeli nie za bardzo ogarniasz ten kod - odsyłam Cię do posta, w którym pokazuję [użycie zmiennych w JavaScript](/konstrukcja-zmiennej-debugowanie-kodu-operacje-zmiennych/). Zastosowanie `else if` pozwoli na dopisanie jeszcze jednego ogólnego wyjątku - `else`, który wykona się w przypadku, gdy żaden inny warunek nie zostanie spełniony. Dzięki temu możemy mieć w kodzie instrukcję `if`, później jeden bądź kilka `else if`, a na końcu `else`.

## Switch

[Switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch) to również instrukcja warunkowa, tylko zapisana w trochę inny sposób. Polega ona na sprawdzeniu, a następnie dopasowaniu wyniku z tymi podanymi w case'ach. Aby dobrze wytłumaczyć Ci wykorzystanie switch, posłużę się dwoma przykładami.

**Porównanie - prawda czy fałsz?** Zmienna oprócz liczby i ciągu znaków może przyjmować **wartość logiczną**, czyli `true` lub `false`. Za pomocą instrukcji warunkowej zapisanej jako `switch` wyświetlimy w przeglądarce komunikat, czy dana zmienna to prawda, fałsz lub coś innego.

```js
const value = false;

switch (value) { // Podajemy zmienną
 case true: // Jeżeli zmienna równa się true
    document.write('Prawda!'); // Wyświetl komunikat
 break; // Koniec wykonywania instrukcji
 case false:
    document.write('Fałsz...');
 break;
 default: // Jeżeli żaden warunek nie pasuje
    document.write('Coś poszło nie tak');
}
```

Gdy wartość zmiennej będzie inna niż `true` czy `false`, w oknie przeglądarki wyświetli się napis "Coś poszło nie tak".

**Drugi przykład - porównanie ciągu znaków.** W zmiennej podałem jedno z trzech zdefiniowanych w case'ach imion. Zadaniem tej instrukcji warunkowej jest porównać zmienną z tymi imionami i wyświetlić odpowiednią informację.

```js
const name = 'Janek';

switch (name) {
  case 'Ania':
    document.write('Ona ma na imię Ania');
  break;
  case 'Janek':
    document.write('To jest Janek');
  break;
  case 'Maciej':
    document.write('Hej Maciek');
  break;
  default:
    document.write('Żadne imie nie pasuje :(');
}
```

Rzecz jasna, przeglądarka wyświetli nam "To jest Janek". `break` użyte w obu instrukcjach warunkowych powoduje, że kod dalej się nie wykonuje.

## Podsumowanie

Poopowiadałem co nieco o instrukcjach warunkowych, których używa się praktycznie wszędzie. Mam nadzieję, że coś z tego wpisu wynieśliście i podnieśliście swoje umiejętności, jeżeli chodzi o JavaScript ;) Gdyby były jakieś pytania - zapraszam do kontaktu przez [fanpage Frontboard.pl](https://www.facebook.com/frontboardpl/), mailowo lub za pomocą komentarza.

Kolejny wpis dotyczy użycia [pętli `while`, `for`, `do… while` w JavaScript](/poznajemy-petle-while-for-dowhile/) - sprawdź koniecznie!
