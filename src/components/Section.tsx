import React from "react";

type SectionProps = {
	id: string;
	title?: string;
	children: React.ReactNode;
	className?: string;
	titleClassName?: string;
};

export function Section({
	id,
	title,
	children,
	className,
	titleClassName,
}: SectionProps) {
	return (
		<section id={id} aria-labelledby={title ? `${id}-title` : undefined} className={className}>
			{title ? (
				<h2
					id={`${id}-title`}
					className={titleClassName ?? "section-title"}
				>
					{title}
				</h2>
			) : null}
			{children}
		</section>
	);
}


