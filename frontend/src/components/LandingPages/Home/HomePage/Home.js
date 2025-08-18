import React from 'react';
import './Home.css';
import Mid from '../MiddleSection/MiddleSection';
import Bgimg from '../Images/newbg.jpg';
import ComingSoon from '../../ComingSoon/ComingSoon';
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
        </div>
      </div>
      <div>{/*<Footer /> */}</div> 

      {/* <ComingSoon/> */}
    </>
  );
}

export default App;
