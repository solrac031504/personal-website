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

        <section className="resume-card" id="resume" aria-labelledby="resume-title">
          <h2 id="resume-title">About Me</h2>
          <p className="resume-copy">
            I am a {age} year old Database Developer.
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

        <section className="links-card" id="links" aria-labelledby="links-title">
          <div className="links-heading">
            <div>
              <h2 id="links-title">Links</h2>
            </div>
            <span className="links-spark" aria-hidden="true">
              ✳
            </span>
          </div>
          <div className="link-placeholder">
            <span className="link-dot" aria-hidden="true" />
            <p><b>LinkedIn:</b> <a href="www.linkedin.com/in/carlos-gonzalez-764b5b217">www.linkedin.com/in/carlos-gonzalez-764b5b217</a>
            <span className="link-arrow" aria-hidden="true">
              ↗
            </span> </p>
            <p><b>GitHub:</b> <a href="https://github.com/solrac031504">https://github.com/solrac031504</a>
            <span className="link-arrow" aria-hidden="true">
              ↗
            </span></p>
          </div>
        </section>
      </div>
    </main>
  );
}
