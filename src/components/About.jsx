// components/About.jsx

import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="flex-about">
        <div className="about-text">
          <p> 
            I have experience with data extraction software such as Excel and SQL, 
            I am currently certifying myself in data analysis using Power BI, 
            my goal is to keep upgrading my qualifications until I become a senior-level software engineer. 
            My past experience in Accenture and NorthgateArinso are also work experience that are tied 
            to software development . In both instances, I maintained proprietary software, 
            making sure that no downtime by engineering solutions and analytical pinpointing root causes.
          </p>
          <p>As a developer, I have a strong foundation in software development, with a focus on web
          technologies such as Frameworks and cloud technologies. I have worked on a wide range of projects, from simple static websites to
            complex enterprise-level applications. I am experienced in working with web development
            tools and frameworks, including React and Node.js. I am always eager
            to learn and explore new technologies, and I am constantly seeking out opportunities to improve
            my skills and knowledge.</p>
        </div>
        <div className="about-img">
          <Image src='/images/about.jpeg' className="profile-img" width={300} height={500}/>
        </div>
      </div>
    </div>
  )
}

export default About;