---
title: "Wprowadzenie do Vue.js — instancja Vue i hello world"
date: 2018-10-22 15:53:53 +0200
author: kstawinski
layout: post
categories: javascript vue
img: vue-wprowadzenie.jpg
redirect_from:
  - /wprowadzenie-vue-js/
---
Serię wpisów dotyczącą Vue.js zacznijmy od krótkiego wprowadzenia. Po przeczytaniu wpisu dowiesz się, jak podpiąć Vue.js i — coś, czego nie mogło zabraknąć — stworzymy "hello world'a". Do dzieła!

Poświęcając kilka minut na zabawę z Vue.js, odniosłem wrażenie, że **jest on bardzo lekki**. Pisanie w nim to czysta przyjemność, przynajmniej na poziomie, na którym się znajduję. Zobaczymy jak będzie dalej ;) 

## Instalacja Vue.js
Sposobów na połączenie aplikacji czy strony z Vue.js jest kilka. Najprostszy z nich to podpięcie odpowiedniego skryptu za pomocą tagu `script`. Nie da się ukryć, że jest to bardzo przystępna opcja dla osób, które nie chcą korzystać z *build systemów* i terminala. Skupimy się na pierwszej metodzie, czyli **podepniemy zewnętrzny skrypt**.

Do wyboru mamy 2 pliki, które nie różnią się działaniem, a jedynie pomagają w wychwyceniu błędów poprzez **prezentowanie odpowiednich komunikatów w konsoli**. Jeden z plików  jest **wersją developerską**, a drugi — produkcyjną — który wyżej wspomnianych komunikatów nie zawiera. Na potrzeby naszego projektu skorzystamy z wersji developerskiej.

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

Gdyby ktoś jednak chciał utrudniać sobie życie i używać wersji produkcyjnej, jest taka możliwość:

```html
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```

## Inicjacja Vue.js na stronie
W poprzednim wpisie sugerowałem powtórkę obiektów w JavaScript, bo cała konfiguracja Vue.js znajduje się właśnie w JS-owym obiekcie.

Aby móc korzystać z Vue.js, musimy stworzyć jego instancję przy pomocy funkcji `Vue`. Dla przykładu:

```js
var app = new Vue({
  // dodatkowy kod
});
```

I już, mamy stworzoną instancję Vue (czyli podpiętą i zainicjowaną bibliotekę). Do pełnego działania brakuje nam jednak kilku rzeczy. Po pierwsze — **elementu, w którym Vue.js będzie się renderował**.  Stwórzmy go w pliku `index.html`.

```html
<div id="app"></div>
```

Teraz odwołajmy się do niego w pliku z Vue:

```js
var app = new Vue({
  el: '#app',
});
```

**Wyjaśnienie**: `el` to skrót od element. Wskazujemy tam miejsce, w którym Vue.js będzie mógł pracować, bez ingerowania w pozostałe części strony. Do zidentyfikowania takiego miejsca możemy użyć też klasy.

## Hello, world!

Istotną **zaletą Vue jest prosta składnia**. Przetrzymywanie wszelkich danych należy do zadań obiektu `data`. Pozostałe obiekty, takie jak np. `methods` omówię w kolejnych artykułach.

```js
var app = new Vue({
  el: '#app',
  data: {
    text: 'world'
  }
});
```

Jak wspominałem wcześniej - w obiekcie `data` dla wartości `text` przypisaliśmy ciąg znaków "world". W skrócie: przypisaliśmy do "zmiennej" wartość. 

Wyświetlenie zadeklarowanej i zdefiniowanej zmiennej polega na zawarciu jej nazwy w podwójnych klamrach w kodzie HTML.

```html
<div id="app">Hello, {% raw %}{{ text }}{% endraw %}</div>
```

**Warto pamiętać, żeby zawierało się to w divie określonym podczas podpinania Vue!**

![Zrzut ekranu przeglądarki pokazujący efekt wykonania kodu](/assets/img/hello-world.png)

## Dlaczego warto zainteresować się Vue.js?
W 2017 roku **Vue.js został najpopularniejszym [projektem na GitHubie](https://github.com/vuejs/vue)**. Otrzymał on ponad 40 tys. gwiazdek. Na drugim miejscu stał [React](https://github.com/facebook/react), na trzecim [create-react-app](https://github.com/facebook/create-react-app).

> "To pokazuje, że z jednej strony “hype” na Vue wciąż trwa - i dobrze bo to świetna biblioteka. Z drugiej strony, zestawienie pokazuje też, że najsilniejszym obecnie “ekosystemem” dysponuje React" - pisze Bartek Dybowski z bloga Na Frontendzie w swoim artykule *[Gwiazdy JavaScriptu w 2017 roku](https://www.nafrontendzie.pl/gwiazdy-javascriptu-2017-roku)*.

Google Trends również potwierdza rosnącą popularność Vue.js. Poniżej przedstawiam wykres z tego narzędzia.

![Wykres z Google Trends przedstawiający rosnącą popularność Vue.js](/assets/img/google-trends.png)
*[Źródło](https://trends.google.pl/trends/explore?date=today%205-y&geo=PL&q=vue.js)*

W dużym skrócie, **Vue.js**:
* jest **lekki**. W [porównaniu z innymi frameworkami](https://vuejs.org/v2/guide/comparison.html) wypada rewelacyjnie - waży około 30 KB,
* ma **niski próg wejścia**. Nie potrzeba tutaj znajomości specjalnej składni, skomplikowanych narzędzi czy instalacji czekogolwiek - podpinasz skrypt, odpalasz dokumentację i działasz,
* posiada **świetnie opracowaną [dokumentację](https://vuejs.org/v2/guide/)**. Liczne przykłady i łatwość w znalezieniu informacji sprawiają, że początkujący developerzy bez problemu opanują podstawy tej biblioteki.

Chyba warto?

Powstał kolejny post dotyczący [dyrektyw warunkowych w Vue.js](/dyrektywy-warunkowe-vue-js) - rzuć okiem, jeśli temat Vue jest dla Ciebie nowością.