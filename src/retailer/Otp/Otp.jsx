import React, { useState } from 'react';
import './Otp.css';
import { useNavigate } from 'react-router-dom';
import * as Realm from 'realm-web';

function OTPInputField({ value, onChange, onComplete }) {
  return (
    <input
      type='number'
      pattern='[0-9]*'
      value={value}
      onChange={onChange}
      onInput={(e) => {
        if (e.target.value.length > 1) {
          e.target.value = e.target.value.slice(0, 1);
        }
      }}
      onKeyDown={(e) => {
        if (e.key === 'Backspace' && value === '') {
          e.preventDefault();
          onComplete(-1);
        }
      }}
    />
  );
}

function OTPForm() {
  const [otpValues, setOTPValues] = useState(['', '', '', '']);
  const [errorMessage, setErrorMessage] = useState('');

  const Navigate = useNavigate();
  const changeNumber = () => {
    Navigate('/retailer-login');
  };
  const handleClick = async (e) => {
    e.preventDefault();
    const allFieldsFilled = otpValues.every((val) => val !== '');
    if (!allFieldsFilled) {
      setErrorMessage('Please fill in all OTP fields');
    } else {
      setErrorMessage('');
      const enteredOTP = otpValues.join('');
      const storedOTP = localStorage.getItem('otp');

      if (enteredOTP === storedOTP) {
        Navigate('/retailer-kyc');
      } else {
        setErrorMessage('Invalid OTP. Please try again.');
      }
    }
  };

  const handleInputChange = (index, event) => {
    const value = event.target.value;

    const newOTPValues = [...otpValues];

    newOTPValues[index] = value;
    setOTPValues(newOTPValues);

    if (value !== '') {
      const nextInput = event.target.nextElementSibling;
      if (nextInput) {
        nextInput.focus();
      }
    }

    setErrorMessage('');
  };

  const handleComplete = (index) => {
    const newOTPValues = [...otpValues];
    newOTPValues[index] = '';
    setOTPValues(newOTPValues);

    const prevInput = index > 0 ? index - 1 : 0;
    const prevInputElement = document.querySelector(
      `.otp-field > input:nth-child(${prevInput + 1})`
    );
    if (prevInputElement) {
      prevInputElement.focus();
    }
  };

  return (
    <div className='container-fluid d-block otp-container'>
      <div className='row vh-100 d-flex align-items-center justify-content-center'>
        <div className='col-12 col-md-6 col-lg-4' style={{ minWidth: '500px' }}>
          <div className='card '>
            <div className='card-body p-5 text-center'>
              <h4>Verification Code</h4>
              <p>We have sent the code verification to your number</p>
              <p>
                <span style={{ marginRight: '5px' }}>+91</span>1234567890
              </p>
              <p>OTP : 1111</p>
              <p className='change-number'>
                <a onClick={changeNumber} style={{ cursor: 'pointer' }}>
                  Change Phone Number
                </a>
              </p>
              <form>
                <div className='otp-field mb-3'>
                  {otpValues.map((value, index) => (
                    <OTPInputField
                      key={index}
                      value={value}
                      onChange={(e) => handleInputChange(index, e)}
                      onComplete={() => handleComplete(index)}
                    />
                  ))}
                </div>
                <div className='mb-3'>
                  {errorMessage && (
                    <span style={{ color: 'red' }}>{errorMessage}</span>
                  )}
                </div>
                <p className='time'>01:40</p>

                <button className='btn-primary mb-3' onClick={handleClick}>
                  Confirm
                </button>
              </form>
              <button className='btn-primary mb-3'>Resend</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OTPForm;