# 觉察 · 内在探索 | Self-Awareness Practice

<div align="center">

![觉察 App Banner](https://img.shields.io/badge/觉察-内在探索-7C3AED?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIi8+PHBhdGggZD0iTTEyIDZ2NmwzIDMiLz48L3N2Zz4=)
![Version](https://img.shields.io/badge/version-1.0.0-blue?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)
![Language](https://img.shields.io/badge/language-中文%20%7C%20EN-orange?style=for-the-badge)

**一款帮助你深度觉察内在感受的正念工具 | A mindfulness tool for deep inner self-awareness**

[🌐 在线体验 / Live Demo](#) · [📖 使用指南 / Guide](#功能模块--features) · [🤝 贡献 / Contribute](#贡献--contributing)

</div>

---

## 中文说明

### 项目简介

**觉察 · 内在探索** 是一款面向 T-Group、正念练习者与心理成长爱好者的 Web 应用。它整合了 **情绪词汇探索、深度自我发问、冥想引导、左右脑切换练习、觉察对话** 等多种心理觉察工具，帮助用户从"思考头脑"回归"感受身体"，真实触碰当下的内在状态。

> 🧘 *向内看，看见真实的自己*

### 功能模块

| 模块 | 图标 | 说明 |
|------|------|------|
| **情绪罗盘** | 😊 | 探索 120+ 种情绪，了解每种情绪出现的场景与相处方式 |
| **深度发问** | 🔍 | 多维度自我探索问题表，引导清醒觉察 |
| **24h 回忆** | ⏰ | 有结构地回顾过去24小时的真实感受与反应 |
| **冥想空间** | 🧘 | 呼吸引导 + 冥想计时器，参考「暂停实验室」设计 |
| **感受模式** | 🧠 | 帮助从左脑分析状态切换到右脑体验感受状态 |
| **觉察对话** | 💬 | 与内建多角色 AI 进行深度内在对话 |
| **行动建议** | 🏃 | 推荐有助于安静头脑的身体活动 |
| **分享句式** | 📝 | T语言沟通模板，客观表达感受 |

### 技术栈

- **前端**：原生 HTML5 + CSS3 + Vanilla JavaScript（无框架依赖）
- **字体**：Google Fonts — Noto Sans SC / Noto Serif SC
- **设计风格**：深色模式 · 玻璃拟态 · 微动画 · 移动端优先

### 快速开始

**方式一：直接打开（无需安装）**

```bash
# 克隆仓库
git clone https://github.com/zixiang2008/TGroup.git
cd TGroup

# 直接在浏览器打开 index.html 即可
```

**方式二：本地开发服务器**

```bash
# 使用 VS Code Live Server 或 Node.js http-server
npx http-server . -p 8080 -o
```

### 项目结构

```
TGroup/
├── index.html          # 主入口页面
├── css/
│   └── style.css       # 全局样式（含深色主题、动画）
├── js/
│   ├── app.js          # 应用核心逻辑（路由、导航）
│   ├── emotions.js     # 情绪罗盘（120+ 情绪数据）
│   ├── questioning.js  # 深度发问模块
│   ├── recall.js       # 24小时回忆引导
│   ├── meditation.js   # 冥想空间与计时器
│   ├── brain.js        # 左右脑切换练习
│   ├── dialogue.js     # 觉察对话（多角色）
│   ├── actions.js      # 行动建议
│   └── sharing.js      # T语言分享句式
└── README.md
```

### 屏幕截图

> 应用采用移动端优先设计，支持在桌面和手机上流畅使用。

### 开源协议

本项目基于 [MIT License](LICENSE) 开源，欢迎自由使用与二次开发。

---

## English Documentation

### About

**Self-Awareness Practice** is a web application designed for T-Group participants, mindfulness practitioners, and personal development enthusiasts. It combines multiple psychological awareness tools — including **emotion vocabulary exploration, deep self-inquiry, guided meditation, brain-hemisphere switching, and inner dialogue** — to help users shift from "thinking mind" back to "feeling body" and authentically connect with their present inner state.

> 🧘 *Look within, and see your authentic self*

### Features

| Module | Icon | Description |
|--------|------|-------------|
| **Emotion Compass** | 😊 | Explore 120+ emotions, understand their triggers and how to be with them |
| **Deep Inquiry** | 🔍 | Multi-dimensional self-reflection questions for conscious awareness |
| **24h Recall** | ⏰ | Structured review of your genuine feelings over the past 24 hours |
| **Meditation Space** | 🧘 | Breathing guide + meditation timer, inspired by "Pause Lab" design |
| **Feeling Mode** | 🧠 | Shift from left-brain analysis to right-brain experiential awareness |
| **Inner Dialogue** | 💬 | Deep inner dialogue with built-in multi-persona AI characters |
| **Action Suggestions** | 🏃 | Recommended physical activities to quiet the analytical mind |
| **T-Language Sharing** | 📝 | Communication templates based on T-language for expressing feelings objectively |

### Tech Stack

- **Frontend**: Pure HTML5 + CSS3 + Vanilla JavaScript (zero framework dependencies)
- **Typography**: Google Fonts — Noto Sans SC / Noto Serif SC
- **Design**: Dark mode · Glassmorphism · Micro-animations · Mobile-first

### Quick Start

**Option 1: Open directly (no installation needed)**

```bash
# Clone the repository
git clone https://github.com/zixiang2008/TGroup.git
cd TGroup

# Open index.html directly in your browser
```

**Option 2: Local development server**

```bash
# Using VS Code Live Server or Node.js http-server
npx http-server . -p 8080 -o
```

### Project Structure

```
TGroup/
├── index.html          # Main entry page
├── css/
│   └── style.css       # Global styles (dark theme, animations)
├── js/
│   ├── app.js          # Core app logic (routing, navigation)
│   ├── emotions.js     # Emotion Compass (120+ emotions dataset)
│   ├── questioning.js  # Deep Inquiry module
│   ├── recall.js       # 24h Recall guide
│   ├── meditation.js   # Meditation Space & timer
│   ├── brain.js        # Brain hemisphere switching exercises
│   ├── dialogue.js     # Inner Dialogue (multi-persona)
│   ├── actions.js      # Action Suggestions
│   └── sharing.js      # T-Language sharing templates
└── README.md
```

### Screenshots

> The app follows a mobile-first design, optimized for both desktop and mobile browsers.

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

<div align="center">

**Made with 💜 for inner awareness & T-Group practice**

*如果这个工具对你有帮助，欢迎 ⭐ Star 支持！*
*If this tool helps you, please give it a ⭐ Star!*

</div>
