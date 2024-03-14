import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const [otpValues, setOTPValues] = useState(['', '', '', '', '', '']);
  const [errorMessage, setErrorMessage] = useState('');
  const Navigate = useNavigate();
  const changeNumber = () => {
    Navigate('/aadhar');
  };
  const verifyOTP = async () => {
    const client_id = localStorage.getItem('client_id');
    if (!client_id) {
      console.error('Client ID not found in local storage');
      return;
    }
    const postData = JSON.stringify({
      client_id: client_id,
      otp: otpValues.join(''),
    });
    try {
      const response = await fetch(
        'https://sandbox.surepass.io/api/v1/aadhaar-v2/submit-otp',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwNzk3NzAyNywianRpIjoiMmY3MDgzMTEtMTBlMC00OWJkLWJkNDktMjBmNDgzMjRkMGUxIiwidHlwZSI6ImFjY2VzcyIsImlkZW50aXR5IjoiZGV2LmJpZ2Jyb3RoZXJpbnRlbGxpZ2VuY2VAc3VyZXBhc3MuaW8iLCJuYmYiOjE3MDc5NzcwMjcsImV4cCI6MTcwODg0MTAyNywidXNlcl9jbGFpbXMiOnsic2NvcGVzIjpbInVzZXIiXX19.AixB1OX5nA428OSPkMyWbtk4rXFdCILNj2KgPXw9hQ8',
          },
          body: postData,
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log('Response data:', data);
        const address = data.data.address;
        const addressDetails = {
          house: address.house,
          street: address.street,
          landmark: address.landmark,
          dist: address.dist,
          subdist: address.subdist,
          state: address.state,
          country: address.country,
          po: address.po,
        };
        const addressString = Object.values(addressDetails)
          .filter((value) => value !== '')
          .join(', ');
        console.log(addressString);
        // Store Aadhaar details in local storage
        localStorage.setItem('AadhaarProfile', data.data.profile_image);
        localStorage.setItem('AadhaarAddress', addressString);
        localStorage.setItem('AadhaarMobileHash', data.data.mobile_hash);
        localStorage.setItem('AadhaarNumber', data.data.aadhaar_number);
        localStorage.setItem('AadhaarName', data.data.full_name);
        Navigate('/kyc');
      } else {
        console.error('Failed to verify OTP');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }
  };
  const handleClick = async (e) => {
    e.preventDefault();
    const allFieldsFilled = otpValues.every((val) => val !== '');
    if (!allFieldsFilled) {
      setErrorMessage('Please fill in all OTP fields');
    } else {
      setErrorMessage('');
      await verifyOTP();
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
