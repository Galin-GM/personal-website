import Image from "next/image";
import React from "react";
import { Tag } from "./Tag";

type Project = {
	slug: string;
	title: string;
	description: string;
	image: string;
	tags: string[];
	links: { live?: string; demo?: string; github?: string };
};

export function ProjectCard({ project }: { project: Project }) {
	return (
		<li className="group list-none rounded-xl border border-black/[.08] dark:border-white/[.145] overflow-hidden bg-background">
			<div className="relative aspect-[16/10] w-full overflow-hidden">
				<Image
					src={project.image}
					alt={project.title}
					fill
					sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
					className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
					priority={false}
				/>
			</div>
			<div className="p-4 sm:p-5">
				<h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
				<p className="mt-2 text-sm text-foreground/70">{project.description}</p>
				<div className="mt-3 flex flex-wrap gap-2">
					{project.tags.map((t) => (
						<Tag key={t}>{t}</Tag>
					))}
				</div>
				<div className="mt-4 flex gap-3">
					{[
						project.links.live ? { label: "Live Deployment", href: project.links.live } : null,
						project.links.demo ? { label: "Demo Video", href: project.links.demo } : null,
						project.links.github ? { label: "GitHub", href: project.links.github } : null,
					]
						.filter(Boolean)
						.map((link, idx) => {
							const l = link as { label: string; href: string };
							const primary =
								"inline-flex h-9 items-center justify-center rounded-full bg-foreground px-4 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]";
							const secondary =
								"inline-flex h-9 items-center justify-center rounded-full border border-black/[.08] dark:border-white/[.145] px-4 text-foreground transition-colors hover:border-transparent hover:bg-black/[.04] dark:hover:bg-[#1a1a1a]";
							return (
								<a
									key={l.label}
									href={l.href}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={`Open ${project.title} ${l.label.toLowerCase()}`}
									className={idx === 0 ? primary : secondary}
								>
									<span>{l.label}</span>
									{l.label === "GitHub" ? (
										<svg
											aria-hidden="true"
											viewBox="0 0 24 24"
											fill="currentColor"
											className="ml-1.5 h-4 w-4"
										>
											<path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.85 9.7.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.12-1.52-1.12-1.52-.92-.64.07-.63.07-.63 1.02.07 1.56 1.07 1.56 1.07.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.25-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 2.5-.34c.85 0 1.71.12 2.5.34 1.9-1.32 2.74-1.05 2.74-1.05.56 1.4.21 2.45.11 2.7.64.72 1.02 1.63 1.02 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .26.18.59.69.48A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
										</svg>
									) : null}
								</a>
							);
						})}
				</div>
			</div>
		</li>
	);
}


