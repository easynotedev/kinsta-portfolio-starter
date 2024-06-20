// components/About.jsx

import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="flex-about">
        <div className="about-text">
          <p> 
            I am currently working as a support engineer in a start-up company my goal is to keep upgrading 
            my qualifications until I become a senior-level web developer. My past experience in BPO companies 
            such as Accenture are also work experience that are tied to support and software engineering. 
          </p>
          <p>
            In those instances, I maintained proprietary software, making sure that no downtime are met. I provided 
            engineering solutions; adept at creating robust automation scripts using Bash, provided support through 
            creating complex SQL queries and scripts, and at the same time using my Excel skills to extract data to consolidate 
            reports from production logs. Providing our team with up to date information on our software maintenance lifecycle 
            I used those reports as a basis for my analytical and technical skills to pinpoint root causes and mitigate errors/bugs 
          </p>
          <p>As a developer, I have a strong foundation in software development, with a focus on web
          technologies. Working on a wide range of projects,and using a variety of framework such as React.js and 
          Ruby on Rails which I have used to add improvements and modification to my company's website.I know how to
          create static websites and support complex enterprise-level SaaS and web applications. I have an understanding of 
          cloud computing technologies and am familiar with the virtual and abstracted applications provided by IaaS 
          (Infrastructure as a Service) hyperscalers.I am always eager to learn and explore new web technologies, and I am 
          constantly seeking out opportunities to improve my technical skills and updating my knowledge.</p>
        </div>
        <div className="about-img">
          <Image src='/images/about1.jpeg' className="profile-img" width={300} height={250}/>
          <Image src='/images/about2.jpg' className="profile-img" width={300} height={250}/> 
        </div>
      </div>
    </div>
  )
}

export default About;