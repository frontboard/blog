---
title: Tablice w JavaScript
date: 2017-09-23T15:13:30+00:00
author: Kacper Stawiński
layout: post
categories: javascript
img: /assets/img/jsw60dni.png
---
Zmienne kompletnie nie nadają się do przechowywania większej ilości danych. Chyba nie chcesz tworzyć 100 zmiennych tylko po to, aby zapisać w nich imię i nazwisko swojego klienta? Lepiej byłoby stworzyć jedną tablicę o nazwie `klienci` i w niej trzymać dane, bo kod siłą rzeczy nie będzie tylko krótszy, ale i wydajniejszy.

## Konstrukcja tablicy w JavaScript

Skoro wiemy już co chcemy osiągnąć, zabierzmy się do działania. Budowa tablicy może nieco przypominać budowę zmiennej, bo początek to również słówko kluczowe.

{% highlight javascript %}
const klienci = [];
{% endhighlight %}

Tak wygląda stworzona tablica o nazwie `klienci`. Jeszcze nie umieściliśmy w niej danych, zrobimy to za moment. Dane w takiej tablicy umieszczamy pomiędzy nawiasami kwadratowymi. Każda wartość musi być zapisana w cudzysłowie.

{% highlight javascript %}
const klienci = ["Jan Kowalski", "Piotr Nowy"];
{% endhighlight %}

Wszystko jasne?

## Jak wyciągnąć wybranego klienta z tablicy?

Jako, że na razie wszystko wolę wrzucać do konsoli, tak samo będzie i w tym przypadku. Chcę pobrać dane pierwszego klienta, który został zapisany w skrypcie.

{% highlight javascript %}
const klienci = ["Jan Kowalski", "Piotr Nowy"];
console.log(klienci[1]);
{% endhighlight %}

Sprawdzamy czy wszystko się zgadza.

![Podgląd kodu i konsoli JSBin.com](/assets/img/wybrany-obiekt-tablicy.png)
*Wyświetlenie wybranego obiektu z tablicy w konsoli*

**Uwaga!** Przecież chcieliśmy pobrać dane pierwszego klienta. Błąd tkwi w numeracji. Indeksowanie w JavaScript zaczynamy od 0, nie od 1. Dlatego chcąc pobrać dane Jana Kowalskiego powinniśmy do konsoli wywołać:

{% highlight javascript %}
console.log(klienci[0]);
{% endhighlight %}

## Jak wyświetlić wszystkie dane?

To proste. Nie określamy w funkcji `console.log`, którą wartość chcemy wyciągnąć i w efekcie JS podaje nam całą tablicę.

![Kod i konsola JSBin.com](/assets/img/cala-tablica-konsola.png)
*Wyświetlenie zawartości całej tablicy w konsoli*

{% highlight javascript %}
const klienci = ["Jan Kowalski", "Piotr Nowy"];
console.log(klienci);
{% endhighlight %}

## Dodawanie danych do tablicy "w locie"

Nie bez powodu słowo "**push**" z j. angielskiego oznacza "**pchać**". W tym momencie postaramy się o wepchnięcie do tablicy jeszcze dwóch klientów - Marka Wiśniewskiego i Janusza Nowaka. Jako, że nasza tablica z klientami nosi nazwę `klienci` - od niej zaczynamy "dopychanie" klientów. Następnie informujemy JS, że chcemy dopchnąć dane - dopisujemy `.push`.

{% highlight javascript %}
klienci.push();
{% endhighlight %}

Pozostało nam jeszcze uzupełnić nawiasy danymi. Do wyboru mamy dwie opcje: albo **dopisujemy ich razem**, albo **osobno**.

{% highlight javascript %}
klienci.push("Marek Wiśniewski");
klienci.push("Janusz Nowak");
{% endhighlight %}

Ten kod będzie równoznaczny z tym:

{% highlight javascript %}
klienci.push("Marek Wiśniewski", "Janusz Nowak");
{% endhighlight %}

Jeszcze tylko test i… wszystko działa!

![Kod i konsola JSBin.com](/assets/img/dopchniecie-danych-do-tablicy.png)
*Efekt dopchnięcia danych do tablicy*

Jeżeli chcesz dodać dane na początku tablicy - skorzystaj z metody [`unshift`](https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/Array/unshift). Użycie [`push`](https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/Array/push) spowoduje, że dane pojawią się na końcu tablicy.

## Usuwanie danych

To raczej w ramach ciekawostki, bo przyznaję, że nie wiem do czego mógłbym to wykorzystać. Jednak są to podstawy, więc nie chcę też zbyt wielu rzeczy pomijać. Do kasowania danych z tablicy w tzw. "locie" służą 2 funkcje - `pop` oraz `shift`. Pierwsza z nich powoduje, że dane kasują się od końca, a druga odwrotnie - od początku.

{% highlight javascript %}
// usuniecie pierwszej wartosci od konca
klienci.pop(1);

// usuniecie pierwszej wartosci
klienci.shift(1);
{% endhighlight %}

## Długość tablicy

Nic ma nic dziwnego w tym, że chcielibyśmy poznać liczbę klientów, których zapisaliśmy w naszej tablicy. O ile teraz policzenie klientów nie stanowi żadnego problemu, później może być nieco trudniej :)

{% highlight javascript %}
// tablica
const klienci = [...];

// wyswietlenie w przegladarce dlugosci tablicy
document.write(klienci.length);
{% endhighlight %}

Opcjonalnie możemy dorzucić komunikat "Liczba klientów to …".

{% highlight javascript %}
document.write("Liczba klientów to " + klienci.length);
{% endhighlight %}

## Podsumowanie #006

Do ukończenia tego wpisu zabierałem się ponad 2 tygodnie (początkowo miał pojawić się 5 września) :) Myślę, że nieco przybliżyłem Wam temat przechowywania większej ilości danych za pomocą tablic w JavaScript. Gdybyś miał jakieś pytania, opinię - zapraszam do komentowania, pisania na Facebooku ([kliknij tutaj](https://www.facebook.com/endfrontpl/)), pisania maili.
