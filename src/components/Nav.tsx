'use client';

import Link from "next/link";
import React from "react";

const sections = [
	{ id: "hero", label: "Home" },
	{ id: "projects", label: "Projects" },
	{ id: "contact", label: "Contact" },
] as const;

export function Nav() {
	const [active, setActive] = React.useState<string>("hero");

	React.useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						setActive(entry.target.id);
					}
				}
			},
			{ rootMargin: "-40% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
		);

		sections.forEach((s) => {
			const el = document.getElementById(s.id);
			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
	}, []);

	return (
		<nav
			aria-label="Primary"
			className="sticky top-0 z-50 w-full border-b border-black/[.06] dark:border-white/[.09] bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60"
		>
			<div className="mx-auto max-w-3xl px-4 sm:px-6">
				<div className="flex h-14 items-center justify-center">
					<ul className="flex items-center gap-2 sm:gap-3">
						{sections.map((s) => {
							const isActive = active === s.id;
							return (
								<li key={s.id}>
									<a
										href={`#${s.id}`}
										className={
											isActive
												? "inline-flex h-8 items-center rounded-full px-3 text-sm bg-foreground text-background"
												: "inline-flex h-8 items-center rounded-full px-3 text-sm border border-black/[.08] dark:border-white/[.145] text-foreground/80 hover:bg-black/[.04] dark:hover:bg-[#1a1a1a]"
										}
										aria-current={isActive ? "page" : undefined}
									>
										{s.label}
									</a>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
}

