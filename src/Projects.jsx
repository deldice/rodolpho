// src/components/Projects.js
import './projects.css'

const Projects = ()=> { 
  return (
    <div className="projects">
      <div className="container">
        <h1>My Web Development Projects</h1>
        <p>Explore my latest web development projects and see how I've brought innovative web solutions to life. I'm passionate about creating engaging and user-friendly websites.</p>

        {/* Add your web development projects here */}
        
      </div>
     {/* Inside the Projects component in Projects.js */}
<div className="project">
  <img src="src/assets/banner.webp" alt="Project 1" />
  <h2>Project 1: E-commerce Website</h2>
  <p>Developed a responsive e-commerce website featuring a user-friendly shopping cart, product catalog, and secure payment processing.</p>
  <a href="/project1">View Project</a>
</div>

<div className="project">
  <img src="src/assets/food.jpg" alt="Project 2" />
  <h2>Project 2: Portfolio Website</h2>
  <p>Designed and built a personal portfolio website to showcase my web development skills and projects. Customized with a sleek and modern design.</p>
  <a href="/project2">View Project</a>
</div>


    </div>
  );
}

export default Projects;
