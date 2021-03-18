---
title: "Tworzenie obiektów w JavaScript"
date: 2017-10-14T14:55:55+00:00
author: Kacper Stawiński
layout: post
categories: javascript
img: /assets/img/jsw60dni.png
redirect_from:
  - /tworzenie-obiektow-w-javascript
---
Obiekt to taka jedna zmienna, która pozwala na przypisanie jej większej ilości danych nie tworząc przy tym kolejnych zmiennych. Przedstawię Ci kilka podstawowych operacji na obiektach, tworzenie pustego obiektu i późniejsze uzupełnianie go danymi. Gwarantuję, że szybko załapiesz o co z obiektami w JavaScript chodzi!

## Konstrukcja obiektów

W grupie [Programowanie - wsparcie na starcie](https://www.facebook.com/groups/157790704649699/) padło kiedyś pytanie co komu sprawia największy problem w programowaniu. Jeden z członków grupy odpowiedział, że domknięcia w JavaScript. Nie dziwię się, bo zwróćcie uwagę, że konstrukcja obiektów jest nieco inna niż [tablic](https://endfront.pl/tablice-javascript/), choć równie prosta do opanowania.

Zabierajmy się za stworzenie obiektu.

{% highlight javascript %}
const aboutMe = {
  // tutaj wartosci
};
{% endhighlight %}

Stworzyliśmy obiekt `aboutMe`, który obecnie jest pusty. Uzupełnijmy go kilkoma danymi, tak, aby nas opisywał.

{% highlight javascript %}
const aboutMe = {
 firstName: "Kacper",
 height: 185,
 haveCar: false
};
{% endhighlight %}

Celowo wybrałem taki przykład, aby pokazać jakie wartości mogą przyjmować obiekty: wartości logiczne, liczby i ciągi znaków. Zwróć uwagę na to, że ostatnia wartość w obiekcie nie kończy się przecinkiem. Może, choć nie musi.

Chcąc zaprezentować siebie przy pomocy obiektu musimy utworzyć metodę (funkcje w obiektach nazywamy metodami). Przez użycie wartości logicznej true lub false, aby poprawnie wyświetlić informacje o nas, będziemy w metodzie musieli skorzystać z [instrukcji warunkowej](https://endfront.pl/instrukcje-warunkowe-jak-z-nich-korzystac/).

{% highlight javascript %}
const aboutMe = {
  firstName: "Kacper",
  height: 185,
  haveCar: true,

  showInfo: function() {
    if(this.haveCar === true) {
      console.log("Mam na imię " + this.firstName + ", mam " + this.height + " cm wzrostu i mam samochod.");
    }
    else {
      console.log("Mam na imię " + this.firstName + ", mam " + this.height + " cm wzrostu i nie mam samochodu.");
    }
  }
};
{% endhighlight %}

Wywołujemy metodę (funkcję) przez `aboutMe.showInfo();` i voilà!

![Konsola przeglądarki](/assets/img/aboutme-showinfo.png)
*Efekt widoczny w konsoli przeglądarki po wywołaniu funkcji zawartej w obiekcie*

## Wywołanie poszczególnych wartości

Wyżej mogliście zauważyć, że wywołujemy funkcję `showInfo` zawartą w obiekcie `aboutMe`. W obrębie obiektu wywołanie danej wartości powoduje, że nie musimy zapisywać jego nazwy, a korzystamy ze słowa _this_.

Tak więc, wyświetlenie wartości **w obrębie obiektu**:

{% highlight javascript %}
document.write(this.firstName);
{% endhighlight %}

**Poza obiektem**:

{% highlight javascript %}
document.write(aboutMe.firstName);
{% endhighlight %}

## Nadpisywanie i usuwanie wartości

Po zdefiniowaniu obiektu może zdarzyć się, że w dalszym kodzie musimy **nadpisać jedną z jego wartości**. Odnosząc się do stworzonego wyżej obiektu może być to wzrost. Załóżmy, że zwiększył się on o 5 cm i musimy zaktualizować dane.

{% highlight javascript %}
// Do wyboru jedna z poniższych opcji (obie działają identycznie)
aboutMe.height = aboutMe.height + 5;
aboutMe.height += 5;

aboutMe.showInfo();
{% endhighlight %}

Po przeprowadzeniu tej operacji `height` w obiekcie `aboutMe` będzie równy **190**. Wywołanie metody `showInfo` spowoduje, że wyświetli się komunikat "_Mam na imię Kacper, mam 190 cm wzrostu i mam samochod._". Możemy oczywiście mnożyć, dzielić, korzystać z innych funkcji, itd.

**Usuwanie wartości z obiektu w JavaScript**, a następnie wywołaniem metody `showInfo` spowoduje, że wyświetli się komunikat "_Mam na imię undefined…_".

{% highlight javascript %}
delete aboutMe.firstName;
aboutMe.showInfo();
{% endhighlight %}

## Pusty obiekt, da się?

Utworzenie pustego obiektu w JavaScript nie stanowi żadnego problemu. Możemy skorzystać z tej opcji, a później dodawać do niego dane.

{% highlight javascript %}
// Stworzenie pustego obiektu
const aboutMe = {};

// Dodanie wartości firstName
aboutMe.firstName = "Kacper";

// Wyświetlenie obiektu w konsoli
console.log(aboutMe);
{% endhighlight %}

## Podsumowanie #008

Tak jak zapowiadałem, dziś - w sobotę - pojawił się wpis na temat obiektów. Mam nadzieję, że zdobyliście tutaj przynajmniej część wiedzy, po którą przyszliście. Jeśli chcecie poznać obiekty bliżej, koniecznie odwiedźcie [wpis na blogu Na Frontendzie](https://www.nafrontendzie.pl/tworzenie-obiektow-javascript). Do zobaczenia!
