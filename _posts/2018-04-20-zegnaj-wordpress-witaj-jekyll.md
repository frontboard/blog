---
title: "Żegnaj WordPress, witaj Jekyll!"
date: 2018-04-20 17:58:00 +02:00
author: Kacper Stawiński
layout: post
categories: inne
img: /assets/img/zegnaj-wordpress-witaj-jekyll.png
---
Na blogu pojawiło się trochę zmian wizualnych, choć zdecydowanie więcej działo się "pod spodem". W telegraficznym skrócie: **uciekam od WordPressa**! Czy jestem z tego zadowolony? Jakie wady i zalety ma każdy z wymienionych systemów?

## Skąd pomysł na zmianę?
![Logo WordPress](/assets/img/logo-wordpress.png){:style="margin: 40px auto;display: block;"}

WordPress to ciekawe i bardzo popularne rozwiązanie, w końcu opiera się o niego ponad 30% stron w sieci. Na początku tworzenia treści na bloga byłem z niego bardzo zadowolony, posiada całą masę funkcji, których domyślnie w Jekyllu nie uświadczę. Umożliwia zaplanowanie posta czy posiada wbudowany edytor treści. Istnieje naprawdę mnóstwo wtyczek i motywów, jednak jakość ich kodu czasami pozostawia wiele do życzenia. Wszystko, co chcemy dodać czy zmienić, trzeba robić za pomocą rozszerzeń, które bardzo często [są po prostu źle napisane i podatne na ataki](https://www.exploit-db.com/), albo grzebać w kodzie PHP. Mnie to nie odpowiadało i szukałem czegoś innego - tak wpadłem na Jekylla.

## Czym jest Jekyll?

![Logo Jekyll](/assets/img/jekyll.png){:style="margin: 40px auto;display: block;"}

[Jekyll](https://jekyllrb.com/) to właściwie nie jest system zarządzania treścią. Domyślnie nie uświadczysz tam panelu administratora, a w nim edytora postów czy ustawień. Jekyll to **generator stron statycznych**, który został napisany w języku Ruby. Moim zdaniem — szczególnie dla programistów — jest to świetne rozwiązanie, chociażby dlatego, że **maksymalnie skupia się na tworzeniu treści**! Dodatkowo pozwala na tworzenie treści przy użyciu [Markdowna](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) i jednoczesne korzystanie z HTML-a.

Dzięki temu, że **Jekyll nie korzysta z bazy danych**, strony ładują się bardzo szybko, bo są to uprzednio wygenerowane pliki HTML. Muszę jednak przyznać, że aspekt czasu ładowania strony nie był dla mnie priorytetem, bo w WordPressie możemy osiągnąć coś podobnego za pomocą rozszerzeń (np. [WP Super Cache](https://pl.wordpress.org/plugins/wp-super-cache/)).

Dodatkową zaletą Jekylla jest [możliwość hostowania strony na GitHub Pages](https://jekyllrb.com/docs/github-pages/). Strona automatycznie się zaktualizuje przy okazji nowego commita. Trzeba pamiętać, że nie wszystkie pluginy obsługiwane przez Jekylla są również obsługiwane przez GitHub Pages.

## Instalacja Jekyll
Niech mi ktoś powie, że instalacja Jekylla nie jest banalnie prosta :) Wystarczy użyć dwóch poleceń, a kolejnych dwóch do jego uruchomienia.

```bash
gem install jekyll bundler
jekyll new nazwa-bloga
cd nazwa-bloga
bundle exec jekyll serve
```

Aby wejść na nowo utworzonego bloga, przechodzimy pod adres *localhost:4000*. Opcjonalnie możemy zmieniać jego parametry podczas jego uruchamiania, np. port (dopisujemy: `--port 1234`). Wówczas adres witryny to *localhost:1234*.

### Konfiguracja
Cała konfiguracja bloga znajduje się w pliku `_config.yml`. Zmienisz tam tytuł strony, opis, dane kontaktowe, linki do profilów na portalach społecznościowych czy strukturę linków. Możesz stworzyć również swoje zmienne, a następnie używać ich w plikach layoutu strony.

[Dokumentacja Jekylla](https://jekyllrb.com/docs/home/) jest przejrzysta i bardzo dokładnie opisana. Znajdziesz tam wszystko, począwszy od pliku konfiguracyjnego po chociażby stworzenie paginacji na blogu.
