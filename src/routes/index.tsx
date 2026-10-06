import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProjectsGrid, SocialButtons } from '@/components/portfolio';
import { portfolioHead } from '@/lib/portfolio';
import portrait from '@/assets/student-portrait.jpg';

export const Route = createFileRoute('/')({
 head: () => portfolioHead('Home', 'Personal portfolio of a first-year B.Tech Computer Science Engineering student at JECRC University, Jaipur. Discover a growing journey in code.'),
 component: Index,
});
function Index() {
 return <>
  <section className="hero">
   <div className="hero-copy glass"><div className="eyebrow student-label"><span className="status-dot"/>First-year B.Tech CSE · JECRC University, Jaipur</div>
   <h1>Shalabh Kumar Jha.</h1><p className="hero-description">A curious computer science student learning to turn ideas into small, thoughtful experiences — one project at a time.</p>
   <div className="hero-actions"><Button variant="portfolio" asChild><Link to="/projects">View projects <ArrowUpRight/></Link></Button><SocialButtons/></div></div>
   <div className="portrait-frame glass"><img className="portrait" src={portrait} alt="Illustrative sample student portrait, to be replaced with your own photo" width={1024} height={1280}/><span className="photo-label">Sample portrait</span></div>
  </section>
  <section className="summary-grid" aria-label="At a glance">
   <div className="summary glass"><p className="kicker">Education</p><strong>B.Tech CSE · JECRC University</strong><p>Jaipur · First year</p></div>
   <div className="summary glass"><p className="kicker">Learning focus</p><strong>Python · HTML · CSS · Git</strong><p>Programming basics & problem solving</p></div>
   <div className="summary glass"><p className="kicker">Based in</p><strong>Jaipur, Rajasthan</strong><p>At the beginning of a new journey</p></div>
  </section>
  <section className="section"><div className="section-heading"><h2>Small ideas. First steps.</h2><p>Sample projects for a growing portfolio.</p></div><ProjectsGrid/></section>
  <section className="story-link"><p className="kicker">Next · About & education</p><p>A curiosity for code, a new chapter at JECRC University, and a whole lot left to discover.</p><Link to="/about" className="text-link">A little about me <ArrowRight size={16}/></Link></section>
 </>;
}
