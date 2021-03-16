---
title: "Instrukcje warunkowe - jak z nich korzystać?"
date: 2017-09-05T19:29:30+00:00
author: Kacper Stawiński
layout: post
categories: javascript
img: /assets/img/jsw60dni.png
---
Znając już kompletne podstawy JavaScript (mowa oczywiście o zmiennych, na które poświęciłem 3 wpisy) czas ruszyć dalej. Zabierzemy się za instrukcje warunkowe, znane również jako ify. Polegają one na wykonaniu X (if), jeżeli Y (warunek) się zgadza. Jeżeli nie, kod być może wykonuje czynność Z (else).

## Pierwsza instrukcja

Pisząc każdego posta, chciałbym, aby wykorzystywał on przynajmniej w jakimś stopniu wiedzę z poprzednich wpisów. Jeżeli chodzi o zmienne to za bardzo nie mam wyboru i muszę z nich korzystać, ale to tak na przyszłość.

Za pomocą JavaScriptu i instrukcji warunkowej sprawdzimy, czy użytkownik, który chce wejść na naszą stronę ma ukończone 18 lat. Wszystko na razie będzie bazowało na zmiennych, ale przyjdzie czas, że coś takiego napiszemy pobierając dane od odwiedzającego witrynę.

Konstrukcja instrukcji wygląda w następujący sposób:

{% highlight javascript %}
if( warunek ) { //jezeli tak

}
else { //jezeli nie

}
{% endhighlight %}

Dodawanie *else* nie jest konieczne. Możemy zostawić jedynie warunek, który - jeżeli nie zostanie spełniony - zwyczajnie się nie wykona.

## Instrukcja warunkowa w praktyce

Za pomocą zmiennych opiszmy Janka, który ma **14 lat** i próbuje wejść na naszą stronę. Wymagany wiek do wejścia na stronę to **18 lat**. Ten przykład znalazłem w książce o JS, ale bardzo mi się spodobał, bo w prosty i praktyczny sposób pokazuje działanie instrukcji warunkowej.

{% highlight javascript %}
const name = "Janek"; // Imię odwiedzającego
const age = 14;  // Wiek odwiedzającego
const requiredAge = 18; // Wiek wymagany do wejścia na stronę
{% endhighlight %}

Zmienne z danymi mamy, więc czas na zapisanie pierwszej instrukcji.

{% highlight javascript %}
if(age < requiredAge) { // Jeżeli wiek Janka jest mniejszy niż wymagany
 document.write("Niestety " +name+ ", ale nie możesz wejść na tę stronę."); // Wyświetl komunikat
} // Koniec instrukcji
{% endhighlight %}

W przeglądarce (już nie konsoli, bo użyliśmy `document.write`) widnieje teraz napis _"Niestety Janek, ale nie mozesz wejsc na ta strone"_. Co się jednak stanie, jeżeli wiek Janka będzie większy niż 18 lat? Jak to sprawdzić? W tym wypadku jest to nieskomplikowane i są na to 2 sposoby. Pierwszy to `else`, a drugi `else if`.

{% highlight javascript %}
// Sposób z "else"
else {
  document.write("Witaj " +name);
}

// Sposób z "else if"
else if (age >= requiredAge) {
  document.write("Witaj " +name);
}
{% endhighlight %}

Jeżeli nie za bardzo ogarniasz ten kod - odsyłam Cię do posta, w którym pokazuję (chyba) ciekawe użycie zmiennych w JavaScript. Zastosowanie `else if` pozwoli na dopisanie jeszcze jednego wyjątku - `else`, który wykona się w przypadku, gdy żaden inny warunek nie zostanie spełniony. Dzięki temu możemy mieć w kodzie instrukcję (if), później kilka `else if`, a na końcu `else`.

## Switch

Switch to również instrukcja warunkowa, tylko zapisana w trochę inny sposób. Polega ona na sprawdzeniu, a następnie dopasowaniu wyniku z tymi podanymi w case'ach. Aby dobrze wytłumaczyć Wam wykorzystanie switch'a, posłużę się dwoma przykładami.

**Porównanie - prawda czy fałsz?** Zmienna oprócz liczby i ciągu znaków może przyjmować **wartość logiczną**, czyli "true" lub "false". Za pomocą instrukcji warunkowej zapisanej jako switch wyświetlimy w przeglądarce komunikat, czy dana zmienna to prawda, fałsz lub coś innego. Do dzieła!

{% highlight javascript %}
const booleanValue = false; // booleanValue z j. angielskiego to wartość logiczna (tutaj jest to fałsz)

switch (booleanValue) { // podajemy zmienną
 case true: //jeżeli zmienna równa się "true"
    document.write("Prawda!"); //wyswietl komunikat
 break; // koniec instrukcji
 case false:
    document.write("Niestety, fałsz...");
 break;
 default: // jezeli zaden warunek nie pasuje; odpowiednik else
    document.write("Zdecyduj się!");
}
{% endhighlight %}

Gdy wartość zmiennej będzie inna niż "true" czy "false", w oknie przeglądarki wyświetli się napis "Zdecyduj się!".

**Drugi przykład - porównanie ciągu znaków.** W zmiennej podałem jedno z trzech zdefiniowanych w case'ach imion. Zadaniem tej instrukcji warunkowej jest porównać zmienną z tymi imionami i wyświetlić odpowiednią informację. Uwaga, bo w przypadku ciągu znaków konieczne jest używanie apostrofów/cudzysłowów.

{% highlight javascript %}
var name = "Janek";

switch (name) {
  case "Ania":
    document.write("Ona ma na imię Ania");
  break;
  case "Janek":
    document.write("To jest Janek");
  break;
  case "Maciej":
    document.write("Witaj Maciek!");
  break;
  default:
    document.write("Żadne imie nie pasuje :(");
}
{% endhighlight %}

Rzecz jasna, przeglądarka wyświetli nam "To jest Janek". `break` użyte w obu instrukcjach warunkowych powoduje, że kod dalej się nie wykonuje.

## Podsumowanie #003

Poopowiadałem co nieco o instrukcjach warunkowych, których używa się praktycznie wszędzie. Mam nadzieję, że coś z tego wpisu wynieśliście i podnieśliście swoje umiejętności, jeżeli chodzi o JavaScript! Gdyby były jakieś pytania - zapraszam do kontaktu przez [Facebooka endfront.pl](https://www.facebook.com/endfrontpl/), mailowo lub za pomocą komentarza.
