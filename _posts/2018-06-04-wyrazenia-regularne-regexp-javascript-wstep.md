---
title: "Wyrażenia regularne w JavaScript – wstęp"
date: 2018-06-18 04:11:56 +0200
author: Kacper Stawiński
layout: post
categories: javascript
img: javascript-regexp-wprowadzenie.jpg
redirect_from:
  - /wyrazenia-regularne-regexp-javascript-wstep/
---
Wyrażenia regularne są bardzo przydatne podczas programowania. Dzięki nim możemy sprawdzić, czy porównywany ciąg znaków pasuje do stworzonego wcześniej wzorca RegExp. Na przykład, czy wartość wprowadzona do pola tekstowego jest zgodna ze wzorem adresu mailowego (*login@domena.pl*).

Zdaję sobie sprawę, że dla niektórych osób – zwłaszcza początkujących – RegExp może być czymś niezrozumiałym, ale mam nadzieję, że po tym artykule zaczniesz je stosować, a przynajmniej rozumieć.

## Budowa podstawowego wyrażenia regularnego

```javascript
const a = new RegExp(/^[A-Z]{3}$/);
```

Przy pomocy konstruktora RegExp przypisałem do zmiennej `a` wzorzec wyrażenia regularnego, który – po porównaniu ze stringiem – powinien dopasować 3 wielkie litery.

<b>Przykładowe wzory:</b>

| Przykład            | Wzór RegExp                   | Przykłady zgodne ze wzorem          |
|:--------------------|:------------------------------|:------------------------------------|
| Numer telefonu      | `/^\d{3}-?\d{3}-?\d{3}$/`     | 889-318-371, 435890432              |
| Kod pocztowy        | `/^\d{2}-\d{3}$/`             | 89-103, 10-821                      |
| Adres e-mail        | `/^\S+@\S+\.[A-Za-z]+$/`      | adam@nowak.com, maciej31@poczta.edu |

W przypadku mojego wzoru numer telefonu ma zawierać 9 cyfr, które są pogrupowane po 3 i mogą być oddzielone myślnikami. We wzorze:

- '**/**' oznacza początek i koniec wyrażenia regularnego,
- '**^**' oznacza, że po sprawdzeniu, wzorzec będzie zgodny w przypadku, gdy szukana wartość znajduje się na początku ciągu znaków,
- '**\d**' to definicja gotowego zbioru znaków — odpowiada liczbom 0-9,
- '**{3}**' oznacza, że liczba musi pojawić się 3-krotnie,
- '**?**' oznacza, że podany wcześniej znak może wystąpić, choć nie musi. W tym przypadku `-?` oznacza, że we wzorze może pojawić się myślnik,
- '**$**' oznacza, że po sprawdzeniu, wzorzec będzie zgodny w przypadku, gdy szukana wartość znajduje się na końcu ciągu znaków.

Dla kodu pocztowego **korzystamy z gotowego zbioru znaków** (`\d`) – liczb 0-9. Mógłbym zapisać wzorzec jako `/^[0-9]{2}-[0-9]{3}$/`, czy `/^[0-9]{2}-\d{3}$/` i o ile przy krótszych wzorach nie będzie stanowiło to większej różnicy, to przy nieco bardziej skomplikowanych już może. Kwestia gustu, przejdźmy dalej ;)

Ze wzorem do sprawdzania poprawności adresu e-mail jest różnie. Stopień jego zaawansowania zależy od programisty, bo można sprawdzać, czy końcówka domeny jest poprawna (np. nie jest liczbą i mieści się w określonym limicie znaków), czy domena maila ma mniej niż 63 znaki, czy znak małpy występuje tylko raz, itd.

## Gotowe zbiory znaków

| Zapis | Znaczenie                                       | Alternatywa                          |
|:------|:------------------------------------------------|:-------------------------------------|
| \s    | biały znak                                      | [\\f\\n\\r\\t\\u00A0\\u2028\\u2029]  |
| \S    | znak inny niż biały                             |	[^\\f\\n\\r\\t\\u00A0\\u2028\\u2029] |
| \w    | litera, cyfra i znak podkreślenia               | [A-Za-z0-9_]                         |
| \W    | znak inny niż litera, cyfra i znak podkreślenia | [^A-Za-z0-9_]                        |
| \d    | cyfra                                           | [0-9]                                |
| \D    | znak inny niż cyfra                             | [^0-9]                               |

## Flagi

Dzięki flagom możemy określić kilka istotnych rzeczy, które zdecydowanie mają wpływ na dopasowanie wyników. Zapisujemy je po ostatnim slashu.

Dodanie **flagi g** spowoduje, że wyszukiwanie będzie globalne. Domyślnie zakończy się po dopasowaniu pierwszego wyniku, a przy użyciu tej flagi — skończy, dopiero gdy dopasuje wszystkie możliwe elementy. **Flaga i** ignoruje wielkość liter, **flaga m** powoduje wyszukiwanie w wielu liniach. [W JavaScript istnieje 6 flag](https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags) - `g`, `i`, `m`, `s`, `u`, `y`, przy czym flaga `s` wprowadzona została w najnowszej wersji ECMAScript.

<b>Przykład:</b>

```javascript
const b = new RegExp(/^\d{2}-\d{3}$/g);
```

## Znaki specjalne

Po wejściu w dokumentację MDN znajdziesz szczegółową [rozpiskę](https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/RegExp), za co odpowiadają poszczególne znaki specjalne. Natomiast tutaj wypiszę kilka najciekawszych według mnie.

| Znak | Znaczenie |
|:-------|:-----------|
|?	| może wystąpić, choć nie musi |
|.	| dowolny znak |
| x\|y |	x lub b |
|{5,10} |	zakres wystąpień od 5 do 10 |
|(z) |	grupowanie |
|\ |	"reset" zachowania znaku specjalnego |

## Walidacja

Wyrażenia regularne z założenia stworzone zostały po to, aby dopasowywać lub odrzucać łańcuch znaków wedle określonych we wzorcu reguł. Za sprawdzenie zgodności odpowiada między innymi funkcja [`match`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match), która wykonywana jest na ciągu znaków i jako parametr podajemy wzorzec RegExp.

<b>Przykładowe wykorzystanie:</b>

```javascript
const postcode = new RegExp(/^\d{2}-\d{3}$/);
const string = "01-319";

if (string.match(postcode)) alert('Ok!');
else alert('Ciąg znaków nie pasuje do wyrażenia regularnego');
```

## Testowanie wyrażeń regularnych

W przypadku, gdy chcemy mieć większe narzędzie do testowania wyrażeń regularnych, z pomocą przychodzi [strona Regex101](https://regex101.com). W panelu bocznym możemy skonfigurować aplikację pod siebie i chociażby zmienić motyw na ciemny – opcji jest na prawdę mnóstwo, zachęcam do sprawdzenia!

Mam nadzieję, że tym tekstem przybliżyłem Ci choć trochę temat wyrażeń regularnych w JavaScript. Przyznam, że mnie RegExp wciągnął i podłubię sobie przy nim jeszcze trochę, co z pewnością przełoży się na kilka dodatkowych wpisów. Zachęcam do komentowania posta, w przypadku jakichkolwiek wątpliwości postaram się pomóc!
