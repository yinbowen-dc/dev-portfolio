import { ExternalLink, Link } from "lucide-react";

export const WORK = [
  {
    title: "Tencent WeChat",
    role: "Data Engineer",
    dates: "2026 - Present",
    location: "China",
    description: [
      {
        text: "Working on Tencent's e-commerce data platform within the WeChat ecosystem.",
      },
      {
        text: "Providing data services powered by AI technology — combining traditional data engineering with LLM-based solutions to deliver intelligent data insights and full-stack service capabilities.",
        technologies: ["Python", "SQL", "LLM", "RAG", "LangChain"],
      },
      {
        text: "Building AI Agents and knowledge bases to automate data analysis workflows.",
        technologies: ["Next.js", "FastAPI", "Vector DB", "Prompt Engineering"],
      },
    ],
    image: "/wechat.png",
    links: [
      {
        title: "Website",
        href: "https://weixin.qq.com",
        icon: <Link className="size-3" />,
      },
    ],
  },
  {
    title: "Kwai (Short Video Top2 in China)",
    role: "Data Engineer",
    dates: "July 2023 - 2026",
    location: "On-site, Beijing, China",
    description: [
      {
        text: "Work on Kwai Short Video Platform, a video platform in China with 200 million users, 100 million daily active users, and 1000 million video views per day.",
      },
      {
        text: "Providing PB-level data dimension modeling, metric governance, and stability assurance for short-video e-commerce and search businesses, as well as activity assurance to support top-tier streamer live broadcasts.",
        technologies: ["Spark", "Hive", "SQL", "Scala", "Kafka", "Clickhouse", "Flink"],
      },
      {
        text: "Development services for enterprise-level data platforms, providing internal data development support for enterprises.",
        technologies: ["Springboot", "Java", "Vue"],
      },
    ],
    image: "/kwai.png",
    links: [
      {
        title: "Website",
        href: "https://www.kuaishou.com/en",
        icon: <Link className="size-3" />,
      },
    ],
  },
];
