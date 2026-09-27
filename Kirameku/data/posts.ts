export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  cover: string;
}

// 本地文章数据格式示例；当前主站和花园首页均读取后端，不会自动加载此数组。
// 替换：如需自行接入本地数据，可取消注释并填写你的文章。
export const postsData: Post[] = [
  // {
  //   slug: "your-post-slug", // 替换：与后端文章 slug 一致。
  //   title: "你的文章标题",
  //   description: "你的文章摘要",
  //   date: "2026-01-01", // 替换：YYYY-MM-DD 格式日期。
  //   category: "你的分类",
  //   tags: ["你的标签"],
  //   cover: "/images/cover-placeholder.svg",
  // },
];
