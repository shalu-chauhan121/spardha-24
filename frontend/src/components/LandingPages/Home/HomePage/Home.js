// import React from 'react';
import './Home.css';
import HeroSection from '../HeroSection/HeroSection';
// import Home_Contact from '../Contact/Contact';
import About from '../About_section/About';
import LocationCard from '../LocationCard/LocationCard';

// import Footer from '../Footer/Footer';

function App() {
  return (
      <div className="sctn">
        <HeroSection/>
        <About/>
        <LocationCard/>
        {/* <Home_Contact/> */}
      </div>
  );
}

export default App;
