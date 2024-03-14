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
  const [imageUrl, setImageUrl] = useState(null);
  const [formData, setFormData] = useState({});
  const [state, setState] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [stateError, setStateError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [pincodeError, setPincodeError] = useState('');
  const [imageError, setImageError] = useState('');
  const Navigate = useNavigate();

  const validateFields = () => {
    let isValid = true;
    if (!state.trim()) {
      isValid = false;
      setStateError('State is required');
    } else {
      setStateError('');
    }
    if (!address.trim()) {
      isValid = false;
      setAddressError('Address is required');
    } else {
      setAddressError('');
    }
    if (!pincode.trim()) {
      isValid = false;
      setPincodeError('Pincode is required');
    } else {
      setPincodeError('');
    }
    if (!imageUrl) {
      isValid = false;
      setImageError('Image is required');
    } else {
      setImageError('');
    }
    return isValid;
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if (!validateFields()) {
      return;
    }

    localStorage.setItem('addressShop', address);
    localStorage.setItem('stateShop', state);
    localStorage.setItem('pincodeShop', pincode);

    const storageRef = ref(storage, `images/${formData.Type}-${Date.now()}`);
    const uploadTask = uploadBytesResumable(storageRef, formData.Image);

    // Disable the button and show loading indicator
    const button = document.querySelector('button');
    button.disabled = true;
    button.textContent = 'Loading...';

    try {
      const uploadSnapshot = await uploadTask;
      const imageURL = await getDownloadURL(uploadSnapshot.ref);
      localStorage.setItem('addressImageShop', imageURL);
      console.log(imageURL);
      Navigate('/retailer-companydetails');
    } catch (error) {
      console.error('Error uploading image:', error);
      // Re-enable the button and show error message
      button.disabled = false;
      button.textContent = 'Save & Continue';
      setImageError('Failed to upload image. Please try again.');
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);
      setFormData({ ...formData, Image: file });
      setImageError('');
    }
  };

  const handleImageClick = () => {
    document.getElementById('imageInput').click();
  };

  const handleStateChange = (e) => {
    setState(e.target.value);
    setStateError('');
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
    setAddressError('');
  };

  const handlePincodeChange = (e) => {
    setPincode(e.target.value);
    setPincodeError('');
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
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
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
                    aria-label='State'
                    aria-describedby='basic-addon1'
                    value={state}
                    onChange={handleStateChange}
                  />
                </div>
                {stateError && (
                  <div
                    className='error-message text-danger mb-3'
                    style={{ fontSize: '15px' }}
                  >
                    {stateError}
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
                    aria-label='Address'
                    aria-describedby='basic-addon1'
                    value={address}
                    onChange={handleAddressChange}
                  />
                </div>
                {addressError && (
                  <div
                    className='error-message text-danger mb-3'
                    style={{ fontSize: '15px' }}
                  >
                    {addressError}
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
                    value={pincode}
                    onChange={handlePincodeChange}
                  />
                </div>
                {pincodeError && (
                  <div
                    className='error-message text-danger mt-3'
                    style={{ fontSize: '15px' }}
                  >
                    {pincodeError}
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
                        onClick={handleImageClick}
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
                {imageError && (
                  <div className='error-message text-center text-danger small'>
                    {imageError}
                  </div>
                )}
                {!imageUrl && (
                  <p className='choose-image text-center'>
                    Upload Image of your retail store
                  </p>
                )}
                {imageUrl && (
                  <div
                    className='text-center '
                    style={{ color: 'green', fontSize: '15px' }}
                  >
                    Image uploaded successfully
                  </div>
                )}

                <div className='upload-text text-center text-white mb-3'></div>
                <div className='justify-content-center align-items-center d-flex'>
                  <button
                    onClick={handleClick}
                    type='submit'
                    className='btn-primary justify-content-center align-items-center d-flex'
                  >
                    Save & Continue
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
