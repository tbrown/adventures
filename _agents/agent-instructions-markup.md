# Markup Agent Instructions

## Task: Apply HTML Markup to Story Chapter

You are converting a story chapter from raw text to properly structured HTML. Work on ONE chapter at a time.

## File to Process

**[INSERT FILE PATH HERE]**

Example: `stories/1915-05-01-dani-meadow-mouse.md`

## Chapter to Process

**[INSERT CHAPTER NUMBER/TITLE HERE]**

Example: `CHAPTER XVIII` or search for "XVIII"

## Markup Rules

### Chapter Headings

Convert chapter headers to this format:

**BEFORE:**
```
CHAPTER XVIII

DANI MEADOW MOUSE RETURNS A KINDNESS
```

**AFTER:**
```html
<h2 id="ch18"><a href="#ch18"><span>XVIII</span> Dani Meadow Mouse Returns a Kindness</a></h2>
```

Rules:
- Use `ch` + arabic number for ID (ch18, not ch-18 or chXVIII)
- Roman numeral goes inside `<span>`
- Title in Title Case
- Anchor wraps content for linking

### Paragraphs

Wrap each paragraph in `<p>` tags:

**BEFORE:**
```
Dani was very worried. She sat on her doorstep thinking.
```

**AFTER:**
```html
<p>Dani was very worried. She sat on her doorstep thinking.</p>
```

### Verse/Poetry (Blockquotes)

Verse at chapter starts or within text goes in blockquotes with line breaks:

**BEFORE:**
```
"A kindness done is never lost,
  Whatever it may be.
Someday, sometime, somewhere, somehow,
  It comes right back to me."
```

**AFTER:**
```html
<blockquote>
  <p>"A kindness done is never lost,<br>
  Whatever it may be.<br>
  Someday, sometime, somewhere, somehow,<br>
  It comes right back to me."</p>
</blockquote>
```

Rules:
- Use `<br>` at end of each line except the last
- Preserve indentation visually with consistent spacing
- Keep quotes inside the `<p>` tag

### Em Dashes

Convert double hyphens to proper em dashes:

**BEFORE:** `she was hungry -- very hungry`

**AFTER:** `she was hungry—very hungry`

Note: No spaces around em dashes.

### Italics

Convert markdown italics to HTML:

**BEFORE:** `She _had_ to find food.`

**AFTER:** `She <em>had</em> to find food.`

### Quotation Marks

Convert straight quotes to curly quotes in prose:

**BEFORE:** `"Hello," said Peter. "How are you?"`

**AFTER:** `"Hello," said Peter. "How are you?"`

Rules:
- Opening double quote: `"` → `"`
- Closing double quote: `"` → `"`
- Opening single quote: `'` → `'`
- Closing single quote / apostrophe: `'` → `'`
- Keep straight quotes in any code examples

### Ellipses

Convert three periods to ellipsis character:

**BEFORE:** `She waited... and waited...`

**AFTER:** `She waited… and waited…`

### Illustrations (when applicable)

If a chapter has an illustration, add the aside/figure structure after the heading:

```html
<aside class="illo">
  <figure>
    <img src="/images/[story-slug]/[image-filename].jpg" />
    <figcaption>Caption text.</figcaption>
  </figure>
</aside>
```

**Image path format:** `/images/[story-slug]/[filename].jpg`

Examples:
- Paddy Beaver: `/images/paddy/p001-intro-new.jpg`
- Dani Meadow Mouse: `/images/dani/dani-and-mrs-toad.jpg`

Use absolute paths (starting with `/`) not relative paths (`../images/...`).

### Section Structure

Chapters are grouped in `<section class="chapter-set">` blocks. A new section starts with each illustrated chapter. Non-illustrated chapters following an illustrated one stay in the same section.

```html
<section class="chapter-set">

<h2 id="ch1">...</h2>
<aside class="illo">...</aside>
<p>...</p>

<h2 id="ch2">...</h2>
<p>...</p>

</section>
```

## Processing Order

1. Find the chapter in the file
2. Convert the chapter heading
3. Wrap all paragraphs in `<p>` tags
4. Convert any verse to `<blockquote>` format
5. Replace `--` with `—` (em dash)
6. Replace `_word_` with `<em>word</em>`
7. Convert straight quotes to curly quotes
8. Convert `...` to `…` (ellipsis)
9. Add illustration markup if applicable

## Do NOT

- Change character names or pronouns (that's the text cleanup phase)
- Modify content beyond formatting
- Process multiple chapters at once
- Add or remove text content

## Verification

After markup, verify:
- [ ] Chapter heading has correct ID format
- [ ] All paragraphs have `<p>` tags
- [ ] Verse/poetry uses `<blockquote>` with `<br>` breaks
- [ ] No `--` remains (all converted to `—`)
- [ ] No `_word_` remains (all converted to `<em>`)
- [ ] No straight quotes in prose (all curly: `"` `"` `'` `'`)
- [ ] No `...` remains (all converted to `…`)
- [ ] HTML is well-formed

## Reference

See `stories/1917-10-01-paddy-beaver.md` for a complete example of proper markup.
