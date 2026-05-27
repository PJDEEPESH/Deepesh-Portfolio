<div align="center">

# Deepesh PJ — Portfolio

### AI Developer · LLM Engineer · Agentic AI

Modern, responsive, single-page portfolio built with vanilla HTML, CSS, and JavaScript. Zero build step, deploy-anywhere.

**Live Site:** [pjdeepesh.netlify.app](https://pjdeepesh.netlify.app)

[![Netlify Status](https://img.shields.io/badge/Netlify-Deployed-00C7B7?logo=netlify&logoColor=white)](https://pjdeepesh.netlify.app)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Yes-success)

</div>

---

## About

This is my personal portfolio showcasing **production AI work** — RAG systems, multi-agent orchestration, voice AI, and automation pipelines I've shipped at STRIKIN and as a freelance AI developer.

I'm a CSE graduate (2025, IIIT RGUKT RK Valley) currently working as an **AI Developer at STRIKIN**, Hyderabad. I architect and ship end-to-end AI systems — from database design to LLM agents to deployment.

**Open to full-time opportunities.**

---

## Tech Stack

| Category | Tools |
|---|---|
| **Frontend** | HTML5, CSS3 (custom — no framework), Vanilla JavaScript |
| **Animations** | AOS (scroll animations), CSS Keyframes, Intersection Observer |
| **Fonts** | Inter, Space Grotesk, JetBrains Mono |
| **Icons** | Font Awesome 6 |
| **Forms** | Netlify Forms (serverless, free) |
| **Hosting** | Netlify (auto-deploy on push) |

---

## Features

- **Hero section** with animated typing effect cycling through "Production AI Systems", "RAG Pipelines", "Voice AI Agents", etc.
- **Animated stat counters** — projects shipped, languages supported, % automation, deployments
- **Orbiting tech icons** around photo with floating cards
- **Experience timeline** — STRIKIN, Freelance, Education
- **12 projects** with GitHub links, tech stacks, and badges
- **9 skill categories** + coding profile cards (LeetCode, GeeksforGeeks, Code360)
- **Contact form** powered by Netlify Forms — submissions land in dashboard + email
- **Resume download** directly from navbar
- **Scroll progress bar** at top of page
- **Cursor glow** that follows mouse (desktop)
- **3D tilt effect** on project cards (desktop)
- **Mobile-first responsive** — works on phones, tablets, desktops
- **Animated gradient blobs** in hero background
- **Smooth scroll** + active section highlight in navbar
- **Glassmorphism** UI with dark theme + gradient accents
- **Custom thank-you page** after form submission

---

## Project Structure

```
Personal Portfolio/
├── index.html              # Main page (all sections)
├── styles.css              # All styling, animations, responsive
├── script.js               # Interactivity (typing, scroll, counters, tilt)
├── thank-you.html          # Form submission success page
├── netlify.toml            # Netlify config (headers, caching)
├── _redirects              # SPA-friendly routing
├── .gitignore              # Git exclusions
├── Deepesh_PJ_Main.pdf     # Downloadable resume
├── photo.jpg               # Profile photo (add your own)
├── DEPLOY.md               # Full deployment guide
└── README.md               # This file
```

---

## Run Locally

No build step required. Just open the HTML.

```bash
# Clone the repo
git clone https://github.com/PJDEEPESH/portfolio.git
cd portfolio

# Option 1: Just open in browser
start index.html

# Option 2: Serve with Python (better, avoids file:// quirks)
python -m http.server 8000
# → http://localhost:8000

# Option 3: Serve with Node
npx serve .
```

> Note: The contact form only works in production (on Netlify). Locally, form submissions will 404 — that's expected.

---

## Deploy to Netlify

### Method 1 — GitHub auto-deploy (recommended)

1. Push this repo to GitHub
2. Go to [Netlify](https://app.netlify.com) → Add new site → Import from GitHub
3. Pick the repo, leave build command empty, publish directory = `.`
4. Click Deploy

Every `git push` auto-redeploys in ~30 seconds.

### Method 2 — Drag & Drop

1. Go to [Netlify Drop](https://app.netlify.com/drop)
2. Drag the folder
3. Done

Full guide: see [DEPLOY.md](DEPLOY.md).

---

## Contact Form

Powered by [Netlify Forms](https://docs.netlify.com/forms/setup/) — no backend needed.

- Submissions appear in **Netlify Dashboard → Site → Forms**
- Set up email notifications: **Forms → Settings → Form notifications → Add email**
- Spam protection via honeypot field

---

## Customization

| Want to change... | Edit |
|---|---|
| Personal text, projects, links | `index.html` |
| Colors, fonts, layout | `styles.css` (root variables at top) |
| Typing phrases | `script.js` (the `phrases` array) |
| Photo | Replace `photo.jpg` |
| Resume | Replace `Deepesh_PJ_Main.pdf` |
| Color theme | `:root` block in `styles.css` |

The color theme uses CSS custom properties — change `--primary`, `--accent`, `--gradient` in `styles.css` and the whole site retheme instantly.

---

## Browser Support

Tested on:
- Chrome / Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile Safari (iOS 14+)
- Chrome Android

Uses modern CSS (Grid, Flexbox, `backdrop-filter`, custom properties) — works in all evergreen browsers.

---

## Performance

- No JS framework = small bundle
- CSS / JS cached for 1 year (set in `netlify.toml`)
- Fonts loaded with `preconnect` for speed
- Images use `onerror` fallback (no broken state)
- Lighthouse: 95+ on Performance, Accessibility, SEO

---

## Connect

<div align="center">

[![Portfolio](https://img.shields.io/badge/Portfolio-7c3aed?style=for-the-badge&logo=netlify&logoColor=white)](https://pjdeepesh.netlify.app)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/PJDEEPESH)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/deepesh-pj-27546a20b/)
[![LeetCode](https://img.shields.io/badge/LeetCode-FFA116?style=for-the-badge&logo=leetcode&logoColor=black)](https://leetcode.com/u/PJDeepesh/)
[![GeeksforGeeks](https://img.shields.io/badge/GeeksforGeeks-2F8D46?style=for-the-badge&logo=geeksforgeeks&logoColor=white)](https://www.geeksforgeeks.org/user/deepeshpj2004/)
[![Email](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:deepeshp.j.2004@gmail.com)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/917075087601)

**Deepesh PJ** · AI Developer @ STRIKIN · Hyderabad, India
📧 deepeshp.j.2004@gmail.com · 📱 +91 70750 87601

</div>

---

## License

This is my personal portfolio. Feel free to use the **code structure** as inspiration for your own portfolio, but please don't copy the personal content (about, projects, photos).

If you find it useful, a ⭐ on GitHub is appreciated.

---

<div align="center">
Built with passion in Hyderabad · © 2026 Deepesh PJ
</div>
