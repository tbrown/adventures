# Story Leveling Instructions

## Overview

Create reading-level adaptations of stories for younger readers. Each level targets a specific grade range while preserving the complete plot and character voice.

## Output Location

Save leveled stories in a subdirectory named after the story slug:

```
stories/[story-slug]/level-[number].md
```

Examples:
- `stories/dani-meadow-mouse/level-22.md`
- `stories/dani-meadow-mouse/level-16.md`

## Reading Levels

### Level 22 (End of 2nd Grade)

**Target:** 7-8 year olds who read independently

**Characteristics:**
- Sentences up to 15-20 words
- Multi-syllable words if common or decodable
- Some literary language preserved
- Full plot complexity maintained

**Text reduction:** ~50% of original length

**Changes to make:**
- Break sentences over 20 words into two
- Replace archaic vocabulary (thee, thou, 'twas) with modern equivalents
- Replace obscure words with common synonyms
- Simplify compound-complex sentences
- Remove repetitive phrasing and tangential asides
- Keep subject-verb-object structure clear

**Preserve:**
- All plot events (no condensing storyline)
- Character dialogue and personality
- Songs and poems (simplify if needed)
- Chapter structure and titles
- All HTML markup

### Level 16 (End of 1st Grade)

**Target:** 6-7 year olds, early independent readers

**Characteristics:**
- Sentences of 5-12 words
- Simple, high-frequency vocabulary
- Short paragraphs (2-4 sentences)
- More repetition for reinforcement

**Text reduction:** ~75% of original length

**Changes to make:**
- Use only common, everyday words
- One idea per sentence
- Short, punchy paragraphs
- Simplify songs/poems to match reading level
- Remove subplots if necessary (but keep main story complete)

**Preserve:**
- Core plot events
- Main character interactions
- Emotional beats of the story
- All chapter markers (all chapters must have headings with correct IDs)
- All HTML markup

## Front Matter

Add a `level` field to the front matter:

```yaml
---
layout: stories
tags: stories
title: Dani Meadow Mouse
slug: dani-meadow-mouse
date: 1915-05-01
season: ❄️ winter
level: 22
---
```

## HTML Markup

Use the same markup conventions as the original stories:

- Chapter headings: `<h2 id="ch1"><a href="#ch1"><span>I</span> Title</a></h2>`
- Paragraphs: `<p>` tags
- Dialogue-heavy paragraphs: `<p class="q">`
- Verse/poetry: `<blockquote>` with `<br>` line breaks
- Illustrations: `<aside class="illo">` with `<figure>`
- Section groupings: `<section class="chapter-set">`
- Navigation: `<nav id="nav" class="shown">` at end

## Image Paths

Use absolute paths starting with `/images/`:

```html
<img src="/images/dani/dani-and-mrs-toad.jpg" />
```

**NOT** relative paths like `../images/...` or `images/...`

## Process

1. Read the original story completely
2. Create the target level file with front matter
3. Work chapter by chapter:
   - Condense text to target length
   - Simplify vocabulary and sentences
   - Preserve plot events and character voice
   - Keep all illustrations in their original positions
4. Add navigation at the end
5. Verify all image paths are absolute

## Examples

### Original (from Level 22 source)
> Dani Meadow Mouse sat on her doorstep with her chin in her hands, and it was very plain to see that Dani had something on her mind. She had only a nod for Jenny Skunk, and even Peter Rabbit could get no more than a grumpy "Good morning."

### Level 22 (~50% reduction)
> Dani Meadow Mouse sat on her doorstep with her chin in her hands. She had only a nod for Jenny Skunk. Even Peter Rabbit could get no more than a grumpy "Good morning." The fact is, Dani Meadow Mouse was worried.

### Level 16 (~75% reduction)
> Dani Meadow Mouse sat on her doorstep. She looked sad. She did not want to play.

## Quality Checklist

- [ ] Front matter includes `level` field
- [ ] All chapters present with correct IDs
- [ ] All plot events preserved
- [ ] Sentence length appropriate for level
- [ ] Vocabulary appropriate for level
- [ ] All illustrations included with absolute paths
- [ ] Navigation section at end
- [ ] HTML well-formed
- [ ] No straight quotes (use curly: " " ' ')
- [ ] No `--` (use em dash: —)
- [ ] No `...` (use ellipsis: …)
