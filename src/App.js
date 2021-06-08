import {useEffect} from 'react'
import './App.css';

import Navbar from './component/Navbar/Navbar';
import About from './component/About/About';
import Experience from './component/Experience/Experience';
import Education from './component/Education/Education';
import Skill from './component/Skill/Skill';
import Interest from './component/Interest/Interest';


function App() {
  useEffect(() => {
    const script  = document.createElement('script');

    script.src = "js/scripts.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  })
  return (
    <div className="App"> 
      <div class="container-fluid p-0">
        <Navbar />
        <About />
        <Experience />
        <Education />
        <Skill />
        <Interest />
      </div>
    </div>
  );
}

export default App;
