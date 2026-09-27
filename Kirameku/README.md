# 个人网站模板

这是一个基于 Next.js 16、React 19、TypeScript 和 Tailwind CSS 4 的个人网站前端。个人资料已改成占位内容，配有中文替换注释。小说阅读、书架、搜索、章节接口、导航和代理配置已移除。

## 开始使用

```bash
npm install
npm run dev
```

在浏览器打开 http://localhost:3000。生产构建使用 `npm run build`，启动生产服务使用 `npm start`。

## 替换你的信息

建议依次修改以下文件。搜索「替换」「你的」「待填写」即可找到可编辑的位置。

| 内容 | 修改位置 | 说明 |
| --- | --- | --- |
| 站名、昵称、个人简介、网站地址 | `siteConfig.ts` | 导航、欢迎页、个人卡片、页面元信息和 RSS 共用配置 |
| 头像、背景、默认封面 | `siteConfig.ts`、`public/images/` | 将自己的图片放入该目录，配置路径写 `/images/文件名` |
| 浏览器标签图标 | `app/icon.svg` | 替换为自己的 SVG；如使用 PNG，请删除 SVG 后放入 `app/icon.png`，避免同时存在两个图标 |
| 关于页正文 | `app/about/about.md` | 按 HTML 注释填写经历、技能、爱好和联系方式；注释不在页面显示 |
| 关于页封面 | `siteConfig.ts` 的 `aboutCover` | Markdown 顶部的 `cover` 非空时覆盖此配置 |
| LinkedIn、GitHub、邮箱、QQ、微信 | `siteConfig.ts` 的 `social` | 留空隐藏图标；微信号显示在图标悬停提示中 |
| 建站时间、备案信息 | `siteConfig.ts` | 时间支持带时区的 ISO 字符串；备案号未填写时隐藏 |
| 个人项目 | `app/projects/projectsData.ts` | 复制示例对象，替换标题、简介、技术栈、状态和链接；空链接不显示按钮 |
| 歌单、歌曲 | `siteConfig.ts` | 歌单 ID 优先；未配置时不加载歌曲。后台音乐配置优先于本地配置 |
| 首页照片预览 | `siteConfig.ts` 的 `photoWallAlbums` | 对应后端相册标题；留空使用第一个相册，无照片时显示占位图 |
| 工具子站名称、进入暗号 | `siteConfig.ts` 的 `garden` | 首页暗号输入框已移除；保留的暗号组件不再挂载。子站仍保留原有的本地解锁逻辑，不是权限认证 |
| 子站语录、技术栈、趣味数据 | `app/garden/page.tsx` | 已加替换注释，按自己的偏好填写 |
| 编辑器初始示例 | `app/garden/json/page.tsx`、`app/garden/python/page.tsx`、`app/garden/markdown/page.tsx` | 可自行修改示例文本 |
| 看板娘信息按钮 | `public/live2d/jsdelivr/random/waifu-tips.js` | 默认打开本站 `/about`，旁边有替换注释 |

例如，只需在 `siteConfig.ts` 中修改：

```ts
title: "你的网站名称",
authorName: "你的昵称",
bio: "你的个人简介",
url: "https://example.com", // 改为自己的完整站点地址，末尾不加斜杠
avatarUrl: "/images/你的头像.png",
```

修改配置后重启开发服务；正式部署时重新构建。可选的联系方式、歌单、备案号默认留空，避免展示无效账号。

## 文章、说说、相册等内容来自哪里

当前主站及花园仪表盘的文章、说说、留言、相册、友链、收藏夹和统计来自后端 API，需要连接你自己的后端并在后台录入。这个仓库仅包含前端，不包含后台管理系统或数据库；本次修改不会更改外部数据库中的内容。

`data/` 下保留了带中文注释的数据格式示例，默认数组为空，当前页面不会自动加载这些本地数组。`content/post-template.md` 是文章写作模板，也不会自动发布；将正文录入自己的后台即可。项目页目前直接读取 `app/projects/projectsData.ts`。

## 后端与图片配置

将 `.env.example` 复制为 `.env.local`，按注释填写：

```dotenv
BACKEND_URL=http://127.0.0.1:8000
NEXT_PUBLIC_API_URL=
```

`BACKEND_URL` 是自己的后端根地址，不带 `/api` 或末尾斜杠，供 Next.js 代理、首页统计和 RSS 使用。`NEXT_PUBLIC_API_URL` 默认留空，浏览器通过同源 `/api` 请求；需要跨域直连时才填写，并在后端允许相应来源。不要在 `NEXT_PUBLIC_` 变量中放密钥。

远程头像或封面需要在 `next.config.ts` 的 `images.remotePatterns` 中添加自己的图片域名。本地 `public/images/` 素材不需要域名配置。当前头像、封面、背景、标签图标均为中性占位 SVG，可直接替换。

后台上传的 JPEG、PNG、WebP、GIF 图片现在保存在相邻的 `Kirameku-backend/uploads/` 目录，接口返回 `/uploads/文件名`。前端的 `next.config.ts` 已把该路径转发到后端；后台、文章和相册可继续使用原上传接口。服务器部署时，请确保后端进程对该目录有写权限，并把该目录放在持久化磁盘或挂载为持久化卷，同时纳入备份。重新部署代码不会迁移已有 OSS 图片；数据库中的旧 OSS 地址仍保持原样，若要停用 OSS，需先迁移旧文件并更新对应记录。上传接口不再接收 SVG。

天气、每日语录、音乐、地图等工具仍使用各自的公共服务；第三方库及其来源说明保留。

## 检查

```bash
npx tsc --noEmit
npm run lint
npm run build
```

构建时 `next/font/google` 需要下载 Google 字体。后端未启动时，动态内容可能显示为空，RSS 需要后端可用才能返回文章。
