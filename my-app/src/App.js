import './App.css';
import * as React from 'react'
import Navigator from './Components/Navigator.jsx';
import Welcome from './Components/Welcome.jsx';
import AboutMe from './Components/AboutMe.jsx';
import Education from './Components/Education.jsx';
import Experience from './Components/Experience.jsx';
import Project from './Components/Project.jsx';
import Skill from './Components/Skill.jsx';
import ContactMe from './Components/ContactMe.jsx';
import { InView } from 'react-intersection-observer';
import Wrapper from './Components/ObserverWrapper.jsx';
import contents from './Resources/Contents.js';

function App() {
  const [welcome, setWelcome] = React.useState(false)
  const [aboutMe, setAboutMe] = React.useState(false)
  const [education, setEducation] = React.useState(false)
  const [experience, setExperience] = React.useState(false)
  const [project, setProject] = React.useState(false)
  const [skill, setSkill] = React.useState(false)
  const [contactMe, setContactMe] = React.useState(false)
  const pages = [welcome, aboutMe, education, experience, skill, project, contactMe]
  return (
    <div className="App">
      <Navigator pages={pages} content={contents.pages} />
      <InView threshold="0.5" onChange={setWelcome}>
        {({ ref }) => (
          <Wrapper ref={ref}>
            <Welcome content={contents.pages[0]} />
          </Wrapper>
        )}
      </InView>
      <InView threshold="0.5" onChange={setAboutMe}>
        {({ ref }) => (
          <Wrapper ref={ref}>
            <AboutMe links={contents.contactLinks} content={contents.pages[1]}/>
          </Wrapper>
        )}
      </InView>
      <InView threshold="0.5" onChange={setEducation}>
        {({ ref }) => (
          <Wrapper ref={ref}>
            <Education content={contents.pages[2]} />
          </Wrapper>
        )}
      </InView>
      <InView threshold="0.5" onChange={setExperience}>
        {({ ref }) => (
          <Wrapper ref={ref}>
            <Experience content={contents.pages[3]} />
          </Wrapper>
        )}
      </InView>
      <InView threshold="0.5" onChange={setSkill}>
        {({ ref }) => (
          <Wrapper ref={ref}>
            <Skill content={contents.pages[4]} />
          </Wrapper>
        )}
      </InView>
      <InView threshold="0.5" onChange={setProject}>
        {({ ref }) => (
          <Wrapper ref={ref}>
            <Project content={contents.pages[5]} />
          </Wrapper>
        )}
      </InView>
      <InView threshold="0.5" onChange={setContactMe}>
        {({ ref }) => (
          <Wrapper ref={ref}>
            <ContactMe links={contents.contactLinks} content={contents.pages[6]} />
          </Wrapper>
        )}
      </InView>
    </div>
  );
}

export default App;
