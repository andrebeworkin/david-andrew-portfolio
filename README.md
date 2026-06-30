# David Andrew — Developer Portfolio

A modern, responsive developer portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. It showcases my background as a Kinesiology student and self-taught web developer, my skills, and real client projects.

🔗 **Live demo:** _add your deployed URL here once you deploy_

---

## ✨ Features

- Single-page portfolio with smooth scroll navigation
- Animated hero, about, skills, projects, and contact sections
- Fully responsive — looks great on mobile, tablet, and desktop
- Dark, "engineered editorial" design system
- Working contact form (logs by default; optional email delivery via Resend)
- Accessible UI built on Radix primitives

## 🛠️ Tech Stack

| Area | Tools |
| --- | --- |
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS, tailwindcss-animate |
| Animation | Framer Motion |
| UI primitives | Radix UI, lucide-react icons |
| Fonts | DM Sans, Space Grotesk, JetBrains Mono |

## 🚀 Run it locally

You'll need [Node.js](https://nodejs.org) 18.18+ installed.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

To create a production build:

```bash
npm run build
npm run start
```

## 📬 Contact form (optional email setup)

The contact form works out of the box — submissions are logged to the server console and the user sees a success message. To actually **receive emails**, wire up [Resend](https://resend.com) (free tier available):

1. Create an account at [resend.com](https://resend.com) and generate an API key.
2. Copy `.env.example` to `.env.local` and fill in:

   ```bash
   RESEND_API_KEY=your_resend_api_key
   CONTACT_TO_EMAIL=you@example.com
   # optional, defaults to onboarding@resend.dev for testing:
   CONTACT_FROM_EMAIL=
   ```

3. Restart the dev server (or set the same variables in your hosting provider).

## ☁️ Deploy to Vercel

1. Push this project to a GitHub repository (see below).
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **Add New… → Project**, then import your repo.
4. Vercel auto-detects Next.js — just click **Deploy**. No build settings to change.
5. (Optional) Under **Settings → Environment Variables**, add `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `NEXT_PUBLIC_SITE_URL` (your final domain) to enable email and correct social-share metadata, then redeploy.

## 📦 Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: developer portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/david-andrew-portfolio.git
git push -u origin main
```

## 📁 Project structure

```
app/                # Next.js App Router pages, layout, API routes
  api/contact/      # Contact form handler
components/         # UI components
  portfolio/        # Portfolio sections (hero, about, skills, projects, contact)
  ui/               # Reusable Radix-based UI primitives
lib/                # Utilities
public/             # Static assets (images, resume, favicon)
```

## 📝 License

MIT — feel free to use this as a reference for your own portfolio.

---

Built by **David Andrew** · Fredericton, NB · [github.com/andrebeworkin](https://github.com/andrebeworkin)
"# david-andrew-portfolio" 
