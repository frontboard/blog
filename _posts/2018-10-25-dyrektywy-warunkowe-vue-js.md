---
title: "Dyrektywy warunkowe w Vue.js"
date: 2018-10-25 18:23:57 +0100
author: Kacper Stawiński
layout: post
categories: javascript vue
img: vue-dyrektywy-warunkowe.jpg
redirect_from:
  - /dyrektywy-warunkowe-vue-js/
---
Dyrektywy warunkowe w Vue.js nieco przypominają czysto [JS-owe instrukcje warunkowe](/instrukcje-warunkowe-if-switch-javascript). Zastosowania są podobne, ale zapis jest nieco inny. Nie da się ukryć, że nie są zbyt skomplikowane, ale mogą okazać się bardzo przydatne (a wręcz niezbędne!).

## Dyrektywy warunkowe
Dyrektywy warunkowe przyjmują jako swój parametr na przykład wartość obiektu `data` (dla przypomnienia – tam znajdują się wszelkie dane) lub wyrażenie i zwracają wartość logiczną. Jest to coś, co każdy programista uczący się Vue.js powinien znać. Do naszej dyspozycji mamy 3 dyrektywy: `v-if`, `v-else` i `v-show`. 

Zapisujemy je w kodzie HTML, a dokładniej w obrębie miejsca określonego przy początkowej konfiguracji Vue (patrz: `el`).

```js
var app = new Vue({
  el: '#app',
  data: {
    show: true,
  }
});
```

Na potrzeby artykułu stworzyłem już "zmienną" `show` i ustawiłem jej wartość logiczną na `true`. 

### v-if
Dyrektywa warunkowe `v-if` w Vue.js pozwala na wyświetlenie danego elementu, jeśli wartość logiczna w niej określona będzie prawdziwa. Co warto zaznaczyć – **element w ogóle nie pojawi się w DOM-ie, jeśli wartość logiczna będzie równa `false`**. W parze z `v-if` można stosować dyrektywę `v-else`, w przypadku `v-show` już nie.

```html
<span v-if="show">Wartość show jest równa true</span>
```

Biorąc pod uwagę, że określiliśmy wartość `show` jako true, efekt jest dosyć przewidywalny - element pojawi się na stronie.

Możemy również "odwrócić" wartość `show` za pomocą wykrzyknika. Wówczas `span` nie pojawi się na stronie, bo wynikiem wykonania dyrektywy będzie odwrócona wartość zmiennej `show`.

```html
<span v-if="!show">Przykładowy tekst, którego nie zobaczysz</span>
```

Zgodnie z tym co wspomniałem wyżej, możemy również korzystać z wyrażeń zwracających wartość logiczną, np. porównanie.

```html
<span v-if="1 < 3">1 jest mniejsze niż 3</span>
```

### v-show
Dyrektywa `v-show` działa bardzo podobnie, jak `v-if` z tym, że jest **jedna ważna różnica**. `v-if` w przypadku wykrycia wartości podanej w dyrektywie jako `false` nie pokaże elementu w DOM-ie. **Dyrektywa `v-show` spowoduje, że element otrzyma CSS-ową właściwość `display: none;`** – czyli de facto nadal **będzie istniał w DOM-ie, ale zostanie ukryty CSS-em**. Dodatkowo, nie możemy korzystać z dyrektywy `v-if` w parze z `v-show`.

Przykładowe użycie:

```html
<div id="app">
  <span v-show="isLoggedIn">Użytkownik jest zalogowany</span>
  <span v-show="!isLoggedIn">Użytkownik nie jest zalogowany</span>
</div>

<script>
var app = new Vue({
  el: '#app',
  data: {
    isLoggedIn: true,
  }
});
</script>
```

### v-else
Ostatnia z dyrektyw, możliwa do stosowania w parze z `v-if`. Pomocna w sytuacji, gdy warunek `v-if` nie zostaje spełniony. Musi być zapisana najbliżej możliwego if-a.

```html
<span v-if="show">Pokazuję się jako wynik dyrektywy v-if</span>
<span v-else>Pokazuję się jako wynik dyrektywy v-else</span>
```

## Podsumowanie
Dzisiaj poznaliśmy bardzo przydatne i z pewnością często stosowane funkcje w Vue.js. Zapraszam do odwiedzenia grupy [JavaScript Polska](https://www.facebook.com/groups/jspolska/), jak i [fanpage bloga - @frontboardpl](https://www.facebook.com/frontboardpl/). W obydwóch miejscach czasami wrzucam zapowiedzi nadchodzących postów.

Do przeczytania w najbliższym czasie!