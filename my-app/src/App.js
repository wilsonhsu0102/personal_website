import logo from './logo.svg';
import './App.css';
import Navigator from './Components/Navigator.jsx';
import Welcome from './Components/Welcome.jsx';
import AboutMe from './Components/AboutMe.jsx'

function App() {
  return (
    <div className="App">
      <Navigator/>
      <Welcome/>
      <AboutMe/>
      <div className="container22"> Cool</div>
    </div>
  );
}

export default App;
