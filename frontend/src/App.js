import './App.css';

const projects = [
  {
    title: 'Tender Discovery Platform',
    type: 'AI / platform',
    description:
      'A government-procurement platform designed to make tender discovery more accessible to small IT firms.',
    details: ['Led a 30-person development team', 'Built AI-powered lead generation, NLP capability assessment, and ML benchmarking modules'],
  },
  {
    title: 'LinguaDex',
    type: 'Web application',
    description: 'An AI-enhanced language-learning platform with quizzes, translation, and vocabulary tools.',
    details: ['Built with React, JavaScript, Python, and Tailwind CSS', 'Focused on responsive and accessible learning flows'],
    href: 'https://github.com/tahmid-chowdhury/LinguaDex',
  },
  {
    title: 'Invasive Species Detection',
    type: 'Computer vision',
    description: 'A real-time image-classification system using YOLOv5 to identify invasive insects.',
    details: ['Optimized inference and the supporting interface', 'Built as part of a four-member team'],
    href: 'https://github.com/Kevaunjh/insect-identification',
  },
  {
    title: 'Tesla Stock Prediction',
    type: 'Machine learning',
    description: 'An LSTM-based agent evaluated against historical market data.',
    details: ['Reported a 2.6% gain in a trading simulation', 'This result is from backtesting/simulation, not live financial performance'],
    href: 'https://github.com/tahmid-chowdhury/tesla-stock-prediction',
  },
  {
    title: 'MangaVox',
    type: 'Creative tooling',
    description: 'A manga reader with character-specific AI narration using the ElevenLabs API.',
    details: ['Synchronized voice panels with the reading experience', 'Prioritized clear, approachable UI'],
    href: 'https://github.com/tahmid-chowdhury/MangaVox',
  },
  {
    title: 'CipherSafe',
    type: 'Desktop application',
    description: 'A Java password manager with AES encryption and a user-focused interface.',
    details: ['Implemented secure storage and retrieval of sensitive data'],
    href: 'https://github.com/tahmid-chowdhury/CipherSafe',
  },
];

const skillGroups = [
  ['Languages', 'Python, JavaScript, Java, TypeScript, HTML, CSS, C++'],
  ['Frontend', 'React.js, React Native, Tailwind CSS, Bootstrap'],
  ['Backend & data', 'Node.js, Express, REST APIs, MongoDB, MySQL, PostgreSQL, SQLite, DynamoDB, Redis'],
  ['Cloud & delivery', 'AWS, Docker, Jenkins, Kubernetes, Git, GitHub'],
  ['AI & quality', 'TensorFlow, Scikit-learn, Hugging Face, JUnit, algorithms & data structures'],
  ['Ways of working', 'Agile methods, problem-solving, communication, teamwork, adaptability'],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark p-name" href="#top">TC<span>.</span></a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#toolkit">Toolkit</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="mailto:tahmid.s.chowdhury@gmail.com">Let's talk <Arrow /></a>
      </header>

      <main id="top">
        <section className="hero h-card" aria-labelledby="intro-title">
          <div className="hero-copy">
            <p className="eyebrow">Software engineer · Toronto, Ontario</p>
            <h1 id="intro-title">Thoughtful software<br /><em>for real people.</em></h1>
            <p className="hero-lede p-note">I build full-stack products and AI-assisted tools that make complex work feel clear, useful, and human.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <Arrow /></a>
              <a className="text-link" href="#about">A little about me <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <div className="hero-aside" aria-label="Profile details">
            <div className="portrait-frame">
              <img src="/profile.jpg" alt="Tahmid Chowdhury" className="u-photo" />
              <span className="portrait-caption">Building with<br />curiosity + care</span>
            </div>
            <div className="availability"><span className="status-dot" /> Open to meaningful opportunities</div>
          </div>
        </section>

        <div className="ticker" aria-label="Areas of practice">
          <span>FULL-STACK DEVELOPMENT</span><i>✳</i><span>AI & MACHINE LEARNING</span><i>✳</i><span>ACCESSIBLE SYSTEMS</span><i>✳</i><span>FULL-STACK DEVELOPMENT</span>
        </div>

        <section className="section about-section" id="about" aria-labelledby="about-title">
          <div className="section-label">01 / About</div>
          <div className="about-grid">
            <div><h2 id="about-title">Engineering<br /><em>with intent.</em></h2></div>
            <div className="about-body">
              <p className="large-copy">I’m a software engineer and Ontario Tech University graduate who enjoys turning open-ended problems into dependable, well-shaped products.</p>
              <p>My work spans full-stack web development, machine learning, and technical leadership. I care about the details people feel: a calm interface, a useful error message, a system that is easy to maintain six months later.</p>
              <div className="signature">Tahmid Chowdhury <span>, always learning</span></div>
            </div>
          </div>
        </section>

        <section className="section vision-section" aria-labelledby="vision-title">
          <div className="section-label">02 / Engineering vision</div>
          <div className="vision-card">
            <p className="eyebrow">The north star</p>
            <h2 id="vision-title">Make the complex<br /><em>feel possible.</em></h2>
            <p>Good engineering is more than making something work. It is making the right trade-offs visible, creating room for people to contribute, and shipping experiences that earn trust.</p>
          </div>
          <div className="principles">
            <article><span>01</span><h3>Clarity over cleverness</h3><p>Readable code and intuitive interfaces are force multipliers.</p></article>
            <article><span>02</span><h3>Technology in service</h3><p>Choose tools for the people and problem, not the trend cycle.</p></article>
            <article><span>03</span><h3>Build together</h3><p>Strong teams share context, feedback, and ownership.</p></article>
          </div>
        </section>

        <section className="section work-section" id="work" aria-labelledby="work-title">
          <div className="section-heading"><div><div className="section-label">03 / Selected work</div><h2 id="work-title">Things I’ve<br /><em>made.</em></h2></div><p>Some projects are shipped products, some are experiments, and all of them taught me something worth carrying forward.</p></div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className={`project-card project-${index + 1}`} key={project.title}>
                <div className="project-top"><span className="project-number">0{index + 1}</span><span className="project-type">{project.type}</span></div>
                <h3>{project.title}</h3><p>{project.description}</p>
                <ul>{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                {project.href && <a className="project-link" href={project.href} target="_blank" rel="noreferrer">View repository <Arrow /></a>}
              </article>
            ))}
          </div>
        </section>

        <section className="section toolkit-section" id="toolkit" aria-labelledby="toolkit-title">
          <div className="section-label">04 / Toolkit</div>
          <div className="toolkit-heading"><h2 id="toolkit-title">Tools are<br /><em>just tools.</em></h2><p>The craft is knowing when to reach for which one.</p></div>
          <div className="skills-list">{skillGroups.map(([name, skills]) => <div className="skill-row" key={name}><h3>{name}</h3><p>{skills}</p></div>)}</div>
        </section>

        <section className="section beyond-section" aria-labelledby="beyond-title">
          <div className="section-label">05 / Beyond the code</div>
          <div className="beyond-grid">
            <div><h2 id="beyond-title">Learn loudly.<br /><em>Share generously.</em></h2></div>
            <div className="timeline">
              <article><span>2024–25</span><div><h3>Ontario Tech University</h3><p>Bachelor of Engineering in Software Engineering. President’s Honours List, 2024–2025.</p></div></article>
              <article><span>2024</span><div><h3>Teaching & mentorship</h3><p>Instructor at Kurius and coding camp counsellor with the Tamil Nadu Multicultural Association of Canada.</p></div></article>
              <article><span>Always</span><div><h3>Values in practice</h3><p>Curiosity, empathy, responsibility, and the patience to make things better than I found them.</p></div></article>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <p className="eyebrow">Have a good problem?</p><h2 id="contact-title">Let’s make<br /><em>something useful.</em></h2>
          <a className="contact-email u-email" href="mailto:tahmid.s.chowdhury@gmail.com">tahmid.s.chowdhury@gmail.com <Arrow /></a>
          <div className="contact-meta"><span>Toronto, ON · Canada</span><span><a href="https://github.com/tahmid-chowdhury" rel="noreferrer">GitHub</a> / <a href="https://www.linkedin.com/in/tahmid-c" rel="noreferrer">LinkedIn</a></span></div>
        </section>
      </main>

      <footer className="site-footer"><span>© {new Date().getFullYear()} Tahmid Chowdhury</span><span>Made with care, not trackers.</span><a href="/feed.xml">RSS feed <Arrow /></a></footer>
    </div>
  );
}

export default App;
