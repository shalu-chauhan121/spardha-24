import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';
import styles from './Register.module.css';
import Carousel from '../Home/Carousel/Carouselhp';
import Footer from '../Footer/footer';
import Header from '../Header/Header';


function Register() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) navigate('/dashboard/home');
  }, [navigate]);

  return (
    <div className="bg" style={{backgroundImage: 'url(/images/bg.png)', backgroundSize: 'cover', minHeight: '100vh'}}>
      {/* <Carousel /> */}
      {/* <Header/> */}
      <div className={`${styles.container}`} id="register">
        <div className={`${styles.card}`}>
          <Outlet />
        </div>
      </div>
      <div style={{height:'30px'}}></div>
      <Footer/>
    </div>
  );
}

export default Register;
