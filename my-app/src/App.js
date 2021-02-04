import './App.css';
import Navigator from './Components/Navigator.jsx';
import Welcome from './Components/Welcome.jsx';
import AboutMe from './Components/AboutMe.jsx';
import Education from './Components/Education.jsx';
import WorkExperience from './Components/WorkExperience.jsx';
import Project from './Components/Project.jsx';
import Skill from './Components/Skill.jsx';
import ContactMe from './Components/ContactMe.jsx';

function App() {
  return (
    <div className="App">
      <Navigator />
      <Welcome />
      <AboutMe />
      <Education />
      <WorkExperience />
      <Skill />
      <Project />
      <ContactMe />
    </div>
  );
}

export default App;
