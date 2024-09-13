import React from 'react';
import '../../styles/cv.css';

const ResumePage = () => {
  return (
    <div className="cv-container">
      <div className="pdf-viewer">
        <iframe
          src="/assets/Phillip_Waruingi_Kinuthia_cv.pdf"
          title="CV"
          width="100%"
          height="600px"
          style={{ border: 'none' }} 
        >
          This browser does not support PDFs. Please download the PDF to view it: <a href="/assets/Phillip_Waruingi_Kinuthia_cv.pdf" className="cv-link">Download PDF</a>.
        </iframe>
      </div>
    </div>
  );
};

export default ResumePage;
