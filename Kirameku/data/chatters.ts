export interface Chatter {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
}

// 本地随想数据格式示例；当前主站和花园首页均读取后端，不会自动加载此数组。
// 替换：如需自行接入本地数据，可取消注释并填写你的随想。
export const chattersData: Chatter[] = [
  // {
  //   slug: "your-entry-slug", // 替换：与已有文章 slug 一致。
  //   title: "你的随想标题",
  //   description: "你的随想摘要",
  //   date: "2026-01-01", // 替换：YYYY-MM-DD 格式日期。
  //   tags: ["你的标签"],
  // },
];
