---
title: Blog
layout: default

include_side_nav: false
include_math_jax: true
include_plotlyjs: false
include_jquery: false

include_blog_css: true

color: purple
---

{{ site.drafts }}

<style>

    body {
        margin-top: 20vh;
        background-color: var(--c-bg)
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
        /* color: black; */
    }

    #header.blog .emoji-block h1 {
        animation-name: none;
        font-size: 5rem;
    }

    article.post_flat img {
        object-fit: contain;
        width: 3rem;
        height: 3rem !important;
        border-radius: 0;
        margin-bottom: -1rem !important;
    }

    article.post_flat .post_emoji {
        width: 3rem;
        display: inline-block;
        margin-left: -5rem;
        margin-right: 2rem;
        padding: 0;
        margin-bottom: -1rem;
    }

    @media (max-width: 1200px) {
        article.post_flat .post_emoji {
            margin-left: 0rem;
            margin-right: 0.5rem;
        }
        article.post_flat img {
            height: 2.25rem !important;
            margin-bottom: -0.3rem !important;
        }
        article.post_flat .date br, .posts br {
            display: none;
        }
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
        background: var(--less-pop);
    }

</style>

<div class="blog_splash">

    <div id="header-indicator"></div>
    <h1 class="blog_title">Torque's Blog<span class="pop">.</span></h1>

    <span class="title_separator"></span>
    <br/><br/>
    <p class="blog_blurb">
        This blog aims to have some write-ups of weird mini-research projects I try to explore in my free time. Expect to see a smorgasbord of topics spanning CS, ML/AI, Physics and Math.<br/><br/>
        <!-- If you have any feedback or suggestions on one of my posts, project-collab ideas or want
        to discuss problems you are thinking about, feel free to reach out to me at <code class="language-plaintext highlighter-rouge" style="font-size: 0.8em">blog[at]itstorque.com</code>! -->
    </p>

    {% include subscribe.html %}

</div>

<!-- <h1>{{ post.emoji }}<a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h1> -->
<div class="posts" id="post_published">
  {% for post in site.blog_posts reversed %}
    {% if post.post_published %}
        {% include blog_list_item.html post=post %}
        <br/>
        <br/>
    {% endif %}
  {% endfor %}
</div>

<div class="posts" id="post_dev" style="display: none">
  {% for post in site.blog_posts reversed %}
    {% include blog_list_item.html post=post %}
    <br/>
    <br/>
  {% endfor %}
</div>

<script>
const urlParams = new URLSearchParams(window.location.search);
const in_dev_mode = urlParams.get('dev');

if (in_dev_mode == true) {
    console.log("aaa dev")
    document.getElementById("post_dev").style.display = "block";
    document.getElementById("post_published").style.display = "none";
}
</script>