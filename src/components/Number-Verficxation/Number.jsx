import React, { useState } from 'react';
import './number.css';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [MobileNumber, setMobileNumber] = useState('');
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
    if (MobileNumber.length !== 10 || isNaN(MobileNumber)) {
      setValidationError('Please enter a valid 10-digit mobile number');
    } else {
      // Store the mobile number in local storage
      localStorage.setItem('MobileNumber', MobileNumber);

      // Store the default OTP value (1234) in local storage
      localStorage.setItem('otp', '1234');
      // Navigate to the next page
      Navigate('/otp');
    }
  };
  return (
    <div className='number-background'>
      <div className='container container-profile'>
        <div className='row profile-row'>
          <div className='profile-box'>
            <h2 className='profile-head mb-3'>Number Verification</h2>
            <p>
              Please complete the KYC verification by Submitting and verifying
              alternate phone number{' '}
            </p>
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
                  placeholder='Alternate Number'
                  aria-describedby='basic-addon1'
                  value={MobileNumber}
                  onChange={handleChange}
                />
              </div>
              {validationError && (
                <span className='text-danger'>{validationError}</span>
              )}

              <div className='justify-content-center align-items-center d-flex mt-5'>
                <button
                  type='submit'
                  className='btn-primary profile-btn justify-content-center align-items-center d-flex'
                >
                  Continue
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
