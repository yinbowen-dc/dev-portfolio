export interface Book {
  title: string;
  titleZh?: string;
  href: string;
  altTitle?: string;
  altTitleZh?: string;
  imgName: string;
  starred?: boolean;
}

export const BookData: Book[] = [
  {
    title: "Why Greatness Cannot Be Planned: The Myth of the Objective",
    titleZh: "伟大不能被计划：目标的神话",
    altTitle: "Stay curious, stay open, stay eager to explore. Life is not designed, but conquered through continuous advancement.",
    altTitleZh: "保持好奇，保持开放，保持探索的热情。人生不是设计出来的，而是在不断前行中征服的。",
    href: "https://www.amazon.com/Why-Greatness-Cannot-Planned-Objective/dp/3319155237",
    imgName: "WhyGreatnessCannotBePlanned",
    starred: true,
  },
]
