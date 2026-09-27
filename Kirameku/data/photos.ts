export interface Photo {
  id: string;
  url: string;
  caption: string;
  orientation: "landscape" | "portrait" | "square";
}

export interface PhotoDay {
  date: string;
  label: string;
  photos: Photo[];
}

// 本地数据格式示例；当前照片墙从后端读取，不会自动加载此数组。
// 替换：如需自行接入本地数据，可取消注释并填写你的照片。
export const photoDays: PhotoDay[] = [
  // {
  //   date: "2026-01-01", // 替换：YYYY-MM-DD 格式日期。
  //   label: "你的拍摄日期或分组名称",
  //   photos: [
  //     {
  //       id: "your-photo", // 替换：唯一照片标识。
  //       url: "/images/cover-placeholder.svg",
  //       caption: "你的照片说明",
  //       orientation: "landscape", // 横图 landscape、竖图 portrait、方图 square。
  //     },
  //   ],
  // },
];
