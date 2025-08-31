export interface Book {
  title: string;
  href: string;
  altTitle?: string;
  imgName: string;
  starred?: boolean;
}

export const BookData: Book[] = [
{
    title: "Why Greatness Cannot Be Planned: The Myth of the Objective",
    altTitle: "Stay curious, stay open, stay eager to explore. Life is not designed, but conquered through continuous advancement.",
    href: "https://www.amazon.com/Why-Greatness-Cannot-Planned-Objective/dp/3319155237",
    imgName: "WhyGreatnessCannotBePlanned",
    starred: true,
  },
]
// 这里有一些我推荐的书籍
// 方法论类的 
// 伟大不能被计划
// 大道
// 代码之外
// 黑客与画家
// 马斯克传
// 乔布斯传
// 小米转
// 还有linzhi的
