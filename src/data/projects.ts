export type Project = {
	slug: string;
	title: string;
	description: string;
	image: string; // e.g. "/projects/myapp.png"
	tags: string[];
	links: { live?: string; demo?: string; github?: string };
};

// Provide your projects here. Example structure:
// export const projects: Project[] = [
//   {
//     slug: "my-app",
//     title: "My App",
//     description: "A concise summary of what the project does and why it matters.",
//     image: "/projects/my-app.png",
//     tags: ["Next.js", "TypeScript", "Tailwind"],
//     links: { live: "https://example.com", github: "https://github.com/you/my-app" },
//   },
// ];
export const projects: Project[] = [
	{
		slug: "Conversate",
		title: "Conversate",
		description: "Worked alongside North Yorkshire Council to bring them a live interpretation solution that allows two parties to have a real time conversation without the need of a physical interpreter.",
		image: "/projects/conversate.png",
		tags: ["React", "TypeScript", "AWS"],
		links: { demo: "https://youtu.be/3KscQ6l8dik?si=DicA2ZnE3RFRe6WN&t=52", github: "https://github.com/translation-nyc/nyc-translation-app" },
	},
	{
		slug: "VisuLogic",
		title: "VisuLogic",
		description: "An interactive educational tool that allows people to build logic circuits via drag and drop. Optimised to be able to handle complex circuits containing hundreds of components.",
		image: "/projects/logicgate.png",
		tags: ["React", "JavaScript", "CSS"],
		links: { live: "https://galin-gm.github.io/logic-gate-visualisation/", github: "https://github.com/Galin-GM/logic-gate-visualisation" },
	},
	
];


