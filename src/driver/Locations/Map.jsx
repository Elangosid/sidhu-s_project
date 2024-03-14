import React, { useState } from 'react';
import './map.css';
import { useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyB3KiTZGa5Qpq54gZYHyPVNID_G0y6M0Yk',
  authDomain: 'quikflo-64d8b.firebaseapp.com',
  projectId: 'quikflo-64d8b',
  storageBucket: 'quikflo-64d8b.appspot.com',
  messagingSenderId: '172899289931',
  appId: '1:172899289931:web:10223847c82ba5b5edb6ce',
  measurementId: 'G-KY2KTP6V9W',
};

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

const Map = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({});
  const Navigate = useNavigate();

  const validateForm = () => {
    const errors = {};

    if (!formData.state) {
      errors.state = 'State is required';
    }

    if (!formData.address) {
      errors.address = 'Address is required';
    }

    if (!formData.pincode) {
      errors.pincode = 'Pin Code is required';
    }

    if (!formData.Image) {
      errors.image = 'Image is required';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleClick = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsLoading(true);
      const address = document.getElementById('address').value;
      const state = document.getElementById('state').value;
      const pincode = document.getElementById('pincode').value;

      localStorage.setItem('Driveraddress', address);
      localStorage.setItem('Driverstate', state);
      localStorage.setItem('Driverpincode', pincode);

      const storageRef = ref(storage, `images/${formData.Type}-${Date.now()}`);
      const uploadTask = uploadBytesResumable(storageRef, formData.Image);

      const uploadSnapshot = await uploadTask;

      const imageURL = await getDownloadURL(uploadSnapshot.ref);
      console.log(imageURL);
      localStorage.setItem('DriverMapImageUrl', imageURL);
      setIsLoading(false);
      Navigate('/driver-kyc');
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);
    }
    if (e.target.files[0]) {
      setFormData({ ...formData, Image: e.target.files[0] });
      // Clear the image error when a file is selected
      setErrors({ ...errors, image: '' });
    }
  };

  const handleInputChange = (field) => (e) => {
    const value = e.target.value;
    setFormData({ ...formData, [field]: value });
    // Clear the respective error when the user enters a value
    setErrors({ ...errors, [field]: '' });
  };

  return (
    <section className='section-background'>
      <div className='container container-map'>
        <div className='row parent-box'>
          <div className='box'>
            <div className='map-location'>
              <h2 className='text-center'>Location</h2>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d124385.08843168586!2d80.19574702216795!3d13.033505996614542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1707885383098!5m2!1sen!2sin'
                width='600'
                height='450'
                allowfullscreen=''
                loading='lazy'
                referrerpolicy='no-referrer-when-downgrade'
              ></iframe>
              <form className='form-main'>
                <div className='input-group mb-3'>
                  <div className='input-group-prepend'>
                    <span
                      className='input-group-text form-badge'
                      id='basic-addon1'
                    >
                      <i className='bi bi-geo-alt-fill'></i>
                    </span>
                  </div>
                  <input
                    type='text'
                    id='state'
                    className='form-control'
                    placeholder='State'
                    aria-label='Username'
                    aria-describedby='basic-addon1'
                    onChange={handleInputChange('state')}
                  />
                </div>
                {errors.state && (
                  <div className='error-message d-block text-danger mb-2'>
                    {errors.state}
                  </div>
                )}
                <div className='input-group mb-3'>
                  <div className='input-group-prepend'>
                    <span
                      className='input-group-text form-badge'
                      id='basic-addon1'
                    >
                      <i className='bi bi-geo-alt-fill'></i>
                    </span>
                  </div>
                  <input
                    type='text'
                    id='address'
                    className='form-control'
                    placeholder='Address / Street Number / District '
                    aria-label='Username'
                    aria-describedby='basic-addon1'
                    onChange={handleInputChange('address')}
                  />
                </div>
                {errors.address && (
                  <div className='error-message d-block text-danger mb-2'>
                    {errors.address}
                  </div>
                )}
                <div className='input-group'>
                  <div className='input-group-prepend'>
                    <span
                      className='input-group-text form-badge'
                      id='basic-addon1'
                    >
                      <i className='bi bi-geo-alt-fill'></i>
                    </span>
                  </div>
                  <input
                    type='text'
                    id='pincode'
                    className='form-control'
                    placeholder='Pin Code'
                    aria-label='Pin Code'
                    aria-describedby='basic-addon1'
                    onChange={handleInputChange('pincode')}
                  />
                </div>
                {errors.pincode && (
                  <div className='error-message d-block text-danger mt-2'>
                    {errors.pincode}
                  </div>
                )}
                <div className='input-group mb-3 justify-content-center align-items-center d-flex'>
                  <input
                    type='file'
                    className='visually-hidden'
                    id='imageInput'
                    accept='image/*'
                    onChange={handleImageChange}
                  />
                  <div className='profile-label'>
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt='Profile'
                        className='profile-image rounded-circle mt-4 mb-2'
                        style={{ width: '110px', height: '110px' }}
                        onClick={() =>
                          document.getElementById('imageInput').click()
                        }
                      />
                    ) : (
                      <label
                        htmlFor='imageInput'
                        className='profile-upload d-flex mt-3 justify-content-center'
                      >
                        <i
                          style={{ fontSize: '2.5rem' }}
                          className='bi bi-person-add mt-3'
                        ></i>
                      </label>
                    )}
                    {!imageUrl && (
                      <span className='label-cam'>
                        <i className='bi bi-camera text-white'></i>
                      </span>
                    )}
                  </div>
                </div>
                {errors.image && (
                  <div className='error-message d-block text-danger text-center'>
                    {errors.image}
                  </div>
                )}
                <div className='upload-text text-center text-white mb-3'></div>
                <div className='justify-content-center align-items-center d-flex'>
                  <button
                    type='submit'
                    onClick={handleClick}
                    className='btn-primary profile-btn justify-content-center align-items-center d-flex'
                    disabled={isLoading} // Disable the button when loading
                  >
                    {isLoading ? 'Loading...' : 'Save & Continue'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
