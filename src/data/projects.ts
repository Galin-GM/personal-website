export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string; // e.g. "/projects/myapp.png"
  imageFit?: "cover" | "contain";
  imageBackground?: string;
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
    slug: "football-player-similarity",
    title: "Premier League Player Similarity",
    description:
      "An end-to-end machine-learning application that cleans and combines Premier League data, standardizes six attacking features, and uses nearest-neighbour search to find statistically similar forwards. Results are presented through a deployed Streamlit dashboard with performance data, similarity distances, and percentile heatmaps.",
    image: "/projects/player-similarity.png",
    imageFit: "contain",
    tags: ["Python", "pandas", "scikit-learn", "Matplotlib", "Streamlit"],
    links: {
      live: "https://football-player-similarity.streamlit.app/",
      github: "https://github.com/Galin-GM/football-player-similarity",
    },
  },
  {
    slug: "conversate",
    title: "Conversate",
    description:
      "A real time interpretation platform developed with North Yorkshire Council. Conversate combines streaming transcription, translation, and speech synthesis to help people communicate across languages, with secure authentication and shareable conversation transcripts.",
    image: "/projects/conversate-cover.png",
    // imageFit: "contain",
    tags: ["React", "TypeScript", "AWS", "Amplify"],
    links: {
      demo: "https://youtu.be/3KscQ6l8dik?si=DicA2ZnE3RFRe6WN&t=52",
      github: "https://github.com/translation-nyc/nyc-translation-app",
    },
  },
  {
    slug: "visulogic",
    title: "VisuLogic",
    description:
      "An interactive educational tool for building and simulating digital logic circuits. Users can connect gates through drag and drop, generate Boolean formulas, undo changes, and automatically arrange complex circuits containing hundreds of components.",
    image: "/projects/logicgatenew.png",
    imageFit: "contain",
    imageBackground: "#fdf5eb",
    tags: ["React", "JavaScript", "React Flow", "Dagre", "Cypress"],
    links: {
      live: "https://galin-gm.github.io/logic-gate-visualisation/",
      github: "https://github.com/Galin-GM/logic-gate-visualisation",
    },
  },
];
