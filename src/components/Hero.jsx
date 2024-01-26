// components/Hero.jsx

import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-container">
      <Image src='/images/profile.jpeg' className="profile-img" width={300} height={300} alt="Antonin's personal headshot" />
      <div className="hero-text">
        <h1>Hey, I'm Antonin 👋🏝️🌅</h1>
        <p>
          I'm a software engineer based in Palawan, Philippines. I currently certifying myself to be a web developer and data analyst.
          I have industry experience in data analysis and software development, eager to put my skills into a work environment. I have understanding of Machine Learning and
          it's web technologies applications.
        </p>
        <div className="social-icons">
          <a
            href="https://github.com/easynotedev"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/aktilaon/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero;