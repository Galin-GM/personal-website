import Image from "next/image";
import { Nav } from "@/components/Nav";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { Tag } from "@/components/Tag";
import { EmailButton } from "@/components/EmailButton";
import { projects } from "@/data/projects";

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Python",
  "Scala",
  "Node.js",
  "AWS",
];

const ArrowIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
    <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Home() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <Nav />
      </header>

      <main>
        <Section id="hero" className="hero-section">
          <div className="hero-copy">
            <div className="availability-pill">
              <span aria-hidden="true" />
              Open to software engineering roles
            </div>

            <p className="hero-kicker">Hello, I’m Galin Mihaylov.</p>
            <h1>I build software that makes complex things feel simple.</h1>
            <p className="hero-intro">
              I’m a London-based software developer and King’s College London
              graduate. I enjoy turning ambitious ideas into thoughtful,
              dependable products—from full-stack applications to blockchain
              data pipelines.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work
                <ArrowIcon />
              </a>
              <a
                className="button button-secondary"
                href="https://github.com/Galin-GM"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <dl className="hero-details">
              <div>
                <dt>Based in</dt>
                <dd>London, UK</dd>
              </div>
              <div>
                <dt>Education</dt>
                <dd>Computer Science MSci</dd>
              </div>
              <div>
                <dt>Interested in</dt>
                <dd>Full-stack, data &amp; AI</dd>
              </div>
            </dl>
          </div>

          <div className="hero-visual">
            <div className="portrait-frame">
              <Image
                src="/grad2.jpg"
                alt="Galin Mihaylov at his King’s College London graduation"
                fill
                priority
                sizes="(max-width: 760px) 88vw, 40vw"
                className="portrait-image"
              />
              <div className="portrait-caption">
                <span>King’s College London</span>
                <strong>MSci Computer Science</strong>
              </div>
            </div>
            <div className="dev-badge" aria-hidden="true">
              <svg viewBox="0 0 48 48" fill="none">
                <path d="M10 12.5c0-2.2 1.8-4 4-4h20c2.2 0 4 1.8 4 4v18H10v-18Z" fill="white" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
                <path d="m20 16-4 4 4 4M28 16l4 4-4 4M25.5 15l-3 10" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.5 31h35l-2 5.2c-.5 1.3-1.7 2.1-3.1 2.1H11.6c-1.4 0-2.6-.8-3.1-2.1L6.5 31Z" fill="white" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
                <path d="M21 34.5h6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                <path d="M39 5.5v4M37 7.5h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </Section>

        <section className="skills-strip" aria-labelledby="skills-title">
          <div className="skills-inner">
            <div>
              <p className="section-eyebrow">Toolkit</p>
              <h2 id="skills-title">Technologies I work with</h2>
            </div>
            <div className="skills-list">
              {skills.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </div>
          </div>
        </section>

        <Section id="projects" className="projects-section">
          <div className="section-heading">
            <div>
              <p className="section-eyebrow">Selected work</p>
              <h2>Projects with a purpose.</h2>
            </div>
            <p>
              A selection of products I’ve helped design and build, spanning
              real-time communication and interactive education.
            </p>
          </div>

          <ol className="project-list">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </ol>
        </Section>

        <Section id="contact" className="contact-section">
          <div className="contact-card">
            <p className="section-eyebrow">Let’s talk</p>
            <h2>Have a role or an interesting problem in mind?</h2>
            <p>
              I’m currently looking for software engineering opportunities in
              London and beyond. If you think we could build something useful
              together, I’d love to hear from you.
            </p>
            <div className="contact-actions">
              <EmailButton />
              <a
                className="text-link text-link-light"
                href="https://www.linkedin.com/in/mihaylov-galin/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect on LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </Section>
      </main>

    </div>
  );
}
