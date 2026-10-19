# 初阳的技术学习笔记

基于 Astro 构建的静态技术博客，部署到 GitHub Pages。

## 项目结构

```text
src/
  components/       # 共享 UI 组件
  content/blog/     # Markdown 文章
  content/config.ts # 文章元数据校验
  layouts/          # 公共页面布局
  lib/posts.ts      # 文章排序与路径生成
  pages/            # 页面路由
  styles/           # 全站主题与响应式样式
public/             # 旧网址兼容跳转
.github/workflows/  # GitHub Pages 自动部署
```

`node_modules/` 是本地依赖；`.astro/` 和 `dist/` 分别为自动生成的缓存与构建产物，不应手工编辑或提交。
旧 Jekyll 的源目录和缓存已移除；`public/` 中的旧链接跳转用于兼容已发布的网址，请勿当作废弃页面删除。

## 本地预览

使用 Node.js 22（与部署环境一致）。已有锁文件，首次安装建议使用 `npm ci`。

```powershell
npm ci
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

## 验证与维护

- `npm run build`：校验文章并生成全部静态页面。
- `npm run preview`：预览最近一次构建结果。
- 如遇内容缓存异常，可删除 `.astro/` 后重新构建。
- 修改文章路径时，同步检查 `public/` 中的旧网址跳转目标。
- 联系方式在 `src/pages/contact.astro` 中维护，仅添加可用的真实地址。


