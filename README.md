<div align="center">

# ⚡ Swasti — AI/ML Engineer Portfolio

### *Turning Data Into Intelligent Systems*

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

**[🌐 Live Demo](https://swasti.dev)** · **[📄 Resume](/public/resume.pdf)** · **[📬 Contact](mailto:swasti@yourdomain.com)**

</div>

---

## 🧠 About

Personal portfolio of **Swasti Priyadarshi Swain**, an AI/ML Engineer & Data Scientist based in Bhubaneswar, Odisha. Built with Next.js 16, focused on performance and clean design — no animation frameworks, no heavy libraries.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 (strict mode) |
| Styling | Tailwind CSS 4 |
| Icons | react-icons 5 |
| Deployment | Vercel |

---

## ✨ Features

- Dark aesthetic with `#8DFF69` accent
- Scroll-triggered animations via IntersectionObserver
- Fully responsive (mobile → 4K)
- Hero, About, Skills, Projects, Services, Testimonials, Contact sections
- Category-filtered project carousel
- Centralized data layer — update content without touching components

---

## 📁 Folder Structure

```
swasti-main/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── sections/        # Hero, About, Skills, Projects, Services, Testimonials, Contact
│   ├── layout/          # Header, Footer
│   ├── ui/              # ProjectCard
│   └── animations/      # FadeIn, ScrollReveal
├── data/                # projects.ts, skills.ts, services.ts, testimonials.ts
├── hooks/               # useScrollSpy, useScrollReveal
├── utils/
│   └── constants.ts     # PERSONAL_INFO, SOCIAL_LINKS, NAV_LINKS
└── public/              # hero.webp, resume.pdf, projects/, testimonials/
```

---

## 🚀 Getting Started

**Prerequisites:** Node.js `>=18.17.0`, npm `>=9.x`

```bash
git clone https://github.com/yourusername/swasti-portfolio.git
cd swasti-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

**To update content**, edit these two locations only:

```bash
utils/constants.ts   # Personal info, email, social links
data/*.ts            # Projects, skills, services, testimonials
```

| Script | Description |
|---|---|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run lint` | ESLint check |

---

## 🔐 Environment Variables

No env vars required for local development. For production with a working contact form, create `.env.local`:

```bash
NEXT_PUBLIC_EMAIL=you@yourdomain.com
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_GOOGLE_VERIFICATION=xxxxxxxxxxxxxxxx
```

Never commit `.env.local`.

---

## 📦 Deployment

```bash
npm i -g vercel
vercel --prod
```

**Pre-deployment checklist:**

- [ ] Update email and social links in `utils/constants.ts`
- [ ] Replace placeholder images in `public/`
- [ ] Wire contact form to a backend (Resend recommended)
- [ ] Add `robots.txt`, `sitemap.xml`, `manifest.json` to `public/`
- [ ] Create `public/og-image.png` (1200×630px)
- [ ] Run Lighthouse and verify 90+ scores

---

## 👤 Author

<div align="center">

**Swayam Swarup Panda** — Frontend Engineer · Bhubaneswar, Odisha, India

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/swayam-webdev/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/swayamDev)
[![Portfolio](https://img.shields.io/badge/Portfolio-8DFF69?style=for-the-badge&logo=vercel&logoColor=black)](https://swayam.io)

</div>

---

<div align="center">

MIT License · *Built with precision and `#8DFF69`*

</div>
