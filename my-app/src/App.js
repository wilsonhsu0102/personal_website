import './App.css';
import Navigator from './Components/Navigator.jsx';
import Welcome from './Components/Welcome.jsx';
import AboutMe from './Components/AboutMe.jsx';
import Education from './Components/Education.jsx';
import WorkExperience from './Components/WorkExperience.jsx';
import Particles from 'react-particles-js';
import "pathseg";
import deerSVG from './Resources/small_deer.svg';

function App() {
  return (
    <div className="App">
      <Navigator />
      <Welcome />
      <AboutMe />
      <Education />
      <WorkExperience />
      <WorkExperience />
      <div className="container22">
        <Particles
          className="particle-bg"
          params={{
            "particles": {
              "number": {
                "value": 150,
                "density": {
                  "enable": true,
                  "value_area": 1000
                }
              },
              "color": {
                "value": ["#d2ffff", "#d2d2ff", "#ffd2d2", "#ffffd2"]
              },
              "size": {
                "value": 5
              },
              "line_linked": {
                "enable": true,
                "distance": 150,
                "opacity": 0.5
              },
              "move": {
                "speed": 5
              },
              "opacity": {
                "anim": {
                  "enable": true,
                  "opacity_min": 0.1,
                  "speed": 1,
                  "sync": false
                }
              }
            },
            "interactivity": {
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "repulse"
                }
              }
            }
          }} />
      </div>
    </div>
  );
}

export default App;
