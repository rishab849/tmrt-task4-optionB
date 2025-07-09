// ✅ Home.js
import logo from '../assets/logo.png';
import '../styles/main.css';

export default function Home() {
  return (
    <div>
      <header>
        <div className="logo">
          <a href=""><img src={logo} alt="TMRT Logo" className="logo-img" /></a>
        </div>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="social-icons">
          <a href="https://www.linkedin.com/company/the-marine-robotics-team/" target="_blank" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.98h5V24H0V8.98zM7.5 8.98h4.68v2.05h.07c.65-1.23 2.24-2.53 4.62-2.53 4.94 0 5.85 3.25 5.85 7.47V24h-5v-6.94c0-1.65-.03-3.78-2.3-3.78-2.31 0-2.67 1.8-2.67 3.66V24h-5V8.98z"/>
            </svg>
          </a>

          <a href="https://www.facebook.com/tmrt.kjsce.58/" target="_blank" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
              <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.351C0 23.406.593 24 1.324 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.917.001c-1.504 0-1.796.716-1.796 1.765v2.314h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.676V1.324C24 .593 23.406 0 22.676 0"/>
            </svg>
          </a>

          <a href="https://www.instagram.com/tmrt_kjsce/" target="_blank" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
              <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.055 1.97.24 2.43.403a4.92 4.92 0 0 1 1.79 1.14 4.92 4.92 0 0 1 1.14 1.79c.163.46.348 1.26.403 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.055 1.17-.24 1.97-.403 2.43a4.92 4.92 0 0 1-1.14 1.79 4.92 4.92 0 0 1-1.79 1.14c-.46.163-1.26.348-2.43.403-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.055-1.97-.24-2.43-.403a4.92 4.92 0 0 1-1.79-1.14 4.92 4.92 0 0 1-1.14-1.79c-.163-.46-.348-1.26-.403-2.43C2.212 15.784 2.2 15.4 2.2 12s.012-3.584.07-4.85c.055-1.17.24-1.97.403-2.43A4.92 4.92 0 0 1 3.813 2.93 4.92 4.92 0 0 1 5.602 1.79c.46-.163 1.26-.348 2.43-.403C8.416 1.812 8.8 1.8 12 1.8zM12 0C8.736 0 8.332.012 7.053.07 5.775.128 4.723.332 3.833.68A7.14 7.14 0 0 0 1.7 2.813 7.14 7.14 0 0 0 .68 3.833C.332 4.723.128 5.775.07 7.053.012 8.332 0 8.736 0 12c0 3.264.012 3.668.07 4.947.058 1.278.262 2.33.61 3.22a7.14 7.14 0 0 0 2.133 2.133c.89.348 1.942.552 3.22.61C8.332 23.988 8.736 24 12 24c3.264 0 3.668-.012 4.947-.07 1.278-.058 2.33-.262 3.22-.61a7.14 7.14 0 0 0 2.133-2.133c.348-.89.552-1.942.61-3.22.058-1.279.07-1.683.07-4.947 0-3.264-.012-3.668-.07-4.947-.058-1.278-.262-2.33-.61-3.22A7.14 7.14 0 0 0 20.167.68c-.89-.348-1.942-.552-3.22-.61C15.668.012 15.264 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.45a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88z"/>
            </svg>
          </a>
        </div>
      </header>

      <section className="hero">
        <h1>The Marine Robotics Team</h1>
        <p>Innovating beneath the surface. Engineering excellence in autonomous underwater systems.</p>
      </section>

      <section id="about" className="section">
        <h2>About Us</h2>
        <p>Team Marine Robotics is a multidisciplinary student organization committed to advancing the field of underwater exploration through robotics. We bring together passionate engineers, programmers, designers, and researchers to design, build, and test autonomous underwater vehicles (AUVs) capable of navigating complex marine environments.</p>
      </section>

      <section id="projects" className="section">
        <h2>Our Projects</h2>
        <p>We develop AUVs equipped with sonar, vision systems, and embedded sensors for tasks like object retrieval, path planning, and environmental mapping. Simulations are run in ROS with custom mechanical, electrical, and software components integrated into every system.</p>
      </section>

      <section id="contact" className="section">
        <h2>Contact Us</h2>
        <p>Are you a student excited by robotics or a company interested in collaborating? Reach out at <strong>tmrt@example.com</strong>. Let’s innovate together.</p>
      </section>

      <footer>
        <div className="footer-content">
          <p className="footer-text">&copy; 2025 Team Marine Robotics | All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
