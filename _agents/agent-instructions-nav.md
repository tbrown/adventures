# Nav Agent Instructions

## Task: Create Table of Contents Navigation

You are creating the final navigation structure for a completed story. This runs once after all chapters have been marked up.

## File to Process

**[INSERT FILE PATH HERE]**

Example: `stories/1915-05-01-dani-meadow-mouse.md`

## What to Do

### 1. Remove Temporary TOC

Stories in progress often have a temporary markdown list at the top (after front matter):

```markdown
1. [Chapter Title](#ch1)
2. [Another Chapter](#ch2)
...
```

**Delete this temporary list.** The nav structure at the bottom replaces it.

### 2. Add Endcap (if not present)

Before the nav, add an endcap figure:

```html
<figure class="endcap">
  <img src="/images/[story-slug]/[endcap-image].jpg" />
  <figcaption>The End</figcaption>
</figure>
```

Note: If no endcap image exists, this can be added later or omitted.

### 3. Create Nav Structure

At the very end of the file, add:

```html
<nav id="nav" class="shown">
  <section class="toc">
    <ol>
      <li><a href="#ch1">Chapter Title</a></li>
      <li><a href="#ch2">Another Chapter Title</a></li>
      ...
    </ol>
  </section>
</nav>
```

**Rules:**
- Use `#ch1`, `#ch2`, etc. matching chapter IDs in the story
- Use the chapter title only (no Roman numerals)
- Title Case for all titles
- One `<li>` per chapter, in order

## Example

For a story with chapters I through XXIV:

```html
<nav id="nav" class="shown">
  <section class="toc">
    <ol>
      <li><a href="#ch1">Dani Meadow Mouse Is Worried</a></li>
      <li><a href="#ch2">Dani Meadow Mouse and Her Short Tail</a></li>
      <li><a href="#ch3">Dani Meadow Mouse Plays Hide and Seek</a></li>
      <!-- ... all chapters ... -->
      <li><a href="#ch24">Reddy Fox Loses Her Temper</a></li>
    </ol>
  </section>
</nav>
```

## Gathering Chapter Titles

Search the file for all `<h2 id="ch` to find chapter headings. Extract the title (text after the `</span>` and before `</a>`).

Example heading:
```html
<h2 id="ch5"><a href="#ch5"><span>V</span> What Happened on the Green Meadows</a></h2>
```

Extracts to:
```html
<li><a href="#ch5">What Happened on the Green Meadows</a></li>
```

## Verification

After creating nav:
- [ ] Temporary markdown TOC at top is removed
- [ ] Nav is at the very end of the file
- [ ] All chapters are listed in order
- [ ] Chapter IDs match (`#ch1` links to `id="ch1"`)
- [ ] Titles match chapter headings (no Roman numerals)
- [ ] HTML is well-formed

## Reference

See `stories/1917-10-01-paddy-beaver.md` for complete nav example.
