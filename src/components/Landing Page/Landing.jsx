import React, { useState } from 'react';
import code from '../../assets/BB-images/code.png';
import app from '../../assets/BB-images/app.png';
import play from '../../assets/BB-images/play.png';
import { useNavigate } from 'react-router-dom';
import './landing.css';

const Landing = () => {
  const Navigate = useNavigate();
  const handleClick = () => {
    Navigate('/login');
  };

  const retailerClick = () => {
    Navigate('/retailer-login');
  };

  const partnerClick = () => {
    Navigate('/partner-role');
  };

  return (
    <section className='landing-background'>
      <div className='container landing-role'>
        <div className='row landing-parent'>
          <h1 className='company-heading'>Quick Flo</h1>
          <h2>What services are you interested in?</h2>
          <div className='row landing-box'>
            <div className='col-lg-4 col-xs-12 role-1 service-main'>
              <button className={`role-type`} onClick={handleClick}>
                <div className='row'>
                  <div className='col-12 service-head'>
                    <div className='service-text'>
                      <h4>Manufacture</h4>
                      <p className='service-detail'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et
                      </p>
                      <p className='enroll'>
                        Click Here
                        <span>
                          <i class='fa-solid fa-arrow-right'></i>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className='service-img'>
                  <i class='fa-solid fa-industry'></i>
                </div>
              </button>
            </div>
            <div className='col-lg-4 col-xs-12 role-1 service-main'>
              <button className={`role-type`} onClick={retailerClick}>
                <div className='row'>
                  <div className='col-12 service-head'>
                    <div className='service-text'>
                      <h4>Retailer</h4>
                      <p className='service-detail'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et
                      </p>
                      <p className='enroll'>
                        Click Here
                        <span>
                          <i class='fa-solid fa-arrow-right'></i>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className='service-img'>
                  <i class='fa-solid fa-cart-shopping'></i>
                </div>
              </button>
            </div>
            <div className='col-lg-4 col-xs-12 role-1 service-main'>
              <button className={`role-type`} onClick={partnerClick}>
                <div className='row'>
                  <div className='col-12 service-head'>
                    <div className='service-text'>
                      <h4>Partner</h4>
                      <p className='service-detail'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et
                      </p>
                      <p className='enroll'>
                        Click Here
                        <span>
                          <i class='fa-solid fa-arrow-right'></i>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className='service-img'>
                  <i class='fa-solid fa-handshake'></i>
                </div>
              </button>
            </div>
            <div className='col-lg-3 col-xs-12'> </div>
            <div className='col-lg-6 col-xs-12 mobile-all d-flex justify-content-center'>
              <div className='mobile-app'>
                <div className='row'>
                  <div className='col-lg-8 col-xs-12'>
                    <div className='mobile-logo'>
                      <h3>Get better Privacy. Everywhere!</h3>
                      <p>Download Quick Flo mobile for privacy on the go.</p>
                      <div className='mobile-icon'>
                        <img src={play} className='playstore' alt='plystore' />
                        <img src={app} className='appstore' alt='appstore' />
                      </div>
                    </div>
                  </div>

                  <div className='col-lg-3 col-xs-12'>
                    <div className='mobile-qr'>
                      <img src={code} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
