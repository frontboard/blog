---
title: "Poznajemy pętle (while, for, do… while)"
date: 2017-09-08T18:00:17+00:00
author: kstawinski
layout: post
categories: javascript
img: jsw60dni.jpg
redirect_from:
  - /poznajemy-petle-while-for-dowhile
  - /poznajemy-petle-while-for-dowhile/
---
Pętle wykorzystywane są chyba w każdym języku programowania. Zazwyczaj **używa się ich, by skrócić kod** (tym samym zwiększyć wydajność) i powtarzać wybraną czynność ileś razy. Nie ma co przedłużać, bo pętle to dosyć prosty temat, tak więc zabierajmy się za praktykę.

## Pętla [`for`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement)
Jedną z częściej wykorzystywanych pętli w JavaScript jest `for`. Wydaje mi się, że swoją popularność zawdzięcza prostocie, która dla początkujących osób z kolei może wydawać się nieco skomplikowana. Konstrukcja pętli utworzonej za pomocą `for` wygląda następująco:

```js
for (zmienna; warunek; operacja na zmiennej) {
  // zadanie pętli
}
```

Przechodząc do praktyki: chciałbym za pomocą pętli w JavaScript wyświetlić 5 razy tekst "Witaj czytelniku!", który poprzedzony będzie cyfrą (od 1 do 5).

```js
for (let i = 1; i < 6; i++) {
  console.log(`${i} Witaj czytelniku!`);
}
```

Rolę zmiennej *inline* pełni tutaj `let i = 1`, warunek to `i < 6`, a operacją jest zwiększenie wartości zmiennej o 1, czyli `i++`.

Zmienna na początku przyjęła wartość 1, bo indeksowanie w JavaScript zaczyna się od 0. Tak więc moglibyśmy ustawić zmienną `i` na 0, ale wtedy numeracja nie byłaby taka, jaką chciałem osiągnąć.

## Pętla [`while`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#while_statement)
Ten rodzaj pętli jest bardzo podobny do poprzedniej - for (no shit, czy wszystkie pętle nie są do siebie podobne?). Różni się od niej jedynie zapisem i tym, że np. o zwiększenie zmiennej trzeba zadbać w ciągu wykonywania kodu. Przykłady wszędzie będą takie same, abyś mógł zobaczyć, jak różnią się od siebie poszczególne rodzaje pętli.

```js
let i = 1;

while (i < 6) { // warunek
  console.log(`${i} Witaj czytelniku!`);
  i++; // zwiększenie zmiennej o 1
}
```

Efekt jest taki jaki uzyskaliśmy wcześniej - pięć linijek z informacją "Witaj czytelniku!". Z tą jednak różnicą, że kod zwiększył się z 3 do 5 linijek.

## Pętla [`do... while`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#do...while_statement)
W tym przypadku na pewno zauważycie ogromne podobieństwo do pętli typu while. Różnica w praktyce jest taka, że **kod przynajmniej raz wykona się przed sprawdzeniem warunku**, który zapisany jest tuż za ciałem pętli.

```js
let i = 1;

do {
  console.log(`${i} Witaj czytelniku!`);
  i++; // zwiększenie zmiennej o 1
} while (i < 6) // warunek
```

## Podsumowanie #004
Sprawa dosyć prosta i bardzo często wykorzystywana w programowaniu. Na pewno nie raz będziecie się z nimi spotykać na swojej drodze podczas tworzenia projektów. Gdybyście mieli jakiekolwiek pytania - zapraszam do komentowania, postaram się rozwiać wszystkie Wasze wątpliwości. Tymczasem… dziękuję za uwagę i zapraszam do polajkowania [fanpage Frontboard.pl](https://www.facebook.com/frontboardpl/).
