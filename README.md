# 楚阳的技术学习笔记

基于 Astro 构建的静态技术博客，部署到 GitHub Pages。

## 本地预览

```powershell
npm install
$env:ASTRO_TELEMETRY_DISABLED='1'
npm run dev
```

## 发布文章

在 `src/content/blog/` 新建 Markdown 文件，例如：

```text
2026-08-09-react-learning.md
```

文件需包含：

```yaml
---
title: "文章标题"
description: "一句话摘要"
pubDate: 2026-08-09
categories: ["React", "学习记录"]
---
```

确认后运行 `npm run build`。推送到 `main` 分支后，GitHub Actions 会自动构建并发布。

旧 Jekyll 文件暂时保留在仓库中，仅作为迁移参考；实际网站由 `src/` 与 Astro 工作流构建。
