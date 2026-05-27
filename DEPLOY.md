# Deepesh PJ — Portfolio

Modern, responsive portfolio for Deepesh PJ — AI Developer.

## What's inside

- `index.html` — main page (single-page, all sections)
- `styles.css` — styling, animations, fully responsive
- `script.js` — typed effect, scroll progress, counters, tilt, mobile nav
- `netlify.toml` + `_redirects` — Netlify config
- `Deepesh_PJ_Main.pdf` — resume (already in folder, downloadable from navbar)

## Before deploying

1. **Add your photo:** drop a square photo named `photo.jpg` (or `photo.png` then update line in `index.html`) into this folder. If you skip it, a stylish "D" avatar shows automatically.
2. (Optional) Update the typed phrases or text inside `index.html`.

## Deploy to Netlify — Option A: Drag & Drop (easiest, 60 seconds)

1. Go to https://app.netlify.com/drop
2. Sign in (Google / GitHub / email).
3. Drag the **entire `Personal Portfolio` folder** into the drop area.
4. Done — Netlify gives you a live URL like `https://random-name-123.netlify.app`.
5. Click **Site settings → Change site name** to set something like `pjdeepesh.netlify.app` (if available) or `deepesh-portfolio`.

## Deploy to Netlify — Option B: Connect GitHub (auto-deploy on push)

1. Create a new GitHub repo (e.g. `portfolio`) and push this folder:
   ```
   git init
   git add .
   git commit -m "feat: new portfolio"
   git branch -M main
   git remote add origin https://github.com/PJDEEPESH/portfolio.git
   git push -u origin main
   ```
2. On Netlify: **Add new site → Import from Git → GitHub → pick the repo.**
3. Build settings: leave **Build command** empty, **Publish directory** = `.` → Deploy.
4. Every `git push` now auto-deploys.

## Custom domain (optional)

- In Netlify: **Domain settings → Add custom domain** → follow DNS instructions.
- Free `*.netlify.app` subdomain works perfectly out of the box.

## Contact form

The contact form uses **Netlify Forms** (free, automatic). After your first deploy:
- Go to **Site → Forms** in Netlify dashboard to see submissions.
- Set up email notifications: **Forms → Settings → Form notifications → Add notification → Email**.

## Updating later

Edit `index.html` (text, projects), or `styles.css` (colors), save, redeploy:
- Drag & drop method: just re-drop the folder.
- GitHub method: `git add . && git commit -m "update" && git push` — auto-deploys.
