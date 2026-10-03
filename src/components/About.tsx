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
                I'm Mohammad Rayyan Adhoni, a 4th year <strong>MEng Computer Science</strong> student
                at the <strong>University of Strathclyde in Glasgow</strong>, focused on backend engineering. I like the
                parts of software that make systems trustworthy: REST APIs, well-modelled relational
                data, and service layers that hold up when real-world inputs get messy.
              </p>
              <p>
                My approach is <strong>correctness first, then scale</strong>. I write clean, testable
                Java and Spring Boot code, back it with unit and integration tests, and only then turn
                to performance. I've put <strong>Kafka and Redis</strong> to work in a Discord-inspired
                distributed chat server and in <strong>VaultGuard</strong>, a fraud detection platform
                with JWT auth and rate limiting. Right now I'm sharpening my{' '}
                <strong>data structures and algorithms</strong> and learning <strong>AWS</strong>.
              </p>
              <p>
                I'm looking for a software engineering internship, especially in FinTech, where I can
                work on backend systems and keep learning from experienced engineers.
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
                      <h4>2023 — 2028</h4>
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
                      <div className="skill-item"><h3><i className="fas fa-database"></i> Redis</h3></div>
                      <div className="skill-item"><h3><i className="fas fa-stream"></i> Apache Kafka</h3></div>
                      <div className="skill-item"><h3><i className="fab fa-git-alt"></i> Git &amp; GitHub Actions</h3></div>
                    </div>
                    <div className="skill-column">
                      <h4 className="skill-category">Secondary &amp; Scripting</h4>
                      <div className="skill-item"><h3><i className="fab fa-python"></i> Python</h3></div>
                      <div className="skill-item"><h3><i className="fab fa-js"></i> JavaScript</h3></div>
                      <div className="skill-item"><h3><i className="fas fa-code"></i> C</h3></div>
                      <div className="skill-item"><h3><i className="fab fa-html5"></i> HTML &amp; CSS</h3></div>

                      <h4 className="skill-category" style={{ marginTop: '20px' }}>Roadmap</h4>
                      <div className="skill-item roadmap-item in-progress"><h3><span className="progress-indicator" aria-label="10% complete"></span> AWS</h3></div>
                      <div className="skill-item roadmap-item"><h3><i className="fas fa-circle-notch"></i> Data Structures &amp; Algorithms</h3></div>
                      <div className="skill-item roadmap-item"><h3><i className="fas fa-circle-notch"></i> System Design</h3></div>
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