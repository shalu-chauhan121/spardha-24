import React from 'react';
import './Home.css';
import Mid from '../MiddleSection/MiddleSection';
// import CountdownTimer from '../Countdown/Countdown';
import Bgimg from '../Images/newbg.jpg';
import Contact from '../Contact/Contact';
// import Footer from '../Footer/Footer';

function App() {
  return (
    <>
 <div className="sctn">
        <div className="bg-home" style={{ backgroundImage: `url(${Bgimg})` }}></div>
        {/* Main Content Section */}
        <div className="main-content">
          <div>
            
            <Mid />
          </div>
            <Contact />
        </div>
      </div>
      <div></div>

    </>
  );
}

export default App;
