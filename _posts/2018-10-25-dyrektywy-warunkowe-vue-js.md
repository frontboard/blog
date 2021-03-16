---
title: "Dyrektywy warunkowe w Vue.js"
date: 2018-10-25 18:23:57 +0100
author: Kacper Stawiński
layout: post
categories: javascript vue
img: /assets/img/vue02.png
---
Dyrektywy warunkowe nieco przypominają JavaScriptowe instrukcje warunkowe. Zastosowania są podobne, aczkolwiek zapis jest inny. Nie da się ukryć, że nie są zbyt skomplikowane, ale mogą okazać się bardzo przydatne. 

## Dyrektywy warunkowe
Dyrektywy warunkowe przyjmują jako swój parametr na przykład wartość obiektu `data` (dla przypomnienia – tam znajdują się wszelkie dane) lub wyrażenie i zwracają wartość logiczną *true* lub *false*. Jest to coś, co każdy programista uczący się Vue.js powinien znać. Do naszej dyspozycji mamy 3 dyrektywy: **v-if**, **v-else** i **v-show**. 

Zapisujemy je w kodzie HTML, a dokładniej w obrębie miejsca określonego przy początkowej konfiguracji Vue (`el`).

```javascript
<script>
var app = new Vue({
	el: '#app',
	data: {
		show: true,
	}
});
</script>
```

Na potrzeby artykułu stworzyłem już "zmienną" `show` i ustawiłem jej wartość logiczną na *true*. 

### v-if
Dyrektywa warunkowe `v-if` w Vue.js pozwala na wyświetlenie danego elementu, jeśli wartość logiczna w niej określona będzie prawdziwa. Co warto zaznaczyć – **element w ogóle nie pojawi się w DOM-ie, jeśli wartość logiczna będzie równa *false***. Nie zawsze tak jest, ale o tym w dalszej części artykułu. W parze z `v-if` można stosować dyrektywę `v-else`, w przypadku `v-show` już nie.

**Jak zapisać dyrektywę warunkową `v-if`:**

```html
<div id="app">
	<span v-if="show">Wartość show jest równa true</span>
</div>
```

Biorąc pod uwagę, że określiliśmy wartość `show` jako true, efekt jest dosyć przewidywalny.

![](/assets/img/v-if-1.png)

***

Możemy również "odwrócić" wartość `show` za pomocą wykrzyknika. Wówczas tekst nie pojawi się na stronie, bo wynikiem wykonania dyrektywy będzie wartość *false*.

```html
<div id="app">
	<span v-if="!show">Przykładowy tekst</span>
</div>
```
	
***

Zgodnie z tym co wspomniałem wyżej, możemy również korzystać z wyrażeń zwracających wartość logiczną, np. porównanie.

```html
<div id="app">
  <span v-if="1 < 3">Liczba 3 jest większa od liczby 1</span>
</div>
```

### v-show
Dyrektywa `v-show` działa bardzo podobnie, jak `v-if` z tym, że jest **jedna ważna różnica**, o której wspomniałem wcześniej. `v-if` w przypadku wykrycia wartości podanej w dyrektywie jako *false* nie pokaże elementu w DOM-ie. Dyrektywa `v-show` spowoduje, że element otrzyma CSS "display: none;" – czyli *de facto* nadal będzie istniał w DOM-ie, ale zostanie ukryty CSS-em. Dodatkowo nie możemy korzystać z dyrektywy `v-if` w parze z `v-show`.

Przykładowe użycie:

```html
<div id="app">
  <!-- Jesli 'status' jest rowny true -->
  <span v-show="status">Użytkownik jest aktywny</span>
	
	<!-- Jesli 'status' jest rowny false -->
  <span v-show="!status">Użytkownik jest nieaktywny</span>
</div>

<script>
var app = new Vue({
  el: '#app',
  data: {
    status: true,
  }
});
</script>
```

![](/assets/img/v-show-1.png)

### v-else
Ostatnia z dyrektyw, możliwa do stosowania w parze z `v-if`. Pomocna w sytuacji, gdy warunek `v-if` nie zostaje spełniony. Musi być zapisana najbliżej możliwego *if-a*.

```html
<div id="app">
   <span v-if="show">Pokazuję się jako wynik dyrektywy v-if</span>
   <span v-else>Pokazuję się jako wynik dyrektywy v-else</span>
</div>
```

## Podsumowanie
Dzisiaj poznaliśmy bardzo przydatne i z pewnością często stosowane funkcje w Vue.js. Zapraszam również do grupy [Vue.js w 30 dni – grupa wsparcia](https://www.facebook.com/groups/vuew30dni/), jak i na [fanpage bloga](https://www.facebook.com/endfrontpl/). W obydwóch miejscach czasami wrzucam *teasery* nadchodzących postów. 

***

**Ćwiczenie na dziś**:
Porównaj przy pomocy dowolnej dyrektywy warunkowej poniższe wartości i wyświetl odpowiedni komunikat. Przed rozwiązaniem ćwiczenia spróbuj przewidzieć, jak powinien zachować się kod.
- 4 > 5
- !10 < 1
- 3 === "3"
- 3 == "3"
- 3 !== "3"

**Rozwiązaniami można dzielić się w komentarzach.** Do przeczytania w najbliższym czasie! 