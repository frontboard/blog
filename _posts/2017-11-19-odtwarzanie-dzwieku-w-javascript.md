---
title: Powiadomienia dźwiękowe, czyli odtwarzanie muzyki w JavaScript
date: 2017-11-19T13:00:22+00:00
author: kstawinski
layout: post
categories: javascript
img: odtwarzanie-dzwieku-javascript.jpg
redirect_from:
  - /odtwarzanie-dzwieku-w-javascript/
---
Zastanawiasz się, jak za pomocą JavaScript odtwarzać dźwięk, na przykład jako powiadomienie dźwiękowe? Ten artykuł z pewnością rozwieje Twoje wątpliwości.

O tym, że programowania najlepiej uczy się przez programowanie zdążyłem się już przekonać. Teoria też jest ważna, to fakt, ale utrzymanie jej w głowie nie jest takie proste bez tworzenia projektów. Jako, że JavaScript jest dla mnie sporym wyzwaniem i zrozumienie tego języka zajmie mi na pewno jeszcze sporo czasu, postanowiłem napisać prosty projekt *to-do list*. Żeby nie było zbyt prosto, postawiłem sobie kilka dodatkowych wymagań, m.in. powiadomienia dźwiękowe. W sumie nie spodziewałem się, że to tylko dwie linijki kodu, ale chciałbym się tym rozwiązaniem z Wami podzielić.

## Odtwarzanie dźwięku za pomocą HTML i JS
**Kod HTML:**

```html
<audio id="alert" src="/assets/alert.mp3" preload="auto"></audio>
```

**Kod JavaScript:**

```js
const alert = document.querySelector('#alert').play();
```

W HTML podajemy ścieżkę do pliku i identyfikator elementu, natomiast w JS używając [metody `play`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play) odtwarzamy plik dźwiękowy.

## Zatrzymanie odtwarzania dźwięku

Rzecz równie prosta jak wcześniejsza. Korzystamy z [metody `pause`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/pause), która obejmuje zarówno `audio`, jak i `video`. Aby naprzemiennie móc włączać dźwięk (lub wideo) i go zatrzymywać musimy stworzyć funkcję, korzystając z [instrukcji warunkowej](/instrukcje-warunkowe-if-switch-javascript) z odpowiednim warunkiem.

```js
// Pamiętaj o zdefiniowaniu `audio`!

function togglePlayAndPause() {
  if (audio.duration > 0 && !audio.paused) {
    audio.pause();
  }
  else {
    audio.play();
  }
}
```

Dzięki takiemu rozwiązaniu, jeżeli muzyka jest odtwarzana i naciśniemy na przycisk podpięty do funkcji `togglePlayAndPause()`, dźwięk zostanie zatrzymany. Następne kliknięcie spowoduje uruchomienie dźwięku.

## Odtwarzanie dźwięku w JavaScript
Tutaj sprawa wygląda nieco inaczej. Na razie nie korzystamy z HTML, a ścieżkę do pliku dźwiękowego (najlepiej z rozszerzeniem `.mp3`) podajemy w zmiennej.

```js
const sound = new Audio('sound.mp3');
sound.play();
```

Tworzymy nowy obiekt audio ze ścieżką do pliku dźwiękowego, a za pomocą linijki niżej odtwarzamy go. Można to obudować w jakieś zdarzenie, np. kliknięcie przycisku. Wtedy kod będzie wyglądał następująco:

```js
const button = document.querySelector('#playsound');
const sound = new Audio('sound.mp3');

button.addEventListener('click', () => sound.play());
```
