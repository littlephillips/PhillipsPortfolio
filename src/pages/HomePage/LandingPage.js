import React, { useState, lazy, Suspense } from 'react';
import '../../styles/landingPage.css';

// Lazy load the pages
const ResumePage = lazy(() => import('../Resume/ResumePage'));
const ProjectPage = lazy(() => import('../Project/ProjectPage'));

const images = [
  { src: '/assets/img/user.jpeg', alt: 'Photo of Phillip Kinuthia' },
];

const LandingPage = () => {
  const [activeComponent, setActiveComponent] = useState('projects');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'projects':
        return <ProjectPage />;
      case 'resume':
        return <ResumePage />;
      default:
        return <div>Welcome! Click a button to display content.</div>;
    }
  };

  const handleFollowClick = () => {
    setActiveComponent('github')
    window.open('https://github.com/littlephillips/', '_blank');
  };

  return (
    <div className="header__wrapper">
      <header></header>
      <div className="cols__container">
        <div className="left__col">
          <div className="img__container">
            <img src={images[0].src} alt={images[0].alt} />
            <span></span>
          </div>
          <h2>Phillip Kinuthia</h2>
          <p>Software Developer</p>
          <p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=phillipkinuthia72@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              phillipkinuthia72@gmail.com
            </a>
          </p>

          <ul className="about">
            <li><span>Phone</span>+254797321068</li>
            <li><span>Connections</span><a href="https://www.linkedin.com/in/phillip-kinuthia-10a2101a0/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><span>Blog</span><a href="https://medium.com/@phillipkinuthia72" target="_blank" rel="noopener noreferrer">Medium</a></li>
          </ul>

          <div className="content">
            <p>
              Full-stack Web Developer and IT Systems Support Engineer with 3+ years of experience delivering scalable web applications and reliable IT infrastructure. Proficient in JavaScript, React, Ruby on Rails, SQL, and Git, with strong experience across the software development lifecycle. Skilled in performance optimisation, database management, and translating business needs into effective technical solutions.
            </p>
            <ul className="social-media-icons">
              <li><a href="https://x.com/PhillipKin39267" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
              <li><a href="https://www.instagram.com/little_phillips/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
              <li><a href="https://www.facebook.com/phillip.phillips.1800/" target="_blank" rel="noopener noreferrer" aria-label="Facebook Profile"><i className="fab fa-facebook" aria-hidden="true"></i></a></li>
              <li><a href="https://medium.com/@phillipkinuthia72" target="_blank" rel="noopener noreferrer" aria-label="Medium Blog"><i className="fab fa-medium" aria-hidden="true"></i></a></li>
            </ul>
          </div>
        </div>

        <div className="right__col">
          <nav>
            <ul>
              <li><button onClick={() => setActiveComponent('projects')}
              className={activeComponent === 'projects' ? 'active' : 'inactive'}>Projects</button></li>

              <li><button onClick={() => setActiveComponent('resume')} className={activeComponent === 'resume' ? 'active' : 'inactive'}>Resume</button></li>
              
              <button onClick={handleFollowClick}>Github</button>
            </ul>
          </nav>

          <div className="component__display">
            <Suspense fallback={<div>Loading...</div>}>
              {renderComponent()}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;