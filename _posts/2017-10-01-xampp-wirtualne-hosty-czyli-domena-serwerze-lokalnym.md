---
title: "XAMPP i wirtualne hosty, czyli domena na serwerze lokalnym"
date: 2017-10-01T19:33:09+00:00
author: Kacper Stawiński
layout: post
categories: javascript
img: /assets/img/xampp.png
published: false
---
Jestem pewien, że część z Was korzysta z serwera lokalnego (np. XAMPP) podczas tworzenia stron internetowych i aplikacji. Trochę czasu wstecz zacząłem się zastanawiać w jaki sposób można i czy w ogóle da się stworzyć własną domenę i dotarłem do wbrew pozorom bardzo prostego rozwiązania, które przedstawię Wam w tym artykule.

## Po co korzystać z wirtualnych hostów?

Dla własnej wygody, po prostu. Pozwalają one na używanie dowolnej nazwy zamiast podawania ścieżki pliku, np. domena blog.loc może wskazywać na folder `C:/xampp/htdocs/blog`, jednak główną zaletą jest separacja projektów w folderze `htdocs`. W przypadku jednej domeny - localhost - możemy mieć problem z ciasteczkami czy sesjami.

Należy mieć jednak na uwadze, aby używać domen, które nie istnieją w rzeczywistości. W przeciwnym wypadku zostaną nadpisane i w przeglądarce wyświetli się zawartość wskazanego katalogu zamiast np. wyszukiwarki Google, jeżeli użyjecie domeny google.com. Stanie się tak, ponieważ komunikacja wirtualnych hostów ogranicza się tylko do naszego komputera, a nie zewnętrznych serwerów.

Z tego co zauważyłem to zazwyczaj stosuje się rozszerzenia `.local` lub `.loc` - i to właśnie Wam polecam. Domena localhost również jest skonfigurowana za pomocą wirtualnych hostów. Będziecie mogli sprawdzić to sami podczas edycji poszczególnych plików. Oczywiście wirtualna domena, którą zaraz sobie skonfigurujemy będzie działać tylko na naszym komputerze - to chyba jasne? ;)

## Konfiguracja wirtualnych hostów XAMPP

Przechodzimy do katalogu `C:/xampp/apache/conf/extra`, a następnie wyszukujemy plik `httpd-vhosts.conf`. Otwieramy go dowolnym edytorem tekstu, przechodzimy do końcowej linii i wklejamy:

{% highlight text %}
<VirtualHost *:80>
DocumentRoot "C:/xampp/htdocs/blog"
ServerName blog.local
</VirtualHost>
{% endhighlight %}

Linia DocumentRoot oznacza ścieżkę do katalogu, w którym znajdują pliki właśnie tworzonej domeny. Sekcja ServerName odpowiada za nazwę serwera (domeny). Ja przykładowo obrałem sobie `blog.local`.

## Przekierowanie domeny

Przed-ostatnim krokiem, jaki musimy wykonać to przejście do katalogu `C:/Windows/System32/drivers/etc`. Następnie musimy edytować plik hosts, ale koniecznie z uprawnieniami administratora, bo inaczej nie będziemy mogli go zapisać. Po otworzeniu pliku zjeżdżamy do ostatniej linii, a następnie wklejamy taki zapis:

{% highlight text %}
127.0.0.1 blog.local
{% endhighlight %}

Oznacza on po prostu to, że domena `blog.local` będzie wskazywać na adres `127.0.0.1`, ale inny katalog (to już skonfigurowaliśmy po stronie XAMPP'a). Zapisujemy plik.

## Podsumowanie

Aby wszystko działało poprawnie, pozostał nam do wykonania restart serwera. W tym celu udajemy się do panelu kontrolnego XAMPP, wyłączamy i włączamy **moduł Apache**. Wchodzimy pod podany adres i sprawdzamy, czy aby na pewno wszystko jest okej.<figure id="attachment_255" style="max-width: 336px" class="wp-caption aligncenter">

Jak widać na powyższym screenie - wszystko jest tak, jak miało być.
