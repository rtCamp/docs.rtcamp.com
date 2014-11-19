---
layout: page
title: Posts
---
{% include JB/setup %}

<h2>Listing</h2>
<ul>
{% for post in site.posts %}
<li>
	<h4 class="post-title"><a href="{{ BASE_PATH }}{{post.url}}">{{ post.title }}</a></h4>
	<p class="text-muted">{{ post.content | strip_html | truncatewords: 50 }}</p>
</li>
{% endfor %}
</ul>
