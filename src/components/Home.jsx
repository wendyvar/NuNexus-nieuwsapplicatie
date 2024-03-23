import React from 'react';
import coverImage from '../assets/cover1.jpg'; // Make sure the path is correct

const Home = ({ setCategory }) => { 
  return (
    <div className="position-relative text-start bg-image shadow-2-strong" style={{backgroundImage: `url(${coverImage})`, width: '99vw', height: '93vh', backgroundSize: 'cover'}}>
      <div className="mask" style={{backgroundColor: 'rgba(0, 0, 0, 0.8)', width: '100%', height: '100%'}}>
        <div className="container d-flex align-items-center justify-content-center text-center h-100">
          <div className="text-white" style={{maxWidth: '50%'}}>
            <h1 className="mb-3">Welkom bij NuNexus</h1>
            <h3 className="mb-4">Altijd up-to-date</h3>
            <p>Deze webapplicatie biedt je direct toegang tot het meest recente nieuws uit de wereld van technologie, wetenschap en het bedrijfsleven. Blijf op de hoogte van baanbrekende ontdekkingen, innovatieve technologische ontwikkelingen en belangrijke zakelijke trends. Het is jouw bron voor actuele informatie, waarmee je geen enkele belangrijke update mist.</p>
        
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
