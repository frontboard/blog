---
title: "Zakres zmiennych, czyli zmienne lokalne i globalne oraz hoisting"
date: 2017-09-03T16:58:04+00:00
author: Kacper Stawiński
layout: post
categories: javascript
img: /assets/img/jsw60dni.png
---
Na pewno wiesz już jak korzystać ze zmiennych w JavaScript. Jeżeli nie, odsyłam Cię do [pierwszego wpisu](https://endfront.pl/konstrukcja-zmiennej-debugowanie-kodu-operacje-zmiennych/). Dzisiaj nieco przybliżę Wam temat zmiennych lokalnych i globalnych, czyli inaczej zmiennych o zasięgu lokalnym/globalnym oraz wyjaśnię, dlaczego nie warto pomijać słówka `var` przy ich deklarowaniu. Let's go!

## Let i const

W standardzie ECMAScript 2015 (ES6) dodano 2 nowe słówka kluczowe służące do deklarowania zmiennych. Rzecz jasna mam na myśli `let` i `const`. Jaka jest różnica między nimi, a `var`? Otóż `let` i `const` w przeciwieństwie do `var` [nie podlegają hositingowi](#hoisting-a-let-i-const). Muszą także zostać zdefiniowane od razu po zadeklarowaniu. Takie sytuacje nie mogą mieć miejsca:

```javascript
const pi;
pi = 3.14;

console.log(pi)
```

Temat [`let` i `const` został szerzej opisany](http://devenv.pl/const-let-javascript-es6-uzywac/) na blogu DevEnv, do którego Cię odsyłam.

## Ustalanie zakresu zmiennej poprzez funkcję

Banalny przykład. Stwórzmy prostą funkcję, a wewnątrz niej umieśćmy zmienną o nazwie lokalna. Na samej górze kodu znajduje się zmienna o **zasięgu globalnym**, dlatego, że nie znajduje się wewnątrz żadnej funkcji.

{% highlight javascript %}
const globalna = "Zakres globalny";

function prostaFunkcja() {
    const lokalna = "Zakres lokalny";
}
{% endhighlight %}

Rozumiecie różnicę? Zmienna lokalna jest na potrzeby danego kawałka kodu, natomiast zmienna globalna jest potrzebna w całym kodzie. Sprawdźmy, czy aby na pewno wszystko się zgadza. Wywołajmy do konsoli obydwie zmienne.

{% highlight javascript %}
console.log(globalna);
console.log(lokalna);
{% endhighlight %}

Wynik? W konsoli **pojawił się błąd**, ale to oznacza, że **wszystko jest w porządku**. Nie możemy pobrać zmiennej lokalnej poza funkcją, w której się znajduje, bo według JS taka zmienna nie jest zdefiniowana.


![Konsola JSBin.com](/assets/img/wywolanie-zmiennych-lokalnej-globalnej.png)
*Podgląd konsoli po wywołaniu zmiennej lokalnej i globalnej*

## A gdyby pominąć słowo kluczowe?

W pierwszym wpisie wspomniałem, że niekorzystanie ze skrótu od **variable** może przysporzyć nam nieco problemów.  Tak będzie również i w tym przypadku. Usuńmy przy zmiennej lokalnej słowo "var", wywołajmy ją i ponownie wynik wyślijmy do konsoli.

{% highlight javascript %}
const globalna = "Zakres globalny";

function prostaFunkcja() {
  lokalna = "Zakres lokalny";
}
prostaFunkcja();

console.log(globalna);
console.log(lokalna);
{% endhighlight %}

Efekt? No po prostu zmienna lokalna jest widoczna poza funkcją, w której ją zadeklarowaliśmy.

![Konsola JSBin.com](/assets/img/wywolanie-zmiennych-bez-bledu.png)
*Podgląd konsoli po wywołaniu dwóch zmiennych*

### Strict mode

Pomijanie słowa **var** zaburza strukturę kodu, ponieważ zmienne zadeklarowane w funkcji będą możliwe do odczytu i wykorzystania poza nią. Sensownym rozwiązaniem jest skorzystanie ze [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode). Spowoduje to, że zmienne zadeklarowane bez słówka `var` np. w funkcji będą dostępne tylko w jej obrębie.

{% highlight javascript %}
function test () {
  // Zadeklarowanie użycia strict mode
  'use strict';
  return pi = 3;
}
test();
alert(pi);
{% endhighlight %}

## Czym jest hoisting?

**Hoisting**, czyli z j. angielskiego **podnoszenie**. Nazwa doskonale opisuje to, co ten hoisting właściwie robi. W teorii JavaScript wyszukuje wszystkie funkcje, zmienne i przenosi je na samą górę kodu. W praktyce chodzi o to, że możemy skorzystać z danej funkcji wcześniej, niż ją zdefiniujemy, bo hoisting spowoduje, że finalnie **funkcja będzie w kodzie wyżej niż deklaracja jej użycia**.

Aby pokazać, jak działa hoisting, za pomocą JS napiszę funkcję, która poda Wam informacje nt. bloga. Na początku kodu ją wywołam, a później zapiszę, co ma robić. Jeżeli nie wiesz, co robi poniższy kod - koniecznie przeczytaj [pierwszy wpis na blogu](https://endfront.pl/konstrukcja-zmiennej-debugowanie-kodu-operacje-zmiennych/), w którym piszę nieco więcej o funkcjach.

{% highlight javascript %}
blogInfo();

function blog() {
  const name = "JavaScript w 60 dni";
  const url = "https://endfront.pl";
  const author = "Kacper Stawinski";

 console.log("Znajdujesz sie na blogu " +name+ ", do ktorego prowadzi link " +url+ ". Autorem projektu jest " +author+ ".")
}
{% endhighlight %}

Wynik w konsoli:

![Konsola JSBin.com](/assets/img/funkcja-bloginfo.png)
*Informacje o blogu w konsoli po wywołaniu funkcji blogInfo()*

Wszystko działa jak należy. Nie mamy żadnych błędów typu _blogInfo is not defined_. Działanie hoistingu spowodowało, że przeglądarka najpierw dostała informacje jak działa funkcja, a później prośbę o jej wywołanie.

### Hoisting, a let i const

Warto pamiętać, że zmienne zadeklarowanie przy użyciu `let` lub `const` nie podlegają hoistingowi. W przypadku wywołania zmiennej przed jej zadeklarowaniem - przeglądarka rzuci błąd *undefined*.

```javascript
function test () {
  console.log(pi);
  const pi = 3.14;
}
test();
```

## Podsumowanie #002

Było trochę teorii i trochę praktyki. Z wykorzystaniem funkcji pokazałem, dlaczego nie warto rezygnować ze słówka `var` przy tworzeniu zmiennych. Wspomniałem również o hoistingu, o którym więcej możecie przeczytać [w dokumentacji MDN](https://developer.mozilla.org/en/docs/Glossary/Hoisting). Kolejny wpis niebawem, będzie trochę o przechowywaniu większej ilości danych. Ktoś doświadczony domyśla się o co chodzi? 🙂
