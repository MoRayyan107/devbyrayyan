import React, { useState } from 'react';

type TabType = 'Education' | 'Skills';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('Education');

  return (
    <div id="about" className="fade-in-section is-visible">
      <div className="container">
        <div className="row">
          <div className="about-col-1"></div>
          <div className="about-col-2">
            <h1 className="sub-title">About Me</h1>
            <div className="about-panel">
              <p>
                <strong>Hello!</strong> I am Mohammad Rayyan Adhoni, a <strong>Master of Engineering (MEng) in Computer Science </strong> at the University of Strathclyde 
                in Glasgow. My journey in technology began at GEMS United Indian School in Abu Dhabi, 
                and today I am deeply focused on the challenges of backend engineering.
                I enjoy architecting robust REST APIs, modeling relational data, and building resilient service layers designed to handle 
                real-world complexity.
              </p>
              <p>
                I approach software development with an emphasis on <strong>correctness first, then scale</strong>. 
                I prioritize writing clean, testable code backed by rigorous unit testing before shifting focus to 
                optimization.
              </p>

              <div className="tab-titles">
                <p 
                  className={`links ${activeTab === 'Education' ? 'active_type' : ''}`}
                  onClick={() => setActiveTab('Education')}
                >
                  Education
                </p>
                <p 
                  className={`links ${activeTab === 'Skills' ? 'active_type' : ''}`}
                  onClick={() => setActiveTab('Skills')}
                >
                  Skills
                </p>
              </div>

              {activeTab === 'Education' && (
                <div className="tab-contents Active" id="Education">
                  <div className="timeline">
                    <div className="timeline-item">
                      <h4>2023 — Present</h4>
                      <h3>MEng Computer Science</h3>
                      <p>University of Strathclyde, Glasgow</p>
                    </div>
                    <div className="timeline-item">
                      <h4>2021 — 2023</h4>
                      <h3>A-Levels / High School</h3>
                      <p>Gems United Indian School, Abu Dhabi</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'Skills' && (
                <div className="tab-contents Active" id="Skills">
                  <div className="skills-grid">
                    <div className="skill-column">
                      <h4 className="skill-category">Core Backend</h4>
                      <div className="skill-item"><h3><i className="fab fa-java"></i> Java</h3></div>
                      <div className="skill-item"><h3><i className="fas fa-leaf"></i> Spring Boot</h3></div>
                      <div className="skill-item"><h3><i className="fas fa-database"></i> PostgreSQL &amp; MySQL</h3></div>
                      <div className="skill-item"><h3><i className="fas fa-vial"></i> JUnit 5 &amp; Mockito</h3></div>

                      <h4 className="skill-category" style={{ marginTop: '20px' }}>Infrastructure</h4>
                      <div className="skill-item"><h3><i className="fab fa-docker"></i> Docker</h3></div>
                      <div className="skill-item"><h3><i className="fab fa-microsoft"></i> Azure Container Apps</h3></div>
                      <div className="skill-item"><h3><i className="fab fa-git-alt"></i> Git &amp; GitHub Actions</h3></div>
                    </div>
                    <div className="skill-column">
                      <h4 className="skill-category">Secondary &amp; Scripting</h4>
                      <div className="skill-item"><h3><i className="fab fa-python"></i> Python</h3></div>
                      <div className="skill-item"><h3><i className="fab fa-js"></i> JavaScript</h3></div>
                      <div className="skill-item"><h3><i className="fas fa-code"></i> C</h3></div>
                      <div className="skill-item"><h3><i className="fab fa-html5"></i> HTML &amp; CSS</h3></div>

                      <h4 className="skill-category" style={{ marginTop: '20px' }}>Roadmap</h4>
                      <div className="skill-item roadmap-item"><h3><i className="fas fa-circle-notch"></i> Apache Kafka</h3></div>
                      <div className="skill-item roadmap-item"><h3><i className="fas fa-circle-notch"></i> Redis</h3></div>
                      <div className="skill-item roadmap-item"><h3><i className="fas fa-circle-notch"></i> CI/CD Pipelines</h3></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};