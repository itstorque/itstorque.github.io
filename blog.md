---
title: Blog
layout: default

include_side_nav: false
include_math_jax: true
---

{{ site.drafts }}

<style>

    body {
        margin-top: 20em;
    }

    #header.blog {
        display: flex;
        flex-direction: column;
        align-items: baseline;
    }

    #header.blog .emoji-block {
        margin-left: -1rem;
        margin-top: -6rem;
        margin-bottom: -4rem;
        animation-name: none;
    }
    
    #header.blog h1, #header.blog span.pop {
        color: black;
    }

    #header.blog .emoji-block h1 {
        animation-name: none;
        font-size: 5rem;
    }

    .posts .post h1:not(.emoji) {
        text-align: left;
        display: inline-block; 
        flex-grow: 4;
        margin-top: 0;
        margin-bottom: 0;
    }

    .posts .post h1 a {
        color: black;
        text-decoration: none;
    }

    .posts .post h1.emoji {
        display: inline-block; 
        font-size: 3rem; 
        margin-right: 1rem; 
        margin-bottom: 0rem;
        margin-top: 0;
    }

    .posts .post > div {
        display: flex; 
        flex-direction: row; 
        justify-content: space-between;
        align-items: center;
    }

    .posts .post .post_blurb {
        align-items: end;
    }

    .posts .post .post_blurb {
        margin-left: 4.5rem;
    }

    .posts .post .date {
        flex-shrink: 0;
        font-weight: bold;
        font-size: 1rem;
        height: 100%;
        margin-left: 2rem;
    }

    .posts .post .post_blurb p {
        margin-top: 1rem;
        text-align: left;
        margin-bottom: 0;
    }

    .posts .button_box {
        flex-shrink: 0;
        margin-bottom: 0.5rem;
    }

    .posts .post .more_button {
        margin-left: 2rem;
        color: black; 
        background-color: #f6f6f6;
        padding: 0.4rem; 
        text-decoration: none; 
        font-size: 0.8em; 
        font-weight: bold;

        transition: background ease-in-out 0.3s,color ease-in-out 0.1s;
    }

    .posts .post .more_button:hover {
        background-color: var(--pop); 
        color: #f6f6f6; 
    }

    div.blogs_splash {
        position: absolute;
        top: 0;
        left: 0;
        transition: none;
        flex-basis: 100%;
        max-width: 100%;
        width: 100%;
        display: block;
        height: 20em;
        z-index: -20;
        object-position: bottom;
        object-fit: cover;
        background: rgb(131,58,180);
        background: linear-gradient(152deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%); 
    }

</style>

<div>

</div>

<div id="header" class="blog">
<div id="header-indicator"></div>
<div class="emoji-block">
    <h1>📝</h1>
</div>
<div class="emoji-block mobile-only">
    <!-- this spacer is for phones, helps keep the correct spacing on top of the title after emoji-block jumps into menu icon -->
    <h1 style="opacity:0">o</h1>
</div>
<div>
<div class="blogs_splash"></div>
    <h1 style="lineheight: 2.5;">
    <span class="pop bold">Torque's</span> <b>Blog</b>
    </h1>



</div>
</div>



<br />

<!-- <h1>{{ post.emoji }}<a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h1> -->
<div class="posts">

  {% for post in site.blog_posts reversed %}
    {% include blog_list_item.html post=post %}
    <br/>
    <br/>
  {% endfor %}
</div>