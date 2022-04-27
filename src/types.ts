export enum Framework {
   React = 'React',
   Next = 'Next.js',
   Angular = 'Angular',
   Svelte = 'Svelte.Kit',
   Vanilla = 'Vanilla JS',
}
export enum Tech {
   TypeScript = 'TypeScript',
   PHP = 'PHP',
   Tailwind = 'Tailwind',
   Express = 'Express',
   Prisma = 'Prisma',
   Redux = 'Redux',
   DayJs = 'DayJs',
   Python = 'Python',
   MySQL = 'MySQL',
   SQLite = 'SQLite',
}

export type Project = {
   link: string;
   title: string;
   message: string;
   framework: Framework;
   techStack: Tech[];
};
