import './App.css'
import Navbar from './components/Navbar.jsx'
import Animation from './components/Animation.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'
import Certifications  from './components/Certifications.jsx'
function App() {
  return (
    <>
      {/* Background Animation Layer */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none" // Prevents blocking interaction
      }}>
        <Animation />
      </div>
      <div style={{ position: "relative", zIndex: 2 }}>
        <Navbar/>
        <About />
        <Skills />
        <Projects />
        <Education/>
        <Certifications/>
      </div>
    </>
  )
}

export default App
