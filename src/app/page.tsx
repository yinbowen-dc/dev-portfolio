"use client";
import { useState, useEffect } from "react";
import { Lens } from "@/components/acternityui/lens";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import Skill from "@/components/skill";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/config/site.config";
import {
  AlarmClock,
  CircleArrowOutUpRight,
  LocateFixed,
  Paperclip,
  PartyPopper,
} from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";
import { PlaceholdersAndVanishInput } from "@/components/acternityui/vanish-input";
import { Spotlight } from "@/components/acternityui/spotlight";
import { PROJECTS } from "@/data/config/projects.config";
import { BlogCard } from "@/components/blog-card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GridCards } from "@/components/grid-cards";
const BLUR_FADE_DELAY = 0.04;

interface BlogsI {
  slug: string;
  metadata: {
    title: string;
    summary: string;
    publishedAt: string;
    icon: string;
    featured: boolean;
    readTime: string;
  };
}
export default function Page() {
  const [blogPosts, setBlogPosts] = useState<BlogsI[]>([]);
  const [isNsl, setIsNsl] = useState(false);
  const [isInputLoading, setIsInputLoading] = useState(false);
  const [mail, setMail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [triggerDisappear, setTriggerDisappear] = useState(false);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch("/api/blogs");
        if (!response.ok) {
          throw new Error("Failed to fetch blog posts");
        }
        const data = await response.json();
        setBlogPosts(data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

    const checkNewsletterSubscription = () => {
      if (typeof window !== "undefined") {
        const newsletterSubscription = localStorage.getItem("devwtf-nsl");
        if (newsletterSubscription) {
          setIsNsl(false);
        } else {
          setIsNsl(false);
        }
      }
    };

    if (!isNsl && blogPosts.length === 0) {
      checkNewsletterSubscription();
    }

    if (blogPosts.length === 0) {
      fetchBlogPosts();
    }
  }, [blogPosts.length, isNsl]);

  const [hovering, setHovering] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  // 框词轮播
  const placeholders = [
    "Send message to 0xSabdadev",
    "Connect to the decentralized future",
    "Drop a message, let's build the metaverse",
    "Deploy your ideas, no central authority",
    "The chain awaits your next big move",
  ];

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMail(e.target.value);
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !mail.trim()) {
      toast.error("Both name and message are required!");
      return;
    }
    setTriggerDisappear(true);
    setIsInputLoading(true);
    toast.info("Ur message is being mined...");
    try {
      const response = await fetch("/api/telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, message: mail }),
      });

      if (!response.ok) {
        throw new Error("Send Message failed");
      }

      const data = await response.json();
      setIsInputLoading(false);
      console.log("Message successful:", data);
      // Show success toast
      toast.success(" Tx confirmed! live on-chain to 0xSabdadev!");
      // Update local storage to indicate subscription
      localStorage.setItem("devwtf-nsl", data.id);
      // Update state to reflect subscription
      setIsNsl(false);
      setTriggerDisappear(false);
    } catch (error) {
      setIsInputLoading(false);
      console.error("Error messaging:", error);
      // Show error toast
      toast.error("Message failed. Please try again.");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <Spotlight
        className="fixed -top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl italic font-medium tracking-tighter sm:text-5xl xl:text-5xl/none"
                yOffset={8}
                text={`Hey,Bro, I'm ${DATA.name.split(" ")[0]} `}
              />
              <BlurFadeText
                className="max-w-[400px] text-sm mt-2 font-bold text-gray-500"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
              <BlurFade delay={BLUR_FADE_DELAY}>
                <div className="flex flex-wrap gap-1 h-full w-full">
                  <Badge variant="secondary" className="cursor-pointer">
                    <span className="size-4 mr-1">📍</span>
                    {DATA.location}
                  </Badge>
                  <Badge variant="secondary" className="cursor-pointer">
                    <AlarmClock className="size-4 mr-1" />
                    {currentTime.toLocaleTimeString(DATA.localCode, {
                      timeZone: DATA.timeZone,
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </Badge>
                  <Link href={DATA.resume} target="_blank">
                    <Badge variant="secondary" className="flex cursor-pointer">
                      <span className="size-4 mr-1">✨</span>
                      Resume
                    </Badge>
                  </Link>
                </div>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Lens hovering={hovering} setHovering={setHovering}>
                <Avatar className="size-28 border cursor-pointer rounded-none">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </Lens>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="bio">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold mb-1 md:mb-0">For You Information</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-[14px] md:text-md text-muted-foreground dark:prose-invert text-justify">
            {DATA.bio}
          </Markdown>
        </BlurFade>
      </section>
      <section id="stack">
        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <Skill />
        </BlurFade>
      </section>
      <section id="career">
        <BlurFade delay={BLUR_FADE_DELAY * 8}>
          <GridCards />
        </BlurFade>
      </section>
      <section id="blogs">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  📢 Blog News
                </div>
               
                <h2 className="text-left text-3xl font-medium tracking-tighter sm:text-5xl">
                  Sharing thoughts
                  <br></br>Tech, Life, Wealth, Travel
                </h2>
                <p className="italic text-left text-muted-foreground md:text-lg/relaxed lg:text-lg/relaxed xl:text-lg/relaxed">
                  At the current stage of website development, I'm building my own MVP, aiming to create a mobile app 
                  that allows me to record my thoughts anytime, anywhere. 
                  My primary work involves APP traffic analysis and traffic shaping. 
                  Specifically, I use big data technologies (such as Spark, Flink, and Kafka) 
                  to process TB and PB-level data for real-time signal analysis, helping algorithms better 
                  understand user intent. Additionally, through offline analysis, I assist businesses in 
                  understanding their functional data status more clearly. This includes tasks such as building
                  user profiles for personalized recommendation systems tailored to individual users.
                  If you're interested in my work, you can follow my updates on Medium & Juejin (Chinese tech community platform).
                  However, please note that as of August 25, 2025, my Medium page remains empty.
                  {" "}
                  <Link href="/blog" className="text-blue-500 hover:underline">
                    blog page{" "}
                  </Link>
                  or{" "}
                  <Link
                    href="https://medium.com/@gaiyuluo"
                    target="_blank"
                    className="text-blue-500 hover:underline"
                  >
                    Medium
                  </Link>
                  or 
                  <Link
                    href="https://juejin.cn/user/3892711776064952"
                    target="_blank"
                    className="text-blue-500 hover:underline"
                  >
                    juejin
                  </Link>
                  .
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="flex flex-col gap-3 w-full">
            <BlurFade delay={BLUR_FADE_DELAY * 14}>
              <ul className="divide-y divide-dashed">
                {blogPosts
                  .filter((post) => post.metadata.featured)
                  .sort(
                    (a, b) =>
                      new Date(b.metadata.publishedAt).getTime() -
                      new Date(a.metadata.publishedAt).getTime()
                  )
                  .slice(0, 3)
                  .map((post, id) => (
                    <BlurFade
                      key={post.slug}
                      delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                    >
                      <BlogCard
                        href={`/blog/${post.slug}`}
                        title={post.metadata.title}
                        description={post.metadata.summary}
                        publishedAt={post.metadata.publishedAt}
                        iconUrl={post.metadata.icon}
                        readTime={post.metadata.readTime}
                      />
                    </BlurFade>
                  ))}
              </ul>
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="flex flex-col items-center">
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm mb-5">
              🎮 Epic Trick
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <Tabs
              defaultValue="myworks"
              className="flex flex-col items-center justify-center w-full"
            >
              <TabsList className="grid w-[400px] grid-cols-2 mb-4">
                <TabsTrigger value="myworks">Self Grind</TabsTrigger>
                <TabsTrigger value="clientworks">Client Hustle</TabsTrigger>
              </TabsList>
              <TabsContent value="myworks">
                <BlurFade delay={BLUR_FADE_DELAY}>
                  <div className="space-y-12 w-full">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                      <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mt-2">
                          Some of my cool shits
                        </h2>
                        <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                          I&apos;ve been buildin' some dope Web3 stuff, from
                          slick dApps to full-blown solutions. Here’s a taste of
                          my favs – check out more{" "}
                          <Link
                            href="/projects"
                            className="text-blue-500 hover:underline"
                          >
                            projects page
                          </Link>
                          .
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto mt-8">
                      {PROJECTS.filter((project) => project.featured && project.project_type === "myworks").map(
                        (project, id) => (
                          <BlurFade
                            key={project.title}
                            delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                          >
                            <ProjectCard
                              href={project.href}
                              active={project.active}
                              archived={project.archived}
                              key={project.title}
                              title={project.title}
                              description={project.description}
                              dates={project.dates}
                              tags={project.technologies}
                              image={project.image}
                              video={project.video}
                              links={project.links}
                            />
                          </BlurFade>
                        )
                      )}
                    </div>
                  </div>
                </BlurFade>
              </TabsContent>
              <TabsContent value="clientworks">
                 <BlurFade delay={BLUR_FADE_DELAY}>
                  <div className="space-y-12 w-full">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                      <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mt-2">
                          Some of my cool shits
                        </h2>
                        <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                          I&apos;ve been buildin' some dope Web3 stuff, from
                          slick dApps to full-blown solutions. Here’s a taste of
                          my favs – check out more{" "}
                          <Link
                            href="/projects"
                            className="text-blue-500 hover:underline"
                          >
                            projects page
                          </Link>
                          .
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto mt-8">
                      {PROJECTS.filter((project) => project.featured && project.project_type === "clientworks").map(
                        (project, id) => (
                          <BlurFade
                            key={project.title}
                            delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                          >
                            <ProjectCard
                              href={project.href}
                              active={project.active}
                              archived={project.archived}
                              key={project.title}
                              title={project.title}
                              description={project.description}
                              dates={project.dates}
                              tags={project.technologies}
                              image={project.image}
                              video={project.video}
                              links={project.links}
                            />
                          </BlurFade>
                        )
                      )}
                    </div>
                  </div>
                </BlurFade>

              </TabsContent>
            </Tabs>
          </BlurFade>
        </div>
      </section>

      <section id="newsletter">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                🍺 Messaging Hub 
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Hit me up
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Got something to say? Drop your message below, and let’s talk
                about future data product, or some tech topic like web3, show me up. 
                No spam, Friends here and friends there.
              </p>
              <div className="pt-10 flex flex-row ">
                {/* Name Input */}
                <div className="sm:w-1/3 w-full">
                  <PlaceholdersAndVanishInput
                    type="text"
                    placeholders={["Ur name dude"]}
                    value={name}
                    onChange={handleNameChange}
                    onSubmit={onSubmit}
                    disabled={isInputLoading}
                    roundedLeft
                    triggerDisappear={triggerDisappear}
                  />
                </div>
                <div className="sm:w-2/3 w-full mt-0">
                  <PlaceholdersAndVanishInput
                    type="text"
                    placeholders={placeholders}
                    value={mail}
                    onChange={handleChange}
                    onSubmit={onSubmit}
                    disabled={isInputLoading}
                    submitButton 
                    roundedRight
                    triggerDisappear={triggerDisappear}
                  />
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
