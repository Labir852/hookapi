import logo from './logo.svg';
import './App.css';
import UseEffectAPI from './components/UseEffectAPI';
import CovidTracker from './components/CovidTracker';
import { Link, Route,BrowserRouter as Router, Routes } from'react-router-dom';
import NetflixSlider from './components/NetflixSlider';
import GithubUsers from './components/GithubUsers';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      <div className="nav">
              <Link to="/githubUsers" className="navli">Github User</Link>
              <Link to="/covidTracker" className="navli">Covid Tracker</Link>
              <Link to="/netflixSlider" className="navli">Netflix Slider</Link>
      </div>
        
        
      </header>
      <Routes>
        <Route path="/" element={<UseEffectAPI/>}/>
        <Route path="/githubUsers" element={<UseEffectAPI/>}/>
        <Route path="/covidTracker" element={<CovidTracker/>}/>
        <Route path="/netflixSlider" element={<NetflixSlider/>}/>
        </Routes>
    </div>
  );
}

export default App;
