---
description: BeingYourself 项目版本管理和部署规则（永久生效）
---
# BeingYourself 版本管理与部署规则

## 版本号同步检查清单

每次改动代码后，必须同时更新以下 **3 个位置** 的版本号：

1. **`js/app.js`** 第 7 行 `const APP_VERSION = 'vX.X.X';`
   - ⚠️ **这是实际控制页面显示的版本号**（通过 `showVersion()` 覆盖 HTML）
2. **`index.html`** 第 136 行 `<span id="app-version">vX.X.X</span>`
3. **`README.md`** Changelog 章节（英文和中文两部分都要更新）

## 部署流程

1. `git add -A`
2. `git commit -m "描述"`
3. `git push origin main`
4. 等待 30 秒，Netlify 自动从 GitHub 拉取并部署
5. 用 HTTP 请求验证线上文件内容：
```powershell
(Invoke-WebRequest -Uri "https://beingyousef.netlify.app/js/app.js" -UseBasicParsing).Content | Select-String "APP_VERSION"
```

## 关键配置文件

- **`netlify.toml`** — 强制 publish 目录为根目录 `"."`，禁用缓存
- **`.agent/workflows/deploy.md`** — 部署流程说明

## 项目 URL

| 用途 | URL |
|------|-----|
| GitHub 仓库 | https://github.com/zixiang2008/Beling |
| Netlify 站点 | https://beingyousef.netlify.app/ |
| Netlify 管理 | https://app.netlify.com/projects/beingyousef/overview |
| 本地开发 | http://localhost:8085 |

## 踩过的坑

1. **版本号被 JS 覆盖**：`app.js` 的 `showVersion()` 会用 `APP_VERSION` 常量覆盖 HTML——改 HTML 不够，必须改 `app.js`
2. **http-server 强缓存**：启动时用 `-c-1` 参数禁用缓存
3. **`Stop-Process -Name node`**：会杀死所有 Node 进程包括浏览器，慎用
4. **Netlify 无 netlify.toml**：默认可能用错误的 publish 目录，必须显式配置
