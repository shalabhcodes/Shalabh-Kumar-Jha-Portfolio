import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, Copy, Check, ArrowUpRight } from 'lucide-react';
import { PageIntro, GITHUB_URL, LINKEDIN_URL } from '@/components/portfolio';
import { Button } from '@/components/ui/button';
import { portfolioHead } from '@/lib/portfolio';

const EMAIL = 'jhashalabh277@gmail.com';
const PHONE = '8319468928';
const ADDRESS = 'H.No.204, Sec-E, Sch No. 78, Vijay Nagar, Indore, Madhya Pradesh (452010)';

export const Route = createFileRoute('/contact')({head:()=>portfolioHead('Contact','Connect with a first-year B.Tech CSE student at JECRC University, Jaipur. Email, mobile number, address, GitHub and LinkedIn profiles.'),component:Contact});

function Contact(){
  const [copied,setCopied]=useState<'email'|'phone'|'address'|null>(null);
  const [status,setStatus]=useState('');
  async function copy(field:'email'|'phone'|'address'){
    const value = field === 'email' ? EMAIL : field === 'phone' ? PHONE : ADDRESS;
    try{
      await navigator.clipboard.writeText(value);
      setCopied(field);
      setStatus(field === 'email' ? 'Email address copied.' : field === 'phone' ? 'Mobile number copied.' : 'Address copied.');
    }catch{
      setStatus(`Could not copy. ${field === 'email' ? 'Email' : field === 'phone' ? 'Mobile' : 'Address'}: ${value}`);
    }
  }
  return <section className="page">
    <PageIntro label="06 · Start a conversation" title="Let's connect.">A conversation, a shared idea, or a little advice can be the beginning of something good.</PageIntro>
    <div className="contact-list">
      <article className="contact-item">
        <Mail size={22} className="text-primary"/>
        <h2>Email</h2>
        <div className="contact-value">
          <a className="profile-link" href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <Button variant="glass" size="icon" onClick={()=>copy('email')} aria-label="Copy email address" title="Copy email address">{copied==='email'?<Check/>:<Copy/>}</Button>
        </div>
      </article>
      <article className="contact-item">
        <Phone size={22} className="text-primary"/>
        <h2>Mobile</h2>
        <div className="contact-value">
          <a className="profile-link" href={`tel:${PHONE}`}>{PHONE}</a>
          <Button variant="glass" size="icon" onClick={()=>copy('phone')} aria-label="Copy mobile number" title="Copy mobile number">{copied==='phone'?<Check/>:<Copy/>}</Button>
        </div>
      </article>
      <article className="contact-item">
        <Github size={22} className="text-primary"/>
        <h2>GitHub</h2>
        <div className="contact-value"><a className="profile-link" href={GITHUB_URL} target="_blank" rel="noreferrer noopener">github.com/shalabhcodes <ArrowUpRight size={14}/></a></div>
      </article>
      <article className="contact-item">
        <Linkedin size={22} className="text-primary"/>
        <h2>LinkedIn</h2>
        <div className="contact-value"><a className="profile-link" href={LINKEDIN_URL} target="_blank" rel="noreferrer noopener">linkedin.com/in/shalabh-jha-58574a307 <ArrowUpRight size={14}/></a></div>
      </article>
      <article className="contact-item contact-item--wide">
        <MapPin size={22} className="text-primary"/>
        <h2>Location</h2>
        <div className="contact-value">
          <span className="contact-address">{ADDRESS}</span>
          <Button variant="glass" size="icon" onClick={()=>copy('address')} aria-label="Copy address" title="Copy address">{copied==='address'?<Check/>:<Copy/>}</Button>
        </div>
      </article>
    </div>
    {status&&<p role="status" className="body-copy">{status}</p>}
  </section>;
}
