# Source code for The Adventures Of
https://the-adventures-of.com

## Dev

- `npx @11ty/eleventy --serve`

For live-reloading CSS, do these in two separate terminal windows:
- `npx @11ty/eleventy --watch`
- `npx @11ty/eleventy-dev-server --input=_site`
- [Via Zach Leatherman](https://github.com/11ty/eleventy-dev-server/issues/19#issuecomment-1379221593)

## Publishing process

- Push to GitHub
- Builds & deploys automatically via Netlify