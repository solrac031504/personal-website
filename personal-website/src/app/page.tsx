import Image from "next/image";

const birthday = new Date(process.env.NEXT_PUBLIC_BIRTHDAY!);
const today = new Date();

export default function Home() {
  const isBirthday = birthday.getDate() === today.getDate() && birthday.getMonth() === today.getMonth();
  const age = getAge(birthday);

  function getAge(dob: Date): number {
    const yearDiff = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();

    return (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) ? yearDiff - 1 : yearDiff;
  }

  return (
    <main className="site-shell" id="home">
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Carlos Arturo Gonzalez Zavaleta, home">
          <span className="wordmark-icon" aria-hidden="true">
            C
          </span>
          <span>Personal site</span>
        </a>
      </header>

      <h1 className="page-title">
        Carlos Arturo
        <span>Gonzalez Zavaleta</span>
      </h1>

      <div className="content-grid">
        <section className="portrait-card" aria-label="Portrait">
          <div className="portrait-frame">
            {isBirthday
              ? (
                  <Image
                    src="/bday_headshot.png"
                    alt="Portrait of Carlos Arturo Gonzalez Zavaleta wearing a birthday hat"
                    width={384}
                    height={389}
                    priority
                    className="portrait-image"
                  />
                )
              : (
                  <Image
                    src="/headshot.png"
                    alt="Portrait of Carlos Arturo Gonzalez Zavaleta"
                    width={384}
                    height={389}
                    priority
                    className="portrait-image"
                  />
                )}
          </div>
        </section>

        <section className="about-me-card" id="about-me" aria-labelledby="about-me-title">
          <h2 id="about-me-title">About Me</h2>
          <div className="about-me-copy">
            <p>I am a {age} year-old Database Developer with a Master of Science in Computer Science and a native Spanish speaker.</p>
            <p>I am highly interested in software development, database administration, and project management.</p>
            <p>I am always open to working on new projects, so please feel free to reach out! I would love to participate.</p>
            <p>I love developing new applications for both internal and community use.</p>
            <p>In my free time, I also enjoy producing and playing music, cooking, working out, and playing video games.</p>
          </div>
        </section>

        <section className="links-card" id="links" aria-labelledby="links-title">
          <div className="links-heading">
            <div>
              <h2 id="links-title">Links</h2>
            </div>
            <span className="links-spark" aria-hidden="true">
              ✳
            </span>
          </div>
          <div className="links-list">
            <p><b>LinkedIn:</b> <a href="https://www.linkedin.com/in/carlos-gonzalez-764b5b217/" target="_blank">www.linkedin.com/in/carlos-gonzalez-764b5b217</a>
            <span className="link-arrow" aria-hidden="true">
              ↗
            </span> </p>
            <p><b>GitHub:</b> <a href="https://github.com/solrac031504" target="_blank">https://github.com/solrac031504</a>
            <span className="link-arrow" aria-hidden="true">
              ↗
            </span></p>
            <p><b>SoundCloud:</b> <a href="https://soundcloud.com/carlos-gonzalez-98597846" target="_blank">https://soundcloud.com/carlos-gonzalez-98597846</a>
            <span className="link-arrow" aria-hidden="true">
              ↗
            </span></p>
          </div>
        </section>
      </div>

      <div className="details-stack">
        <section className="details-section" id="experience" aria-labelledby="experience-title">
          <h2 id="experience-title">Experience</h2>
          <article className="details-entry">
            <header className="details-entry-heading">
              <h3>Database Developer</h3>
              <span>Jun. 2025 – Present</span>
            </header>
            <p className="details-entry-meta">Massey Services · Orlando, FL</p>
            <ul>
              <li>Supported, maintained, and developed ETL processes</li>
              <li>Developed and optimized reports for corporate and field needs</li>
              <li>Assumed responsibility for report development in CRM-migration project</li>
              <li>Prepared and converted systems in acquisitions</li>
              <li>Redesigned and modernized deployment pipelines for SSDT projects</li>
            </ul>
          </article>
        </section>

        <section className="details-section" id="education" aria-labelledby="education-title">
          <h2 id="education-title">Education</h2>
          <article className="details-entry">
            <header className="details-entry-heading">
              <h3>Master of Science in Computer Science</h3>
              <span>Jan. 2025 – May. 2026</span>
            </header>
            <p className="details-entry-meta">University of Central Florida · Orlando, FL</p>
          </article>
          <article className="details-entry">
            <header className="details-entry-heading">
              <h3>Bachelor of Science in Computer Science</h3>
              <span>Aug. 2022 – Dec. 2024</span>
            </header>
            <p className="details-entry-meta">University of Central Florida · Orlando, FL</p>
            <ul>
              <li>Member of Burnett Honors College</li>
              <li>Graduated Cum Laude</li>
            </ul>
          </article>
        </section>

        <section className="details-section" id="projects" aria-labelledby="projects-title">
          <h2 id="projects-title">Projects</h2>
          <article className="details-entry">
            <header className="details-entry-heading">
              <h3>LoveApp</h3>
              <span>Jun 2026 – Present</span>
            </header>
            <p className="details-entry-description">
              A private, login-protected web app where two people can share calendar events, track relationship complaints, and manage notification preferences.
            </p>
            <p className="details-tech">Python, Flask, SQLite, SQLAlchemy, Flask-Migrate</p>
            <p className="details-entry-meta">Repository: <a href="https://github.com/solrac031504/loveapp" target="_blank">https://github.com/solrac031504/loveapp</a></p>
          </article>
          <article className="details-entry">
            <header className="details-entry-heading">
              <h3>Expert Networks</h3>
              <span>May 2024 – Present</span>
            </header>
            <p className="details-entry-meta">NSIN · Project Manager and Database Manager</p>
            <p className="details-tech">Node.js, Express, React, MySQL, Redis, DigitalOcean, Git, Agile, Jira</p>
            <ul>
              <li>Built a full-stack application to search and sort academic experts by geographic, institutional, and academic criteria.</li>
              <li>Led a five-person cross-functional Agile team and completed the MVP three months ahead of schedule.</li>
              <li>Managed and optimized a MySQL database with over 250 million records, returning large search results in under two minutes.</li>
            </ul>
          </article>
        </section>
      </div>
    </main>
  );
}
