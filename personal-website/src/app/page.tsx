'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

const birthday = new Date(process.env.NEXT_PUBLIC_BIRTHDAY!);

export default function Home() {
  const [isBirthday, setIsBirthday] = useState(false);

  useEffect(() => {
    const today = new Date();

    setIsBirthday(
      birthday.getDate() === today.getDate() &&
        birthday.getMonth() === today.getMonth(),
    );
  }, []);

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

        <section className="resume-card" id="resume" aria-labelledby="resume-title">
          <h2 id="resume-title">About Me</h2>
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
