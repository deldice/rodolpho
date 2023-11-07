import  Navbar  from './Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Footer from './Footer'
import './footer.css';
import Home from './Home'
import Projects from './Projects'


function App() {
  
  return (
    <>
    <Router>
    <div><Navbar className="topnav" /></div>
    <Routes>
      <Route path="/home" element={<Home />} />   
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />

    </Routes>
        <div><Footer className="footer" /></div>
        
      

    </Router>
    </>

  )
}

export default App
