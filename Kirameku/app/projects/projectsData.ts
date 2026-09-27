export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  coverImage: string;
  techStack: string[];
  links: {
    github?: string;
    gitee?: string;
    live?: string;
    docs?: string;
  };
  featured?: boolean;
  status: "active" | "archived" | "developing";
  statusLabel: string;
}

// 替换：复制下面的对象添加项目，id 保持唯一；没有项目时可以使用空数组 []。
export const projects: Project[] = [
  {
    id: "Air_giutar", // 替换：唯一项目标识，建议使用英文和连字符。
    name: "Air_giutar On iPad by Swift",
    description: "使用Swift，在iPad上通过前置摄像头识别手势，演奏吉他和弦",
    longDescription: "使用Swift，在iPad上通过前置摄像头识别手势，演奏吉他和弦。主要应用Swift Vision库制作。项目在复杂背景下的识别准确率有待提高。",
    coverImage: "/images/cover-placeholder.svg", // 替换：项目封面图片路径。
    techStack: ["Swift"], // 替换：例如 ["Python", "React"]。
    links: {
      github: "", // 替换：项目 GitHub 地址，留空隐藏。
      gitee: "", // 替换：项目 Gitee 地址，留空隐藏。
      live: "", // 替换：线上演示地址，留空隐藏。
      docs: "", // 替换：文档地址，留空隐藏。
    },
    featured: true, // 替换：是否标记为精选项目。
    status: "active", // 可选 active（维护中）、archived（已归档）、developing（开发中）。
    statusLabel: "迭代维护中", // 替换：展示给访客的状态文字。
  },
];
