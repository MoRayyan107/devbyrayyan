import React from 'react';

interface Project {
  title: string;
  tags: string[];
  image: string;
  challenge: string;
  solution: string;
  repoUrl: string;
}

const projectsData: Project[] = [
  {
    title: 'ScotBank',
    tags: ['Java', 'OOP', 'Unit Testing'],
    image: 'assets/Bank_picture.webp',
    challenge: 'Develop a foundational banking application architecture, emphasizing strict encapsulation and clear separation between business logic and account state to ensure maintainable, testable code with coverage above 75%.',
    solution: 'Designed a working banking system with core operations (deposits, withdrawals, transfers) and account types (checking, savings). Employed OOP principles to encapsulate account state and business logic, achieving 80%+ test coverage with JUnit 5 and Mockito.',
    repoUrl: 'https://github.com/MoRayyan107/ScotBank',
  },
  {
    title: 'Discord Service',
    tags: ['Java', 'Concurrent I/O', 'Sockets'],
    image: 'assets/Discord App Logo.webp',
    challenge: 'Multi-user messaging with simultaneous connections and real-time propagation without blocking I/O.',
    solution: 'Java concurrency primitives managing independent client sessions. Message dispatch model decoupling production from delivery.',
    repoUrl: 'https://github.com/MoRayyan107/Discord',
  },
  {
    title: 'VaultGuard',
    tags: ['Java', 'OOP', 'Security', 'Spring Framework', "basic Kafka", " basic Redis"],
    image: 'assets/Vaultguard.jpg',
    challenge: 'Modern banks process massive transaction volumes against increasingly complex fraud. The core challenge was architecting a real-time fraud detection engine to ingest transactions, calculate risk scores in parallel using Kafka, and broadcast live updates via WebSockets without bottlenecking the core banking service.',
    solution: 'Implemented core fraud detection logic using OOP principles, ensuring modularity and maintainability. Leveraged Spring Framework for dependency injection and service orchestration. Utilized Kafka for real-time transaction processing, enabling efficient parallel processing and risk scoring.',
    repoUrl: 'https://github.com/MoRayyan107/VaultGuard',
  }
];

export const Projects: React.FC = () => {
  return (
    <div id="MyProjects" className="fade-in-section is-visible">
      <div className="container">
        <h1 className="sub-title">Project Case Studies</h1>
        <div className="project-list">
          {projectsData.map((project, idx) => (
            <div className="project-card" key={idx}>
              <div className="project-img-wrap">
                <img src={project.image} alt={project.title} />
                <div className="project-img-overlay"></div>
              </div>
              <div className="project-body">
                <div className="project-meta">
                  {project.tags.map((tag, i) => (
                    <span className="project-tag" key={i}>{tag}</span>
                  ))}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <div className="case-block">
                  <span className="case-label">Challenge</span>
                  <p>{project.challenge}</p>
                </div>
                <div className="case-block">
                  <span className="case-label">Solution</span>
                  <p>{project.solution}</p>
                </div>
                <a className="project-link" href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i> View Repository
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};