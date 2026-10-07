import { Link, useLocation } from '@tanstack/react-router';
import { useState, useEffect, type ReactNode } from 'react';
import { ArrowUpRight, Github, Linkedin, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import weather from '@/assets/weather-preview.jpg';
import calculator from '@/assets/calculator-preview.jpg';

const navigation = [
  { to: '/', label: 'Home' }, { to: '/about', label: 'About' },
  { to: '/education', label: 'Education' }, { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' }, { to: '/certifications', label: 'Achievements' },
] as const;
export function PortfolioShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => { setOpen(false); }, [location.pathname]);
  return <div className="site">
    <header className="header"><nav className="nav" aria-label="Main navigation">
      <Link to="/" className="brand">Shalabh Kumar Jha</Link>
      <div className="nav-links">{navigation.map(n => <Link key={n.to} to={n.to} className="nav-link" activeOptions={{ exact:true }}>{n.label}</Link>)}</div>
      <div className="nav-actions"><Button variant="portfolio" asChild><Link to="/contact">Contact</Link></Button>
      <Button variant="ghost" size="icon" className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</Button></div>
    </nav>{open && <nav className="mobile-nav" aria-label="Mobile navigation">{navigation.map(n => <Link key={n.to} to={n.to} className="nav-link" activeOptions={{exact:true}}>{n.label}</Link>)}<Link to="/contact" className="nav-link">Contact</Link></nav>}</header>
    <main key={location.pathname} className="enter">{children}</main>
    <footer className="footer"><span>© 2026 Shalabh Kumar Jha · A little curiosity, a little code.</span></footer>
  </div>;
}
export const GITHUB_URL = 'https://github.com/shalabhcodes';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/shalabh-jha-58574a307';
export function SocialButtons() {
  return <><Button variant="glass" asChild><a href={GITHUB_URL} target="_blank" rel="noreferrer noopener"><Github/>GitHub</a></Button><Button variant="glass" asChild><a href={LINKEDIN_URL} target="_blank" rel="noreferrer noopener"><Linkedin/>LinkedIn</a></Button></>;
}
export function PageIntro({ label, title, children }: { label:string; title:string; children:ReactNode }) {
  return <><p className="kicker">{label}</p><h1 className="page-title">{title}</h1><div className="page-intro">{children}</div></>;
}
export function ProjectsGrid() {
  return <div className="project-grid">{[
    { image:weather, stack:'HTML · CSS · JavaScript', title:'Weather Web App', description:'A beginner project idea: fetch a forecast from a public API and display it in a clean, simple interface.', alt:'Sample weather app design showing a Jaipur forecast' },
    { image:calculator, stack:'Python · Programming fundamentals', title:'CLI Calculator', description:'A beginner project idea: practise functions, user input and arithmetic with a small command-line calculator.', alt:'Sample Python calculator terminal displaying the result of an addition' },
  ].map(p => <article className="project glass" key={p.title}><img src={p.image} alt={p.alt} width={1200} height={704} loading="lazy"/><div className="project-copy"><div className="flex items-center justify-between gap-2"><p className="kicker m-0">{p.stack}</p><span className="sample-tag shrink-0">Sample project</span></div><h3 className="project-title">{p.title}</h3><p className="body-copy">{p.description}</p></div></article>)}</div>;
}
export function MoreProjectsLink() { return <Link to="/projects" className="text-link">Explore projects <ArrowUpRight size={15}/></Link>; }
