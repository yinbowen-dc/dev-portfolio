import { ExternalLink, Link } from "lucide-react";

export const WORK = [
  {
    "title": "Kwai (Short Video Top2 in China)",
    "role": "Data Engineer",
    "dates": "July 2023 - Present",
    "location": "On-site, Xieryqi, Beijing, China",
    description: [
      {
        text:"Work on Kwai Short Video Platform, a video platform in China with 200 million users, 100 million daily active users, and 1000 million video views per day."
      },
      {
        text: "Providing PB-level data dimension modeling, metric governance, and stability assurance for short-video e-commerce and search businesses, as well as activity assurance to support PB-level and top-tier streamer live broadcasts.",
        technologies: ["Spark", "Hive", "SQL", "Scala", "Kafka", "Clickhouse", "Flink"]
      },
      {
        text: "Development services for enterprise-level data platforms, providing internal data development support for enterprises.",
        technologies: ["Springboot", "Java", "Vue"]
      }
    ],
    image: "/kwai.png",
    links: [
      {
        title: "Website",
        href: "https://www.kuaishou.com/en",
        icon: <Link className="size-3" />,
      },
      {
        title: "Proof",
        href: "https://www.linkedin.com/feed/",
        icon: <ExternalLink className="size-3" />,
      },
    ],
  },
];
