import React from 'react'
import './ComingSoon.css'
import Bgimg from '../Home/Images/newbg.jpg'

const ComingSoon = () => {
  return (
    <div className='coming-soon'>
        <div className="bg-img" style={{ backgroundImage: `url(${Bgimg})` }}></div>
        <div className="overlay"></div>
        <div className="content">
            <h1>Coming Soon</h1>
            <p>We are working hard to launch something amzing.Stay tuned!</p>
        </div>
      
    </div>
  )
}

export default ComingSoon;
