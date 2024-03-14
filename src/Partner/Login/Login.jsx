import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [PartnerNumber, setMobileNumber] = useState('');
  const [validationError, setValidationError] = useState('');
  const Navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setMobileNumber(value);
      setValidationError('');
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    if (PartnerNumber.length !== 10 || isNaN(PartnerNumber)) {
      setValidationError('Please enter a valid 10-digit mobile number');
    } else {
      // Store the mobile number in local storage
      localStorage.setItem('PartnerNumber', PartnerNumber);

      // Store the default OTP value (1234) in local storage
      localStorage.setItem('otp', '1234');
      // Navigate to the next page
      Navigate('/partner-Verify');
    }
  };
  return (
    <div className='number-background'>
      <div className='container container-profile'>
        <div className='row profile-row'>
          <div className='profile-box'>
            <h2 className='profile-head mb-3'>Enter Your Mobile Number</h2>
            <p>Lorem ipsum dolor sit amet, consectetur </p>
            <form className='form-main' onSubmit={handleSubmit}>
              <div className='input-group  mb-4'>
                <div className='input-group-prepend'>
                  <span
                    className='input-group-text profile-badge nine-plus'
                    id='basic-addon1'
                  >
                    <i className='bi bi-telephone'></i>
                    <div className='nine-one'>+91</div>
                  </span>
                </div>
                <input
                  type='text'
                  className='form-control profile-input'
                  placeholder='Please enter mobile number'
                  aria-describedby='basic-addon1'
                  value={PartnerNumber}
                  onChange={handleChange}
                />
              </div>
              {validationError && (
                <span className='text-danger'>{validationError}</span>
              )}
              <p>
                By proceeding you accept QuickFlo’s
                <br />
                <a className='terms' href='/#'>
                  Terms and Conditions and Privacy Policy
                </a>
              </p>
              <div className='justify-content-center align-items-center d-flex mt-5'>
                <button
                  type='submit'
                  className='btn-primary profile-btn justify-content-center align-items-center d-flex'
                >
                  Verify Number
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
