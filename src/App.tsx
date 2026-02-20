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
              <a href="https://www.linkedin.com/in/thomas-smith-bb06b4350/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /><br /></a>
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

            <div style={{ fontSize: '20px', letterSpacing: '-7%', fontWeight: 400 }} className='sub-header'>Full Stack Software Engineer</div>
            <p style={{ opacity: '50%' }}>I am seeking a Software Engineer position where I can grow while applying existing skills. I have four years of professional experience building scalable systems and solving challenging full-stack problems in Ruby on Rails, React, Docker, AWS, microservice architecture, and CI/CD pipelines. I am highly flexible and adaptable, take feedback well, and reliably complete complex tasks alone or with others.</p>

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
          <Text>I am seeking a Software Engineer position where I can grow while applying existing skills. I have four years of professional experience building scalable systems and solving challenging full-stack problems in Ruby on Rails, React, Docker, AWS, microservice architecture, and CI/CD pipelines. I am highly flexible and adaptable, take feedback well, and reliably complete complex tasks alone or with others.</Text>

          <div id="experience"></div>

          <br />

          <Header>Experience</Header>

          <div>Software Engineer, Skyfish</div>
          <DateSubHeader>April 2025 - Present</DateSubHeader>

          <Text>Designed and implemented a versatile, cross-platform CI/CD pipeline using Bash scripts that was deployed in Bitbucket orchestrated inside a Docker container.</Text>
          <Text>Automated version control and release management by integrating a Git tagging mechanism within the master deployment build, ensuring immutable artifacts and clear traceability for production releases.</Text>

          <Tag>Docker</Tag>
          <Tag>DevOps</Tag>
          <Tag>Embedded Systems</Tag>
          <Tag>C/C++</Tag>
          <Tag>Bash</Tag>
          <Tag>Bitbucket</Tag>

          <br /><br /><br /><br />

          <div>Software Engineer, Upward Thought</div>
          <DateSubHeader>Feb 2023 - April 2024</DateSubHeader>

          <Text>Architected and deployed a fully automated CI/CD ecosystem using GitLab and Terraform, enabling Git-driven deployments (Push- to-Prod) to a high-availability backend. Integrated Amazon Route53 with a CloudFront distribution to provide global low-latency access and SSL termination for an EC2-hosted application.</Text>
          <Text>Developed a search system using Ruby on Rails and PostgreSQL that queries content from video transcripts, blog posts, and books. Enabled users to filter by content type and sort results, returning relevant text excerpts with timestamps for videos and paragraph numbers for books and blog posts. Enhanced search functionality with lemmatization and exclusion features, improving user experience and information retrieval.</Text>
          <Text>Conducted thorough code reviews for team members, identifying potential security vulnerabilities, promoting best practices in RESTful APIs and web development.</Text>

          <Tag>Ruby on Rails</Tag>
          <Tag>Ruby</Tag>
          <Tag>AWS</Tag>
          <Tag>Javascript</Tag>
          <Tag>SQLite</Tag>
          <Tag>CSS</Tag>

          <br /><br /><br /><br />

          <div>Junior Software Engineer, Prime Labs Inc.</div>
          <DateSubHeader>June 2022 - March 2024</DateSubHeader>

          <Text>Built a from-scratch Rails and React based WYSIWYG rich text editor for a mass spectrometry platform, enabling scientists to produce publication-ready reports without external libraries, thereby reducing external dependencies and enhancing security/performance.</Text>
          <Text>Implemented a highly efficient, data-driven image management system that automatically captured and updated report visuals (graphs/tables) only when source data was modified, minimizing system overhead and guaranteeing data-to-image consistency across dynamic reports.</Text>
          <Text>Developed comprehensive report formatting and structure tools, including a dynamic image insertion sidebar, a dedicated image management menu, and an automated figure/table numbering system that ensured real-time numbering consistency upon insertion, deletion, or movement of content.</Text>

          <Tag>Ruby on Rails</Tag>
          <Tag>Ruby</Tag>
          <Tag>React.js</Tag>
          <Tag>PostgreSQL</Tag>
          <Tag>Gitlab</Tag>

          <div id="education"></div>
          <br />
          <br />
          <Header>Education</Header>

          <a href="https://github.com/hotpepper11/where_is_good" target="_blank">
            <div>Western Governors University <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ float: 'right' }} /></div>
          </a>

          <Text>BS, Computer Science (Graduating March 2026)</Text>
          <Text><b>Coursework:</b> Java, Python, SQL, HTML, CSS, Javascript</Text>

          <Tag>Ruby on Rails</Tag>
          <Tag>AWS</Tag>
          <Tag>Javascript</Tag>
          <Tag>SQLite</Tag>
          <Tag>CSS</Tag>

          <br /><br /><br /><br />

          <a href="https://github.com/hotpepper11/todo" target="_blank">
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

          <a href="https://github.com/hotpepper11/todo" target="_blank">
            <div>Logistics Routing & Optimization Engine <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ float: 'right' }} /></div>
          </a>

          <Text>Developed a custom Heuristic Routing Algorithm (Nearest Neighbor) to solve a variation of the Traveling Salesman Problem (TSP), successfully optimizing delivery routes for multiple vehicles under strict time and load constraints.</Text>
          <Text>Implemented a Hash Table data structure from scratch to manage package data, achieving O(1) average-case lookup time and demonstrating deep proficiency in memory management.</Text>
          <Text>Optimized execution logic to follow Object-Oriented Programming (OOP) principles, resulting in a modular system that allows for dynamic adjustments to delivery constraints without core logic interruption.</Text>

          <Tag>Python</Tag>
          <Tag>Data Structures and Algorithms</Tag>

          <br/>
          <br/>

          <br />

          <div id="projects"></div>
          <br />
          <br />
          <Header>Projects</Header>

          <a href="https://github.com/hotpepper11/where_is_good" target="_blank">
            <div>Where is Good <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ float: 'right' }} /></div>
          </a>

          <Text>Engineered a data ingestion and processing pipeline that transformed raw audience ZIP code data into dynamic, interactive heat maps, enabling touring performers to visualize fanbase geographic density with high confidence.</Text>
          <Text>Developed and deployed a cutting-edge geographic insights platform providing performers with precise audience distribution visualization that directly optimized tour routing and strategic event location selection, leading to enhanced planning efficiency.</Text>
          <Text>Automated the collection and processing of audience travel radius and location data to provide performers with actionable insights via a centralized platform, solving the challenge of making data-driven strategic decisions on tour planning.</Text>

          <Tag>Ruby on Rails</Tag>
          <Tag>AWS</Tag>
          <Tag>Javascript</Tag>
          <Tag>SQLite</Tag>
          <Tag>CSS</Tag>

          <br /><br /><br /><br />

          <a href="https://github.com/hotpepper11/todo" target="_blank">
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

          <a href="https://github.com/hotpepper11/todo" target="_blank">
            <div>Logistics Routing & Optimization Engine <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ float: 'right' }} /></div>
          </a>

          <Text>Developed a custom Heuristic Routing Algorithm (Nearest Neighbor) to solve a variation of the Traveling Salesman Problem (TSP), successfully optimizing delivery routes for multiple vehicles under strict time and load constraints.</Text>
          <Text>Implemented a Hash Table data structure from scratch to manage package data, achieving O(1) average-case lookup time and demonstrating deep proficiency in memory management.</Text>
          <Text>Optimized execution logic to follow Object-Oriented Programming (OOP) principles, resulting in a modular system that allows for dynamic adjustments to delivery constraints without core logic interruption.</Text>

          <Tag>Python</Tag>
          <Tag>Data Structures and Algorithms</Tag>

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
