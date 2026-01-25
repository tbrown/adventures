# Line-Wrap Cleanup Agent Instructions

## Task: Fix Line Wrapping in Story File

You are cleaning up a story file that has paragraphs broken across multiple lines. Your ONLY job is to join broken lines - do NOT change any words, fix pronouns, or make content edits.

## File to Process

**[INSERT FILE PATH HERE]**

Example: `stories/1913-01-01-johnny-chuck.md`

## What to Fix

Paragraphs in the unformatted sections are broken mid-sentence like this:

### BEFORE

```
Dani Meadow Mouse limped around through the dear Old Briar-patch,
where she had lived with Peter Rabbit ever since she had squirmed out
of the claws of Hooty the Owl and dropped there, right at the feet
of Peter Rabbit.
```

### AFTER

```
Dani Meadow Mouse limped around through the dear Old Briar-patch, where she had lived with Peter Rabbit ever since she had squirmed out of the claws of Hooty the Owl and dropped there, right at the feet of Peter Rabbit.
```

## Rule

Join a line with the next line IF the line does NOT end with:

- Period (.)
- Exclamation mark (!)
- Question mark (?)
- Closing quote (" or ")
- HTML closing tag (>)

## What to PRESERVE (do NOT join)

- Blank lines between paragraphs
- Verse/poetry formatting (indented lines in blockquotes)
- HTML tags on their own lines
- Chapter headers like "CHAPTER XVII"

## Method

Use this Perl one-liner to process the file:

```bash
cd [STORY DIRECTORY] && perl -0777 -pe \
  's/([^.!?"">\n])\n([A-Za-z])/$1 $2/g;' \
  [FILENAME].md > [FILENAME].md.tmp && \
  mv [FILENAME].md.tmp [FILENAME].md
```

### Example for johnny-chuck.md

```bash
cd /Users/timothybrown/Sites/adventures/stories && \
  perl -0777 -pe 's/([^.!?"">\n])\n([A-Za-z])/$1 $2/g;' \
  1913-01-01-johnny-chuck.md > 1913-01-01-johnny-chuck.md.tmp && \
  mv 1913-01-01-johnny-chuck.md.tmp 1913-01-01-johnny-chuck.md
```

## Verification

After running, check that:

1. Paragraphs are now on single lines
2. Verse/poetry still has line breaks (indented lines)
3. Chapter headers are intact
4. File is smaller (fewer lines) than before

## Do NOT

- Change any words
- Fix pronouns or character names
- Add or remove HTML tags
- Fix spelling errors
- Make any content edits

**This is ONLY a line-wrapping pass. Content edits happen in a later phase.**
