import type { RequestHandler } from '@sveltejs/kit';
import { Tech, Framework } from '../types';
import type { Project } from '../types';

export const get: RequestHandler = async () => {
   const projects: Project[] = [
      {
         link: 'https://mails-list.bayont.com',
         title: 'Mails List ' + '\u{1F4E7}',
         message:
            'Aute nulla reprehenderit amet ea ut ipsum elit ipsum consequat. Aliquip in reprehenderit duis sint voluptate ipsum cillum. Amet incididunt ut laboris Lorem labore eu laborum duis quis.',
         framework: Framework.React,
         techStack: [Tech.TypeScript, Tech.Redux, Tech.DayJs],
      },
      {
         link: 'https://clinic.bayont.com',
         title: 'Clinic ' + '\u{1F3E5}',
         message:
            'Dolor in qui veniam deserunt veniam et pariatur nulla do. Est non sint eiusmod ut incididunt excepteur est sint consectetur duis incididunt do voluptate. Aliqua aliqua duis cupidatat quis pariatur consectetur eu laboris amet ipsum.',
         framework: Framework.Next,
         techStack: [Tech.TypeScript, Tech.Prisma, Tech.SQLite],
      },
      {
         link: 'https://currency-exchanges.bayont.com',
         title: 'Currency Exchanges ' + '\u{1F4B1}',
         message:
            'Nisi magna officia Lorem officia. Eu duis pariatur aliqua sint laboris eiusmod in occaecat minim laboris aliqua eu. Consequat ea excepteur aliqua commodo non fugiat laboris officia ad commodo ex exercitation est quis. Voluptate excepteur minim adipisicing amet culpa sit labore labore laboris deserunt nostrud et. Lorem labore enim velit voluptate irure. Aliquip pariatur quis minim nulla nisi tempor exercitation tempor nisi excepteur cillum deserunt. Consequat ad magna tempor duis reprehenderit aliquip aliquip.',
         framework: Framework.Vanilla,
         techStack: [Tech.PHP, Tech.Python, Tech.MySQL],
      },
      {
         link: 'https://motofix.bayont.com',
         title: 'Motofix ' + '\u{1F9F0}',
         message:
            'Tempor pariatur ea anim do deserunt ut ad dolore sint incididunt. Irure elit exercitation et ad consequat laboris commodo ipsum. Mollit do velit eu duis ut consectetur irure tempor ullamco do. Sunt laborum consequat id fugiat occaecat irure irure. Do sint nisi mollit proident consectetur culpa nulla ipsum sit.',
         framework: Framework.Vanilla,
         techStack: [],
      },
   ];
   return {
      body: { projects },
   };
};
