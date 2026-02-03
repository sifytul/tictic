import './App.css';

function App() {
  return (
    <div className="portfolio">
      <header className="header">
        <h1>Sifytul Karim</h1>
        <p>DevOps Engineer</p>
      </header>
      
      <section className="about">
        <h2>About Me</h2>
        <p>
          I am a passionate DevOps Engineer with expertise in automating deployments, managing cloud infrastructure, and ensuring scalable, reliable systems. 
          With a background in software development and operations, I thrive on optimizing workflows and fostering collaboration between teams.
        </p>
      </section>
      
      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>Cloud Platforms: AWS, Azure, GCP</li>
          <li>CI/CD Tools: Jenkins, GitLab CI, GitHub Actions</li>
          <li>Containerization: Docker, Kubernetes</li>
          <li>Infrastructure as Code: Terraform, Ansible</li>
          <li>Monitoring: Prometheus, Grafana, ELK Stack</li>
          <li>Programming: Python, Bash, JavaScript</li>
        </ul>
      </section>
      
      <section className="projects">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project">
            <h3>Automated CI/CD Pipeline</h3>
            <p>Built a scalable pipeline using Jenkins and Docker for microservices deployment, reducing deployment time by 40%.</p>
          </div>
          <div className="project">
            <h3>Cloud Infrastructure Migration</h3>
            <p>Migrated legacy systems to AWS using Terraform, improving uptime and cost-efficiency.</p>
          </div>
          <div className="project">
            <h3>Monitoring Dashboard</h3>
            <p>Developed a real-time monitoring solution with Grafana and Prometheus for application performance tracking.</p>
          </div>
        </div>
      </section>
      
      <footer className="contact">
        <h2>Contact</h2>
        <p>Email: sifytul09@gmail.com.com</p>
        <p>LinkedIn: <a href="https://linkedin.com/in/sifytulkarim" target="_blank" rel="noopener noreferrer">linkedin.com/in/sifytulkarim</a></p>
        <p>GitHub: <a href="https://github.com/sifytul" target="_blank" rel="noopener noreferrer">github.com/sifytul</a></p>
      </footer>
    </div>
  );
}

export default App;