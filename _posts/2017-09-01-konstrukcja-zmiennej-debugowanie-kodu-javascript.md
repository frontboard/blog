---
title: "Konstrukcja zmiennej, debugowanie kodu, operacje na zmiennych"
date: 2017-09-01T14:50:41+00:00
author: Kacper Stawiński
layout: post
categories: javascript
img: /assets/img/jsw60dni.png
redirect_from:
  - /konstrukcja-zmiennej-debugowanie-kodu-operacje-zmiennych
  - /konstrukcja-zmiennej-debugowanie-kodu-operacje-zmiennych/
---
1 września, a więc ruszamy z projektem. Kompletne podstawy podstaw, czyli **zmienne w JavaScript**. Są one obecne praktycznie w każdym innym języku programowania - w PHP, C++ itd. My jednak przyjrzymy się JS-owi.

## Konstrukcja zmiennej

Zmienna, czyli inaczej pojemnik na dane. Do jej utworzenia kluczem jest słówko `var`, które po rozwinięciu w języku angielskim oznacza *variable*.

Nazwa zmiennej nie może zaczynać się od cyfry, myślnika i znaków specjalnych, <s>a także nie może zawierać znaków diakrytycznych</s> (dzięki Comandeer - [nazwa zmiennej może zawierać znaki diakrytyczne, ale nie powinno się tego stosować](#comment-3497371495)).

```js
var text = 'Hello World';
```

Sprawa chyba jasna. Utworzyliśmy zmienną `text` o wartości **Hello World**. Moglibyśmy równie dobrze zapisać taki kod:

```js
text = 'Hello World';
```

i wszystko byłoby w porządku. Zalecam jednak korzystanie z tej pierwszej opcji, bo zapisywanie zmiennych pomijając przy tym słowo `var`, uczyni je zmiennymi globalnymi (inaczej: zmiennymi o zasięgu globalnym), co w przyszłości może nam nieco namieszać w kodzie, ale o tym w kolejnym wpisie.

## Puste zmienne

Jeżeli chcemy na początku kodu zdefiniować wszystkie zmienne, a następnie uzupełniać je danymi - nie ma problemu. Wystarczy po nazwie zmiennej dać średnik.

```js
var text;
//dalszy kod
text = "Hello World";
```

**Uwaga, tutaj wkradł się błąd (już poprawiony).** Kacper słusznie [zwrócił mi uwagę](#comment-3497351013) na to, że później mogą wystąpić problemy z zasięgiem zmiennych. Część jego komentarza:
> W pustych zmiennych nie trzeba dawać drugi razy „var” przy przypisywaniu wartości, jak się je daje to mogą wystąpić problemy z zasięgiem zmiennych i nagle okazuję się że zmienna która jest globalna będzie zapisywana jako zmienna lokalna funkcji.

## Operacje na zmiennych

Znaki, dzięki którym możemy operować na zmiennych to `+`, `-`, `/` oraz `*`. Załóżmy, że chcesz za pomocą JavaScriptu opisać cenę towaru w sklepie. Stworzymy zmienną `bluza` o wartości `50` i zmienną `rabat` o wartości `10`.

```js
var bluza = 50;
var rabat = 10;
```

Jeśli wartością zmiennej jest liczba, opuszczamy apostrofy/cudzysłowy. W przypadku wartości logicznych (`true` lub `false`) również.

```js
var cena = bluza - rabat;
console.log(cena);
```

W konsoli powinna pokazać się cena bluzy po odjęciu rabatu 10 PLN, czyli liczba 40. Proste, prawda? 

## Łączenie ciągu znaków

Apetyt rośnie w miarę jedzenia, dlatego przejdźmy dalej. Chcę, aby w konsoli pokazała się nie tylko pusta liczba, ale również informacja, że chodzi o cenę bluzy.

```js
console.log("Cena bluzy wynosi " + cena + " PLN.");
```

W tym przypadku plus służy za łącznik. Pierwszy ciąg znaków to `Cena bluzy wynosi`, drugi to zmienna `cena`, a trzeci `PLN.` . Znak dodawania połączył nam to w całość, dzięki czemu w konsoli ukazał się tekst: Cena bluzy wynosi 40 PLN.

Wprowadzenie w standardzie ECMAScript 2015 (ES6) [Template Strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) umożliwia nam skorzystanie z kilku nieco czytelniejszej wersji:

```js
console.log(`Cena bluzy wynosi ${cena} PLN.`);
```

Warto zaznaczyć, że takie złączenie zadziała tylko w przypadku użycia back quotes (`).

## Debugowanie kodu, czyli gdzie szukać błędów?

Kod nie działa, strona jest pusta, a Ty nie wiesz co zrobić? Tam, gdzie powinna pojawić się cena bluzy, czyli **w konsoli**, pojawi się **czerwony alert**.

![Konsola przeglądarkowa z błędem](/assets/img/uncaught-reference-error-cena.png)
*Przykładowy błąd w konsoli przeglądarki*

W zdecydowanej większości błędów właśnie tam znajdziesz rozwiązanie. No, może nie od razu rozwiązanie, ale przyczynę błędu. Jeżeli nadal nie wiesz co i jak - wklej go w Google, wejdź na Stack Overflow i na pewno kod ruszy - tam jest naprawdę wszystko ;)

## Podsumowanie

Tym wpisem pokazałem Wam **jak tworzyć zmienne** i **operować na nich**, **jak debugować kod**, czyli **gdzie szukać błędów**. Następny wpis już za kilka dni ([przenieś mnie](/zakres-zmiennych-zmienne-lokalne-globalne-javascript)). Być może (w sumie na pewno) gdzieś będą przewijały się błędy. Jeżeli ktoś bardziej obeznany z JS-em widzi jakiś - koniecznie daj znać w komentarzu co zapisałem nie tak, poprawię go. Dzięki!
