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
public/             # 头像、字体、文章图片与旧网址跳转
.github/workflows/  # GitHub Pages 自动部署
```

`node_modules/` 是本地依赖；`.astro/` 和 `dist/` 分别为自动生成的缓存与构建产物，不应手工编辑或提交。
`public/` 中的旧网址跳转仍用于兼容已发布链接，维护时需保留。

## 本地预览

使用 Node.js 22（与部署环境一致）。已有锁文件，首次安装建议使用 `npm ci`。

```powershell
npm ci
$env:ASTRO_TELEMETRY_DISABLED='1'
npm run dev
```

## 发布文章

### 网页写作（Pages CMS）

仓库根目录的 `.pages.yml` 配置文章表单和图片管理，无需新增数据库。

首次启用：将配置和草稿支持代码一并推送到 `main`，然后访问 https://app.pagescms.org/，使用 GitHub 登录并授权访问 `chuyang1008/chuyang1008.github.io`。选择该仓库的 `main` 分支。也可以通过站点 `/admin/` 页面打开后台；该页面只是入口，实际编辑器由 Pages CMS 托管。

日常写作：

1. 在“文章”中新建条目，填写标题、摘要、日期、分类和正文。
2. 可视化编辑器支持插图，也可以切换 Source 编辑 Markdown；图片写入 `public/images/`，文章中使用 `/images/...`。
3. 新文章默认开启“草稿”。保存会提交到 GitHub，但草稿不进入文章列表，也不生成公开文章页面。草稿原文与图片仍可在公开仓库查看，不用于保存私密内容。
4. 关闭“草稿”后保存到 `main`，GitHub Actions 自动构建并上线。日期只影响排序，不支持定时发布。
5. 首次新建时可调整文件名。发布后尽量保持文件名不变，以免改变文章链接。

后台编辑的是 GitHub 上的文件，不会修改本地工作区；本地继续写作前先同步远端改动。保存成功与部署成功是两个状态，如站点未更新，请检查 GitHub Actions。

### 本地 Markdown 写作

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


