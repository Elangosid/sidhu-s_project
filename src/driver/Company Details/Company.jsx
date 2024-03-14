import React, { useState } from 'react';
import './company.css';
import { useNavigate } from 'react-router-dom';

const Company = () => {
  const [imageUploaded, setImageUploaded] = useState(false);

  const handleImageChange = (e) => {
    setImageUploaded(true);
  };

  const Navigate = useNavigate();
  const handleClick = () => {
    Navigate('/partner-map');
  };
  const HomeClick = () => {
    Navigate('/partner-home');
  };

  return (
    <div className='company-background'>
      <div className='container container-profile'>
        <div className='row profile-row'>
          <div className='profile-box'>
            <h2 className='profile-head mb-3'>Company Details</h2>

            <form className='form-main'>
              <div class='input-group  justify-content-center align-items-center d-flex'>
                <input
                  type='file'
                  className='visually-hidden'
                  id='imageInput'
                  accept='image/*'
                  onChange={handleImageChange}
                />

                <div className='profile-label'>
                  <label
                    htmlFor='imageInput'
                    className='profile-upload d-flex mt-3 justify-content-center'
                  >
                    <i
                      style={{ fontSize: '2.5rem' }}
                      className='bi bi-upload mt-3'
                    ></i>
                  </label>
                  <p className='mt-3'>Choose Your Logo</p>

                  <span className='label-cam'>
                    <i class='bi bi-camera text-white'></i>
                  </span>
                </div>
              </div>
              {imageUploaded && (
                <div className='mt-2 text-success text-center'>
                  Image uploaded successfully!
                </div>
              )}
              <div class='input-group mt-3 mb-3'>
                <div class='input-group-prepend'>
                  <span
                    class='input-group-text profile-badge'
                    id='basic-addon1'
                  >
                    <i class='bi bi-briefcase-fill'></i>
                  </span>
                </div>
                <input
                  type='text'
                  class='form-control profile-input'
                  placeholder='Legal Name'
                  aria-label='Legal Name'
                  aria-describedby='basic-addon1'
                />
              </div>
              <a onClick={handleClick} className='verfiy-btn'>
                <span className='left-icon'>
                  <i class='bi bi-geo-alt-fill'></i>
                </span>
                <span className='verify-btn-text'>Location</span>
                <span className='right-icon'>
                  <i class='bi bi-chevron-right'></i>
                </span>
              </a>
              <div class='input-group mt-3 mb-3'>
                <div class='input-group-prepend'>
                  <span
                    class='input-group-text profile-badge'
                    id='basic-addon1'
                  >
                    <i class='bi bi-globe-americas'></i>
                  </span>
                </div>
                <input
                  type='text'
                  class='form-control profile-input'
                  placeholder='Website'
                  aria-label='Website'
                  aria-describedby='basic-addon1'
                />
              </div>
              <div class='form-check'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='exampleRadios'
                  id='exampleRadios1'
                  value='option1'
                />
                <label class='form-check-label' for='exampleRadios1'>
                  By Submitting I am Accepting the QuickFlo’s
                  <br />{' '}
                  <a href='#/' style={{ color: '#45bc1b' }}>
                    Term and Conditions and Privacy Policy
                  </a>
                </label>
              </div>
              <div className='justify-content-center align-items-center d-flex mt-5'>
                <button
                  onClick={HomeClick}
                  type='submit'
                  class=' btn-primary profile-btn justify-content-center align-items-center d-flex'
                >
                  Save & Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
