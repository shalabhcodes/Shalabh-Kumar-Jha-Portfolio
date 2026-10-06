import { createFileRoute } from '@tanstack/react-router';
import { PageIntro } from '@/components/portfolio';
import { portfolioHead } from '@/lib/portfolio';
export const Route = createFileRoute('/skills')({head:()=>portfolioHead('Skills','Beginner learning areas in programming, web development, tools and problem solving for a first-year CSE student.'),component:Skills});
function Skills(){return <section className="page"><PageIntro label="03 · A growing toolkit" title="Learning by doing.">A sample beginner toolkit — focused on fundamentals rather than expertise. Actual skills and experience can be added as the journey progresses.</PageIntro><div className="skills-grid">{[
 { title:'Programming',items:[['Python','Learning fundamentals'],['C / C++','Getting started'],['Problem solving','Practising basics']]},
 { title:'Web development',items:[['HTML','Learning structure'],['CSS','Exploring layouts'],['JavaScript','Getting started']]},
 { title:'Developer tools',items:[['VS Code','Exploring the editor'],['Git & GitHub','Learning version control'],['Command line','Practising basics']]},
 { title:'Beyond the code',items:[['Communication','Developing'],['Teamwork','Developing'],['Curiosity & self-learning','Growing every day']]},
 ].map((g,i)=><article className="skill-group glass" key={g.title}><p className="kicker">0{i+1} · Sample learning areas</p><h2>{g.title}</h2>{g.items.map(([name,level])=><div className="skill-item" key={name}><span>{name}</span><span>{level}</span></div>)}</article>)}</div></section>;}
