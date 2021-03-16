---
title: Funkcje w JavaScript. Proste, a bardzo przydatne!
date: 2017-09-15T16:07:54+00:00
author: Kacper Stawiński
layout: post
categories: javascript
img: /assets/img/jsw60dni.png
---
Podobnie jak zmienne, funkcje są jednymi z częściej wykorzystywanych elementów w danym języku programowania. Nic w tym dziwnego, skoro pozwalają one znacznie zmniejszyć objętość kodu. Kolejnym plusem jest ich "elastyczność". Do stworzonej już funkcji możemy podstawiać różne dane, bez ingerencji w samą logikę. Fajna sprawa, a zarazem bardzo prosta.

## Konstrukcja funkcji

Jak już zdążyłem wspomnieć we wstępie, funkcje to **bardzo proste** i **często przydające się** w programowaniu zagadnienie. Jej budowa wygląda tak:

{% highlight javascript %}
function nazwaFunkcji (parametr1, parametr2) {
  // dzialanie funkcji
}
{% endhighlight %}

Nie koniecznie trzeba podawać do funkcji parametry. Koniecznością jest jedynie słowo kluczowe "**function**" oraz jej **nazwa**.

## Domyślne parametry

W ES6 wprowadzono *feature*, pozwalający na domyślne parametryzowanie funkcji. Prosty przykład:

```javascript
function test (pi = 3) {
  return pi+0.14;
}
console.log(test());
```

## Funkcja sprawdzająca temperaturę ciała

Skoczymy od razu na głęboką wodę. Chciałbym stworzyć funkcję _checkTemp_ z parametrem _yourTemp_, której zadaniem będzie wyświetlić w oknie przeglądarki użytkownika informację, czy podana temperatura jest: w normie, za niska lub za wysoka. Zacznijmy od poprawnego zapisania szkieletu funkcji. Wyświetlenie informacji z parametrem _yourTemp_ jest jedynie dla testów.

{% highlight javascript %}
function checkTemp (yourTemp) {
  document.write("Podana temperatura to " + yourTemp + " stopni Celsjusza.");
}
{% endhighlight %}

Nie musimy jeszcze sprawdzać czy ten kod działa. W zasadzie to nawet nie ma po co, bo jej nie wywołaliśmy. Dzięki mechanizmowi hoistingu nie ma znaczenia czy wywołamy funkcję na początku czy na końcu kodu. Gdyby ktoś chciał wiedzieć nieco więcej na ten temat - [odsyłam Cię do tego wpisu](https://www.endfront.pl/zakres-zmiennych-czyli-zmienne-lokalne-globalne/).

Funkcję wywołujemy poprzez podanie jej nazwy, ewentualnie uzupełnienia parametrów i zakończenia średnikiem.

{% highlight javascript %}
checkTemp(36.6);
{% endhighlight %}

Teraz w przeglądarce powinien pokazać się komunikat o podanej temperaturze. Sprawdźmy więc, czy wszystko działa poprawnie.

![Wynik funkcji checkTemp](/assets/img/podana-temperatura-to-stopni.png)
*Wynik po wywołaniu funkcji checkTemp*

Jak widać, działa. Teraz dzięki instrukcjom warunkowym, które pozwolą na dopasowanie odpowiedniego wyniku, stworzymy kilka przykładowych informacji.

{% highlight javascript %}
function checkTemp (yourTemp) {
  if(yourTemp == 36.6) {
    document.write("Temperatura w normie, nie masz się czym martwić!");
  }
  else if (yourTemp > 36.6) {
    document.write("Temperatura jest za wysoka :(");
  }
  else if (yourTemp < 36.6) {
    document.write("Temperatura jest za niska...");
  }
}

checkTemp(36.9);
{% endhighlight %}

Jaki komunikat powinien się wyświetlić? Rzecz jasna, że "**Temperatura jest za wysoka :(**". Możemy jeszcze wywołać kilka razy tę funkcję z różnymi danymi, ale to za moment. Teraz zmodyfikuję lekko kod, aby było wiadomo o której temperaturze mowa na stronie.

{% highlight javascript %}
function checkTemp (yourTemp) {
  if(yourTemp == 36.6) {
    document.write("Temperatura <b>" +yourTemp+ "</b> w normie, nie masz się czym martwić!<br />");
  }
  else if (yourTemp > 36.6) {
    document.write("Temperatura <b>" +yourTemp+ "</b> jest za wysoka :(<br />");
  }
  else if (yourTemp < 36.6) {
    document.write("Temperatura <b>" +yourTemp+ "</b> jest za niska...<br />")
  }
}
{% endhighlight %}

Teraz wywołajmy funkcję z różnymi danymi.

{% highlight javascript %}
checkTemp(36.6);
checkTemp(40);
checkTemp(15.0);
checkTemp(35.513145);
{% endhighlight %}

Wynik?

![Wynik funkcji checkTemp](/assets/img/podsumowanie-temperatur.png)
*Wynik widoczny po kilkukrotnym wywołaniu funkcji checkTemp*

## Funkcje strzałkowe
W ECMAScript 2015 wprowadzone zostały między innymi funkcje strzałkowe, które oferują zdecydownaie krótszą składnię, nie posiadają własnego `this` (kierują do obiektu `window`). W kwietniu napisałem post nt. [funkcji strzałkowych w JavaScript](/2018/04/02/funkcje-strzalkowe-es6-javascript/). Zachęcam do lektury, bo to dosyć ciekawy temat.

<b>Przykładowe wykorzystanie funkcji strzałkowej:</b>
```javascript
const world = () => "Hello, world!";
```

<b>Ta sama funkcja, ale zapisana w zwykłej formie:</b>
```javascript
const world = function () {
  return "Hello, world!";
}
```

Jak dla mnie – super! 

## Podsumowanie #005

Dzisiaj poznaliśmy funkcje w JavaScript. Ilość ich zastosować moglibyśmy mnożyć w nieskończoność… Zachęcam do polubienia [fanpage endfront.pl](https://www.facebook.com/endfrontpl/), bo to tam najpierw pojawia się informacja o nowym poście!
