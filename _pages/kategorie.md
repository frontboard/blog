---
layout: page
title: Kategorie
permalink: /kategorie
---
{% assign sorted_cats = site.categories | sort %}
{% for category in sorted_cats %}
{% assign sorted_posts = category[1] | reversed %}
{% assign cat = category[0] %}
<div class="category">
	<h2 class="category-title" id="{{category[0] | uri_escape | downcase }}"><span class="fas fa-tags" aria-hidden="true"></span>{{ site.categories_names[cat] }}</h2>

	<ol class="category-list">
	  {% for post in sorted_posts %}
	    <li class="category-list-item"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
	  {% endfor %}
	</ol>
</div>
{% endfor %}