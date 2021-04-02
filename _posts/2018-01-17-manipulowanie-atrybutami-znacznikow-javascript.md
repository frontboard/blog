---
title: "Manipulowanie atrybutami znaczników w JavaScript"
date: 2018-01-17 08:47:08 +00:00
author: Kacper Stawiński
layout: post
categories: javascript
img: atrybuty-javascript.jpg
redirect_from:
  - /manipulowanie-atrybutami-znacznikow-javascript/
---
JavaScript jest dla mnie niezwykle ciekawym językiem, który mimo swoich wad pozwala mi czerpać wiele radości. Chciałbym pokazać Wam, jak za pomocą czystego JS-a możemy manipulować atrybutami tagów HTML. Będą style inline, klasy, nowe atrybuty i to, co lubię najbardziej - praktyka!

## Metoda `setAttribute()`

Ta metoda zdecydowanie ułatwi nam pracę z atrybutami znaczników. Jej konstrukcja wygląda następująco: `element.setAttribute("atrybut", "wartosc");`. W przypadku, gdy podany atrybut nie istnieje, zostanie utworzony nowy z podaną wartością. Jeżeli jednak istnieje, jego wartość zostanie zmieniona. Proste, prawda?

## Metoda `removeAttribute()`

Skoro możemy dodawać i edytować atrybuty, nic dziwnego, że możemy je również usuwać. Służy temu metoda `removeAttribute`. Jej konstrukcja: `element.removeAttribute("atrybut");`.

## A co ze stylami?

O ile w przypadku standardowych atrybutów nie ma problemu, aby używać w/w metod, o tyle w przypadku klas sprawa wygląda nieco inaczej. Jednak nie jest to trudniejsze - powiedziałbym, że inne, zgodne z przyjętymi standardami i wygodniejsze dla programisty. Istnieje 5 metod usprawniających pracę z klasami w JavaScript:

{% highlight javascript %}
// 1. Dodanie klasy
element.classList.add('klasa');

// 2. Usuniecie klas
element.classList.remove('klasa', 'druga-klasa');

// 3. Sprawdzenie, czy element zawiera podana klase
element.classList.contains('klasa');

// 4. Przelaczanie klasy (widoczna-niewidoczna)
element.classList.toggle('klasa');

// 4.1. Przelaczenie klasy, jezeli a jest wieksze od 5
element.classList.toggle('klasa', a>5);

// 5. Pobranie klasy o indeksie 1
element.classList.item(1);
{% endhighlight %}

Użycie samej właściwości `classList` spowoduje, że JS wyświetli nam listę klas danego tagu.

{% highlight javascript %}
const tag = document.querySelector("#example");
alert(tag.classList);
{% endhighlight %}

## Style inline

W przypadku stylowania znaczników za pomocą atrybutu `style=""` w kodzie HTML, do wyboru mamy kilka opcji. Zaleca się korzystanie z tej pierwszej, bo - [jak możemy wyczytać w dokumentacji MDN](https://developer.mozilla.org/pl/docs/Web/API/Element/style#Uwagi) - użycie `element.style` nie nadpisze innych własności CSS, które mogły być wcześniej określone atrybutem `style`.

{% highlight javascript %}
// Sposob pierwszy
element.style.wlasciwosc = wartosc;

element.style.fontSize = "110%";
element.style.width = "100vh";
{% endhighlight %}

Warto zwrócić uwagę na to, że w JS **właściwość zawierająca myślnik (np. `font-size`) zapisywana jest przy użyciu camelCase**, czyli będzie to `fontSize`. To samo jest z `background-color`, `font-family`, itd.

{% highlight javascript %}
// Sposób drugi (niezalecany)
element.style = "color:blue;font-size:16px;";

// Sposób trzeci (niezalecany)
element.setAttribute("style", "color:blue;font-size:16px;");
{% endhighlight %}

## Przykład: Przełączanie widoczności hasła

Niejednokrotnie spotkałem się z sytuacją, kiedy podczas wypełniania długiego formularza rejestracyjnego chciałem sprawdzić, czy podane hasła są ze sobą zgodne, by później nie tracić kilku minut na jego ponowne wypełnienie. Zazwyczaj robiłem to poprzez "zbadanie elementu" i edycję atrybutu `type`. Nie ulega jednak wątpliwościom, że szybciej i wygodniej byłoby, gdyby dało się podejrzeć hasło poprzez wciśnięcie guzika czy zaznaczenie kwadracika. Stwórzmy zatem krótki, testowy formularz.

{% highlight html %}
<form>
 <input type="password" id="password" placeholder="Hasło">
 <label><input type="checkbox" id="showPassword">Pokaż hasło</label>
</form>
{% endhighlight %}

W JS pobieramy potrzebne dane do zmiennych, a następnie przypisujemy funkcję `togglePassword` do zdarzenia `click` w zmiennej `checkbox`.

{% highlight javascript %}
const checkbox = document.querySelector("#showPassword");
checkbox.addEventListener("click", togglePassword);
{% endhighlight %}

Niezbędna będzie dla nas funkcja [setAttribute](https://developer.mozilla.org/pl/docs/Web/API/Element/setAttribute), dzięki której zmienimy wartość atrybutu `type`. Oczywiście, musimy najpierw sprawdzić odpowiednią [instrukcją warunkową](/instrukcje-warunkowe-if-switch-javascript), czy checkbox jest zaznaczony.

{% highlight javascript %}
function togglePassword () {
 const password = document.querySelector("#password");
 
 // jezeli checkbox jest zaznaczony
 if(checkbox.checked) {
  console.log("Checkbox jest zaznaczony. JavaScript, pokaz haslo!");
  password.setAttribute("type", "text");
 }
 // jezeli checkbox nie jest zaznaczony
 else {
  console.log("Checkbox odznaczony. Ukryj haslo!");
  password.setAttribute("type", "password");
 }
}
{% endhighlight %}

Jak widać, całość opiera się głównie na jednym warunku i metodzie modyfikującej atrybut.

_Demo dostępne [tutaj](https://codepen.io/kstawinski/pen/EobrrJ?editors=1010)._

## Podsumowanie

Jak mogliście zauważyć, sposobów na edycję atrybutów jest wiele. Należy jednak pamiętać o tym, że poszczególne atrybuty mogą posiadać swoje własne metody do zarządzania nimi. Zachęcam do obserwowania [fanpage bloga](http://fb.me/frontboardpl) bądź subskrybcji [RSS](/feed.xml), aby być na bieżąco! :)