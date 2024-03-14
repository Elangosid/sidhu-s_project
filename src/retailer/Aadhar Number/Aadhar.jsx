import React, { useState } from 'react';
import './aadhar.css';
import { useNavigate } from 'react-router-dom';

const Aadhar = () => {
  const [alternateNumber, setAlternateNumber] = useState('');
  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let parameters = JSON.stringify({ id_number: alternateNumber });
    let response = await fetch(
      'https://sandbox.surepass.io/api/v1/aadhaar-v2/generate-otp',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwNzk3NzAyNywianRpIjoiMmY3MDgzMTEtMTBlMC00OWJkLWJkNDktMjBmNDgzMjRkMGUxIiwidHlwZSI6ImFjY2VzcyIsImlkZW50aXR5IjoiZGV2LmJpZ2Jyb3RoZXJpbnRlbGxpZ2VuY2VAc3VyZXBhc3MuaW8iLCJuYmYiOjE3MDc5NzcwMjcsImV4cCI6MTcwODg0MTAyNywidXNlcl9jbGFpbXMiOnsic2NvcGVzIjpbInVzZXIiXX19.AixB1OX5nA428OSPkMyWbtk4rXFdCILNj2KgPXw9hQ8',
        },
        body: parameters,
      }
    );

    if (response.ok) {
      let data = await response.json();
      console.log('Response data:', data);

      // Extract and store client_id in local storage
      let clientId = data?.data.client_id;
      if (clientId) {
        localStorage.setItem('client_id', clientId);
        console.log('Stored client_id:', clientId);
      }

      Navigate('/retailer-aadhar-otp');
    } else {
      // Handle error
      console.error('Failed to verify Aadhaar');
    }
  };

  return (
    <div className='number-background'>
      <div className='container container-profile'>
        <div className='row profile-row'>
          <div className='profile-box'>
            <h2 className='profile-head mb-3'>Aadhaar Verification</h2>
            <p>
              Please complete the KYC verification by Submitting and verifying
              aadhaar card number
            </p>
            <form className='form-main' onSubmit={handleSubmit}>
              <div class='input-group  mb-3'>
                <div class='input-group-prepend'>
                  <span
                    class='input-group-text profile-badge'
                    id='basic-addon1'
                  >
                    <i class='bi bi-fingerprint'></i>
                  </span>
                </div>
                <input
                  type='text'
                  class='form-control profile-input'
                  placeholder='Alternate Number'
                  aria-label='Alternate Number'
                  aria-describedby='basic-addon1'
                  value={alternateNumber}
                  onChange={(e) => setAlternateNumber(e.target.value)}
                />
              </div>

              <div className='justify-content-center align-items-center d-flex mt-5'>
                <button
                  type='submit'
                  class=' btn-primary profile-btn justify-content-center align-items-center d-flex'
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

export default Aadhar;
