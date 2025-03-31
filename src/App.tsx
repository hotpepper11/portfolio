// import { useState } from 'react'
import styled from 'styled-components';
const Button = styled.button`
  background-color: white;
  color: black;
  padding: 7px 19px;
  border-radius: 4px;
  border: none;
  font-weight: 550;

  cursor: pointer;

  &:hover {
    background-color: #ffffffb9;

    transition: 0.4s;
  }
  transition: 0.4s;
`;

const Navigation = styled.div`
  display: flex;
  height: 135px;
  flex-direction: column;
  justify-content: space-between;
  width: 85px;

  /* float: right; */

`;

const NavigationLink = styled.a`
  opacity: 70%;

  text-align: right;

  .highlighted {
    opacity: 100%;
  }

  cursor: pointer;
`;

function App() {

  return (
    <>
      <Navigation>
        <NavigationLink>About</NavigationLink>
        <NavigationLink>Experience</NavigationLink>
        <NavigationLink>Projects</NavigationLink>
        <Button>Resume</Button>
      </Navigation>

      <div style={{ position: 'absolute', bottom: '60px', left: '80px', width: '614px' }}>
        <div style={{ zIndex: 5, position: 'absolute', bottom: '-400px', left: '-400px', width: '775px', height: '775px', background: '#212121', filter: 'blur(300px)' }}></div>

        <h1 style={{ letterSpacing: '-4%', fontWeight: 500, fontSize: '60px', marginBottom: '10px' }}>Thomas Smith</h1>

        <div style={{ fontSize: '25px', letterSpacing: '-7%', fontWeight: 400 }}>Software Engineer</div>
        <p style={{ opacity: '50%' }}>Put some text here you dimwad. Put some text here you dimwad. Put some text here you dimwad. Put some text here you dimwad. Put some text here you dimwad.</p>

      </div>
    </>
  )
}

export default App
