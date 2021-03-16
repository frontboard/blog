---
title: Powiadomienia dźwiękowe, czyli odtwarzanie muzyki w JavaScript
date: 2017-11-19T13:00:22+00:00
author: Kacper Stawiński
layout: post
categories: javascript
img: /assets/img/odtwarzanie-dzwieku-javascript.jpg
---
Zastanawiasz się, jak za pomocą JavaScript odtwarzać dźwięk na przykład jako powiadomienie dźwiękowe? Ten artykuł z pewnością rozwieje Twoje wątpliwości.

O tym, że programowania najlepiej uczy się przez programowanie zdążyłem się już przekonać. Teoria też jest ważna, to fakt, ale utrzymanie jej w głowie nie jest takie proste bez tworzenia projektów. Maciej Aniserowicz w jednym z rozdziałów swojej książki "[Zawód: Programista](https://zawodprogramista.pl)" (swoją drogą jestem już gdzieś w połowie i gorąco polecam!) napisał, że warto mieć swojego bloga i coś na nim publikować. Ja ostatnio mam jakąś niechęć do pisania, ale zebrałem się i w końcu po 2. tygodniach stworzyłem ten post.

Jako, że JavaScript jest dla mnie sporym wyzwaniem i zrozumienie tego języka zajmie mi na pewno jeszcze sporo czasu postanowiłem napisać prosty projekt - _to-do list_. Ale żeby nie było zbyt prosto, postawiłem sobie kilka dodatkowych wymagań, m.in. powiadomienia dźwiękowe. W sumie nie spodziewałem się, że to tylko dwie linijki kodu, ale chciałbym się tym rozwiązaniem z Wami podzielić.

## Odtwarzanie dźwięku za pomocą HTML i JS

**Kod HTML:**

{% highlight html %}
<audio id="alert" src="assets/alert.mp3" preload="auto"></audio>
{% endhighlight %}

**Kod JavaScript:**

{% highlight javascript %}
const alert = document.querySelector("#alert").play();
{% endhighlight %}

To jest wszystko. W HTML podajemy ścieżkę do pliku i identyfikator tego dźwięku, natomiast w JS go odtwarzamy.

## Zatrzymanie odtwarzania dźwięku

Rzecz równie prosta jak wcześniejsza. Korzystamy z funkcji `stop()`, która obejmuje _audio_ i _video_. Aby naprzemiennie móc włączać dźwięk i go zatrzymywać musimy stworzyć [instrukcję](https://endfront.pl/2017/09/05/instrukcje-warunkowe-jak-z-nich-korzystac/) z odpowiednim warunkiem.

{% highlight javascript %}
//Wczesniej trzeba zdefiniowac zmienna audio

if (audio.duration > 0 && !audio.paused) {
 //Jezeli muzyka gra
 audio.pause();
 }
 else {
 //Jezeli muzyka nie gra
 audio.play();
 }
{% endhighlight %}

Dzięki takiemu rozwiązaniu, jeżeli muzyka jest odtwarzana i naciśniemy na przycisk ponownie, dźwięk zostanie zatrzymany (i odwrotnie).

## Odtwarzanie dźwięku w samym JavaScripcie

Tutaj sprawa wygląda nieco inaczej. Na razie nie korzystamy z HTML, a ścieżkę do pliku dźwiękowego (najlepiej z rozszerzeniem _.mp3_) podajemy w zmiennej.

{% highlight javascript %}
const sound = new Audio("sound.mp3");
sound.play();
{% endhighlight %}

Tworzymy nowy obiekt audio ze ścieżką do pliku dźwiękowego, a za pomocą linijki niżej odtwarzamy go. Można to obudować w jakieś zdarzenie, np. kliknięcie przycisku. Wtedy kod będzie wyglądał tak:

{% highlight javascript %}
const button = document.querySelector("#playsound");

button.addEventListener("click", function(){
 const sound = new Audio("sound.mp3");
 sound.play();
});
{% endhighlight %}

W pierwszej linii pobieramy znacznik o identyfikatorze _playsound_. Następnie nasłuchujemy kliknięcia w niego i jeżeli użytkownik kliknie, utworzy się zmienna lokalna z dźwiękiem _sound.mp3_, który zostanie odtworzony.

*W oparciu o ten wpis powstał [projekt odtwarzacza w JS](https://endfront.pl/odtwarzacz-player-audio-javascript/).*
