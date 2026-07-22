import React, { useState } from 'react';

export const Certificates: React.FC = () => {
  const [modalImg, setModalImg] = useState<string | null>(null);

  return (
    <div id="Certificates" className="fade-in-section is-visible">
      <div className="container">
        <h1 className="sub-title">Certificates</h1>
        <div className="certificate-list">
          <div 
            className="certificate" 
            onClick={() => setModalImg('assets/ForageJPMC_Certificate.jpg')}
          >
            <img src="assets/ForageJPMC_Certificate.jpg" alt="JPMC Forage Certificate" />
            <div className="cert-layer-text">
              <h3>JPMC Forage Job Simulation</h3>
              <p>JPMorgan Chase &amp; Co. · Software Engineering</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Render */}
      {modalImg && (
        <div className="modal" style={{ display: 'block' }} onClick={() => setModalImg(null)}>
          <span className="close" onClick={() => setModalImg(null)}>&times;</span>
          <img 
            className="modal-content" 
            src={modalImg} 
            alt="Certificate Preview" 
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </div>
  );
};