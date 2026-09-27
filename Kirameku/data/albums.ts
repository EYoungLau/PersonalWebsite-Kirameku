export interface Photo {
  url: string;
  caption?: string;
}

export interface Album {
  id: string;
  title: string;
  description: string;
  cover: string;
  date: string;
  photos: Photo[];
}

// 本地数据格式示例；当前照片墙从后端 /api/albums 读取，不会自动加载此数组。
// 替换：如需自行接入本地数据，可取消注释并填写你的相册。
export const albums: Album[] = [
  // {
  //   id: "your-album",
  //   title: "你的相册标题",
  //   description: "你的相册描述",
  //   cover: "/images/cover-placeholder.svg",
  //   date: "2026.01", // 替换：展示用日期。
  //   photos: [{ url: "/images/cover-placeholder.svg", caption: "你的照片说明" }],
  // },
];
