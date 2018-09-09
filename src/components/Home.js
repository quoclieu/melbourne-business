import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';
import logo from '../assets/logo-white.png';


class Home extends React.Component {

  render() {

    return (
      <div>
        <div className='center'>
          <img src={logo} height='200' alt='logo'/>
          <div className='title'>Melbourne City Business</div>
          <div className='tagLine animated fadeIn delay-2s'>Start your business</div>
          <Link to={'/start'}>
            <button type='button' className='getStartedButton'>
              <i className ="fas fa-location-arrow"></i> Here
            </button>
          </Link>
        </div>
        <div className='about-us'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm animated fadeIn delay1'>
                <h3>Mission</h3>
                <hr/>
                <div>
                  Making commercial property searching accessible for anyone starting a business in Melbourne
                </div>
              </div>
              <div className='col-sm animated fadeIn delay2'>
                <h3>Objective</h3>
                <hr/>
                <div>
                  To minimise the time locating a suitable commercial property
                </div>
              </div>
              <div className='col-sm animated fadeIn delay3'>
                <h3>Vision</h3>
                <hr/>
                <div>
                A world where small business owners can succeed from that start
                </div>
              </div>
            </div>
          </div> 
        </div>
        <footer className='animated slideInUp delay4'>
          Brought to you by Small Data 2018
        </footer>
      </div>
    );
  }
};

export default Home;
