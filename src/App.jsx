
import { useState, useMemo } from 'react'
import './App.css'

const projects = [
  {
    name: 'MailSentinel AI',
    github: 'https://github.com/Rohan-nnnnnn/MailSentinel-AI',
    category: 'AI Automation',
    description:
      'Classifies incoming emails by category and urgency, drafts responses, and records actions for human review.',
    stack: 'n8n · Ollama · PostgreSQL · Docker',
  },
  {
    name: 'APIBridge',
    github: 'https://github.com/Rohan-nnnnnn/API-Bridge',
    category: 'API Integration',
    description:
      'Connects API workflows and structures incoming data into consistent fields for reliable downstream processing.',
    stack: 'n8n · REST APIs · JSON · PostgreSQL',
  },
  {
    name: 'InvoiceVault',
    github: 'https://github.com/Rohan-nnnnnn/InvoiceVault',
    category: 'Document Automation',
    description:
      'Extracts invoice details from supported image files, organizes records, and routes files through an automated workflow.',
    stack: 'n8n · Ollama Vision · Google Sheets · Google Drive',
  },
  {
    name: 'ResumeIQ',
    github: 'https://github.com/Rohan-nnnnnn/ResumeIQ',
    category: 'AI Document Processing',
    description:
      'Analyzes resumes, generates structured resume content, and verifies output to flag unsupported claims.',
    stack: 'n8n · LLMs · Google Drive',
  },
  {
    name: 'FormatWizard',
    github: 'https://github.com/Rohan-nnnnnn/Formatwizard',
    category: 'File Conversion',
    description:
      'Accepts an uploaded file and target format, then routes supported format combinations through a conversion workflow.',
    stack: 'n8n · File Processing · APIs',
  },
  {
    name: 'Trading Assistant AI',
    github: 'https://github.com/Rohan-nnnnnn/TradingAssistantAI',
    category: 'AI-Assisted Market Analysis',
    description:
      'Explores market data and analytical signals through an automated workflow designed to support research and analysis.',
    stack: 'n8n · AI Workflow · Data Processing',
  },
]

const skillGroups = [
  {
    title: 'AI & Language Models',
    skills: [
      'LLM Integration',
      'Prompt Engineering',
      'Ollama',
      'Qwen Models',
      'AI Output Validation',
      'RAG',
    ],
  },
  {
    title: 'AI Automation & Agents',
    skills: [
      'n8n',
      'Workflow Design',
      'Multi-Step AI Workflows',
      'Conditional Routing',
      'Human-in-the-Loop Review',
      'Error Handling',
    ],
  },
  {
    title: 'APIs & Integration',
    skills: [
      'REST APIs',
      'HTTP Requests',
      'JSON',
      'Webhooks',
      'Postman',
      'Data Transformation',
    ],
  },
  {
    title: 'Programming & Web',
    skills: [
      'Python',
      'SQL',
      'HTML',
      'CSS',
      'JavaScript Fundamentals',
    ],
  },
  {
    title: 'Databases & Data',
    skills: [
      'PostgreSQL',
      'Relational Data',
      'Structured Data Extraction',
      'Google Sheets',
      'Data Validation',
    ],
  },
  {
    title: 'Tools & Development',
    skills: [
      'Docker',
      'Git',
      'GitHub',
      'Google Drive',
      'Workflow Debugging',
      'Local Development',
    ],
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [coreActive, setCoreActive] = useState(false)

  const particles = useMemo(
    () =>
      Array.from({ length: 42 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 12 + 8,
        delay: Math.random() * -20,
        driftX: (Math.random() - 0.5) * 180,
        driftY: (Math.random() - 0.5) * 180,
        glow: Math.random() * 10 + 5,
      })),
    [],
  )

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="portfolio">
      {/* RANDOMIZED BACKGROUND PARTICLES */}
      <div className="particle-field" aria-hidden="true">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="ambient-particle"
            style={{
              '--x': `${particle.x}%`,
              '--y': `${particle.y}%`,
              '--size': `${particle.size}px`,
              '--duration': `${particle.duration}s`,
              '--delay': `${particle.delay}s`,
              '--drift-x': `${particle.driftX}px`,
              '--drift-y': `${particle.driftY}px`,
              '--glow': `${particle.glow}px`,
            }}
          />
        ))}
      </div>

      {/* NAVIGATION */}
      <nav className="navbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          <img
            className="brand-profile"
            src="/profile.png"
            alt="Rohan Narlawar"
          />
          <span>
            Rohan Narlawar<span className="brand-dot"></span>
          </span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <div className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a
            className="resume-button"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            Resume
          </a>
        </div>
      </nav>

      <main>
        {/* HERO */}
        <section className="hero section-shell" id="home">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" />
              AI AUTOMATION &amp; AI ENGINEERING
            </p>

            <h1>
              Building{' '}
              <span className="highlight-text">Intelligent AI Systems</span>
            </h1>

            <p className="hero-description">
              I build AI-powered automation workflows, intelligent agents,
              and API integrations that connect language models, data, and
              business processes into practical systems.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View Projects
              </a>
              <a className="button button-secondary" href="#contact">
                Contact Me
              </a>
            </div>

            <div className="hero-meta">
              <span>6 completed projects</span>
              <span className="meta-divider" />
              <span>AI Automation · APIs · LLMs</span>
            </div>
          </div>

          {/* INTERACTIVE AI SPHERE */}
          <div className="hero-visual" aria-label="Interactive AI sphere">
            <div className="single-particle-scene">
              <div className="single-particle-glow" />

              <button
                type="button"
                className={`single-particle ${
                  coreActive ? 'core-active' : ''
                }`}
                onClick={() => setCoreActive((active) => !active)}
                aria-label={
                  coreActive
                    ? 'Deactivate interactive AI sphere'
                    : 'Activate interactive AI sphere'
                }
                aria-pressed={coreActive}
              >
                <span className="particle-highlight" />
                <span className="particle-ring" />
                <span className="particle-center">AI</span>
              </button>
            </div>
          </div>
        </section>

        {/* ABOUT & EDUCATION */}
        <section className="section-shell intro-strip" id="about">
          <p className="eyebrow">ABOUT ME</p>
          <h2>AI automation and engineering.</h2>

          <p>
            I am an Electronics and Telecommunication Engineering student
            focused on AI automation, language-model integration, API
            workflows, and building practical AI-powered systems.
          </p>

          <p>
            My projects involve connecting AI models with APIs, processing
            documents, validating generated output, and designing workflows
            with structured data and human review where needed.
          </p>

          <div className="about-education">
            <p className="eyebrow">EDUCATION</p>
            <h3>B.E. Electronics and Telecommunication Engineering</h3>
            <p>
              Bharati Vidyapeeth College of Engineering, Navi Mumbai
            </p>
            <span>2024 – 2028</span>
          </div>
        </section>

        {/* SKILLS */}
        <section className="section-shell content-section" id="skills">
          <p className="eyebrow">MY TOOLKIT</p>
          <h2>Technical skills</h2>

          <p className="section-description">
            Technologies and concepts used across my projects and technical
            learning.
          </p>

          <div className="skill-groups">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.title}>
                <h3>{group.title}</h3>

                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span className="skill-tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section-shell content-section" id="projects">
          <p className="eyebrow">SELECTED WORK</p>
          <h2>Projects and practical implementations.</h2>

          <p className="section-description">
            Six completed projects covering AI automation, API integration,
            document processing, file conversion, and AI-assisted analysis.
          </p>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.name}>
                <div className="project-number">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <p className="project-category">{project.category}</p>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <p className="project-stack">{project.stack}</p>

                <span className="project-status status-completed">
                  Completed
                </span>

                <div className="project-actions">
                  <a
                    className="project-link"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub ↗
                  </a>

                  <a href="#contact" className="project-explore">
                    Contact ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="section-shell contact-section" id="contact">
          <p className="eyebrow">CONTACT</p>
          <h2>Let’s connect.</h2>

          <p>
            I am interested in AI automation, AI engineering, intelligent
            workflows, and internship opportunities where I can contribute
            to practical engineering projects.
          </p>

          <div className="contact-links">
            <a href="mailto:rohannarlawar31@gmail.com">
              Email ↗
            </a>

            <a
              href="https://www.linkedin.com/in/rohan-narlawar-149291354"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/Rohan-nnnnnn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </section>

        {/* RESUME */}
        <section
          className="section-shell content-section resume-section"
          id="resume"
        >
          <p className="eyebrow">RESUME</p>
          <h2>My experience and projects.</h2>

          <p className="section-description">
            View my project work and technical background through the links
            on this portfolio.
          </p>

          <a
            className="button button-secondary"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View Resume
          </a>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <a className="brand" href="#home">
          <img
            className="brand-profile"
            src="/profile.png"
            alt="Rohan Narlawar"
          />
          <span>
            Rohan Narlawar<span className="brand-dot">.</span>
          </span>
        </a>

        <span>
          © {new Date().getFullYear()} · All rights reserved.
        </span>
      </footer>
    </div>
  )
}

export default App
