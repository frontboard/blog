---
title: "Struktura DOM, pobieranie elementów z kodu HTML"
date: 2017-10-07T14:17:21+00:00
author: Kacper Stawiński
layout: post
categories: javascript
img: /assets/img/jsw60dni.png
redirect_from:
  - /dom-obiektowy-model-dokumentu
---
Stylowanie elementów z kodu HTML za pomocą JavaScriptu? Jak najbardziej! Część z Was być może zapyta: po co? Chociażby po to, aby po kliknięciu w przycisk zmienił on swoją właściwość, dajmy na to `background-color`. To tylko jedno z wielu zastosowań takiego rozwiązania. My dzisiaj zajmiemy się nauką pobierania elementów z kodu HTML. Zapraszam do uważnej lektury, bo to jeden z przydatniejszych tematów!

## Struktura DOM

Model DOM czyli **document object model**. Musicie zrozumieć **strukturę DOM**, aby w późniejszym etapie móc pobierać właściwe elementy. Poniżej przedstawiam obrazek, który obrazuje jak taki model działa.

![Schemat DOM](/assets/img/obiektowy-model-dokumentu.png)
*Obiektowy model dokumentu*

A teraz przedstawię Wam kod, który został zapisany na powyższym obrazie.

{% highlight html %}
<!DOCTYPE html>
<html>
<head>
 <title>Example</title>
</head>
<body>
 <h1>Example Page</h1>
 <p>This is an example page.</p>
</body>
</html>
{% endhighlight %}

W obiektowym modelu dokumentu chodzi po prostu o odpowiednią hierarchię. Nie możemy najpierw dać znacznika `h1`, a później `body`. To właśnie w całym `body` znajduje się treść strony, a więc w modelu DOM element `h1` znajduje się pod elementem `body`.

![Narzędzia programisty](/assets/img/model-dom-body.png)
*Podgląd elementu body w kodzie HTML*

U góry macie jeszcze jeden obrazek przedstawiający strukturę DOM. Po "zbadaniu elementu", by dostać się do nagłówka `h1` musiałem rozwinąć element `html`, później `body`, a na końcu `h1`.

## Dostępne metody

Przy pomocy JavaScriptu możemy dobrać się do wybranego (lub wybranych) elementów na 4 sposoby. Osobiście najczęściej korzystam z `document.querySelector`, o którym zaraz przeczytacie, bo jest uniwersalny. Jego zapis jest krótszy, a przez to czytelniejszy, łatwiej jest zmienić np. nazwę tagu na nazwę klasy.

**Pierwszy** polega na identyfikacji tego elementu poprzez **nazwę klasy** (`document.getElementsByClassName`), ale biorąc pod uwagę chociażby stronę główną mojego bloga trudno byłoby dostać się do elementu `h1` przez nazwę klasy, bo takich znaczników jest po prostu za dużo.

**Drugi sposób** to wyciągnięcie z kodu atrybutu `id` w danym elemencie. Tutaj nie powinno być problemów ze złą identyfikacją, jeżeli tylko używacie `id` z głową (np. stylujecie po klasach, nie identyfikatorach). Odpowiada za to `document.getElementById`.

**Trzecia opcja** polega na pobraniu znacznika, tak więc gdybym w kodzie miał jeden znacznik footer to przy pomocy `document.getElementByTagName` dostałbym się do niego bez żadnego problemu.

* * *

Warto również wspomnieć, że możemy **zagnieżdżać elementy** i odnosić się jedynie do jakiegoś kontenera. Dla przykładu pobierzmy wszystkie tagi `h1` z diva `.example`.

{% highlight javascript %}
const container = document.querySelector('.example');
const headlines = container.querySelectorAll('h1');
{% endhighlight %}

W zmiennej `headlines` znajdą się wszystkie nagłówki `h1` znajdujące się w divie o klasie example. Nic poza nimi! Gdybyśmy chcieli wrzucić do konsoli pierwszy nagłówek:

{% highlight javascript %}
console.log(headlines[1].textContent);
{% endhighlight %}

## document.querySelector

W tym przypadku nie będzie dużo teorii. Zakładając, że chcecie pobrać nagłówek o identyfikatorze "naglowek", w nawiasach po `document.querySelector` zapisujecie `("#naglowek")`. Tak więc proces pobrania takiego elementu odbędzie się poprzez zapisanie linii `document.querySelector("#naglowek")`. Ten znak przed nazwą nagłówka oznacza, że szukamy właśnie identyfikatora. Analogicznie - chcąc **pobrać klasę** użyjemy kropki, chcąc pobrać znacznik po prostu zapiszemy jego nazwę bez żadnego symbolu - `document.querySelector("article")`.

## Przykład: przycisk zmieniający swoje tło

Skoro na początku tego artykułu wspomniałem o zmianie tła przycisku po kliknięciu w niego, warto byłoby ten przykład zaprezentować.

Zacznijmy od stworzenia kodu HTML i CSS:

{% highlight html %}
<button id="myButton" class="myButton">Przycisk zmieniający swoje tło po kliknięciu</button>
{% endhighlight %}

{% highlight css %}
.myButton {
  background: green;
}
.myButton-clicked {
  background: red;
}
{% endhighlight %}

Jak możecie się domyślić, klasa `myButton-clicked` będzie nadawana przyciskowi w momencie, gdy zostanie on kliknięty.

Teraz czas na to, po co większość z Was tutaj przyszła - JS! Potrafimy już korzystać z funkcji w JavaScript, a obiektowy model dokumentu po dzisiejszym wpisie nie powinien sprawiać wam większych problemów (przynajmniej na poziomie podstawowym).

Pobierzmy i zapiszmy do zmiennej _button_ identyfikator _myButton_ przy pomocy funkcji `querySelector`. Oczywiście ID musi być poprzedzone hashem (#), ale zakładam, że to już wiesz.

{% highlight javascript %}
const button = document.querySelector("#myButton");
{% endhighlight %}

Kolejnym krokiem będzie stworzenie funkcji, która po kliknięciu w wyżej wspomniany przycisk nada mu klasę `myButton-clicked`.

{% highlight javascript %}
function changeBackground(){
  button.classList.add("myButton-clicked");
}
{% endhighlight %}

A wywołanie tej funkcji zapewni nam `addEventListener` z parametrami _click_ oraz `changeBackground`.

{% highlight javascript %}
button.addEventListener("click", changeBackground);
{% endhighlight %}

![Podgląd zmiany tła przycisku](/assets/img/przycisk-zmieniajacy-tlo.gif)
*Efekt widoczny po kliknięciu przycisku myButton*

Efekt może nie wygląda jakoś zaskakująco, ale ważne, że działa tak, jak powinno. Na CSS przyjdzie czas.

## Przykład: doklejanie słowa do zdania

Zaznaczam, że ten przykład znalazłem w książce "Rusz głową! Programowanie w JavaScript". Zdecydowałem się na umieszczenie go tutaj, bo pokazuje, jak za pomocą **DOM** możemy **manipulować HTML**-em.

{% highlight html %}
<p id="text">Zielony kanarek przyleci o </p>
{% endhighlight %}

Tak wygląda stworzony przez nas HTML, który pozostawia wolne miejsce na określenie czasu, w którym przyleci zielony kanarek.

Za pomocą JS-a musimy pobrać identyfikator text, a następnie wstrzyknąć do niego godzinę.

{% highlight javascript %}
const getText = document.querySelector("#text");
const text = getText.innerHTML;
text = text + "13:30";
{% endhighlight %}

Efektów na razie nie widać. Pozostaje nam jeszcze wywołać funkcję `alert`, która wyświetli nam okienko z uzupełnioną już informacją.

{% highlight javascript %}
alert(text);
{% endhighlight %}

Już trochę lepiej… :)

![Przeglądarkowy alert](/assets/img/alert-zielony-kanarek.gif)
*Alert pokazujący informację o kanarku*

## Podsumowanie #007

Dzisiaj poznaliśmy **obiektowy model dokumentu**, który pozwala na manipulowanie HTML-em w dowolny sposób. Zaprezentowałem Wam dwa proste przykłady wykorzystania DOM, które być może przydadzą Wam się podczas tworzenia własnych projektów.
