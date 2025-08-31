export interface Anime {
  title: string;
  altTitle?: string;
  href: string;
  imgName: string;
  starred?: boolean;
}

export const AnimeData: Anime[] = [
  // 这里改成电影
  // 瑞克和莫蒂
  {
    title: "Rick and Morty",
    altTitle: "Break free from mental shackles; if it's theoretically feasible, it can be achieved. No values, no emotions, only strict premises and deductions",
    href: "https://en.wikipedia.org/wiki/Rick_and_Morty",
    imgName: "RickAndMorty",
    starred: true,
  },
  // 搏击俱乐部
  {
    title: "Fight Club",
    altTitle: "You are not your job. You're not how much money you have in the bank. You're not the car you drive. You're not the contents of your wallet. You're not your fucking khakis. You're the all-singing, all-dancing crap of the world.",
    href: "https://en.wikipedia.org/wiki/Fight_Club",
    imgName: "FightClub",
    starred: true,
  },
 // 社交网络
    {
    title: "The Social Network",
    href: "https://en.wikipedia.org/wiki/The_Social_Network",
    imgName: "TheSocialNetwork",
    starred: true,
  },
   // 硅谷
  {
    title: "Silicon Valley",
    href: "https://en.wikipedia.org/wiki/Silicon_Valley_(TV_series)",
    imgName: "SiliconValley",
    starred: true,
  },
  // 百万富豪翻身记 
   {
    title: "Undercover Billionaire",
    href: "https://en.wikipedia.org/wiki/Undercover_Billionaire",
    imgName: "UndercoverBillionaire",
    starred: true,
  },
  // 辛普森一家
  {
    title: "The Simpsons",
    href: "https://en.wikipedia.org/wiki/The_Simpsons",
    imgName: "TheSimpsons",
    starred: true,
  },
  // 排球少年
    {
    title: "Haikyu!!",
    href: "https://en.wikipedia.org/wiki/Haikyu!!",
    imgName: "Haikyu",
    starred: true,
  },
  // 进击的巨人
  {
    title: "Attack on Titan",
    href: "https://en.wikipedia.org/wiki/Attack_on_Titan",
    imgName: "AttackonTitan",
    starred: true,
  },
];
