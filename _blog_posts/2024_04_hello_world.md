---
title: Hello World — Beginnings of a Blog
date: "2025/01/04"
emoji: 🎉
summary: 
    The beginnings of a blog
post_published: true
---

For about a year and a half now, I've been meaning to start documenting my various
projects via blog form. What better reason than my birthday to start a commitment to post a write-up
of some of my projects on a blog. Edit: it's actually five months since then now 😅 - a bit more on that
later.

## Blog Contents

The contents of this blog will really be a smorgasbord. The one thing you can count on
is finding these posts to contain way-too-much arguably unnecessary math — all because
unlike my full-time job, I can afford the luxury to indulge in inefficiency and not need
to worry so much about completing projects in a timely manner 😅.

I unfortunately still do have very finite time and spawn projects way too fast to have
them all be documented. I want to strive to have a healthy balance between documenting
the projects and making sure this doesn't take away from the fun of exploring various
topics. As a result, most of these posts will cover a subset of my projects and be
quite delayed from when I originally started working on them. 

I personally appreciate a "good story," and therefore find it hard to force myself
to make nice write-ups on on-going projects (after all, that's more the speed of giving 
updates in my full-time research job, and this is my "hobby"). So I would expect these
posts to be written-up towards the end of projects, covering the problem, the rabbit-holes
I fell into, any deliverables (packages, math, CAD files or scripts) and hopefully, with some 
nice figures!!

As I allow myself to indulge in my distractability on my personal projects, I expect that most
posts will take months to publish - for example, I started the `EspressoSimulations.jl` in
August 2024 but it was (will be?) published in January 2025. This also means that the dates
I list on these posts will get updated retroactively sometimes, for the most accurate 
representation of the blog history and when I started working on something, you can reference
the [website's GitHub Repo](https://github.com/itstorque/itstorque.github.io).

## Why has it taken me so long to start?

Well, this question boils down to a few silly self-inflicted reasons 😅

1. **Finite time, not-so-finite projects**: I spawn personal projects at an unsustainable rate that takes away from spending quality time on a well-written write-up.
2. **Figures**: I want to hold myself to high standards when it comes to making figures that explain a concept succinctly and "beautifully". This obviously comes at a cost.
3. **Website shennanigans**: As an opinionated nerd who cares to work on projects that span a wide breadth of topics, I enjoy developing and maintaining my website relying minimally on other packages and frameworks. This of course means that every time I start writing a new post, I discover one small user interaction I want to enhance. Suddenly, it's 8 hours later and I have over-engineered another part of my website.
4. **Finishing a project**: Choosing an end-point for a personal project is... hard. I choose to work on these problems because they are interesting, and this predisposition means that its hard for them to cease being interesting. Typically, as part of trying to solve a problem, I (just as anyone else would) tend to stumble across 50 other problems and ways of thinking about the same problem. Choosing an end-point and being able to write a post without entertaining the thoughts of novel ideas and solutions is an up-hill battle.

## What I want to get better at

I am on an endless quest to become a better story-teller and researcher. By encouraging myself to
write these posts, I hope to get better at engaging with the scientific community, become better
at making figures and hopefully, one day, make writing these posts low-overhead.

## Blog Infrastructure

The scaffolding for this site is pretty simple: a Jekyll site with plain css. I designed some custom layouts and building blocks, js code for interactivity, etc. Here are my favorite highlights:

- Apple-Style Emojis: Lazy load and replace every emoji character on a webpage dynamically with the iOS style version of the emoji 🥹. ← Do it! Inspect element this emoji!
- Theme engine: Cookie-enabled theme storage with multiple themes. Hit the dice 5+ times for a *~barebones~* dropdown menu. You can also open developer tools, find a theme class name (e.g. `.default` or `.dark_pistachio`) and change the colors yourself 🎨😀. If you find a cute theme, send it over!
- Hidden interactive quirks: they wouldn't be hidden if I told you where they are. I try to keep them in different places. Have fun finding them!

Check out the code that runs to generate my personal website and blog here: 
[itstorque/itstorque.github.io (github)](https://github.com/itstorque/itstorque.github.io)
