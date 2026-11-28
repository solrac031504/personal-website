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
          <p className="about-me-copy">
            I am a {age} year-old Database Developer with a Master of Science in Computer Science. 
            I am highly interested in software development, database administration, and project management.
            I am always open to working on new projects, so please feel free to reach out! I would love to participate.
            I am also a native Spanish speaker.
            I love developing new applications for both internal and community use.
            In my free time, I also enjoy producing and playing music, cooking, working out, and playing video games.
          </p>
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
          </div>
        </section>
      </div>
    </main>
  );
}
