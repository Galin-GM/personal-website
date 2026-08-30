import Image from "next/image";
import type { Project } from "@/data/projects";
import { Tag } from "./Tag";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const links = [
    project.links.live
      ? { label: "Visit live project", href: project.links.live }
      : null,
    project.links.demo
      ? { label: "Watch demo", href: project.links.demo }
      : null,
    project.links.github
      ? { label: "View source", href: project.links.github }
      : null,
  ].filter((link): link is { label: string; href: string } => Boolean(link));

  return (
    <li
      className={`project-card ${index % 2 === 1 ? "project-card-reverse" : ""}`}
    >
      <div className="project-image-wrap">
        <Image
          src={project.image}
          alt={`Interface of ${project.title}`}
          fill
          sizes="(max-width: 900px) 100vw, 56vw"
          className={`project-image ${project.imageFit === "contain" ? "project-image-contain" : ""}`}
          style={
            project.imageBackground
              ? { backgroundColor: project.imageBackground }
              : undefined
          }
        />
        <span className="project-number">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="project-copy">
        <p className="project-label">Featured project</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="project-tags">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        <div className="project-links">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              {link.label}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
    </li>
  );
}
