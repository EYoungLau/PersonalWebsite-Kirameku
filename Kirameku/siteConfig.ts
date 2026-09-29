// 全站个人信息配置：搜索「替换」即可找到需要填写的位置。
// 字符串保留引号；可选字段留空时不显示对应入口。不要在这里填写密码或密钥。
export const siteConfig = {
  title: "EYoung's blog", // 替换：导航、欢迎页和浏览器标签使用的站名。
  url: "https://eyounglau.hk", // 替换：完整网站地址，末尾不加 /，用于 RSS 链接。
  authorName: "Liu Yiyang Hank", // 替换：个人卡片、关于页、说说和 RSS 使用的昵称。
  bio: "This is the blog of EYoungLau Hank~", // 替换：一句话介绍自己，也用于搜索引擎描述。

  garden: {
    title: "你的工具空间", // 替换：子站名称。
    subtitle: "你的子站简介", // 替换：子站副标题。
    entryCode: "your-garden-code", // 替换：预留暗号（首页输入框已移除），仅供保留的 SearchBar 组件使用，不是安全密码。
  },

  // 替换：图片放在 public/images/ 下，路径以 /images/ 开头（不含 public）。
  avatarUrl: "/images/avatar-placeholder.svg",
  aboutCover: "/images/cover-placeholder.svg",
  defaultPostCover: "/images/cover-placeholder.svg",
  photoWallImage: "/images/cover-placeholder.svg",

  // 替换：false 使用下方图片，true 使用渐变；可自由增加背景图片路径。
  useGradient: false,
  themeColors: ["#a18cd1", "#fbc2eb", "#a1c4fd", "#c2e9fb"],
  bgImages: ["/images/background-placeholder.svg"],

  // 替换：填写你在后端创建的相册标题；留空时首页使用第一个相册。
  photoWallAlbums: { desktop: "", mobile: "" },

  // 替换：填写网易云歌单 ID（优先），或歌曲 ID 数组，例如 ["歌曲ID"]。
  // 两者留空表示暂不配置音乐；接入后端后，后台的音乐配置会优先使用。
  cloudMusicPlaylistId: "",
  cloudMusicIds: [] as string[],

  // 替换：默认同源请求，通过 next.config.ts 转发到你的后端。
  // 如需浏览器跨域直连，在 .env.local 中填写 NEXT_PUBLIC_API_URL。
  apiBaseUrl: process.env.NEXT_PUBLIC_API_URL || "",

  // 替换：填你的真实账号或链接；留空会隐藏入口，避免指向别人的账号。
  social: {
    linkedin: "https://www.linkedin.com/in/yiyang-liu-715913386", // 替换：完整 LinkedIn 主页链接，例如 https://www.linkedin.com/in/你的用户名/；留空隐藏。
    github: "https://github.com/EYoungLau", // 例如 https://github.com/你的用户名
    email: "lyiyang2006@gmail.com", // 例如 your-email@example.com，不需要 mailto: 前缀；RSS 也使用此邮箱。
    qq: "3296736011", // 你的 QQ 号码。
    wechat: "EYoungLau", // 你的微信号，悬停图标可查看。
  },

  buildDate: "2026-09-27T00:00:00+08:00", // 替换：建站时间，例如 2026-01-01T00:00:00+08:00；留空显示「待填写」。
  footerBadges: [
    { name: "Next.js 16", color: "text-sky-500" },
    { name: "React 19", color: "text-cyan-400" },
    { name: "Tailwind 4", color: "text-teal-400" },
  ],
  icpConfig: {
    name: "", // 替换：你自己的 ICP 备案号；无备案则留空隐藏。
    link: "https://beian.miit.gov.cn/",
  },
  moeIcpConfig: {
    name: "", // 替换：你自己的萌备案号；不使用则留空。
    link: "", // 替换：你的萌备案详情页完整地址。
  },

  chatterTitle: "留言", // 替换：栏目标题。
  chatterDescription: "在这里填写你的栏目简介", // 替换：栏目介绍。
};
