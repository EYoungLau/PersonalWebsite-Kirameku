export interface Moment {
  id: string;
  content: string;
  images?: string[];
  mood?: string;
  likes: number;
  created_at: string;
}

// 本地数据格式示例；当前说说页面从后端读取，不会自动加载此数组。
// 替换：如需自行接入本地数据，可取消注释并填写你的动态。
export const momentsData: Moment[] = [
  // {
  //   id: "your-moment", // 替换：唯一动态标识。
  //   content: "在这里填写你的动态内容",
  //   images: [], // 替换：图片路径数组；没有图片时保留 []。
  //   mood: "你的心情", // 可选字段，不需要时删除。
  //   likes: 0,
  //   created_at: "2026-01-01T12:00:00+08:00", // 替换：发布时间。
  // },
];
