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
      <Navigator pages={pages} />
      <InView threshold="0.5" onChange={setWelcome}>
        {({ ref, inView }) => (
          <Wrapper ref={ref}>
            <Welcome/>
          </Wrapper>
        )}
      </InView>
      <InView threshold="0.5" onChange={setAboutMe}>
        {({ ref, inView }) => (
          <Wrapper ref={ref}>
            <AboutMe />
          </Wrapper>
        )}
      </InView>
      <InView threshold="0.5" onChange={setEducation}>
        {({ ref, inView }) => (
          <Wrapper ref={ref}>
            <Education />
          </Wrapper>
        )}
      </InView>
      <InView threshold="0.5" onChange={setExperience}>
        {({ ref, inView }) => (
          <Wrapper ref={ref}>
            <Experience />
          </Wrapper>
        )}
      </InView>
      <InView threshold="0.5" onChange={setSkill}>
        {({ ref, inView }) => (
          <Wrapper ref={ref}>
            <Skill />
          </Wrapper>
        )}
      </InView>
      <InView threshold="0.5" onChange={setProject}>
        {({ ref, inView }) => (
          <Wrapper ref={ref}>
            <Project />
          </Wrapper>
        )}
      </InView>
      <InView threshold="0.5" onChange={setContactMe}>
        {({ ref, inView }) => (
          <Wrapper ref={ref}>
            <ContactMe />
          </Wrapper>
        )}
      </InView>
    </div>
  );
}

export default App;
