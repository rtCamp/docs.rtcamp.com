---
layout: page
title: Home
---
{% include JB/setup %}

<h2>Listing</h2>
<ul>
{% assign pages_list = site.pages - [ '404.html', 'tags.html', 'rss.xml', 'atom.xml' ] %}
{% include JB/pages_list %}
</ul>
