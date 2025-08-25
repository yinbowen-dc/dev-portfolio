import { RiTwitterXFill } from "@/components/icons/twitter";
import { CalendarDays, Linkedin } from "lucide-react";
import { DATA } from "@/data/config/site.config";

export const LinksCard = () => {
  return (
    <div className="flex gap-2">
      <a
        href={DATA.contact.social.LinkedIn.url}
        target="_blank"
        className="hover:scale-95 duration-500 transform-gpu h-[4.125rem] flex flex-col justify-center items-center rounded-lg text-white bg-[#2867b2] w-full "
      >
        <Linkedin />
        <p className="text-[12px] text-white/90 -rotate-3">
          (serious stuff 😤)
        </p>
      </a>
      <a
        href={DATA.contact.social.X.url}
        target="_blank"
        className="hover:scale-95 duration-500 transform-gpu h-[4.125rem] flex flex-col justify-center items-center rounded-lg text-white bg-[#1c1d1f] w-full"
      >
        <RiTwitterXFill className="text-2xl" />
        <p className="text-[12px] text-white/55 ">(share memes ;)</p>
      </a>
    </div>
  );
};
