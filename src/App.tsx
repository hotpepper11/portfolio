// import { useState } from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

const Button = styled.button`
  background-color: #127382;
  color: #dddbd4;
  padding: 7px 19px;
  border-radius: 4px;
  border: none;
  font-weight: 550;

  opacity: 90%;

  cursor: pointer;

  &:hover {
    background-color: #127382c0;

    transition: 0.2s;
  }
`;

const Navigation = styled.div`
  display: flex;
  height: 135px;
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
  width: 614px;
  display: flex;
  justify-content: right;
`;

const SideBarContainer = styled.div`
  display: flex;
  margin-left: 60px;
`;

const TopSideBarContainer = styled.div`
  display: flex;
`;

const IconContainer = styled.div`
  svg {
    cursor: pointer;

    &:hover {
      opacity: 90% !important;

      transition: 0.2s;
    }

    opacity: 50%;
    font-size: 24px;
    margin-bottom: 16px;
  }

  a {
    text-decoration: none;
    color: #dddbd4;
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

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`
  float: left;
  width: 45%;
  margin-right: 40px;
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

`;

function App() {
  return (
    <>
      <br />
      <br />
      <Container>
        <SideBarContainer>
          <TopSideBarContainer>

            <IconContainer>
              <a href="https://github.com/hotpepper11/" target="_blank"><FontAwesomeIcon icon={faGithub} /><br /></a>
              <a href="https://x.com/hey_imthomas" target="_blank"><FontAwesomeIcon icon={faXTwitter} /><br /></a>
              <a href="mailto:hotpepper156@gmail.com" target="_blank"><FontAwesomeIcon icon={faPaperPlane} /><br /></a>
              <a href="https://www.linkedin.com/in/thomas-smith-bb06b4350/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /><br /></a>
            </IconContainer>

            <NavigationContainer>
              <Navigation>
                <NavigationLink>About</NavigationLink>
                <NavigationLink>Experience</NavigationLink>
                <NavigationLink>Projects</NavigationLink>
                <Button>Resume</Button>
              </Navigation>
            </NavigationContainer>
          </TopSideBarContainer>

          <div style={{ position: 'absolute', bottom: '60px', left: '80px', width: '614px' }}>
            <div style={{ zIndex: 5, position: 'absolute', bottom: '-400px', left: '-400px', width: '775px', height: '775px', background: '#3a884d50', filter: 'blur(300px)' }}></div>

            <h1 style={{ letterSpacing: '-4%', fontWeight: 500, fontSize: '60px', marginBottom: '10px' }}>Thomas Smith</h1>

            <div style={{ fontSize: '25px', letterSpacing: '-7%', fontWeight: 400 }}>Full Stack Software Engineer</div>
            <p style={{ opacity: '50%' }}>Seeking a mid-level software developer position. Equally open to full-stack positions that continue to build on prior experience or new technologies.</p>

          </div>
        </SideBarContainer>

        <Content>
          <Header>Profile</Header>
          <Text>I am a software engineer seeking a mid-level software developer position. I am equally open to full-stack positions that continue to build on prior experience or new technologies.</Text>

          <Text>My primary languages I have used throughout the years are <b>Ruby on Rails</b>, <b>AWS</b>, and <b>React.js</b>. I have three years of professional experience working with both and have developed many personal projects with them. That being said, I also excel at building software in <b>C/C++</b> and <b>Java</b>.</Text>

          <br />

          <Header>Experience</Header>

          <div>Lead Software Engineer, Upward Thought</div>
          <DateSubHeader>Feb 2023 - Present · Part-time</DateSubHeader>

          <Text>Developed a search system to get the best results from 100GB of blog posts, books, and video transcripts. Deployed a EC2 instance for a Ruby on Rails app, set up pipelines for transmitting over 700GB of data to and from S3, created Lambda functions for monitoring S3 uploads via presigned urls, and implemented cost-saving AWS optimizations, resulting in a ~90% monthly cost reduction.</Text>

          <br />

          <Tag>Ruby on Rails</Tag>
          <Tag>AWS</Tag>
          <Tag>Javascript</Tag>
          <Tag>SQLite</Tag>
          <Tag>CSS</Tag>

          <br /><br /><br /><br />

          <div>Junior Software Engineer, Prime Labs Inc.</div>
          <DateSubHeader>June 2022 - March 2024 · Part-time</DateSubHeader>

          <Text>TODO</Text>
          <br />

          <Tag>Ruby on Rails</Tag>
          <Tag>React.js</Tag>
          <Tag>PostgreSQL</Tag>
          <Tag>Docker</Tag>

          <br />
          <br />
          <Header>Projects</Header>

          <div>JSON Parser in Java</div>
          <DateSubHeader>March 2025</DateSubHeader>

          <Text>Github goes here</Text>
          <br />

          <Tag>Java</Tag>
          <Tag>Data Structures</Tag>
          <Tag>Unit Tests</Tag>

          <br/>
          <br/>
          <br/>

          <div>Where is Good</div>
          <DateSubHeader>2024</DateSubHeader>

          <Text>Wrote a data visualization platform that aggregates and analyzes audience location data, providing musicians and speakers with insights for tour optimization.</Text>
          <br />

          <Tag>Ruby on Rails</Tag>
          <Tag>AWS</Tag>
          <Tag>Javascript</Tag>
          <Tag>CSS</Tag>

          <br/>
          <br/>

          Github goes here



          <br />
          <br />

          <Text style={{ textAlign: "center" }}>Built in React.js</Text>
        </Content>
      </Container>
    </>
  )
}

export default App
