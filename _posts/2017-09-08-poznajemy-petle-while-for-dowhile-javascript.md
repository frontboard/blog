---
title: "Poznajemy pętle (while, for, do… while)"
date: 2017-09-08T18:00:17+00:00
author: Kacper Stawiński
layout: post
categories: javascript
img: /assets/img/jsw60dni.png
redirect_from:
  - /poznajemy-petle-while-for-dowhile
  - /poznajemy-petle-while-for-dowhile/
---
Pętle wykorzystywane są chyba w każdym języku programowania. Zazwyczaj używa się ich, by skrócić kod (a co za tym idzie - uporządkować) i powtarzać wybraną czynność ileś razy. Nie ma co przedłużać, bo **pętle to dosyć prosty temat**, tak więc zabierajmy się za praktykę.

## Pętla for

Najczęściej wykorzystywany rodzaj pętli w JavaScript to właśnie **for**. Wydaje mi się, że swoją popularność zawdzięcza prostocie, która dla początkujących osób może wydawać się trudna do ogarnięcia. Konstrukcja takiej pętli wygląda następująco:

{% highlight javascript %}
for(zmienna;warunek;operacja na zmiennej) {
  // zadanie pętli
}
{% endhighlight %}

Ale okej, możecie jeszcze nie do końca rozumieć działanie pętli for. Przejdźmy do tego, co lubię najbardziej - praktykę! Chciałbym za pomocą pętli w JavaScript wyświetlić 5 razy napis "Witaj czytelniku!", który poprzedzony będzie numerem (od 1 do 5).

{% highlight javascript %}
for(let ilosc = 1;ilosc<6;ilosc++) {
  document.write(ilosc + ". Witaj czytelniku!<br />")
}
{% endhighlight %}

Rolę zmiennej *inline* pełni tutaj `let ilosc = 1`, warunek to `ilosc<6`, a operacja to powiększenie zmiennej o 1, czyli `ilosc++`. Efekt widoczny w oknie przeglądarki jest taki, jaki chciałem osiągnąć. Zresztą, zobaczcie sami!

![Konsola JSBin.com](/assets/img/efekt-petli-for.png)
*Efekt widoczny w przeglądarce po wykonaniu pętli for*

Zmienna na początku przyjęła wartość 1, bo indeksowanie w JavaScript zaczyna się od 0. Tak więc moglibyśmy ustawić zmienną *ilosc* na 0, ale wtedy numeracja zdań nie byłaby taka, jaką chciałem osiągnąć. Więcej o tym w [pierwszym poście](/konstrukcja-zmiennej-debugowanie-kodu-javascript) o zmiennych.

## Pętla while

Ten rodzaj pętli jest bardzo podobny do poprzedniej - for (zresztą wszystkie pętle są do siebie bardzo podobne). Różni się od niej jedynie zapisem i tym, że np. o zwiększenie zmiennej trzeba zadbać w ciągu wykonywania kodu. Przykłady wszędzie będą takie same, abyście mogli zobaczyć, jak bardzo różnią się od siebie poszczególne rodzaje pętli.

{% highlight javascript %}
const ilosc = 1; // zdefiniowanie zmiennej

while(const<6) { // warunek
  document.write(ilosc + ". Witaj czytelniku!<br />"); // wyswietlenie ciagu znakow
  ilosc++; // zwiekszenie zmiennej o 1
} // koniec petli
{% endhighlight %}

Efekt jest taki jaki uzyskaliśmy wcześniej - pięć linii z informacją "Witaj czytelniku!". Z tą jednak różnicą, że kod z **3 linijek zwiększył się do 5**.

## Pętla do… while

W tym przypadku na pewno zauważycie ogromne podobieństwo do pętli typu while. Nie ma w tym nic dziwnego. Różnica w praktyce jest jedynie taka, że kod **przynajmniej raz** wykona się przed sprawdzeniem warunku, który zapisany jest tuż za pętlą.

{% highlight javascript %}
const ilosc = 1; // zdefiniowanie zmiennej
do { // "wykonaj"
  document.write(ilosc + ". Witaj czytelniku!<br />"); // wyswietl ciag znakow
  ilosc++; // zwieksz zmienna o 1
} while (ilosc<6) // jezeli zmienna ilosc jest mniejsza niz 6
{% endhighlight %}

## Podsumowanie #004

Sprawa dosyć prosta i bardzo często wykorzystywana w programowaniu. Na pewno nie raz (i nie dwa) będziecie się z nimi spotykać na swojej drodze podczas tworzenia jakichkolwiek projektów. Gdybyście mieli jakiekolwiek pytania - zapraszam do komentowania, postaram się rozwiać wszystkie Wasze wątpliwości. Tymczasem… dziękuję za uwagę i zapraszam do polajkowania [fanpage Frontboard.pl](https://www.facebook.com/frontboardpl/).
