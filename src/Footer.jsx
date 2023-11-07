// src/components/footer.js
import './footer.css';
import { Link } from 'react-router-dom';

const footer = ()=> {
  return (
    <footer className="footer">
      <div className="container">
        <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
         <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
         <li><Link to="/projects">Go to Projects</Link></li>

        </ul>
        <p>&copy; 2023 Your Company Name</p>
      </div>
    </footer>
  );
}

export default footer;
