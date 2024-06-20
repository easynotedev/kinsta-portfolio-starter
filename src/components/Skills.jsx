// components/Skills.jsx

const Skills = () => {
    return (
      <div className="skills-container">
        <h2>Technical Skills</h2>
        <div className="grid-skills">
          <div className="skill-card js">
            <i className="fa-brands fa-js-square js-icon"></i>
            <p>JavaScript</p>
          </div>
          <div className="skill-card react">
            <i className="fa-brands fa-react react-icon"></i>
            <p>React</p>
          </div>
          <div className="skill-card node">
            <i className="fa-brands fa-node-js node-icon"></i>
            <p>Node</p>
          </div>
          <div className="skill-card java">
            <i className="fa-brands fa-java java-icon"></i>
            <p>Java</p>
          </div>
          <div className="skill-card sql">
            <i className="fa-brands fa-sql sql-icon"></i>
            <p>SQL</p>
          </div>
          <div className="skill-card microexcel">
            <i className="fa-brands fa-microexcel microexcel-icon"></i>
            <p>Microsoft Excel</p>
          </div>
          <div className="skill-card bash">
            <i className="fa-brands fa-bash bash-icon"></i>
            <p>Bash shell</p>
          </div>
          <div className="skill-card qa">
            <i className="fa-brands fa-qa qa-icon"></i>
            <p>QA Testing</p>
          </div>
          <div className="skill-card osimodel">
            <i className="fa-brands fa-osimodel osimodel-icon"></i>
            <p>OSI Model</p>
          </div>
          <div className="skill-card rest">
            <i className="fa-brands fa-rest rest-icon"></i>
            <p>REST Architecture</p>
          </div>
          <div className="skill-card cloud">
            <i className="fa-brands fa-cloud cloud-icon"></i>
            <p>Cloud Computing</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default Skills;