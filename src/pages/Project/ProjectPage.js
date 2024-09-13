import React from 'react';
import '../../styles/project.css';

const images = [
  { src: '/assets/img/cashdvance.png',       alt: 'cashdvance', link: 'https://github.com/littlephillips/Cash-Advance', name: 'Cash Advance' },
  { src: '/assets/img/allInvents.png',       alt: 'allInvents', link: 'https://github.com/littlephillips/Allinevents-Frontend', name: 'AllInEvents' },
  { src: '/assets/img/ContactManager.png',   alt: 'ContactManager', link: 'https://littlephillips.github.io/Contact-Web-Application/', name: 'Contact Manager' },
  { src: '/assets/img/catGenerator.png',     alt: 'catGenerator', link: 'https://littlephillips.github.io/generate-random-cat-pictures/', name: 'Cat Generator' },
  { src: '/assets/img/soon.webp',            alt: 'Project image 5', link: '#', name: '' },
  { src: '/assets/img/soon.webp',            alt: 'Project image 6', link: '#', name: '' },
];

const ProjectPage = () => {
  return (
    <div className="photos">
      {images.map((image, index) => (
        <div key={index} className="image-card">
          <a href={image.link} target="_blank" rel="noopener noreferrer" className="image-link">
            <img src={image.src} alt={image.alt} />
            <div className="overlay">{image.name}</div> {/* Project name displayed here */}
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProjectPage;

