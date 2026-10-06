import { createFileRoute } from '@tanstack/react-router';
import { PageIntro, ProjectsGrid } from '@/components/portfolio';
import { portfolioHead } from '@/lib/portfolio';
export const Route = createFileRoute('/projects')({head:()=>portfolioHead('Projects','Explore sample beginner project ideas: a weather web application and a Python command-line calculator.'),component:Projects});
function Projects(){return <section className="page"><PageIntro label="04 · Ideas into practice" title="Small projects. Real learning.">Every project is a chance to understand something new. These are sample project ideas, not completed work; real descriptions and repository links are still to come.</PageIntro><div className="section"><ProjectsGrid/></div><p className="placeholder-note">Project status, source code and live demos: [Add your actual project details]</p></section>;}
