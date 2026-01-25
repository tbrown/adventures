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
_agents/           # Reusable agent instruction files
fonts/             # Web fonts
images/            # Illustrations and thumbnails
bundle.css         # Styles
.eleventy.js       # Eleventy config
```

## Commands

```bash
npm start          # Dev server with live reload
npm run build      # Production build to _site/
```

## Story Files

Stories are HTML-in-Markdown files in `stories/`. See `1917-10-01-paddy-beaver.md` as a complete reference.

**Front matter:**
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

**Conventions:**
- Chapter IDs: `ch1`, `ch2`, etc. (arabic numerals)
- Roman numerals wrapped in `<span>` inside headings
- Image naming: `p014-15-coyote.jpg` (page numbers from original books)
- Chapters grouped in `<section class="chapter-set">` blocks

## Editing Stories

Stories are updated from original Burgess texts for modern readers. Two CSV files define the changes:

- **`edits-characters.csv`** — character name and pronoun updates (e.g., Danny → Dani, he → she)
- **`edits-language.csv`** — dialect standardization and outdated language fixes

**Dialect policy:** Standardize all "eye dialect" (phonetic spellings like "Ah" for "I") to standard English. Keep folksy expressions ("I reckon") but remove problematic spelling.

## Story Cleanup Workflow

New stories go through a multi-phase cleanup. See `_agents/` for detailed instructions:

| Phase | Instructions | Task |
|-------|--------------|------|
| 1. Line Wrap | `agent-instructions-line-wrap.md` | Join broken paragraph lines |
| 2. Text Cleanup | (use CSV files) | Names, pronouns, dialect |
| 3. Markup | `agent-instructions-markup.md` | HTML structure |
| 4. QA | `agent-instructions-qa.md` | Verify correctness |
| 5. Nav | `agent-instructions-nav.md` | Create TOC navigation |

Phases 1–4: Process one chapter at a time through all phases before moving to the next.

Phase 5 (Nav): Run once after all chapters are complete. Creates the `<nav>` table of contents at the end of the file and removes any temporary markdown TOC.
