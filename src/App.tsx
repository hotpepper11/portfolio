import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const Navigation = styled.div`
  display: flex;
  height: 100px;
  flex-direction: column;
  justify-content: space-between;
  width: 85px;
`;

const NavigationLink = styled.a`
  opacity: 70%;

  text-align: right;

  .highlighted {
    opacity: 100%;
    color: #3a884d !important;
  }

  cursor: pointer;

  &:hover {
    opacity: 90%;

  }
`;

const NavigationContainer = styled.div`
  width: 45vw;
  display: flex;
  justify-content: right;
`;

const IconContainer = styled.div`
  svg {
    font-size: 24px;
    margin-bottom: 16px;
  }
`;

const Header = styled.h3`
  color: white;
  font-size: 22px;
  letter-spacing: -7%;
  opacity: 80% !important;

  font-weight: 500;

  margin-bottom: 26px;
`;

const Text = styled.p`
  letter-spacing: -1.5%;
  opacity: 80%;
`;

const DateSubHeader = styled.div`
  letter-spacing: -1.5%;
  font-size: 14px;
  opacity: 70%;
  margin-top: 8px;
`;

const Tag = styled.button`
  background-color: #3a884d55;
  color: white;
  padding: 7px 19px;
  border-radius: 116px;
  border: none;
  font-weight: 20;

  opacity: 70%;

  font-size: 14px;
  letter-spacing: -1.5%;

  margin-right: 15px;
  margin-top: 8px;
`;

function App() {
  const scrollToItem = (item: string) => {
    const element = document.getElementById(item);

    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div id="profile" />
      <br />
      <br />

      <div className="container">
        <div className="side-bar-container">
          <div className='top-side-bar-container'>
            <IconContainer className="icon-container-desktop">
              <a href="https://github.com/hotpepper11/" target="_blank"><FontAwesomeIcon icon={faGithub} /><br /></a>
              {/* <a href="https://www.linkedin.com/in/thomas-smith-bb06b4350/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /><br /></a> */}
              <a href="mailto:hotpepper156@gmail.com" target="_blank"><FontAwesomeIcon icon={faPaperPlane} /><br /></a>
            </IconContainer>

            <NavigationContainer className="navigation-container">
              <Navigation>
                <NavigationLink onClick={() => scrollToItem('profile')}>Profile</NavigationLink>
                <NavigationLink onClick={() => scrollToItem('experience')}>Experience</NavigationLink>
                <NavigationLink onClick={() => scrollToItem('education')}>Education</NavigationLink>
                <NavigationLink onClick={() => scrollToItem('projects')}>Projects</NavigationLink>
              </Navigation>
            </NavigationContainer>
          </div>

          <div className="header-section">
            <div className="blob" style={{ zIndex: 5, position: 'absolute', width: '775px', height: '775px', background: '#3a884d50', filter: 'blur(300px)' }}></div>

            <h1 style={{ letterSpacing: '-4%', fontWeight: 500, fontSize: '45px', marginBottom: '10px' }}>Thomas Smith</h1>

            <div style={{ fontSize: '20px', letterSpacing: '-2%', fontWeight: 400 }} className='sub-header'>Full Stack Software Engineer</div>

          </div>

          <br />
          <IconContainer className="icon-container-mobile">
            <a href="https://github.com/hotpepper11/" target="_blank"><FontAwesomeIcon icon={faGithub} /><br /></a>
            <a href="https://www.linkedin.com/in/thomas-smith-bb06b4350/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /><br /></a>
            <a href="mailto:hotpepper156@gmail.com" target="_blank"><FontAwesomeIcon icon={faPaperPlane} /><br /></a>
          </IconContainer>

        </div>

        <div className='content'>
          <Header>Profile</Header>
          <Text>Software Engineer with 4+ years of experience building mission-critical full-stack systems. Proven track record of developing secure, high-stakes software. Specializing in Python, Ruby on Rails, and AWS to build scalable architectures for computer vision and sensor-driven data.</Text>

          <div id="experience"></div>

          <br />

          <Header>Experience</Header>

          <div>Software Engineer, Skyfish</div>
          <DateSubHeader>April 2025 - Present</DateSubHeader>

          <Text>Optimized real-time video streaming protocols between drone hardware and controllers, enhancing data fidelity for critical infrastructure inspections.</Text>
          <Text>Developed and maintained scripts currently utilized by Homeland Security and the Architect of the Capitol.</Text>
          <Text>Orchestrated a cross-platform deployment pipeline using Docker and Bash to ensure consistent and reliable delivery across various environments.</Text>
          <Text>Automated release management through Git tagging to provide immutable artifacts and clear traceability for production-ready code.</Text>

          <Tag>Docker</Tag>
          <Tag>C/C++</Tag>
          <Tag>Bitbucket</Tag>
          <Tag>DevOps</Tag>
          <Tag>Bash</Tag>
          <Tag>Linux</Tag>
          <Tag>Embedded Systems</Tag>

          <br /><br /><br /><br />

          <div>Software Engineer, Upward Thought</div>
          <DateSubHeader>Feb 2023 - April 2024</DateSubHeader>

          <Text>Architected a high-availability backend using Terraform and GitLab CI/CD to enable automated "Push-to-Prod" deployments.</Text>
          <Text>Optimized AWS infrastructure by leveraging S3 and EC2 for a custom database solution, reducing monthly operational costs by approximately 97%.</Text>
          <Text>Enhanced system reliability and performance by scaling AWS cloud environments through Terraform-driven Infrastructure as Code (IaC).</Text>

          <Tag>Ruby on Rails</Tag>
          <Tag>Ruby</Tag>
          <Tag>AWS</Tag>
          <Tag>Javascript</Tag>
          <Tag>SQLite</Tag>
          <Tag>RESTful APIs</Tag>
          <Tag>CSS</Tag>

          <br /><br /><br /><br />

          <div>Junior Software Engineer, Prime Labs Inc.</div>
          <DateSubHeader>June 2022 - March 2024</DateSubHeader>

          <Text>Built a custom WYSIWYG rich text editor using Ruby on Rails and React, enabling scientists to produce publication-ready reports without external libraries, thereby reducing external dependencies and enhancing security/performance.</Text>
          <Text>Developed a data-driven image management system that synchronized visuals with source data to ensure consistency.</Text>
          <Text>Created dynamic report formatting tools and automated figure numbering systems to improve scientific documentation workflows.</Text>

          <Tag>Ruby on Rails</Tag>
          <Tag>Ruby</Tag>
          <Tag>React</Tag>
          <Tag>PostgreSQL</Tag>
          <Tag>Gitlab</Tag>

          <div id="education"></div>
          <br />
          <br />
          <Header>Education</Header>

          <div>Western Governors University</div>

          <Text>BS, Computer Science (Graduating March 2026)</Text>

          <Tag>Java</Tag>
          <Tag>Python</Tag>
          <Tag>SQL</Tag>
          <Tag>HTML</Tag>
          <Tag>CSS</Tag>
          <Tag>Javascript</Tag>

          <div id="projects"></div>
          <br />
          <br />
          <Header>Projects</Header>

          <a href="https://github.com/hotpepper11/where_is_good" target="_blank">
            <div>Where is Good <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ float: 'right' }} /></div>
          </a>

          <Text>Engineered a GIS-integrated data pipeline that transformed raw ZIP code data into dynamic heat maps using Ruby on Rails and AWS, optimizing location-based strategic planning.</Text>
          <Text>Automated the collection and processing of audience travel radius and location data to provide performers with actionable insights via a centralized platform, solving the challenge of making data-driven strategic decisions on tour planning.</Text>

          <Tag>Ruby on Rails</Tag>
          <Tag>AWS</Tag>
          <Tag>Javascript</Tag>
          <Tag>SQLite</Tag>
          <Tag>CSS</Tag>

          <br /><br /><br /><br />

          <a href="https://github.com/hotpepper11/logistics_routing_and_optimization" target="_blank">
            <div>Logistics Routing & Optimization Engine <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ float: 'right' }} /></div>
          </a>

          <Text>Developed a custom Heuristic Routing Algorithm (Nearest Neighbor) to solve a variation of the Traveling Salesman Problem (TSP), successfully optimizing delivery routes for multiple vehicles under strict time and load constraints.</Text>
          <Text>Implemented a Hash Table data structure from scratch to manage package data, achieving O(1) average-case lookup time and demonstrating deep proficiency in memory management.</Text>
          <Text>Optimized execution logic to follow Object-Oriented Programming (OOP) principles, resulting in a modular system that allows for dynamic adjustments to delivery constraints without core logic interruption.</Text>

          <Tag>Python</Tag>
          <Tag>Data Structures and Algorithms</Tag>

          <br /><br /><br /><br />

          <a href="https://github.com/hotpepper11/customer_scheduling_platform" target="_blank">
            <div>Full-Stack Customer Scheduling Platform <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ float: 'right' }} /></div>
          </a>

          <Text>Architected a multi-tier GUI application using Java Spring Boot and Angular, implementing a custom Model-View-Controller (MVC) pattern to ensure separation of concerns and maintainability.</Text>
          <Text>Optimized relational database performance by designing a normalized MySQL schema and writing efficient SQL queries to handle real-time CRUD operations with multi-user concurrency control.</Text>
          <Text>Developed logic to handle time-zone conversions (UTC/Local) and automated data validation, reducing scheduling conflicts and improving data integrity.</Text>

          <Tag>Java</Tag>
          <Tag>Spring Boot</Tag>
          <Tag>Angular</Tag>
          <Tag>MySQL</Tag>

          <br /><br /><br /><br />

          <a href="https://github.com/hotpepper11/bookkeeping_automation_ai" target="_blank">
            <div>AI Bookkeeping Automation <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ float: 'right' }} /></div>
          </a>

          <Text>Architected a custom machine learning solution for small bookkeeping firms to automate the categorization of thousands of nuanced financial transactions, targeting a reduction in manual overhead and shift toward high-value advisory services.</Text>
          <Text>Implemented a Random Forest Classification model using Python and Scikit-learn, achieving a 95% categorization accuracy (F1-score of 0.85).</Text>
          <Text>Optimized execution logic to follow Object-Oriented Programming (OOP) principles, resulting in a modular system that allows for dynamic adjustments to delivery constraints without core logic interruption.</Text>

          <Tag>Python</Tag>
          <Tag>Pandas</Tag>
          <Tag>Scikit-learn</Tag>

          <br/>
          <br/>

          <br />

          <Text style={{ textAlign: "center" }}>Built using React.js</Text>
        </div>
      </div>
    </>
  )
}

export default App
