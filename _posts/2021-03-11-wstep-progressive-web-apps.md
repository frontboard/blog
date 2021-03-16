---
layout: post
title: "Wstęp do Progressive Web Apps"
date: 2021-03-11 11:25:00 +0100
published: false
---
PWA, czyli **progresywne aplikacje mobilne** to zwykłe strony internetowe i aplikacje mogące być wykorzystywane jako aplikacje mobilne. Oznacza to mniej więcej tyle, że użytkownik korzystając ze strony może zaintalować ją na swoim telefonie i używać jak jednej z wielu natywnych aplikacji.

## Czym jest plik `manifest.json`?
`manifest.json` to plik, w którym zapisana jest **konfiguracja całej naszej aplikacji** (oczywiście jako PWA). Oznacza to, że znajdziemy tam informacje takie jak: nazwa aplikacji, opis, link do aplikacji w sklepie Google Play, skróty i tak dalej. Dzięki temu plikowi, przeglądarka jest w stanie zrozumieć, że nasza aplikacja internetowa może być progresywną i w przypadku Chrome <sup>(Chrome czy Chromium?)</sup> zaproponuje użytkownikowi dodanie aplikacji do ekranu głównego urządzenia.

Plik powinien znajdować się w głównym katalogu strony oraz być wskazanym w HTML-u.

```html
<head>
  <link rel="manifest" href="manifest.json">
</head>
```
## Dlaczego warto korzystać z PWA?
### Offline mode
Dzięki serviceworkerom aplikacja jest w stanie działać offline. Oczywiście to "działanie" w różnych aplikacjach może zostać różnie zaimplementowane - kalkulator może działać w trybie offline, a apka wymagająca ciągłego połączenia już niekoniecznie. Z tego powodu "działanie offline" niektórych aplikacji może ograniczać się jedynie do wyświetlenia niestandardowego komunikatu o braku połączenia z siecią.

## Podstawowa konfiguracja
Najprostsza konfiguracja powinna zawierać<sup>(co?)</sup>.

```javascript
// kod najprostszego manifestu
```

## Generator pliku `manifest.json`
> Opisać tutaj https://app-manifest.firebaseapp.com/
