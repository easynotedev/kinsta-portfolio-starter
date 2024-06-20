// components/Hero.jsx

import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-container">
      <Image src='/images/profile.jpeg' className="profile-img" width={300} height={300} alt="Antonin's personal headshot" />
      <div className="hero-text">
        <h1>Hi👋, my name is Antonin Karlo Tilaon </h1>
        <p>
          I'm a web developer based in Palawan🏝️Philippines🌅. I have industry experience in software and web development. As well as teaching college students on emerging technologies such as cloud-computing, machine learning, and data analytics. I am eager to put my skills into a work environment.
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