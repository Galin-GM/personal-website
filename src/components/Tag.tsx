import React from "react";

type TagProps = {
	children: React.ReactNode;
};

export function Tag({ children }: TagProps) {
	return (
		<span className="inline-flex items-center rounded-full border border-black/[.08] dark:border-white/[.145] px-2.5 py-1 text-xs text-foreground/80">
			{children}
		</span>
	);
}


