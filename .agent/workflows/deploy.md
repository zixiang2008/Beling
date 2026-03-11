---
description: 部署最新版到 GitHub 和 Netlify 云端网站
---
# 部署流程

## 项目信息
- **GitHub 仓库**: https://github.com/zixiang2008/TGroup
- **Netlify 网站**: https://selfawareness.netlify.app/
- **本地路径**: d:\WebCoding\Self-awareness

## 部署步骤

// turbo-all

1. 添加所有更改到暂存区
```
git add -A
```

2. 提交更改（根据实际修改内容修改 commit message）
```
git commit -m "feat: 更新说明"
```

3. 推送到 GitHub（Netlify 会自动从 GitHub 拉取并部署）
```
git push origin main
```

4. 等待约 30 秒后，在浏览器中打开 https://selfawareness.netlify.app/ 验证部署是否成功

## 注意事项
- Netlify 已配置为 GitHub 自动部署，推送到 `main` 分支后会自动触发构建
- 建议每次推送后都在 Netlify 网站上验证一下
