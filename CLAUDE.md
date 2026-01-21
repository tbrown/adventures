# The Adventures Of

A static website presenting classic children's stories by Thornton W. Burgess, updated for modern readers. Built with Eleventy.

**Live site:** https://the-adventures-of.com

## Tech Stack

- **Eleventy 2.0.1** — static site generator
- **Markdown + HTML** — story content with YAML front matter
- **Liquid templates** — layouts in `_includes/`
- **CSS** — single `bundle.css` file
- **Fonts** — Mallory Microplus, Parkly (in `fonts/`)

## Project Structure

```
stories/           # Markdown story files
_includes/         # Templates (header.html, home.html, stories.html)
_site/             # Generated output (do not edit)
fonts/             # Web fonts
images/            # Illustrations and thumbnails
  site/            # Site assets
  paddy/           # Per-story illustration folders
  dani/
bundle.css         # Styles
.eleventy.js       # Eleventy config
```

## Commands

```bash
npm start          # Dev server with live reload
npm run build      # Production build to _site/
```

## Story Markup

Stories are Markdown files in `stories/` with this structure:

### Front Matter

```yaml
---
layout: stories
tags: stories
title: Paddy Beaver
slug: paddy-beaver
date: 1917-10-01
season: 🍁 fall
---
```

### Content Structure

**Chapter sets** group chapters by illustration. A section starts with an illustrated chapter and includes any non-illustrated chapters that follow:

```html
<section class="chapter-set">

<h2 id="ch1"><a href="#ch1"><span>I</span> Chapter Title</a></h2>

<aside class="illo">
  <figure>
    <img src="/images/paddy/p001-intro-new.jpg" />
    <figcaption>Caption text.</figcaption>
  </figure>
</aside>

<p>Body text...</p>

<h2 id="ch2"><a href="#ch2"><span>II</span> Next Chapter (no illustration)</a></h2>

<p>More text...</p>

</section>
```

**Verse/quotes:**
```html
<blockquote>
  <p>"Line one<br>
  Line two"</p>
</blockquote>
```

**End cap:**
```html
<figure class="endcap">
  <img src="/images/paddy/p118-endcap-lodge.jpg" />
  <figcaption>The End</figcaption>
</figure>
```

**Table of contents** (at end of file):
```html
<nav id="nav" class="shown">
  <section class="toc">
    <ol>
      <li><a href="#ch1">Chapter Title</a></li>
      ...
    </ol>
  </section>
</nav>
```

## Conventions

- **Gender updates:** Characters have been updated for gender balance (e.g., Paddy uses she/her)
- **Chapter IDs:** Use `ch1`, `ch2`, etc.
- **Image naming:** Page numbers from original books, e.g., `p014-15-coyote.jpg`
- **Roman numerals:** Wrapped in `<span>` inside chapter headings for styling
