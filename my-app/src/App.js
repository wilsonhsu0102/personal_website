import './App.css';
import Navigator from './Components/Navigator.jsx';
import Welcome from './Components/Welcome.jsx';
import AboutMe from './Components/AboutMe.jsx';
import Education from './Components/Education.jsx';
import Experience from './Components/Experience.jsx';
import Project from './Components/Project.jsx';
import Skill from './Components/Skill.jsx';
import ContactMe from './Components/ContactMe.jsx';
import useScrollPosition from './Components/ScrollHelper';

function App() {
  let scrollPos = useScrollPosition();
  return (
    <div className="App">
      <Navigator />
      <Welcome />
      <AboutMe />
      <Education />
      <Experience />
      <Skill />
      <Project />
      <ContactMe />
    </div>
  );
}

export default App;
