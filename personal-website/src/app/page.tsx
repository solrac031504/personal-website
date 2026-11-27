import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const birthday = stripTime(new Date(process.env.NEXT_PUBLIC_BIRTHDAY!));
  const today = stripTime(new Date());

  const [isBirthday, setIsBirthday] = useState<boolean>(false);

  function stripTime(date: Date):  number {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
  }

  useEffect(() => {
    setIsBirthday(birthday === today);
  }, [birthday, today])
  
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
                    src="/headshot.png"
                    alt="Portrait of Carlos Arturo Gonzalez Zavaleta"
                    width={384}
                    height={389}
                    priority
                    className="portrait-image"
                  />
                )
              : (
                  <Image
                    src="/bday_headshot.png"
                    alt="Birthday special portrait of Carlos Arturo Gonzalez Zavaleta"
                    width={384}
                    height={389}
                    priority
                    className="portrait-image"
                  />
                )}
          </div>
          <div className="portrait-caption">
            <span>Nice to meet you</span>
            <span className="caption-index">01 / 03</span>
          </div>
        </section>

        <section className="resume-card" id="resume" aria-labelledby="resume-title">
          <p className="eyebrow">02 / BACKGROUND</p>
          <h2 id="resume-title">Resume &amp; more</h2>
          <p className="resume-copy">
            A home for my experience, education, and the skills I&apos;ve picked
            up along the way.
          </p>
          <div className="resume-topics" aria-label="Resume topics">
            <span>Experience</span>
            <span>Education</span>
            <span>Skills</span>
          </div>
          <p className="resume-note">More details coming soon.</p>
          <span className="card-decoration" aria-hidden="true">
            C
          </span>
        </section>

        <section className="projects-card" id="projects" aria-labelledby="projects-title">
          <div className="projects-heading">
            <div>
              <p className="eyebrow">03 / IN THE WORKS</p>
              <h2 id="projects-title">Projects</h2>
            </div>
            <span className="projects-spark" aria-hidden="true">
              ✳
            </span>
          </div>
          <div className="project-placeholder">
            <span className="project-dot" aria-hidden="true" />
            <p>Personal projects and side quests will show up here.</p>
            <span className="project-arrow" aria-hidden="true">
              ↗
            </span>
          </div>
        </section>
      </div>

      <footer className="site-footer">
        <span>Thanks for stopping by.</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </main>
  );
}
