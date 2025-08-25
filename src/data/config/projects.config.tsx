import { Icons } from "@/components/icons";

export const PROJECTS = [
  // 新增数据
  {
    title: "Threshold Signature Wallet (MPC) Dapps",
    href: "https://github.com/0xSabdadev/TerraVault",
    dates: "Jan 2024 - Feb 2024",
    featured: true,
    active: false,
    archived:true,
    description:
      "Web 3.0 Based Threshold Signature Wallet Dapps implementing Token Standard ERC20 and Threshold Scheme Elliptic Curve Digital Signature (T-ECDSA) Algorithm for improving transaction flow and security from Multisignature Scheme.",
    technologies: [
      "Next14",
      "Moralis",
      "Solidity",
      "Truffle",
      "Openzeppelin",
      "Ganache",
      "TailwindCSS"
    ],
    links: [
      {
        type: "Source",
        href: "https://github.com/0xSabdadev/TerraVault",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
    video: "",
  },
  // // 新增数据
  // {
  //   title: "Threshold Signature Wallet (MPC) Dapps",
  //   href: "https://github.com/0xSabdadev/TerraVault",
  //   dates: "Jan 2024 - Feb 2024",
  //   featured: true,
  //   description:
  //     "Web 3.0 Based Threshold Signature Wallet Dapps implementing Token Standard ERC20 and Threshold Scheme Elliptic Curve Digital Signature (T-ECDSA) Algorithm for improving transaction flow and security from Multisignature Scheme.",
  //   technologies: [
  //     "Next14",
  //     "Moralis",
  //     "Solidity",
  //     "Truffle",
  //     "Openzeppelin",
  //     "Ganache",
  //     "TailwindCSS"
  //   ],
  //   links: [
  //     {
  //       type: "Source",
  //       href: "https://github.com/0xSabdadev/TerraVault",
  //       icon: <Icons.github className="size-3" />,
  //     },
  //   ],
  //   image: "",
  //   video: "",
  // },
  // {
  //   title: "Multi Signature Wallet (MPC) Dapps",
  //   href: "https://github.com/0xSabdadev/vaultharmony-v1",
  //   dates: "Des 2023 - Jan 2024",
  //   featured: true,
  //   active: false,
  //   description:
  //     "Web 3.0 Based Multisignature Wallet Dapps implementing Token Standard ERC20 and integrating with Withdrawal Pattern, External Effects, and Mutual Exclusion for securing Smart Contracts from Reentrancy.",
  //   technologies: [
  //     "Next14",
  //     "Moralis",
  //     "Solidity",
  //     "Truffle",
  //     "Openzeppelin",
  //     "Ganache",
  //     "TailwindCSS"
  //   ],
  //   links: [
  //     {
  //       type: "Journal Publication",
  //       href: "https://ejournal.undip.ac.id/index.php/jmasif/article/view/62835/26061/",
  //       icon: <Icons.globe className="size-3" />,
  //     },
  //     {
  //       type: "Source",
  //       href: "https://github.com/0xSabdadev/vaultharmony-v1",
  //       icon: <Icons.github className="size-3" />,
  //     },
  //   ],
  //   image: "",
  //   video: "",
  // },
  // {
  //   title: "Naruto HandSeals Recognition",
  //   href: "https://github.com/0xSabdadev/NeuralNetwork-YOLOXNano-HandSeals-Recognition",
  //   dates: "",
  //   featured: false,
  //   description:
  //     "This repository publishes trained models and sample programs for recognizing Naruto’s hand signs by using YOLOX-Nano, a deep learning object detection model for hand-sign recognition. The speed has been greatly improved compared to the previous model.",
  //   technologies: [
  //     "OpenCV",
  //     "MobileNetV2",
  //     "TensorFlow",
  //     "Keras",
  //     "Python",
  //     "NeuralNetwork",
  //     "YOLOXNano"
  //   ],
  //   links: [
  //     {
  //       type: "Source",
  //       href: "https://github.com/0xSabdadev/NeuralNetwork-YOLOXNano-HandSeals-Recognition",
  //       icon: <Icons.github className="size-3" />,
  //     },
  //   ],
  //   image: "",
  //   video: "",
  // },
  // {
  //   title: "TokSwap Defi Exchange",
  //   href: "https://github.com/0xSabdadev/react-defi-app",
  //   dates: "",
  //   featured: false,
  //   archived:true,
  //   description:
  //     "Implemented React-based web application from existing design to showcase DeFi exchange products using CoinGecko APIs.",
  //   technologies: ["ReactJS", "Coingecko API", "Hooks"],
  //   links: [
  //     {
  //       type: "Source",
  //       href: "https://github.com/0xSabdadev/react-defi-app",
  //       icon: <Icons.github className="size-3" />,
  //     },
  //   ],
  //   image: "",
  //   video: "",
  // },
  // {
  //   title: "Next13 Fullstack Voting App",
  //   href: "https://github.com/0xSabdadev/next13-fullstack-voting-app",
  //   dates: "",
  //   featured: false,
  //   description:
  //     "Build fullstack voting web app multi role (publisher & participant) with Next13, Prisma SWR, and MongoDB.",
  //   technologies: ["Next13", "Express", "Prisma", "SWR", "MongoDB"],
  //   links: [
  //     {
  //       type: "Source",
  //       href: "https://github.com/0xSabdadev/next13-fullstack-voting-app",
  //       icon: <Icons.github className="size-3" />,
  //     },
  //   ],
  //   image: "",
  //   video: "",
  // },
  // {
  //   title: "MERN LogSecurity Dashboard",
  //   href: "https://github.com/0xSabdadev/mern-logsecurity-dashboard",
  //   dates: "",
  //   featured: false,
  //   description:
  //     "Implemented RBAC (Role-Based Access Control) multi-role auth and log security using JWT from XSS (Cross-Site Scripting) and CSRF (Cross-Site Request Forgery).",
  //   technologies: ["React", "Express", "JWT"],
  //   links: [
  //     {
  //       type: "Source",
  //       href: "https://github.com/0xSabdadev/mern-logsecurity-dashboard",
  //       icon: <Icons.github className="size-3" />,
  //     },
  //   ],
  //   image: "",
  //   video: "",
  // },
  // {
  //   title: "React GraphQL Portfolio",
  //   href: "https://github.com/0xSabdadev/react-graphql-portfolio",
  //   dates: "",
  //   featured: false,
  //   description: "Personal portfolio web app implemented with ReactJS and GraphQL.",
  //   technologies: ["React", "GraphQL", "Gatsby", "Redux", "Styled Components"],
  //   links: [
  //     {
  //       type: "Source",
  //       href: "https://github.com/0xSabdadev/react-graphql-portfolio",
  //       icon: <Icons.github className="size-3" />,
  //     },
  //   ],
  //   image: "",
  //   video: "",
  // },
  // {
  //   title: "React Amazon Ecommerce App",
  //   href: "https://github.com/0xSabdadev/react-amazon-ecommerce-app",
  //   dates: "",
  //   featured: false,
  //   description: "Built Amazon ecommerce app with React Hooks, modern CSS, and Framer Motion.",
  //   technologies: ["React", "Hooks", "FramerMotion"],
  //   links: [
  //     {
  //       type: "Source",
  //       href: "https://github.com/0xSabdadev/react-amazon-ecommerce-app",
  //       icon: <Icons.github className="size-3" />,
  //     },
  //   ],
  //   image: "",
  //   video: "",
  // },
  // {
  //   title: "Fullstack React Ecommerce App",
  //   href: "https://github.com/0xSabdadev/fullstack-react-ecommerce-app",
  //   dates: "",
  //   featured: false,
  //   description:
  //     "Built ecommerce app with React, Material UI, Stripe, Formik, Yup, Strapi, and Redux Toolkit.",
  //   technologies: [
  //     "React",
  //     "Material UI",
  //     "Stripe",
  //     "Formik",
  //     "Yup",
  //     "Strapi",
  //     "Redux Toolkit",
  //   ],
  //   links: [
  //     {
  //       type: "Source",
  //       href: "https://github.com/0xSabdadev/fullstack-react-ecommerce-app",
  //       icon: <Icons.github className="size-3" />,
  //     },
  //   ],
  //   image: "",
  //   video: "",
  // },
];