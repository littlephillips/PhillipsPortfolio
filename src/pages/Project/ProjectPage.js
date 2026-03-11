import React from 'react';
import '../../styles/project.css';

const images = [
  { src: '/assets/img/estakaparts.png',        alt: 'estakaparts',      link: 'https://estakaparts.web.app/',    name: 'Estaka Parts' },  
  { src: '/assets/img/estakapart_crm.png',    alt: 'estakaparts_crm',  link: 'https://estaka-crm.web.app/', name: 'Estaka Parts CRM' },
  { src: '/assets/img/pk.png',            alt: 'Web Developer Portfolio', link: 'https://phillipkinuthiawebdevs.vercel.app/', name: 'Phillip Agency' },
  { src: '/assets/img/allInvents.png',        alt: 'allInvents',      link: 'https://allineventsclient.web.app/',    name: 'AllInEvents' },  
  { src: '/assets/img/allInvents_crm.png',    alt: 'allInvents_crm',  link: 'https://allinevents-6be19.web.app/crm', name: 'AllInEvents CRM' },
  { src: '/assets/img/cashdvance.png',        alt: 'cashdvance',      link: 'https://cash-advance-72.web.app',       name: 'Cash Advance' },
  { src: '/assets/img/GlobalMarketIndex.png', alt: 'MajorMarketIndecesAnalyzer', link: 'https://github.com/littlephillips/tradingeconomics/tree/master/Global-Market-Index', name: 'Major Market Index Analyzer' },
  { src: '/assets/img/ContactManager.png',    alt: 'ContactManager',  link: 'https://littlephillips.github.io/Contact-Web-Application/', name: 'Contact Manager' },
  { src: '/assets/img/catGenerator.png',      alt: 'catGenerator',    link: 'https://littlephillips.github.io/generate-random-cat-pictures/', name: 'Cat Generator' },
  { src: '/assets/img/soon.webp',             alt: 'Project image 5', link: '#', name: '' },
  { src: '/assets/img/soon.webp',           alt: 'Project image 6',   link: '#', name: '' },
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

