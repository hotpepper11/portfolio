import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

// const Button = styled.button`
//   background-color: #3a884ddb;
//   color: #dddbd4;
//   padding: 7px 19px;
//   border-radius: 4px;
//   border: none;
//   font-weight: 550;

//   opacity: 90%;

//   cursor: pointer;

//   &:hover {
//     background-color: #3a884d89;

//     transition: 0.2s;
//   }
// `;

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
              <a href="https://x.com/hey_imthomas" target="_blank"><FontAwesomeIcon icon={faXTwitter} /><br /></a>
              <a href="https://www.linkedin.com/in/thomas-smith-bb06b4350/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /><br /></a>
              <a href="mailto:hotpepper156@gmail.com" target="_blank"><FontAwesomeIcon icon={faPaperPlane} /><br /></a>
            </IconContainer>

            <NavigationContainer className="navigation-container">
              <Navigation>
                <NavigationLink onClick={() => scrollToItem('profile')}>Profile</NavigationLink>
                <NavigationLink onClick={() => scrollToItem('experience')}>Experience</NavigationLink>
                <NavigationLink onClick={() => scrollToItem('projects')}>Projects</NavigationLink>
              </Navigation>
            </NavigationContainer>
          </div>

          <div className="header-section">
            <div className="blob" style={{ zIndex: 5, position: 'absolute', width: '775px', height: '775px', background: '#3a884d50', filter: 'blur(300px)' }}></div>

            <h1 style={{ letterSpacing: '-4%', fontWeight: 500, fontSize: '45px', marginBottom: '10px' }}>Thomas Smith</h1>

            <div style={{ fontSize: '20px', letterSpacing: '-7%', fontWeight: 400 }} className='sub-header'>Full Stack Software Engineer</div>
            <p style={{ opacity: '50%' }}>Seeking a mid-level software developer position. Equally open to full-stack positions that either continue to build on prior experience or employ new technologies.</p>

          </div>

          <br />
          <IconContainer className="icon-container-mobile">
            <a href="https://github.com/hotpepper11/" target="_blank"><FontAwesomeIcon icon={faGithub} /><br /></a>
            <a href="https://x.com/hey_imthomas" target="_blank"><FontAwesomeIcon icon={faXTwitter} /><br /></a>
            <a href="https://www.linkedin.com/in/thomas-smith-bb06b4350/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /><br /></a>
            <a href="mailto:hotpepper156@gmail.com" target="_blank"><FontAwesomeIcon icon={faPaperPlane} /><br /></a>
          </IconContainer>

        </div>

        <div className='content'>
          <Header>Profile</Header>
          <Text>I am a software engineer seeking a mid-level software developer position. I am equally open to full-stack positions that either continue to build on prior experience or employ new technologies.</Text>

          <Text>The primary technologies I have used throughout the years are <b>Ruby on Rails</b>, <b>AWS</b>, and <b>React.js</b>. I have three years of professional experience working with each one and have developed many personal projects with them. I also excel at building software in <b>C/C++</b> and <b>Java</b>.</Text>

          <div id="experience"></div>

          <br />

          <Header>Experience</Header>

          <div>Software Engineer Intern, Skyfish</div>
          <DateSubHeader>April 2025 - Present · Part-time</DateSubHeader>

          <Text>Managed scripts for compiling and building repositories.</Text>

          <Tag>Bash</Tag>
          <Tag>C++</Tag>
          <Tag>Bitbucket</Tag>

          <br /><br /><br /><br />

          <div>Lead Software Engineer, Upward Thought</div>
          <DateSubHeader>Feb 2023 - Present · Part-time</DateSubHeader>

          <Text>Developed a search system to query over 100GB of blog posts, books, and video transcripts. Deployed an EC2 instance for a Ruby on Rails app. Set up pipelines for transmitting over 700GB of data to and from S3. Created Lambda functions for monitoring S3 uploads via presigned urls. Implemented cost-saving AWS optimizations, resulting in a ~90% monthly cost reduction.</Text>

          <Tag>Ruby on Rails</Tag>
          <Tag>AWS</Tag>
          <Tag>Javascript</Tag>
          <Tag>SQLite</Tag>
          <Tag>CSS</Tag>

          <br /><br /><br /><br />

          <div>Junior Software Engineer, Prime Labs Inc.</div>
          <DateSubHeader>June 2022 - March 2024 · Part-time</DateSubHeader>

          <Text>Built a fully functioning WYSYWIG text editor in React.js without the use of any libraries. Built a multi-layered graph with shifting and the ability to show/hide specific graphs. Built a report generation tool that screenshots each graph and table, and allows users to insert the images into the text editor.</Text>

          <Tag>Ruby on Rails</Tag>
          <Tag>React.js</Tag>
          <Tag>PostgreSQL</Tag>
          <Tag>Docker</Tag>
          <Tag>Gitlab</Tag>

          <div id="projects"></div>
          <br />
          <br />
          <Header>Projects</Header>

          {/* <a href="https://github.com/hotpepper11/json-java" target="_blank">
            <div>JSON Parser in Java <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ float: 'right' }} /></div>
          </a>
          <DateSubHeader>March 2025</DateSubHeader>
          <Text>A JSON Parser that can convert Java objects to a JSON string and vice versa. Complete with unit tests using JUnit.</Text>

          <Tag>Java</Tag>
          <Tag>Data Structures</Tag>
          <Tag>Unit Tests</Tag> */}

          {/* <br/>
          <br/>
          <br/> */}

          <a href="https://github.com/hotpepper11/where_is_good" target="_blank">
            <div>Where is Good <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ float: 'right' }} /></div>
          </a>

          <DateSubHeader>February 2024</DateSubHeader>

          <Text>Wrote a data visualization platform that aggregates and analyzes audience location data, providing musicians and speakers with insights for tour optimization.</Text>

          <Tag>Ruby on Rails</Tag>
          <Tag>AWS</Tag>
          <Tag>Javascript</Tag>
          <Tag>SQLite</Tag>
          <Tag>CSS</Tag>

          <br/>
          <br/>

          <br />

          <Text style={{ textAlign: "center" }}>Built in React.js</Text>
        </div>
      </div>
    </>
  )
}

export default App
