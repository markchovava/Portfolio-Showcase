import { motion, useReducedMotion } from 'framer-motion';
import {
  FiArrowDownRight,
  FiArrowUpRight,
  FiAtSign,
  FiMapPin,
  FiPhone,
} from 'react-icons/fi';

const projects = [
  { name: 'Zenith Space', url: 'https://zenithspace.co.zw', type: 'Digital presence' },
  { name: 'Trayak Consultancy', url: 'https://trayakconsultancy.com', type: 'Consultancy' },
  { name: 'Global Tech HCC', url: 'https://globaltechhcc.co.zw', type: 'Technology' },
  { name: 'KM Consulting', url: 'https://kmconsulting.co.zw', type: 'Consultancy' },
  { name: 'Own One Vehicles', url: 'https://ownonevehicles.co.zw', type: 'Automotive' },
  { name: 'iClean Services', url: 'https://icleanservices.co.zw', type: 'Services' },
  { name: 'Celeste Energy', url: 'https://celesteenergy.co.zw', type: 'Energy' },
  { name: 'Network Resilience', url: 'https://networkresilience.co.zw', type: 'Technology' },
];

const clients = [
  'Planas', 'Own One Vehicles', 'Acquired.co.zw', 'Network Resilience',
  'Covenant School', 'Jay & Joy Healthcare', 'Celeste Energy', 'SMG Holdings',
  'Gart Media', 'British Business Association', 'Dronefield Land Development',
  'Hansole Investments',
];

const skills = [
  ['Development', 'Next.js', 'TypeScript', 'React', 'Laravel', 'PHP', 'MySQL', 'Tailwind CSS', 'REST APIs'],
  ['Design & motion', 'UI/UX', 'Branding', 'Photoshop', 'Illustrator', 'After Effects', 'DaVinci Resolve', 'Motion graphics'],
  ['Delivery', 'Git / GitHub', 'VPS', 'SEO', 'Web security', 'eCommerce', 'POS'],
];

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={fade}
      initial={reduceMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <main className="site-shell">
      <div className="container">
        <header className="topbar">
          <a className="brand" href="#top" aria-label="Mark Chovava, back to top">
            <span className="brand-mark">MC</span>
            <span>MARK CHOVAVA</span>
          </a>
          <nav className="nav-links" aria-label="Main navigation">
            <a href="#work">Work</a>
            <a href="#about">Studio</a>
            <a href="#experience">Experience</a>
            <a className="nav-contact" href="#contact">Let&apos;s talk <FiArrowUpRight aria-hidden="true" /></a>
          </nav>
        </header>

        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-topline eyebrow">
            <span className="availability"><i aria-hidden="true" /> Independent developer &amp; designer</span>
            <span>Harare, Zimbabwe · 17°49&apos; S</span>
          </div>
          <div className="hero-orbit" aria-hidden="true">
            <span className="orbit-label">CODE / FORM / FEEL</span>
            <span className="orbit-core" />
          </div>
          <motion.h1
            id="hero-title"
            className="hero-title display-font"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <span>Mark</span>
            <span className="second-line"><span className="outlined">Chovava</span><span className="period">.</span></span>
          </motion.h1>
          <div className="hero-grid">
            <motion.p className="hero-intro" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2, duration: .7 }}>
              Full Stack Web Developer <span aria-hidden="true">&amp;</span> Digital Designer
              <br /><strong>Building useful things for the web, with a little feeling in them.</strong>
            </motion.p>
            <motion.div className="hero-aside" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .45, duration: .8 }}>
              <span className="eyebrow">A decade, and counting</span>
              <p>Web applications, eCommerce and point-of-sale systems for teams shaping finance, healthcare, education, energy, hospitality and retail.</p>
            </motion.div>
          </div>
          <a className="hero-index eyebrow" href="#work" aria-label="Scroll to selected work"><span>SCROLL TO EXPLORE</span><FiArrowDownRight /><span /></a>
        </section>
      </div>

      <section className="section" id="about">
        <div className="container about-layout">
          <Reveal>
            <p className="section-kicker eyebrow">01 / The practice</p>
            <h2 className="section-heading">Good work lives where logic meets instinct.</h2>
          </Reveal>
          <Reveal className="about-copy" delay={.12}>
            <p className="about-emphasis">I&apos;m Mark C. Chovava — a developer who cares how things work, and a designer who cares how they feel.</p>
            <p>For more than 10 years, I&apos;ve moved between code and composition: building web applications and commerce systems, shaping identities, and making digital experiences feel considered from the first click to the last detail.</p>
            <p>Based in Harare, working with ambitious people and teams wherever they are.</p>
            <a className="text-link" href="mailto:markchovava@gmail.com">Start a conversation <FiArrowUpRight aria-hidden="true" /></a>
          </Reveal>
        </div>
      </section>

      <section className="section section-dark" id="work">
        <div className="container">
          <div className="work-intro">
            <Reveal>
              <p className="section-kicker eyebrow">02 / Selected work</p>
              <h2 className="section-heading">A few places the work has gone.</h2>
            </Reveal>
            <Reveal className="work-note" delay={.1}>A selection of live websites. The best work starts with a good question.</Reveal>
          </div>
          <div className="project-list">
            {projects.map((project, index) => (
              <motion.a
                className="project-row"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                key={project.name}
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: .2 }}
                transition={{ duration: .45, delay: index * .045 }}
                aria-label={`${project.name} — ${project.url}, opens in a new tab`}
              >
                <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
                <span className="project-name">{project.name}</span>
                <span className="project-domain">{project.type}</span>
                <span className="project-arrow"><FiArrowUpRight aria-hidden="true" /></span>
              </motion.a>
            ))}
          </div>
          <div className="clients-block">
            <div className="clients-title">Good people, good projects. Selected clients &amp; collaborators.</div>
            <div className="client-cloud">
              {clients.map((client) => <span className="client-chip" key={client}>{client}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="capabilities">
        <div className="container capability-layout">
          <Reveal>
            <p className="section-kicker eyebrow">03 / What I bring</p>
            <h2 className="section-heading">From the first sketch to the final deploy.</h2>
            <p className="capability-lede">The best digital work doesn&apos;t separate how it looks from how it holds up. I bring both sides to the table.</p>
          </Reveal>
          <div className="capability-list">
            {[
              { title: 'Build', text: 'Thoughtful, resilient web applications — from front-end detail to the back-end architecture that keeps things moving.', tags: skills[0].slice(1) },
              { title: 'Shape', text: 'Clear, characterful visual systems and interfaces that help a brand feel like itself, everywhere it shows up.', tags: skills[1].slice(1) },
              { title: 'Launch & care', text: 'The work beyond the screen: deployment, discoverability, security and the practical details of going live.', tags: skills[2].slice(1) },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * .08}>
                <article className="capability">
                  <span className="capability-index">0{index + 1}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <div className="skill-strip">{item.tags.map((tag) => <span className="skill-pill" key={tag}>{tag}</span>)}</div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark experience" id="experience">
        <div className="container">
          <Reveal>
            <p className="section-kicker eyebrow">04 / The path</p>
            <h2 className="section-heading">Built over time, with people.</h2>
          </Reveal>
          <div className="experience-grid">
            <p className="experience-label">Work &amp; teaching<br />2016 — now</p>
            <div className="timeline">
              {[
                { dates: '2018 — NOW', role: 'Lead Full Stack Developer & Graphic Designer', company: 'FL Designers · Freelance', detail: 'Leading web development and visual design work across varied industries and digital needs.' },
                { dates: '2018', role: 'Web Developer', company: 'Hansole Company', detail: 'Web development for a growing investment and business group.' },
                { dates: '2017 — 2018', role: 'Marketing Officer', company: 'International Alliance for Caregivers', detail: 'Marketing communications and creative support for a care-focused organization.' },
                { dates: '2016 — NOW', role: 'Web Development Tutor', company: 'Inspiration Academy', detail: 'Teaching web development and helping new practitioners find their footing in code.' },
              ].map((job) => (
                <Reveal key={job.role + job.dates}>
                  <article className="job">
                    <span className="job-date">{job.dates}</span>
                    <div><h3>{job.role}</h3><span className="company">{job.company}</span><p>{job.detail}</p></div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="learning">
            <Reveal className="learning-card">
              <span className="eyebrow">Education</span>
              <h3>Diploma · Web Development</h3>
              <p>Skillsoft · 2013–2014</p>
              <h3>Diploma · Graphic Design</h3>
              <p>Skillsoft · 2014–2015</p>
            </Reveal>
            <Reveal className="learning-card" delay={.1}>
              <span className="eyebrow">Continued learning</span>
              <h3>Udemy certifications</h3>
              <p>Laravel · React · Next.js</p>
              <h3>Languages</h3>
              <p>English · Shona</p>
            </Reveal>
          </div>
        </div>
      </section>

      <footer className="container contact-section" id="contact">
        <Reveal className="contact-top">
          <h2 className="contact-heading">Have a good<br />one in <span>mind?</span></h2>
          <p className="contact-aside">Have a project taking shape, or just want to compare notes? I&apos;d like to hear about it.</p>
        </Reveal>
        <Reveal>
          <a className="contact-email" href="mailto:markchovava@gmail.com">markchovava@gmail.com <FiArrowUpRight aria-hidden="true" /></a>
          <div className="contact-detail">
            <span><FiMapPin aria-hidden="true" /> Harare, Zimbabwe</span>
            <a href="tel:+263782210021"><FiPhone aria-hidden="true" /> +263 782 210 021</a>
            <a href="mailto:markchovava@gmail.com"><FiAtSign aria-hidden="true" /> Email Mark</a>
          </div>
        </Reveal>
        <div className="contact-footer">
          <span>© {new Date().getFullYear()} Mark Chovava</span>
          <span>Made in Harare, Zimbabwe</span>
          <div className="social-links">
            <a href="https://linkedin.com/in/mark-chovava-29194b5b" target="_blank" rel="noopener noreferrer" aria-label="Mark Chovava on LinkedIn">LinkedIn <FiArrowUpRight aria-hidden="true" /></a>
            <a href="https://github.com/markchovava" target="_blank" rel="noopener noreferrer" aria-label="Mark Chovava on GitHub">GitHub <FiArrowUpRight aria-hidden="true" /></a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
