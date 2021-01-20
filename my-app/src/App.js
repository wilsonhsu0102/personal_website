import './App.css';
import Navigator from './Components/Navigator.jsx';
import Welcome from './Components/Welcome.jsx';
import AboutMe from './Components/AboutMe.jsx';
import WorkExperience from './Components/WorkExperience.jsx';

function App() {
  return (
    <div className="App">
      <Navigator/>
      <Welcome/>
      <AboutMe/>
      <WorkExperience/>
      <WorkExperience/>
      <div className="container22"> Cool</div>
    </div>
  );
}

export default App;
