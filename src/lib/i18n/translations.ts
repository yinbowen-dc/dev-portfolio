export type Language = "en" | "zh";

export interface Translations {
  data: { description: string; bio: string; connect: string; career: string };
  nav: { about: string; projects: string; blog: string; reach: string; language: string; theme: string };
  hero: { greeting: string; resume: string };
  bio: { heading: string };
  blog: {
    badge: string;
    heading: string;
    subheading: string;
    description: string;
    linkText: string;
    pageHeading: string;
    pageDesc: string;
    platformsHeading: string;
    platforms: {
      bilibili: { name: string; desc: string };
      juejin: { name: string; desc: string };
      medium: { name: string; desc: string };
    };
  };
  projects: {
    badge: string;
    tabMyworks: string;
    tabClientworks: string;
    heading: string;
    description: string;
    linkText: string;
    pageHeadingMyworks: string;
    pageDescMyworks: string;
    pageHeadingClientworks: string;
    pageDescClientworks: string;
  };
  contact: {
    badge: string;
    heading: string;
    description: string;
    namePlaceholder: string;
    placeholders: string[];
  };
  about: {
    subtitle: string;
    education: string;
    work: string;
    anime: string;
    books: string;
    connect: string;
  };
  workItems: Array<{
    title: string;
    role: string;
    location: string;
    description: Array<{ text: string }>;
  }>;
  educationItems: Array<{
    school: string;
    location: string;
    degree: string;
  }>;
  toast: {
    required: string;
    sending: string;
    success: string;
    error: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    data: {
      description:
        "Data Engineer| Full Stack Developer | Quant Trader| Technology Geeker",
      bio: "Hey, I'm a Data Engineer based in [Beijing](https://maps.app.goo.gl/UujHe5K394Fvpv3M7), currently providing e-commerce data services at Tencent and exploring Agent-related product opportunities. Keeping up with AI & Web3 tech, always staying in sync with the latest innovations. I'm also a quant trader (though I'm still in the red, but profitability is just around the corner!). Beyond my day job, I'm actively exploring a second growth curve — working towards building a complete business loop around hardware-software tech products. When I'm not deep in code, I've recently gotten hooked on tennis 🎾, and you'll still find me buried in books or cruising on my motorcycle. My idol is Elon Musk - despite his controversial political moves, I really admire his spirit. Aspiring to become a tech geek who creates world-changing products.",
      connect:
        "Let's take on challenging endeavors and create new value for the world alongside exceptional individuals. If you're interested in collaboration or information exchange, feel free to reach out through [X/Twitter](https://x.com/GaiyuLuo47060), [Instagram](https://www.instagram.com/luogaiyu3/?igsh=MTJyZmloazkyODZtcA%3D%3D#), [WeChat](/vx.png), or send me an **email: (self_effacing@163.com)**. When I'm gone, I hope that beyond my tombstone, my products will stand as testament to the fact that I once soared.",
      career:
        "I started programming at 18 when I entered the Data Science and Big Data Technology program at [Chongqing University of Technology](https://www.cqut.edu.cn/) (due to China's education system and the limitations of being a small-town academic student, I didn't have access to quality resources earlier). After two years of intensive professional courses and self-study, I successfully won second place in [Alibaba Tianchi Challenge](https://tianchi.aliyun.com/competition/entrance/531912/score) and other competitions, marking some notable achievements in the Big Data field (though looking at it now, Big Data seems to be declining). On the internet, I go by the name [Darkchunk](https://account.bilibili.com/account/home?spm_id_from=333.1007.0.0). Won't you ask me what this name means? [Click here to know more](/about).",
    },
    hero: {
      greeting: "Hey,Bro, I'm",
      resume: "Resume",
    },
    nav: {
      about: "About",
      projects: "Projects",
      blog: "Blogs",
      reach: "Reach",
      language: "Language",
      theme: "Theme",
    },
    bio: {
      heading: "For Your Information",
    },
    blog: {
      badge: "📢 Blog News",
      heading: "Sharing thoughts",
      subheading: "Tech, Life, Wealth, Travel",
      description:
        "At the current stage of website development, I'm building my own MVP, aiming to create a mobile app that allows me to record my thoughts anytime, anywhere. My primary work involves APP traffic analysis and traffic shaping. Specifically, I use big data technologies (such as Spark, Flink, and Kafka) to process TB and PB-level data for real-time signal analysis, helping algorithms better understand user intent. Additionally, through offline analysis, I assist businesses in understanding their functional data status more clearly. This includes tasks such as building user profiles for personalized recommendation systems tailored to individual users. If you're interested in my work, you can follow my updates on Medium & Juejin (Chinese tech community platform). However, please note that as of August 25, 2025, my Medium page remains empty.",
      linkText: "blog page",
      pageHeading: "Droppin' some thoughts",
      pageDesc:
        "Deep-divin' into the world of tech, crypto, and the wild ride that is life. Check out my latest drops – hope they vibe with you!",
      platformsHeading: "Find me on",
      platforms: {
        bilibili: { name: "DC公开课-DarkChunk", desc: "Video tutorials & tech content" },
        juejin: { name: "Juejin", desc: "Chinese tech articles" },
        medium: { name: "Medium", desc: "English articles & essays" },
      },
    },
    projects: {
      badge: "🎮 Epic Trick",
      tabMyworks: "Self Grind",
      tabClientworks: "Client Hustle",
      heading: "Some of my cool shits",
      description:
        "I've been buildin' some dope Web3 stuff, from slick dApps to full-blown solutions. Here's a taste of my favs – check out more",
      linkText: "projects page",
      pageHeadingMyworks: "Some dope stuff I've been hacking on 💻",
      pageDescMyworks:
        "I've been grindin' on all sorts of projects – from slick landing pages to full-on Web3 dApps. Here's the collection of my builds.",
      pageHeadingClientworks: "Client Work 🤝",
      pageDescClientworks:
        "Projects built for clients and enterprise engagements.",
    },
    contact: {
      badge: "🍺 Messaging Hub",
      heading: "Hit me up",
      description:
        "Got something to say? Drop your message below, and let's talk about future data product, or some tech topic like web3, show me up. No spam, Friends here and friends there.",
      namePlaceholder: "Ur name dude",
      placeholders: [
        "Send message to darkchunk",
        "Connect to the decentralized future",
        "Drop a message, let's build the metaverse",
        "Deploy your ideas, no central authority",
        "The chain awaits your next big move",
      ],
    },
    about: {
      subtitle:
        "In this Web2 domain, I will demonstrate my path of development.",
      education: "Educational Background",
      work: "Work Expierence",
      anime: "Life Movie",
      books: "Reconmend Books",
      connect: "Call me",
    },
    workItems: [
      {
        title: "Tencent WeChat",
        role: "Data Engineer",
        location: "China",
        description: [
          { text: "Working on Tencent's e-commerce data platform within the WeChat ecosystem." },
          { text: "Providing data services powered by AI technology — combining traditional data engineering with LLM-based solutions to deliver intelligent data insights and full-stack service capabilities." },
          { text: "Building AI Agents and knowledge bases to automate data analysis workflows." },
        ],
      },
      {
        title: "Kwai (Short Video Top2 in China)",
        role: "Data Engineer",
        location: "On-site, Beijing, China",
        description: [
          { text: "Work on Kwai Short Video Platform, a video platform in China with 200 million users, 100 million daily active users, and 1000 million video views per day." },
          { text: "Providing PB-level data dimension modeling, metric governance, and stability assurance for short-video e-commerce and search businesses, as well as activity assurance to support top-tier streamer live broadcasts." },
          { text: "Development services for enterprise-level data platforms, providing internal data development support for enterprises." },
        ],
      },
    ],
    educationItems: [
      {
        school: "Data Science & Big Data Technology",
        location: "Chongqing University of Technology (CQUT)",
        degree: "Bachelor of Data Science & Big Data Technology, GPA:3.3/4.00",
      },
    ],
    toast: {
      required: "Both name and message are required!",
      sending: "Ur message is being mined...",
      success: " Tx confirmed! live on-chain to darkchunk!",
      error: "Message failed. Please try again.",
    },
  },
  zh: {
    data: {
      description: "数据工程师 | 全栈开发者 | 量化交易 | 技术极客",
      bio: "嘿，我是一名数据工程师，现居北京，目前在腾讯提供电商数据服务，同时探索 Agent 相关产品方向。持续关注 AI 与 Web3 技术，始终与最新创新保持同步。我还是一名量化交易者（虽然目前还在亏损，但盈利就在眼前！）。工作之外，我正在积极探索第二曲线——希望围绕软硬件结合的科技产品完成商业闭环。最近迷上了网球 🎾，不打球的时候就捧着书或者骑摩托。我的偶像是埃隆·马斯克——由衷钦佩他的精神。立志成为一名能创造改变世界产品的技术极客。",
      connect:
        "让我们携手并肩、迎接挑战，与优秀的人一起为世界创造新价值。如果有意合作或交流，欢迎通过 [X/Twitter](https://x.com/GaiyuLuo47060)、[Instagram](https://www.instagram.com/luogaiyu3/?igsh=MTJyZmloazkyODZtcA%3D%3D#)、[微信](/vx.png) 联系我，或发送**邮件：(self_effacing@163.com)**。愿在我离开之后，墓碑之外，我的产品能成为印记——证明我曾经翱翔于世。",
      career:
        "我18岁开始编程，进入[重庆理工大学](https://www.cqut.edu.cn/)数据科学与大数据技术专业（受限于中国教育体制和小镇学生获取优质资源的局限，无缘更早接触编程）。经过两年密集的专业课和自学，成功在[阿里天池大赛](https://tianchi.aliyun.com/competition/entrance/531912/score)等比赛中摘得二等奖，在大数据领域留下了一些值得骄傲的成绩（尽管如今回头看，大数据似乎正在走下坡路）。在互联网上，我叫 [Darkchunk](https://account.bilibili.com/account/home?spm_id_from=333.1007.0.0)。好奇这个名字的来历？[点击这里了解更多](/about)。",
    },
    hero: {
      greeting: "嘿，老铁，我是",
      resume: "简历",
    },
    nav: {
      about: "关于",
      projects: "项目",
      blog: "博客",
      reach: "联系",
      language: "语言",
      theme: "主题",
    },
    bio: {
      heading: "关于我",
    },
    blog: {
      badge: "📢 博客动态",
      heading: "分享想法",
      subheading: "科技、生活、财富、旅行",
      description:
        "在网站开发的当前阶段，我正在打造自己的 MVP，目标是做一款能随时随地记录想法的移动应用。我的主要工作涉及 APP 流量分析与流量塑形——具体来说，是利用大数据技术（如 Spark、Flink、Kafka）处理 TB 和 PB 级数据进行实时信号分析，帮助算法更好地理解用户意图。与此同时，通过离线分析帮助业务方更清晰地了解功能数据状态，包括构建面向个性化推荐系统的用户画像。如果你对我的工作感兴趣，可以关注我在 Medium 和掘金（中文技术社区）上的更新。不过请注意，截至2025年8月25日，我的 Medium 主页仍为空白。",
      linkText: "博客页面",
      pageHeading: "分享一些想法",
      pageDesc:
        "深潜科技、加密与人生这趟野生旅程。看看我的最新内容——希望能和你产生共鸣！",
      platformsHeading: "我在这里更新",
      platforms: {
        bilibili: { name: "DC公开课-DarkChunk", desc: "视频教程与技术分享" },
        juejin: { name: "掘金", desc: "中文技术文章" },
        medium: { name: "Medium", desc: "英文文章与随笔" },
      },
    },
    projects: {
      badge: "🎮 我的项目",
      tabMyworks: "个人作品",
      tabClientworks: "客户项目",
      heading: "我的一些项目",
      description:
        "我一直在打造一些有意思的 Web3 玩意儿，从 dApp 到完整解决方案都有。以下是部分精选——更多内容请看",
      linkText: "项目页面",
      pageHeadingMyworks: "一些我一直在搞的东西 💻",
      pageDescMyworks:
        "从落地页到完整 Web3 dApp，各种项目我都搞过。这里是我所有作品的合集。",
      pageHeadingClientworks: "客户合作项目 🤝",
      pageDescClientworks: "为客户和企业打造的项目。",
    },
    contact: {
      badge: "🍺 联系我",
      heading: "来找我聊聊",
      description:
        "有什么想说的？在下面留下你的消息，我们聊聊数据产品、Web3 或任何你感兴趣的技术话题。不发垃圾信息，朋友遍天下。",
      namePlaceholder: "你的名字",
      placeholders: [
        "给 darkchunk 发条消息",
        "连接去中心化的未来",
        "留言吧，一起共建元宇宙",
        "部署你的想法，无需中心化权威",
        "区块链在等待你的下一步大动作",
      ],
    },
    about: {
      subtitle: "在这个 Web2 的世界里，我将展示我的成长之路。",
      education: "教育背景",
      work: "工作经历",
      anime: "生活影视",
      books: "推荐书单",
      connect: "联系方式",
    },
    workItems: [
      {
        title: "腾讯 微信",
        role: "数据工程师",
        location: "中国",
        description: [
          { text: "负责腾讯微信生态内电商数据平台相关工作。" },
          { text: "结合 AI 技术提供数据服务，将传统数据工程与大模型方案结合，输出智能化数据洞察与全栈服务能力。" },
          { text: "构建 AI 智能体与知识库，实现数据分析流程自动化。" },
        ],
      },
      {
        title: "快手",
        role: "数据工程师",
        location: "北京，中国",
        description: [
          { text: "就职于快手短视频平台。" },
          { text: "为电商和搜索业务提供 PB 级数据维度建模、指标治理与稳定性保障，并为头部主播直播活动提供保障支持。" },
          { text: "提供企业级数据平台开发服务，为企业提供内部数据开发支撑。" },
        ],
      },
    ],
    educationItems: [
      {
        school: "数据科学与大数据技术",
        location: "重庆理工大学（CQUT）",
        degree: "数据科学与大数据技术学士，GPA: 3.3/4.00",
      },
    ],
    toast: {
      required: "姓名和消息均为必填项！",
      sending: "消息正在上链中...",
      success: "交易已确认！消息已成功发送给 darkchunk！",
      error: "发送失败，请重试。",
    },
  },
};
