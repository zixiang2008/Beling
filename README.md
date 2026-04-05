# 🧘 Being Yourself — Inner Awareness Practice

<div align="center">

![Being Yourself](https://img.shields.io/badge/Being%20Yourself-Inner%20Awareness-7C3AED?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIi8+PHBhdGggZD0iTTEyIDZ2NmwzIDMiLz48L3N2Zz4=)
![Version](https://img.shields.io/badge/version-3.0.0-blue?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)
![i18n](https://img.shields.io/badge/i18n-EN%20%7C%20中文%20%7C%20日本語%20%7C%20ไทย-orange?style=for-the-badge)

**A mindfulness web app for deep inner self-awareness**

[🌐 Live Demo](https://beingyousef.netlify.app/) · [📂 GitHub](https://github.com/zixiang2008/Beling)

**[English](#-english) · [中文](#-中文)**

</div>

---

# 🇺🇸 English

## ✨ What is Being Yourself?

Being Yourself is a lean, pain-point-oriented mindfulness web app. Instead of overwhelming you with tools, it asks one simple question: **"How do you feel today?"** — then guides you to explore that feeling with 7 focused modules.

> 🧘 *Look within, and see your authentic self.*

### Key Highlights

- 🎨 **3 Visual Themes** — Dark Meditation, Soft Light, Nature Green (one-click toggle)
- 🌍 **4 Languages** — English (default), 中文, 日本語, ไทย (real-time switch)
- 🎵 **6 Ambient Sounds** — Rain, Ocean, Forest, Fire, Wind, Singing Bowl (Web Audio API)
- 🧠 **4 Brainwave Modes** — Delta, Theta, Alpha, Beta (binaural beats)
- 🔊 **Voice Guidance** — Web Speech API, no downloads needed
- 📱 **Mobile-First** — Optimized for phones with touch targets & safe-area support
- 🔓 **No Login Required** — Most tools are fully accessible without an account

---

## 🧩 Features

| Module | Icon | What It Solves | Login |
|---|---|---|---|
| **Emotion Compass** | 😊 | "I can't name my feelings" — 91 emotions with scenarios & coping tips | 🟢 Browse free |
| **Deep Inquiry** | 🔍 | "I want to explore within" — 5 dimensions (body, emotion, thought, relation, meaning) | 🔐 Login required |
| **Feeling Mode** | 🧠 | "I want to get out of my head" — Left→Right brain switching + check-out reflection | 🟢 Open |
| **Mentor Connect** | 🔗 | "I need professional support" — Direct link to counseling resources | 🟢 Open |
| **24h Recall** | ⏰ | "I want to review today" — Structured timeline review by time of day | 🔐 Login required |
| **Meditation** | 🧘 | "I need to calm down" — Full immersive experience (see below) | 🟢 Open |
| **Learn & Grow** | 📚 | "I want to learn methods" — 6 professional modalities + 3 service areas | 🟢 Open |

---

## 🧘 Meditation v3

A professional-grade meditation experience inspired by **Calm, Headspace, Insight Timer, myNoise** and 6 other leading platforms.

### 🎵 Ambient Sounds (Web Audio API Synthesis)

| Sound | Synthesis Method |
|---|---|
| 🌧️ Rain | White noise + low-pass filter |
| 🌊 Ocean | White noise + LFO gain modulation |
| 🌲 Forest | Pink noise + bandpass filter |
| 🔥 Fire | Brown noise + low-pass filter |
| 💨 Wind | White noise + resonant LFO |
| 🔔 Singing Bowl | Sine wave harmonics (174/285/396 Hz) |

### 🧠 Brainwave (Binaural Beats)

| Wave | Frequency | Effect |
|---|---|---|
| 🧘 Delta | 0.5–4 Hz | Deep sleep & repair |
| 🌙 Theta | 4–8 Hz | Deep meditation & creativity |
| 🧠 Alpha | 8–14 Hz | Relaxation & calm |
| ⚡ Beta | 14–30 Hz | Focus & alertness |

> 🎧 Headphones required for binaural beats

### ✨ Visual Animations

| Animation | Visual Effect |
|---|---|
| 🫧 Bubbles | Slow-rising translucent bubbles |
| 🔔 Singing Bowl | Concentric ripple expansion |
| 🌿 Nature | Falling leaves + firefly glow |

### 🎤 Guidance Modes

| Mode | Description |
|---|---|
| 🔇 Silent | Ambient sound only |
| 🌬️ Breath Only | Breath commands + bell chimes |
| 🎙️ Full Guide | Breath + mindfulness narration + bell |

---

## 📚 Learn & Grow Together

**Subtitle: Mind-Body-Spirit Healing System**

### 🎓 Six Professional Modalities

Each card features **hover tooltip + click-to-expand** detailed descriptions (founder, core idea, how it works, target audience).

| Method | Founder |
|---|---|
| 💜 Compassionate Inquiry | Dr. Gabor Maté |
| 🪞 Internal Family Systems (IFS) | Dr. Richard Schwartz |
| 🌊 NARM (Neuroaffective Relational Model) | Dr. Laurence Heller |
| 🌑 Shadow Constellation | Nir Esterman |
| 🌱 Holistic Life Coaching | Alan Cohen |
| 💎 Diamond Approach | A.H. Almaas |

### 🎯 Three Service Areas

| Area | Focus |
|---|---|
| 💆 Chronic Pain & Somatic Recovery | Emotional roots of physical symptoms |
| 🌸 Emotional Processing & Trauma Release | Safe container for deep feelings |
| 🔍 Self-Inquiry & Embodied Awareness | Who you are beneath the patterns |

---

## 🎨 Theme System

| Theme | Icon | Vibe |
|---|---|---|
| **Dark** | 🌙 | Deep purple meditation (default) |
| **Light** | ☀️ | Soft lavender & white |
| **Nature** | 🌿 | Deep forest green & teal |

Theme preference saved automatically via `localStorage`.

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
|---|---|
| **Frontend** | HTML5 + CSS3 + Vanilla JavaScript (zero framework) |
| **Audio** | Web Audio API (ambient synthesis + binaural beats) |
| **Voice** | Web Speech Synthesis API (meditation guidance) |
| **Themes** | CSS custom properties + `data-theme` switching |
| **i18n** | Custom engine + module-level language packs |
| **Auth** | Local auth (localStorage + sessionStorage), PIN hashed |
| **Design** | Mobile-first, glassmorphism, micro-animations |
| **Deploy** | GitHub → Netlify auto-deploy |

---

## 📁 Project Structure

```
BeingYourself/
├── index.html                # SPA entry point
├── css/
│   └── style.css             # Global styles (3700+ lines, 3 themes, responsive)
├── js/
│   ├── i18n.js               # 🌍 i18n engine (EN/ZH/JA/TH)
│   ├── auth.js               # 🔐 Auth system (2-20 char username + PIN)
│   ├── app.js                # 🏠 Core logic (routing, navigation, splash)
│   ├── theme.js              # 🎨 Theme manager (dark/light/nature)
│   ├── emotions.js           # 😊 Emotion Compass (91 emotions)
│   ├── questioning.js        # 🔍 Deep Inquiry (5 dimensions)
│   ├── recall.js             # ⏰ 24h Recall (timeline review)
│   ├── meditation.js         # 🧘 Meditation v3 (sounds/brainwave/animation)
│   ├── brain.js              # 🧠 Feeling Mode (exercises + check-out)
│   ├── knowledge.js          # 📚 Learn & Grow (expandable details)
│   ├── counselor.js          # 🔗 Mentor Connect
│   └── lang/                 # 📦 Language packs
│       ├── emotions-lang.js
│       ├── questioning-lang.js
│       ├── recall-lang.js
│       ├── meditation-lang.js
│       └── brain-lang.js
├── miniprogram/              # 📱 WeChat Mini Program version
└── README.md
```

---

## 🌍 Internationalization

Real-time switch, no page reload needed.

| Language | Code | Status |
|---|---|---|
| 🇺🇸 English | `en` | ✅ Default |
| 🇨🇳 中文 | `zh` | ✅ Full |
| 🇯🇵 日本語 | `ja` | ✅ Full |
| 🇹🇭 ไทย | `th` | ✅ Full |

---

## 🔐 Authentication

| Property | Details |
|---|---|
| **Username** | 2–20 characters (Chinese, English, numbers) |
| **Password** | 4-digit PIN (hashed, never stored in plain text) |
| **Storage** | localStorage (user data) + sessionStorage (session) |
| **Philosophy** | Most tools work without login; login only for saving personal data |

---

## 📋 Changelog

### v3.0.1 — 2026-04-05
- Fixed Knowledge Hub subtitle not displaying
- Fixed More menu showing legacy title
- Version badge updated to v3.0.1

### v3.0.0 — 2026-04-05
- 🧘 **Meditation v3** — Professional-grade immersive experience
  - 🎵 6 ambient sounds via Web Audio API synthesis
  - 🧠 4 brainwave modes (binaural beats with stereo panning)
  - ✨ 3 visual animations (bubbles / singing bowl / nature)
  - 🎤 3 guidance modes (silent / breath only / full guide)
  - 🎚️ Real-time volume sliders for sound and brainwave
- 📚 **Knowledge Hub → Learn & Grow Together**
  - Subtitle: Mind-Body-Spirit Healing System
  - AI-generated detailed descriptions (hover tooltip + click-to-expand)
  - 6 professional modalities + 3 service areas

### v2.2.0 — 2026-04-05
- 🎨 3 visual themes (Dark / Light / Nature) with one-click toggle
- 🌐 Default language changed to English
- 🔊 Voice guidance for Meditation (Web Speech API)
- ✂️ Removed 3 modules: Inner Dialogue, Action Tips, T-Language
- 🧠 Feeling Mode check-out reflection
- 📱 Mobile layout optimization (480px/360px breakpoints)
- 📦 Card reorder + full-width Knowledge card

### v2.1.0 — 2026-03-13
- 🐛 Fixed blank sub-pages
- ✨ Emotion Compass expanded to 91 emotions
- ✨ Preview mode for logged-out users

### v2.0.0 — 2026-03-11
- ✨ 4-language i18n system
- ✨ Local auth with registration
- 🎨 Dark glassmorphism design

### v1.0.0 — 2026-03-10
- 🎉 Initial release

---
---

# 🇨🇳 中文

## ✨ 这是什么？

Being Yourself 是一款精简的、以痛点为导向的正念 Web 应用。它只问一个简单的问题：**"你今天感觉如何？"** 然后通过 7 个专注的模块引导你探索你的内在感受。

> 🧘 *向内看，发现你真实的自己。*

### 核心亮点

- 🎨 **3 套视觉主题** — 暗夜冥想、柔光、自然绿（一键切换）
- 🌍 **4 种语言** — English（默认）、中文、日本語、ไทย（实时切换）
- 🎵 **6 种环境音** — 雨声、海浪、森林、篝火、风声、颂钵（Web Audio API 合成）
- 🧠 **4 种脑波模式** — Delta、Theta、Alpha、Beta（双耳节拍）
- 🔊 **语音引导** — Web Speech API，无需下载
- 📱 **移动优先** — 触控优化、安全区支持、响应式
- 🔓 **无需登录** — 大部分功能无需账号

---

## 🧩 功能模块

| 模块 | 图标 | 解决什么 | 登录 |
|---|---|---|---|
| **情绪罗盘** | 😊 | "我说不出我的感受" — 91 种情绪+场景+应对建议 | 🟢 免费浏览 |
| **深度探索** | 🔍 | "我想探索内心" — 五个维度（身体/情绪/思维/关系/意义） | 🔐 需登录 |
| **感受模式** | 🧠 | "我想走出头脑" — 左脑→右脑切换练习+反思环节 | 🟢 开放 |
| **导师链接** | 🔗 | "我需要专业支持" — 直接链接专业咨询 | 🟢 开放 |
| **24 小时回忆** | ⏰ | "我想回顾今天" — 按时段的结构化回顾 | 🔐 需登录 |
| **冥想空间** | 🧘 | "我需要安静下来" — 完整沉浸体验（详见下方） | 🟢 开放 |
| **一起学习成长** | 📚 | "我想学习觉察方法" — 六大专业方法+三大服务领域 | 🟢 开放 |

---

## 🧘 冥想空间 v3

参考 **Calm、Headspace、Insight Timer、myNoise** 等 10+ 专业平台打造的专业级冥想体验。

### 🎵 环境音（Web Audio API 合成）

| 声音 | 合成方式 |
|---|---|
| 🌧️ 雨声 | 白噪声 + 低通滤波器 |
| 🌊 海浪 | 白噪声 + LFO 增益调制 |
| 🌲 森林 | 粉噪声 + 带通滤波 |
| 🔥 篝火 | 棕噪声 + 低通滤波 |
| 💨 风声 | 白噪声 + 共振 LFO |
| 🔔 颂钵 | 正弦波谐波（174/285/396 Hz） |

### 🧠 脑波频率（双耳节拍）

| 脑波 | 频率 | 效果 |
|---|---|---|
| 🧘 Delta | 0.5–4 Hz | 深度睡眠·修复 |
| 🌙 Theta | 4–8 Hz | 深度冥想·创意 |
| 🧠 Alpha | 8–14 Hz | 放松·平静 |
| ⚡ Beta | 14–30 Hz | 专注·清醒 |

> 🎧 需要耳机才能体验双耳节拍效果

### ✨ 冥想动画

| 动画 | 视觉效果 |
|---|---|
| 🫧 气泡 | 缓慢上升的半透明气泡 |
| 🔔 颂钵 | 同心波纹扩散 |
| 🌿 大自然 | 飘落树叶 + 萤火虫微光 |

### 🎤 引导模式

| 模式 | 描述 |
|---|---|
| 🔇 静默 | 仅环境音 |
| 🌬️ 仅呼吸 | 呼吸指令 + 铃声 |
| 🎙️ 完整引导 | 呼吸 + 觉察引导语 + 铃声 |

---

## 📚 一起学习成长

**副标题：身心灵疗愈体系**

### 🎓 六大专业方法

每个方法卡片都有**悬停提示 + 点击展开**的详细说明（创始人、核心理念、工作方式、适合人群）。

| 方法 | 创始人 |
|---|---|
| 💜 慈悲探询 Compassionate Inquiry | Dr. Gabor Maté |
| 🪞 内在家族系统 IFS | Dr. Richard Schwartz |
| 🌊 神经情感关系模型 NARM | Dr. Laurence Heller |
| 🌑 阴影排列 Shadow Constellation | Nir Esterman |
| 🌱 全人生活教练 Holistic Life Coaching | Alan Cohen |
| 💎 钻石途径 Diamond Approach | A.H. Almaas |

### 🎯 三大服务领域

| 领域 | 核心 |
|---|---|
| 💆 慢性疼痛与躯体症状恢复 | 症状的情感根源 |
| 🌸 情绪处理与创伤释放 | 安全的情绪空间 |
| 🔍 自我探询与具身觉知 | 模式之下的真实自我 |

---

## 🎨 主题系统

| 主题 | 图标 | 风格 |
|---|---|---|
| **暗夜** | 🌙 | 深紫冥想（默认） |
| **柔光** | ☀️ | 薰衣草白 |
| **自然** | 🌿 | 深林绿 |

通过 `localStorage` 自动保存主题偏好。

---

## 🚀 快速开始

### 在线（推荐）

👉 **[beingyousef.netlify.app](https://beingyousef.netlify.app/)**

### 本地运行

```bash
git clone https://github.com/zixiang2008/Beling.git
cd Beling
npx http-server . -p 8080 -o
```

零构建、零依赖——纯 HTML/CSS/JS。

---

## 🏗️ 技术栈

| 类别 | 技术 |
|---|---|
| **前端** | HTML5 + CSS3 + 原生 JavaScript（零框架） |
| **音频** | Web Audio API（环境音合成 + 双耳节拍） |
| **语音** | Web Speech Synthesis API（冥想引导） |
| **主题** | CSS 自定义属性 + `data-theme` 切换 |
| **国际化** | 自定义引擎 + 模块级语言包 |
| **认证** | 本地认证（localStorage + sessionStorage），PIN 加密 |
| **设计** | 移动优先、玻璃拟态、微动画 |
| **部署** | GitHub → Netlify 自动部署 |

---

## 📁 项目结构

```
BeingYourself/
├── index.html                # 单页应用入口
├── css/
│   └── style.css             # 全局样式（3700+ 行，3 套主题，响应式）
├── js/
│   ├── i18n.js               # 🌍 国际化引擎（EN/ZH/JA/TH）
│   ├── auth.js               # 🔐 认证系统（2-20字符用户名 + PIN）
│   ├── app.js                # 🏠 核心逻辑（路由、导航、开屏动画）
│   ├── theme.js              # 🎨 主题管理（暗夜/柔光/自然）
│   ├── emotions.js           # 😊 情绪罗盘（91 种情绪）
│   ├── questioning.js        # 🔍 深度探索（5 个维度）
│   ├── recall.js             # ⏰ 24 小时回忆
│   ├── meditation.js         # 🧘 冥想空间 v3（环境音/脑波/动画）
│   ├── brain.js              # 🧠 感受模式（练习 + 反思）
│   ├── knowledge.js          # 📚 一起学习成长（可展开详情）
│   ├── counselor.js          # 🔗 导师链接
│   └── lang/                 # 📦 语言包
│       ├── emotions-lang.js
│       ├── questioning-lang.js
│       ├── recall-lang.js
│       ├── meditation-lang.js
│       └── brain-lang.js
├── miniprogram/              # 📱 微信小程序版
└── README.md
```

---

## 🌍 国际化

实时切换，无需刷新页面。

| 语言 | 代码 | 状态 |
|---|---|---|
| 🇺🇸 English | `en` | ✅ 默认 |
| 🇨🇳 中文 | `zh` | ✅ 完整翻译 |
| 🇯🇵 日本語 | `ja` | ✅ 完整翻译 |
| 🇹🇭 ไทย | `th` | ✅ 完整翻译 |

---

## 🔐 认证系统

| 属性 | 详情 |
|---|---|
| **用户名** | 2–20 个字符（中文、英文、数字） |
| **密码** | 4 位 PIN（加密存储，不以明文保存） |
| **存储** | localStorage（用户数据）+ sessionStorage（会话） |
| **理念** | 大部分功能无需登录；登录仅用于保存个人数据 |

---

## 📋 更新日志

### v3.0.1 — 2026-04-05
- 修复知识库副标题（身心灵疗愈体系）未显示
- 修复 More 菜单仍显示旧标题
- 版本号更新至 v3.0.1

### v3.0.0 — 2026-04-05
- 🧘 **冥想空间 v3** — 专业级沉浸体验
  - 🎵 6 种环境音（Web Audio API 合成）
  - 🧠 4 种脑波模式（立体声双耳节拍）
  - ✨ 3 种冥想动画（气泡/颂钵/大自然）
  - 🎤 3 种引导模式（静默/仅呼吸/完整引导）
  - 🎚️ 实时音量滑块
- 📚 **知识库 → 一起学习成长**
  - 副标题：身心灵疗愈体系
  - AI 生成详细说明（悬停提示 + 点击展开）
  - 六大专业方法 + 三大服务领域

### v2.2.0 — 2026-04-05
- 🎨 三套视觉主题（暗夜/柔光/自然）
- 🌐 默认语言改为英文
- 🔊 冥想语音引导
- ✂️ 移除 3 个模块：内心对话、行动建议、T语言
- 🧠 感受模式反思环节
- 📱 移动端布局优化

### v2.1.0 — 2026-03-13
- 🐛 修复空白子页面
- ✨ 情绪罗盘扩展到 91 种
- ✨ 未登录预览模式

### v2.0.0 — 2026-03-11
- ✨ 四语国际化系统
- ✨ 本地认证注册
- 🎨 暗色玻璃拟态设计

### v1.0.0 — 2026-03-10
- 🎉 初始发布

---

<div align="center">

**Made with 💜 by Being Yourself — for inner awareness practice**

**用 💜 打造 — 为内在觉察而生**

*If this tool helps you, please give it a ⭐ Star!*

*如果对你有帮助，请给个 ⭐ 星标！*

[🌐 Live Demo](https://beingyousef.netlify.app/) · [📂 GitHub](https://github.com/zixiang2008/Beling)

</div>
