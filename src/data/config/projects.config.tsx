import { Icons } from "@/components/icons";

export const PROJECTS = [
  // VideoLingo：AI翻译工程
  {
    title: "VideoLingo(Connect the World, Frame by Frame)",
    href: "https://github.com/yinbowen-dc/VideoLingo",
    dates: "Jan 2025 - Feb 2025",
    project_type: "myworks",
    featured: true,
    active: false,
    archived:true,
    description:
      "VideoLingo is an all-in-one video translation, localization, and dubbing tool aimed at generating Netflix-quality subtitles. It eliminates stiff machine translations and multi-line subtitles while adding high-quality dubbing, enabling global knowledge sharing across language barriers.",
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
    href: "#",
    dates: "Jan 2025 - Feb 2025",
    project_type: "clientworks",
    featured: true,
    active: true,
    archived:false,
    description:
      "As a Data Warehouse Engineer, I specialize in building and optimizing the foundational data infrastructure for enterprise-level data products. My work involves sophisticated data modeling for high-volume business domains, particularly in short-video e-commerce, encompassing search and general e-commerce operations. While routine, these tasks, such as implementing extensive data partitioning and sharding strategies, are crucial for managing petabyte-scale datasets and ensuring the scalability, efficiency, and integrity of our internal data assets.",
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