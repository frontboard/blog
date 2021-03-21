## Pobieranie danych [metodą `fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

JavaScript posiada natywne wsparcie dla korzystania z API. W odróżnieniu od [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest), Fetch API korzysta z promises: zwraca `resolved` w przypadku poprawnego pobrania danych z API, a także `reject` w przypadku błędu uniemożliwiającego pobranie danych. Jeśli wszystko wykona się bez błędów, kod zawarty w metodzie `then` zostanie wykonany - jeśli nie, wykona się kod zawarty w `catch` (jeśli taki jest) lub nic.

W przypadku metody `fetch`, wymagane jest jedynie podanie parametru ze źródłem danych. Drugim, niewymaganym parametrem, są dodatkowe opcje żądania, takie jak `body`, `headers` czy metoda żądania (jeśli inna niż GET).

```js
fetch(url);
```

Na potrzeby wpisu posłużę się [API RandomCat](https://aws.random.cat/meow), które zwraca obiekt z polem `file` zawierającym link do jakiegoś losowego zdjęcia kota.  Podstawowe zapytanie GET może zostać wykonane w ten sposób:

```js
const URL = 'https://aws.random.cat/meow';

fetch(URL)
  .then(response => response.json()) 
  .then(json => console.log(json.file))
  .catch(error => console.warn(error));
```

Po uruchomieniu kodu i spojrzeniu do konsoli, za każdym razem powinien pokazać się link do obrazka. [Demo do poklikania](https://jsfiddle.net/j71feut5/).
