# 觉察 · 内在探索 | Self-Awareness Practice

<div align="center">

![觉察 App Banner](https://img.shields.io/badge/觉察-内在探索-7C3AED?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIi8+PHBhdGggZD0iTTEyIDZ2NmwzIDMiLz48L3N2Zz4=)
![Version](https://img.shields.io/badge/version-2.1.0-blue?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)
![i18n](https://img.shields.io/badge/i18n-中文%20%7C%20EN%20%7C%20日本語%20%7C%20ไทย-orange?style=for-the-badge)

**一款帮助你深度觉察内在感受的正念工具**

**A mindfulness tool for deep inner self-awareness**

[🌐 在线体验 Live Demo](https://selfawareness.netlify.app/) · [📖 使用指南 Guide](#功能模块) · [🤝 贡献 Contribute](#贡献--contributing)

</div>

---

## 中文说明

### 项目简介

**觉察 · 内在探索 (BeingYourself)** 是一款面向正念练习者与心理成长爱好者的 Web + 小程序应用。它整合了 **情绪词汇探索、深度自我发问、冥想引导、左右脑切换练习、觉察对话** 等多种心理觉察工具，帮助用户从"思考头脑"回归"感受身体"，真实触碰当下的内在状态。

> 🧘 *向内看，看见真实的自己*

### 功能模块

| 模块 | 图标 | 说明 |
|------|------|------|
| **情绪罗盘** | 😊 | 探索 120+ 种情绪，了解每种情绪出现的场景与相处方式 |
| **深度发问** | 🔍 | 多维度自我探索问题表，引导清醒觉察 |
| **24h 回忆** | ⏰ | 有结构地回顾过去 24 小时的真实感受与反应 |
| **冥想空间** | 🧘 | 呼吸引导 + 冥想计时器，觉察练习从这里开始 |
| **感受模式** | 🧠 | 帮助从左脑分析状态切换到右脑体验感受状态 |
| **觉察对话** | 💬 | 与内建多角色 AI 进行深度内在对话（需登录） |
| **行动建议** | 🏃 | 推荐有助于安静头脑的身体活动 |
| **分享句式** | 📝 | T 语言沟通模板，客观表达感受 |

### v2.0 新特性

- 🌍 **四语国际化** — 支持中文、English、日本語、ไทย 四种语言实时切换
- 🔐 **用户认证系统** — 2 位汉字用户名 + 4 位 PIN 码，本地注册/登录
- 🏠 **首页每日觉察语** — 每日推送正念短句，支持换一句
- 📱 **底部导航 + 更多菜单** — 移动端友好的导航体验
- 🎨 **启动画面** — 沉浸式呼吸动画开场

### 技术栈

| 类别 | 技术 |
|------|------|
| **前端** | 原生 HTML5 + CSS3 + Vanilla JavaScript（零框架依赖） |
| **国际化** | 自研 i18n 引擎 + 模块级语言包架构 |
| **字体** | Google Fonts — Noto Sans SC / Noto Serif SC / Noto Sans JP / Noto Sans Thai |
| **设计风格** | 深色模式 · 玻璃拟态 · 微动画 · 移动端优先 |
| **部署** | Netlify（GitHub 自动部署） |

### 快速开始

**方式一：在线使用（推荐）**

直接访问 👉 [https://selfawareness.netlify.app/](https://selfawareness.netlify.app/)

**方式二：本地运行**

```bash
# 克隆仓库
git clone https://github.com/zixiang2008/TGroup.git
cd TGroup

# 直接在浏览器打开
start index.html

# 或使用本地开发服务器
npx http-server . -p 8080 -o
```

### 项目结构

```
TGroup/
├── index.html              # 主入口（SPA 单页应用）
├── css/
│   └── style.css           # 全局样式（深色主题、玻璃拟态、动画）
├── js/
│   ├── i18n.js             # 🌍 国际化核心引擎（中/英/日/泰）
│   ├── auth.js             # 🔐 认证系统（注册/登录/会话管理）
│   ├── app.js              # 应用核心逻辑（路由、导航、启动画面）
│   ├── emotions.js         # 😊 情绪罗盘（120+ 情绪数据与交互）
│   ├── questioning.js      # 🔍 深度发问模块
│   ├── recall.js           # ⏰ 24 小时回忆引导
│   ├── meditation.js       # 🧘 冥想空间与计时器
│   ├── brain.js            # 🧠 左右脑切换练习
│   ├── dialogue.js         # 💬 觉察对话（多角色 AI）
│   ├── actions.js          # 🏃 行动建议
│   ├── sharing.js          # 📝 T 语言分享句式
│   └── lang/               # 📦 模块级国际化语言包
│       ├── emotions-lang.js
│       ├── dialogue-lang.js
│       ├── questioning-lang.js
│       ├── recall-lang.js
│       ├── meditation-lang.js
│       ├── brain-lang.js
│       ├── actions-lang.js
│       └── sharing-lang.js
├── 基本资料/                # 参考资料（觉察表图片）
└── README.md
```

### 开源协议

本项目基于 [MIT License](LICENSE) 开源，欢迎自由使用与二次开发。

---

## English Documentation

### About

**Self-Awareness Practice (BeingYourself)** is a web + mini-program application designed for mindfulness practitioners and personal development enthusiasts. It combines multiple psychological awareness tools — including **emotion vocabulary exploration, deep self-inquiry, guided meditation, brain-hemisphere switching, and inner dialogue** — to help users shift from "thinking mind" back to "feeling body" and authentically connect with their present inner state.

> 🧘 *Look within, and see your authentic self*

### Features

| Module | Icon | Description |
|--------|------|-------------|
| **Emotion Compass** | 😊 | Explore 120+ emotions, understand their triggers and how to be with them |
| **Deep Inquiry** | 🔍 | Multi-dimensional self-reflection questions for conscious awareness |
| **24h Recall** | ⏰ | Structured review of your genuine feelings over the past 24 hours |
| **Meditation Space** | 🧘 | Breathing guide + meditation timer, the starting point of awareness practice |
| **Feeling Mode** | 🧠 | Shift from left-brain analysis to right-brain experiential awareness |
| **Inner Dialogue** | 💬 | Deep inner dialogue with built-in multi-persona AI characters (login required) |
| **Action Suggestions** | 🏃 | Recommended physical activities to quiet the analytical mind |
| **T-Language Sharing** | 📝 | Communication templates based on T-language for expressing feelings objectively |

### What's New in v2.0

- 🌍 **Quad-language i18n** — Real-time switching between 中文, English, 日本語, and ไทย
- 🔐 **Authentication System** — Local registration/login with username + PIN
- 🏠 **Daily Awareness Quote** — Mindfulness inspirations on the home page
- 📱 **Bottom Navigation + More Menu** — Mobile-friendly navigation experience
- 🎨 **Splash Screen** — Immersive breathing animation on launch

### Tech Stack

| Category | Technology |
|----------|------------|
| **Frontend** | Pure HTML5 + CSS3 + Vanilla JavaScript (zero framework dependencies) |
| **i18n** | Custom i18n engine + modular language pack architecture |
| **Typography** | Google Fonts — Noto Sans SC / Noto Serif SC / Noto Sans JP / Noto Sans Thai |
| **Design** | Dark mode · Glassmorphism · Micro-animations · Mobile-first |
| **Deployment** | Netlify (auto-deploy from GitHub) |

### Quick Start

**Option 1: Use Online (Recommended)**

Visit 👉 [https://selfawareness.netlify.app/](https://selfawareness.netlify.app/)

**Option 2: Run Locally**

```bash
# Clone the repository
git clone https://github.com/zixiang2008/TGroup.git
cd TGroup

# Open index.html directly in your browser
# Or use a local development server
npx http-server . -p 8080 -o
```

### Project Structure

```
TGroup/
├── index.html              # Main entry (SPA)
├── css/
│   └── style.css           # Global styles (dark theme, glassmorphism, animations)
├── js/
│   ├── i18n.js             # 🌍 i18n core engine (ZH/EN/JA/TH)
│   ├── auth.js             # 🔐 Auth system (register/login/session)
│   ├── app.js              # Core app logic (routing, navigation, splash)
│   ├── emotions.js         # 😊 Emotion Compass (120+ emotions data & UI)
│   ├── questioning.js      # 🔍 Deep Inquiry module
│   ├── recall.js           # ⏰ 24h Recall guide
│   ├── meditation.js       # 🧘 Meditation Space & timer
│   ├── brain.js            # 🧠 Brain hemisphere switching
│   ├── dialogue.js         # 💬 Inner Dialogue (multi-persona AI)
│   ├── actions.js          # 🏃 Action Suggestions
│   ├── sharing.js          # 📝 T-Language sharing templates
│   └── lang/               # 📦 Modular i18n language packs
│       ├── emotions-lang.js
│       ├── dialogue-lang.js
│       ├── questioning-lang.js
│       ├── recall-lang.js
│       ├── meditation-lang.js
│       ├── brain-lang.js
│       ├── actions-lang.js
│       └── sharing-lang.js
├── 基本资料/                # Reference materials
└── README.md
```

### Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### License

This project is open source under the [MIT License](LICENSE). Free to use and extend.

---

## 更新日志 / Changelog

### v2.0.0 — 2026-03-11
- ✨ 新增四语国际化系统（中 / 英 / 日 / 泰）
- ✨ 新增用户认证系统（本地注册 & 登录）
- ✨ 新增首页每日觉察语推播
- ✨ 新增底部导航栏与更多菜单
- ✨ 新增启动画面呼吸动画
- ✨ 新增 8 个模块级语言包
- 🎨 升级至移动端优先的深色玻璃拟态设计

### v2.1.0 — 2026-03-12
- ✨ 品牌更名为 BeingYourself
- ✨ 情绪罗盘扩充至 91 条（新增 24 条），全部免登录
- ✨ 注册增设 3 级经验评估（experienced / beginner / none）
- ✨ 对话深度按经验等级自动切换（温和/深度）
- ✨ 新增身体感受词汇附录（108 个感受词汇 + 搜索）
- ✨ 首页添加品牌标识与版本号显示

### v1.0.0 — 2026-03-10
- 🎉 初始版本发布
- 😊 情绪罗盘（120+ 情绪数据）
- 🔍 深度发问模块
- ⏰ 24 小时回忆引导
- 🧘 冥想空间与计时器
- 🧠 左右脑切换练习
- 💬 觉察对话（多角色）
- 🏃 行动建议
- 📝 T 语言分享句式

---

<div align="center">

**Made with 💜 by BeingYourself — for inner awareness practice**

*如果这个工具对你有帮助，欢迎 ⭐ Star 支持！*

*If this tool helps you, please give it a ⭐ Star!*

</div>
