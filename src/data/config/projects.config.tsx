import { Icons } from "@/components/icons";

export const PROJECTS = [
  // VideoLingo：AI翻译工程
  {
    title: "VideoLingo(Connect the World, Frame by Frame)",
    titleZh: "VideoLingo（逐帧连接世界）",
    href: "https://github.com/yinbowen-dc/VideoLingo",
    dates: "Jan 2025 - Feb 2025",
    project_type: "myworks",
    featured: true,
    active: false,
    archived: true,
    forked: true,
    description:
      "VideoLingo is an all-in-one video translation, localization, and dubbing tool aimed at generating Netflix-quality subtitles. It eliminates stiff machine translations and multi-line subtitles while adding high-quality dubbing, enabling global knowledge sharing across language barriers.",
    descriptionZh:
      "VideoLingo 是一款集视频翻译、本地化与配音于一体的工具，目标是生成 Netflix 级别的字幕。它消除了生硬的机器翻译和多行字幕问题，同时提供高质量配音，让知识跨越语言障碍实现全球共享。",
    technologies: [
      "Python" 
      ,"Streamlit"
      ,"WhisperX" 
      ,"FFmpeg"
      ,"yt-dlp"
      ,"OpenAI GPT-4"
      ,"Edge/Azure TTS" 
    ],
    links: [
      {
        type: "Source",
        href: "https://github.com/yinbowen-dc/VideoLingo",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
    video: "",
  },

  // -- 客户项目-公司项目 etc
  {
    title: "Enterprise Data Warehouse Architecture & Optimization",
    titleZh: "企业级数据仓库架构与优化",
    href: "#",
    dates: "Jan 2025 - Feb 2025",
    project_type: "clientworks",
    featured: true,
    active: true,
    archived:false,
    description:
      "As a Data Warehouse Engineer, I specialize in building and optimizing the foundational data infrastructure for enterprise-level data products. My work involves sophisticated data modeling for high-volume business domains, particularly in short-video e-commerce, encompassing search and general e-commerce operations. While routine, these tasks, such as implementing extensive data partitioning and sharding strategies, are crucial for managing petabyte-scale datasets and ensuring the scalability, efficiency, and integrity of our internal data assets.",
    descriptionZh:
      "作为数据仓库工程师，我专注于构建和优化企业级数据产品的底层数据基础设施。工作涉及高流量业务域的复杂数据建模，尤其是短视频电商领域，涵盖搜索和通用电商业务。这些任务虽属日常，但如大规模数据分区与分片策略的落地，对于管理 PB 级数据集、保障内部数据资产的可扩展性、效率与完整性至关重要。",
    technologies: [
      "Spark" 
      ,"Flink"
      ,"Clickhouse" 
      ,"Kafka"
      ,"SpringBoot"
      ,"Vue"
    ],
    links: [
      {
        type: "Source",
        href: "",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
    video: "",
  },
];