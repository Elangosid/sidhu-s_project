import React from 'react';
import './footer.css';
import white from '../../assets/BB-images/Retailer/quickflo-white.png';
import apple from '../../assets/BB-images/Retailer/google-play.jpg';
import playstore from '../../assets/BB-images/Retailer/app-stoe.jpg';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='quickflo-footer'>
      <div className='container-fluid container-footer'>
        <div className='row'>
          <div className='col-12 col-md-3'>
            <div className='brand-footer'>
              <img src={white} alt='...' />
              <p>
                When an unknown printer took a galley of type scrambled it to
                make a type specimen book.
              </p>
              <p>
                <span>
                  <i class='bi bi-geo-alt'></i>
                </span>
                23/A Road, Newyork City
              </p>
              <p>
                <span>
                  <i class='bi bi-telephone'></i>
                </span>
                +9888-256-666
              </p>
            </div>
          </div>
          <div className='col'>
            <div className='quick-links'>
              <h5>Quick Links</h5>
              <ul>
                <li>Smartphones</li>
                <li>Headphones</li>
                <li>Laptop & Tablet</li>
                <li>Monitors</li>
                <li>Printers</li>
                <li>Gadgets</li>
              </ul>
            </div>
          </div>
          <div className='col'>
            <div className='quick-links'>
              <h5>Category</h5>
              <ul>
                <li>Smartphones</li>
                <li>Headphones</li>
                <li>Laptop & Tablet</li>
                <li>Monitors</li>
                <li>Printers</li>
                <li>Gadgets</li>
              </ul>
            </div>
          </div>
          <div className='col'>
            <div className='quick-links'>
              <h5>Privacy Policy</h5>
              <ul>
                <li>Returns & Exchanges</li>
                <li>Delivery Terms</li>
                <li>Laptop & Tablet</li>
                <li>Payment & Pricing</li>
                <li>Terms Of Use</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className='col-12 col-md-3'>
            <div className='sign-up'>
              <h5>Sign Up </h5>
              <p>When an unknown printer took a galley of type and scrambled</p>
              <div className='quickflo-media'>
                <i class='fa-brands fa-facebook'></i>
                <i class='fa-brands fa-telegram'></i>
                <i class='fa-brands fa-square-whatsapp'></i>
                <i class='fa-brands fa-instagram'></i>
              </div>
              <p>Download App on Mobile</p>
              <img src={apple} alt='...' />
              <img src={playstore} alt='...' />
            </div>
          </div>
        </div>
      </div>
      <hr style={{ borderColor: '#fff' }} />
      <div className='container-fluid botom-footer'>
        <p>&#169; {year} QuikFlo. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
