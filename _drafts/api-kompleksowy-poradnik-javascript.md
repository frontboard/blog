## Pobieranie danych [metodą `fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

JavaScript posiada natywne wsparcie dla korzystania z API. W odróżnieniu od [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest), Fetch API korzysta z promises: zwraca `resolved` w przypadku poprawnego pobrania danych z API, a także `reject` w przypadku błędu uniemożliwiającego pobranie danych. Jeśli wszystko wykona się bez błędów, kod zawarty w metodzie `then` zostanie wykonany - jeśli nie, wykona się kod zawarty w `catch` (jeśli taki jest) lub nic.

W przypadku metody `fetch`, wymagane jest jedynie podanie parametru ze źródłem danych. Drugim, niewymaganym parametrem, są dodatkowe opcje żądania, takie jak `body`, `headers` czy metoda żądania (jeśli inna niż GET).

```js
fetch(url);
```

Na potrzeby wpisu posłużę się [API RandomCat](https://aws.random.cat/meow), które zwraca obiekt z polem `file` zawierającym link do jakiegoś losowego zdjęcia kota. Podstawowe zapytanie GET może zostać wykonane w ten sposób:

```js
const URL = 'https://aws.random.cat/meow';

fetch(URL)
  .then(response => response.json()) 
  .then(json => console.log(json.file))
  .catch(error => console.warn(error));
```

Po uruchomieniu kodu i spojrzeniu do konsoli, za każdym razem powinien pokazać się link do obrazka. [Demo do poklikania](https://jsfiddle.net/j71feut5/).

## Gdzie szukać ogólnodostępnych API?

Jeśli zastanawiasz się, skąd możesz wziąć jakieś publiczne API, koniecznie rzuć okiem na [repozytorium public-apis/public-apis](https://github.com/public-apis/public-apis). Znajdziesz tam mnóstwo kategorii, szczegółowe dane nt. poszczególnych API, takie jak opis, wymaganie autoryzacji, bezpiecznego połączenia czy obsługa [`CORS`](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS). Poza tym, sprawdź też np. [public-apis.xyz](https://public-apis.xyz/), [public-apis.io](https://public-apis.io/) czy [apilist.fun](https://apilist.fun/).

Swoją drogą, kiedyś w ramach nauki [frameworka Svelte](https://svelte.dev/) stworzyłem mini-projekt do wyświetlania losowo wybranego API. Nic skomplikowanego, wymaga kilku poprawek, ale jeśli chcesz to skorzystaj: [random-api.netlify.app](https://random-api.netlify.app/).

