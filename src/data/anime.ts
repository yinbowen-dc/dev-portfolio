export interface Anime {
  title: string;
  titleZh?: string;
  altTitle?: string;
  altTitleZh?: string;
  href: string;
  imgName: string;
  starred?: boolean;
}

export const AnimeData: Anime[] = [
  {
    title: "Rick and Morty",
    titleZh: "瑞克和莫蒂",
    altTitle: "Break free from mental shackles; if it's theoretically feasible, it can be achieved. No values, no emotions, only strict premises and deductions",
    altTitleZh: "突破思维枷锁；理论上可行的，皆可实现。无价值观，无情感，只有严格的前提与推论。",
    href: "https://en.wikipedia.org/wiki/Rick_and_Morty",
    imgName: "RickAndMorty",
    starred: true,
  },
  {
    title: "Fight Club",
    titleZh: "搏击俱乐部",
    altTitle: "You are not your job. You're not how much money you have in the bank. You're not the car you drive. You're not the contents of your wallet. You're not your fucking khakis. You're the all-singing, all-dancing crap of the world.",
    altTitleZh: "你不是你的工作，不是银行账户上的数字，不是你开的车，不是钱包里的东西，不是你那该死的卡其裤。你是这世界上能歌善舞的一坨垃圾。",
    href: "https://en.wikipedia.org/wiki/Fight_Club",
    imgName: "FightClub",
    starred: true,
  },
  {
    title: "The Social Network",
    titleZh: "社交网络",
    href: "https://en.wikipedia.org/wiki/The_Social_Network",
    imgName: "TheSocialNetwork",
    starred: true,
  },
  {
    title: "Silicon Valley",
    titleZh: "硅谷",
    href: "https://en.wikipedia.org/wiki/Silicon_Valley_(TV_series)",
    imgName: "SiliconValley",
    starred: true,
  },
  {
    title: "Undercover Billionaire",
    titleZh: "百万富翁潜伏记",
    href: "https://en.wikipedia.org/wiki/Undercover_Billionaire",
    imgName: "UndercoverBillionaire",
    starred: true,
  },
  {
    title: "The Simpsons",
    titleZh: "辛普森一家",
    href: "https://en.wikipedia.org/wiki/The_Simpsons",
    imgName: "TheSimpsons",
    starred: true,
  },
  {
    title: "Haikyu!!",
    titleZh: "排球少年",
    href: "https://en.wikipedia.org/wiki/Haikyu!!",
    imgName: "Haikyu",
    starred: true,
  },
  {
    title: "Attack on Titan",
    titleZh: "进击的巨人",
    href: "https://en.wikipedia.org/wiki/Attack_on_Titan",
    imgName: "AttackonTitan",
    starred: true,
  },
];
