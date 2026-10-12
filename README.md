# Ananya Mishra — Portfolio

Personal portfolio site. Plain HTML/CSS/JS, no build step.

## Run locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy (GitHub Pages)

1. Create a repo named `ananya2914.github.io` (serves at https://ananya2914.github.io), or any name (serves at `/repo-name/`).
2. `git remote add origin git@github.com:ananya2914/<repo>.git && git push -u origin main`
3. Repo → Settings → Pages → Deploy from branch `main`, folder `/ (root)`.

## Editing

- Content: `index.html` (projects, experience, skills)
- Look: `styles.css` (colors are tokens at the top; dark mode included)
- Résumé: replace `resume.pdf`
