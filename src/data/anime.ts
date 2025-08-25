export interface Anime {
  title: string;
  altTitle?: string;
  href: string;
  imgName: string;
  starred?: boolean;
}

export const AnimeData: Anime[] = [
  // 这里改成电影
  {
    title: "Rick and Morty",
    href: "https://en.wikipedia.org/wiki/Rick_and_Morty",
    imgName: "R&M",
    starred: true,
  },
  // 搏击俱乐部
  // 辛普森一家
  // 社交网络
  // 硅谷
  // 百万富豪翻身记 
  // 排球少年
  // 进击的巨人

  // {
  //   title: "Shingeki no Kyojin",
  //   altTitle: "Attack on Titan",
  //   href: "https://myanimelist.net/anime/16498/Shingeki_no_Kyojin",
  //   imgName: "aot",
  // },
  // {
  //   title: "Boku no Hero Academia",
  //   href: "https://myanimelist.net/anime/31964/Boku_no_Hero_Academia",
  //   imgName: "bokhero",
  // },
  // {
  //   title: "Darling in the FranXX",
  //   href: "https://myanimelist.net/anime/35849/Darling_in_the_FranXX",
  //   imgName: "darling",
  //   starred: true,
  // },
  // {
  //   title: "Assassination Classroom",
  //   href: "https://myanimelist.net/anime/24833/Ansatsu_Kyoushitsu",
  //   imgName: "korosensei",
  //   starred: true,
  // },
  
  // {
  //   title: "Classroom of the Elite",
  //   href: "https://myanimelist.net/anime/35507/Youkoso_Jitsuryoku_Shijou_Shugi_no_Kyoushitsu_e",
  //   imgName: "coe",
  //   starred: true,
  // },
  // {
  //   title: "No Game No Life",
  //   href: "https://myanimelist.net/anime/19815/No_Game_No_Life",
  //   imgName: "game",
  // },
  // {
  //   title: "Re:Zero kara Hajimeru Isekai Seikatsu",
  //   altTitle: "Re:Zero − Starting Life in Another World",
  //   href: "https://myanimelist.net/anime/31240/Re_Zero_kara_Hajimeru_Isekai_Seikatsu",
  //   imgName: "rezero",
  //   starred: true,
  // },
  // {
  //   title: "Sword Art Online",
  //   href: "https://myanimelist.net/anime/11757/Sword_Art_Online",
  //   imgName: "sao",
  // },
  // {
  //   title: "Yakusoku no Neverland",
  //   altTitle: "The Promised Neverland",
  //   href: "https://myanimelist.net/anime/37779/Yakusoku_no_Neverland",
  //   imgName: "promised",
  //   starred: true,
  // },
];

// 这里有一些我推荐的书籍
// 方法论类的 
// 代码之外
// 黑客与画家
// 马斯克传
