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

## Character & Language Edits

Stories are updated from the original Thornton W. Burgess texts for modern readers. Two CSV files define the changes:

### `edits-characters.csv`

Defines character gender changes and name updates for better balance:

| Column | Description |
|--------|-------------|
| Male/Female/Nonbinary | Gender designation (marked with `1`) |
| Name | Updated character name |
| Original name | Name in original Burgess text |
| Appearances | Number of book appearances |
| Personality | Character notes |

**Key changes include:**
- Paddy Beaver → she/her
- Sammy Jay → she/her  
- Jerry Muskrat → Mary Muskrat (she/her)
- Bobby Coon → Bonnie Coon (she/her)
- Happy Jack Squirrel → Happy Jill Squirrel (she/her)
- Jimmy Skunk → Jenny Skunk (she/her)
- Bowser the Hound → Bella the Hound (she/her)
- Old Jed Thumper → Old Sue Thumper (she/her)
- Farmer Brown's Boy → Farmer Brown's Girl (she/her)
- Unc' Billy Possum → Uncle Billy Possum (he/him)
- Ol' Mistah Buzzard → Old Buzzard (they/them)
- Black Pussy → Princess the Cat

### `edits-language.csv`

Defines word replacements for outdated language and dialect standardization:

| Category | Examples |
|----------|----------|
| Modern sensitivities | queer → strange |
| Eye dialect | Ah → I, yo' → you, mah → my, fo' → for |
| Phonetic spellings | cert'nly → certainly, sho'ly → surely, li'l' → little |
| Dialect words | gwine → going, aiggs → eggs, doan → don't |
| Regional | Brer → Brother, ol' Virginny → old Virginia |

### Dialect Standardization Policy

The original stories contain "eye dialect" — phonetic spelling meant to represent Southern speech patterns. This was common in early 20th-century literature but is now recognized as problematic:

- It perpetuates stereotypes
- It marks certain speech as "other" compared to default white speech  
- It's harder for children to read

**Characters most affected:** Uncle Billy Possum and Old Buzzard

**Approach:** Standardize all dialect to standard English while preserving character personality. Characters can still sound folksy ("I reckon", "right smart") without problematic phonetic spellings.

**When standardizing dialect:**
1. Convert phonetic spellings to standard words (see CSV)
2. Keep colloquial phrases that don't rely on misspelling
3. Maintain character voice through word choice and rhythm, not spelling
4. Apply changes to both dialogue and narrator descriptions

When editing stories, always:
1. Check both CSV files for applicable changes
2. Update all character names and pronouns consistently
3. Replace outdated language throughout
4. Standardize all eye dialect to standard English

## Conventions

- **Chapter IDs:** Use `ch1`, `ch2`, etc.
- **Image naming:** Page numbers from original books, e.g., `p014-15-coyote.jpg`
- **Roman numerals:** Wrapped in `<span>` inside chapter headings for styling
