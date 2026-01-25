# QA Agent Instructions

## Task: Quality Assurance Review for Story Chapter

You are performing a final quality check on a story chapter that has been through text cleanup and markup phases. Your job is to catch any errors or inconsistencies.

## File to Review

**[INSERT FILE PATH HERE]**

Example: `stories/1915-05-01-dani-meadow-mouse.md`

## Chapter to Review

**[INSERT CHAPTER NUMBER/TITLE HERE]**

Example: Chapter 18 (search for `id="ch18"`)

## QA Checklist

### 1. Character Names & Pronouns

Verify character names and pronouns match `edits-characters.csv`:

| Character | Updated Name | Pronouns |
|-----------|--------------|----------|
| Danny Meadow Mouse | Dani Meadow Mouse | she/her |
| Jerry Muskrat | Mary Muskrat | she/her |
| Bobby Coon | Bonnie Coon | she/her |
| Jimmy Skunk | Jenny Skunk | she/her |
| Happy Jack Squirrel | Happy Jill Squirrel | she/her |
| Sammy Jay | Sammy Jay | she/her |
| Paddy Beaver | Paddy Beaver | she/her |
| Bowser the Hound | Bella the Hound | she/her |
| Farmer Brown's Boy | Farmer Brown's Girl | she/her |
| Old Jed Thumper | Old Sue Thumper | she/her |
| Unc' Billy Possum | Uncle Billy Possum | he/him |
| Ol' Mistah Buzzard | Old Buzzard | they/them |
| Black Pussy | Princess the Cat | she/her |

**Check for:**
- Old names that weren't updated
- Wrong pronouns (he/him where should be she/her, etc.)
- Inconsistent usage within the chapter

### 2. Eye Dialect & Language

All eye dialect should be standardized. Flag if you find:
- `Ah` (should be `I`)
- `yo'` or `yer` (should be `you` or `your`)
- `mah` (should be `my`)
- `fo'` (should be `for`)
- `gwine` (should be `going`)
- `doan` or `don'` (should be `don't`)
- `cert'nly` (should be `certainly`)
- `sho'ly` (should be `surely`)
- `Brer` (should be `Brother`)
- `li'l'` (should be `little`)
- Any other phonetic spellings

Also check:
- `queer` should be `strange`
- Other outdated terms per `edits-language.csv`

### 3. HTML Structure

Verify proper markup:

**Chapter Heading:**
```html
<h2 id="ch18"><a href="#ch18"><span>XVIII</span> Title Here</a></h2>
```
- ID uses `ch` + arabic number
- Roman numeral in `<span>`
- Anchor wraps content

**Paragraphs:**
- Every paragraph wrapped in `<p>` tags
- No unwrapped text floating outside tags

**Blockquotes:**
- Verse/poetry uses `<blockquote><p>` with `<br>` breaks
- Proper closing tags

**Section Structure:**
- Chapter is within a `<section class="chapter-set">`

### 4. Typography

Check for:
- [ ] No `--` remaining (should be `—` em dash)
- [ ] No `_word_` remaining (should be `<em>word</em>`)
- [ ] Proper curly quotes (`"` and `"`) or straight quotes used consistently
- [ ] No extra spaces before punctuation
- [ ] Capitalization after periods is correct

### 5. Content Integrity

- [ ] No missing paragraphs
- [ ] No duplicated text
- [ ] No corrupted characters
- [ ] Chapter flows logically

## Reporting Format

After review, report findings as:

### Chapter [N] QA Report

**Status:** PASS / NEEDS FIXES

**Issues Found:**
1. [Line/location]: [Description of issue]
2. [Line/location]: [Description of issue]

**Suggested Fixes:**
```
[Show the fix if applicable]
```

## Example Report

### Chapter 18 QA Report

**Status:** NEEDS FIXES

**Issues Found:**
1. Line 245: "Danny" should be "Dani"
2. Line 251: "he" should be "she" (referring to Dani)
3. Line 260: `--` not converted to em dash

**Suggested Fixes:**
```
Line 245: Change "Danny Meadow Mouse" to "Dani Meadow Mouse"
Line 251: Change "he scurried" to "she scurried"
Line 260: Change "worried -- very" to "worried—very"
```

## Do NOT

- Make changes yourself (report only)
- Skip any checklist items
- Assume something is correct without verifying

## Reference Files

- `edits-characters.csv` - Character name/pronoun mappings
- `edits-language.csv` - Language replacements
- `stories/1917-10-01-paddy-beaver.md` - Reference for correct markup
- `CLAUDE.md` - Project conventions
