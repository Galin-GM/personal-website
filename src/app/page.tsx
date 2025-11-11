import { Nav } from "@/components/Nav";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { Tag } from "@/components/Tag";
import { projects } from "@/data/projects";
import Image from "next/image";
import { Typing } from "@/components/Typing";


const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header>
        <Nav />
      </header>
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-4 py-10 sm:px-6 sm:py-14">
        <Section id="hero" className="pt-6">
          <div className="grid grid-cols-1 items-center sm:grid-cols-5">
            <div className="relative aspect-[4/5] w-full max-w-[260px] sm:max-w-[320px] justify-self-center sm:justify-self-start sm:col-span-2 overflow-hidden rounded-xl border border-black/[.08] dark:border-white/[.145]">
              <Image
                src="/grad2.jpg"
                alt="Portrait of Galin"
                fill
                priority
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-3 sm:col-span-3">
              <p className="text-base text-foreground/70">Hello, I’m</p>
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                <Typing text="Galin, a developer based in London." speedMs={70} pauseMs={10000} loop={true} />
              </h1>
              <p className="max-w-prose text-foreground/80">
                I'm a recent graduate from King's College London with an MSci in Computer Science. I'm passionate about building clean,
                efficient, and scalable software - from full stack web applications to pipelines that decode and analyse blockchain data.
              </p>
              <p className="max-w-prose text-foreground/80">
                I have experience working across the stack, from languages such as Python, Scala and Javascript, to frameworks such as React and NextJs,
                and cloud technologies like AWS.
              </p>
              <p className="max-w-prose text-foreground/80">
                I'm currently learning to build AI agents using the Vercel AI SDK, exploring how intelligent systems can enhance user experience
                and automation.
              </p>
              <p className="max-w-prose text-foreground/80">
                I'm looking for a new role as a developer. Hire me?
              </p>
              <div className="mt-2 flex gap-3">
                <a href="https://www.linkedin.com/in/mihaylov-galin/" target="_blank" rel="noopener noreferrer" className="inline-flex h-10 items-center justify-center rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]">
                  View LinkedIn
                </a>
                <a href="https://github.com/Galin-GM" target="_blank" rel="noopener noreferrer" className="inline-flex h-10 items-center justify-center rounded-full border border-black/[.08] dark:border-white/[.145] px-5 text-foreground transition-colors hover:border-transparent hover:bg-black/[.04] dark:hover:bg-[#1a1a1a]">
                  <span>View GitHub</span>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="ml-1.5 h-4 w-4"
                  >
                    <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.85 9.7.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.12-1.52-1.12-1.52-.92-.64.07-.63.07-.63 1.02.07 1.56 1.07 1.56 1.07.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.25-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 2.5-.34c.85 0 1.71.12 2.5.34 1.9-1.32 2.74-1.05 2.74-1.05.56 1.4.21 2.45.11 2.7.64.72 1.02 1.63 1.02 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .26.18.59.69.48A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </Section>

        {/* <Section id="skills" title="Skills" titleClassName="text-2xl font-semibold tracking-tight">
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <Tag key={s}>{s}</Tag>
            ))}
          </div>
        </Section> */}

        <Section id="projects" titleClassName="text-2xl font-semibold tracking-tight">
          <h1 className="text-xl sm:text-3xl font-semibold mb-2">
            Projects
          </h1>
          <p className="text-base text-foreground/70 mb-6">Some of the projects I've worked on recently:</p>
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </ul>
        </Section>

        <Section id="contact" title="Contact" titleClassName="text-2xl font-semibold tracking-tight">
          <p className="text-base text-foreground/70">Want to get in contact with me?</p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a
              href="https://www.linkedin.com/in/mihaylov-galin/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-full bg-[#0a66c2] px-5 text-background transition-colors hover:bg-[#0956a5]"
            >
              LinkedIn
            </a>
            <div className="inline-flex h-10 items-center rounded-full border border-black/[.08] dark:border-white/[.145] px-4 text-foreground">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-1.5 h-4 w-4"
              >
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.01L12 12 4 6.01V6h16ZM4 18V8.23l7.4 5.55a1 1 0 0 0 1.2 0L20 8.23V18H4Z" />
              </svg>
              <span>Email</span>
              <span className="ml-2 text-foreground/70 select-text">ggmihaylov02@gmail.com</span>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}
