import './index.css';
import Navbar from './components/Navbar';
import Particle from "./components/Particles.jsx"; // <- import the Particle component
import Home from './components/Home.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';



const App = () => {

  return (
    <Router>
   <div
        className="min-h-screen relative overflow-hidden bg-gradient-to-r from-purple-950 to-black font-Raleway"
      >
        <Particle count={70}/>

          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>

      

        </div>
    </Router>



  );
};

export default App;
          {/* <div className="bg-gray-100">
            <div>
              <ImageCard />
            </div>
            <div className='fixed top-5 z-20 right-3 flex flex-col gap-2 items-end'>
              <LinkIcon onClick={() => handleLinkClick()} />
              {isOpen && <LinkBar />}
            </div>
          </div> */}
