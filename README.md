# 🧘 Being Yourself — Inner Awareness Practice

<div align="center">

![Being Yourself](https://img.shields.io/badge/Being%20Yourself-Inner%20Awareness-7C3AED?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIi8+PHBhdGggZD0iTTEyIDZ2NmwzIDMiLz48L3N2Zz4=)
![Version](https://img.shields.io/badge/version-2.2.0-blue?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)
![i18n](https://img.shields.io/badge/i18n-EN%20%7C%20中文%20%7C%20日本語%20%7C%20ไทย-orange?style=for-the-badge)

**A mindfulness web app for deep inner self-awareness**

**一款帮助你深度觉察内在感受的正念工具**

[🌐 Live Demo](https://beingyousef.netlify.app/) · [📖 Features](#-features) · [🚀 Quick Start](#-quick-start)

</div>

---

## ✨ What is Being Yourself?

Being Yourself is a lean, pain-point-oriented mindfulness web app. Instead of overwhelming you with tools, it asks one simple question: **"How do you feel today?"** — then guides you to explore that feeling through 7 focused modules.

> 🧘 *Look within, and see your authentic self.*

### Key Highlights

- 🎨 **3 Visual Themes** — Dark Meditation, Soft Light, Nature Green (one-click toggle)
- 🌍 **4 Languages** — English (default), 中文, 日本語, ไทย (real-time switch)
- 🔊 **Voice-Guided Meditation** — Web Speech API, no downloads needed
- 📱 **Mobile-First** — Optimized for phones with touch targets & safe-area support
- 🔓 **No Login Required** — Most tools are fully accessible without an account

---

## 🧩 Features

| Module | Icon | What It Solves | Login |
|--------|------|----------------|-------|
| **Emotion Compass** | 😊 | "I have feelings but can't name them" — 91 emotion words with scenarios & coping tips | 🟢 Browse free, detail needs login |
| **Deep Inquiry** | 🔍 | "I want to explore within" — 5 dimensions of self-reflection (body, emotion, thought, relation, meaning) | 🔐 Login required |
| **24h Recall** | ⏰ | "I want to review today's feelings" — Structured timeline review by time of day | 🔐 Login required |
| **Meditation** | 🧘 | "I need to calm down" — 3–15 min timer with breathing guide + **voice guidance** | 🟢 Open |
| **Feeling Mode** | 🧠 | "I want to get out of my head" — Left-brain → Right-brain switching exercises + check-out reflection | 🟢 Open |
| **Knowledge Hub** | 📚 | "I want to learn awareness methods" — Structured learning modules on mindfulness theory | 🟢 Open |
| **Mentor Connect** | 🔗 | "I need professional support" — Direct link to mentorship & counseling resources | 🟢 Open |

---

## 🎨 Theme System

Switch between 3 beautiful themes with the toggle button in the header:

| Theme | Icon | Vibe |
|-------|------|------|
| **Dark** | 🌙 | Deep purple meditation — default |
| **Light** | ☀️ | Soft lavender & white — daytime friendly |
| **Nature** | 🌿 | Deep forest green & teal — grounding |

Theme preference is saved automatically via `localStorage`.

---

## 🚀 Quick Start

### Online (Recommended)

👉 **[beingyousef.netlify.app](https://beingyousef.netlify.app/)**

### Run Locally

```bash
git clone https://github.com/zixiang2008/Beling.git
cd Beling
npx http-server . -p 8080 -o
```

No build step, no dependencies — pure HTML/CSS/JS.

---

## 🏗️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Frontend** | HTML5 + CSS3 + Vanilla JavaScript (zero framework) |
| **Themes** | CSS custom properties with `data-theme` attribute switching |
| **i18n** | Custom engine with module-level language packs |
| **Auth** | Local auth (localStorage + sessionStorage), PIN hashed |
| **Voice** | Web Speech Synthesis API for meditation guidance |
| **Design** | Mobile-first, dark mode, glassmorphism, micro-animations |
| **Deploy** | GitHub → Netlify auto-deploy |

---

## 📁 Project Structure

```
BeingYourself/
├── index.html              # SPA entry point
├── css/
│   └── style.css           # Global styles (3400+ lines, 3 themes, responsive)
├── js/
│   ├── i18n.js             # 🌍 i18n engine (4 languages)
│   ├── auth.js             # 🔐 Auth system (2-20 char username + PIN)
│   ├── app.js              # 🏠 Core logic (routing, navigation, splash)
│   ├── theme.js            # 🎨 Theme manager (dark/light/nature)
│   ├── emotions.js         # 😊 Emotion Compass (91 emotions + filters)
│   ├── questioning.js      # 🔍 Deep Inquiry (5 dimensions)
│   ├── recall.js           # ⏰ 24h Recall (timeline review)
│   ├── meditation.js       # 🧘 Meditation (timer + voice guidance)
│   ├── brain.js            # 🧠 Feeling Mode (exercises + check-out)
│   ├── knowledge.js        # 📚 Knowledge Hub
│   ├── counselor.js        # 🔗 Mentor Connect
│   └── lang/               # 📦 Module language packs
│       ├── emotions-lang.js
│       ├── questioning-lang.js
│       ├── recall-lang.js
│       ├── meditation-lang.js
│       └── brain-lang.js
├── miniprogram/            # 📱 WeChat Mini Program version
└── README.md
```

---

## 🌍 Internationalization

Real-time language switching, no page reload needed:

| Language | Code | Status |
|----------|------|--------|
| 🇺🇸 English | `en` | ✅ Default language |
| 🇨🇳 中文 | `zh` | ✅ Full translation |
| 🇯🇵 日本語 | `ja` | ✅ Full translation |
| 🇹🇭 ไทย | `th` | ✅ Full translation |

---

## 🔐 Authentication

| Property | Details |
|----------|---------|
| **Username** | 2–20 characters (Chinese, English, numbers) |
| **Password** | 4-digit PIN (hashed, never stored in plain text) |
| **Storage** | localStorage (user data) + sessionStorage (session) |
| **Philosophy** | Most tools work without login; login only needed for saving personal data |

---

## 📋 Changelog

### v2.2.0 — 2026-04-05
- 🎨 **New** 3 visual themes (Dark / Light / Nature) with one-click toggle
- 🌐 **Changed** Default language to English
- 🔊 **New** Voice guidance for Meditation (Web Speech API)
- ✂️ **Removed** 3 modules to reduce cognitive overload: Inner Dialogue, Action Tips, T-Language
- 🧠 **New** Feeling Mode check-out reflection after exercises
- 📱 **Improved** Mobile layout (480px/360px breakpoints, touch targets, safe-area)
- 🧹 **Cleanup** Thorough removal of all deleted module references
- 📝 **Updated** Home screen to pain-point-oriented card descriptions
- 🔧 **Fixed** Username validation now supports 2-20 chars (Chinese/English/numbers)

### v2.1.0 — 2026-03-13
- 🐛 Fixed blank sub-pages (module `const` not attaching to `window`)
- ✨ Deep Inquiry / 24h Recall preview mode for logged-out users
- ✨ Emotion Compass expanded to 91 emotions, browse without login
- ✨ Added SVG favicon and version badge

### v2.0.0 — 2026-03-11
- ✨ 4-language i18n system (中/EN/日/泰)
- ✨ Local auth system with registration
- ✨ Daily awareness quotes, splash animation
- 🎨 Dark glassmorphism mobile-first design

### v1.0.0 — 2026-03-10
- 🎉 Initial release

---

<div align="center">

**Made with 💜 by Being Yourself — for inner awareness practice**

*If this tool helps you, please give it a ⭐ Star!*

[🌐 Live Demo](https://beingyousef.netlify.app/) · [📂 GitHub](https://github.com/zixiang2008/Beling)

</div>
