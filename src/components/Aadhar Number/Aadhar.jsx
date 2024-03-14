import React, { useState } from 'react';
// import './aadhar.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Aadhar = () => {
  const Navigate = useNavigate();
  const [txtAadhaar, setTxtAadhaar] = useState('');
  const [data, setData] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        'https://sandbox.surepass.io/api/v1/aadhaar-v2/generate-otp',
        { id_number: txtAadhaar },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwNzk3NzAyNywianRpIjoiMmY3MDgzMTEtMTBlMC00OWJkLWJkNDktMjBmNDgzMjRkMGUxIiwidHlwZSI6ImFjY2VzcyIsImlkZW50aXR5IjoiZGV2LmJpZ2Jyb3RoZXJpbnRlbGxpZ2VuY2VAc3VyZXBhc3MuaW8iLCJuYmYiOjE3MDc5NzcwMjcsImV4cCI6MTcwODg0MTAyNywidXNlcl9jbGFpbXMiOnsic2NvcGVzIjpbInVzZXIiXX19.AixB1OX5nA428OSPkMyWbtk4rXFdCILNj2KgPXw9hQ8', // Replace with your actual access token
          },
        }
      );

      console.log(response.data);
      setData(response.data);
      let client_id = response.data.data.client_id;
      localStorage.setItem('client_id', client_id);
      Navigate('/aadharotp');
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    setTxtAadhaar(e.target.value);
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
              <div className='input-group  mb-3'>
                <div className='input-group-prepend'>
                  <span
                    className='input-group-text profile-badge'
                    id='basic-addon1'
                  >
                    <i className='bi bi-fingerprint'></i>
                  </span>
                </div>
                <input
                  type='text'
                  className='form-control profile-input'
                  placeholder='Aadhaar Number'
                  aria-label='Aadhaar Number'
                  aria-describedby='basic-addon1'
                  value={txtAadhaar}
                  onChange={handleInputChange}
                />
              </div>

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

export default Aadhar;
