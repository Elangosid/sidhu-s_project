import React, { useEffect, useState } from 'react';
import './profile.css';
import { initializeApp } from 'firebase/app';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import * as Realm from 'realm-web';
import { useNavigate } from 'react-router-dom';
const REALM_APP_ID = 'application-1-zyzrj';
const app = new Realm.App({ id: REALM_APP_ID });
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
const Profile = () => {
  const Navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    FullName: '',
    DOB: '',
    Email: '',
    BusinessName: '',
    Image: '',
  });
  const [validationErrors, setValidationErrors] = useState({
    FullName: null,
    DOB: null,
    Email: null,
    BusinessName: null,
    Image: null,
  });
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      setFormData({ ...formData, Image: image });
      setValidationErrors({ ...validationErrors, Image: null });
      setImagePreview(URL.createObjectURL(image));
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const MobileNo = localStorage.getItem('mobileNumber');
    const errors = {};
    if (!formData.FullName) {
      errors.FullName = 'Full Name is required';
    }
    if (!formData.DOB) {
      errors.DOB = 'Date of Birth is required';
    }
    if (!formData.Email) {
      errors.Email = 'Email is required';
    }
    if (!formData.BusinessName) {
      errors.BusinessName = 'Business name is required ';
    }
    if (!formData.Image) {
      errors.Image = 'Image is required';
    }
    setValidationErrors(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }
    try {
      setIsLoading(true);
      const user = await app.logIn(
        Realm.Credentials.apiKey(
          'TE9xYqQaMnLCU0PVeYzYTbyYBkGcx9wCRanoKtrkpyNgUjTYq4JWcW4Drp3jLIgS'
        )
      );
      const manufacturesCollection = user
        .mongoClient('mongodb-atlas')
        .db('QUIKFLO')
        .collection('Manufacture');
      const dobTimestamp = formData.DOB
        ? new Date(formData.DOB).toISOString()
        : null;
      const storageRef = ref(storage, `images/${formData.Type}-${Date.now()}`);
      const uploadTask = uploadBytesResumable(storageRef, formData.Image);
      const uploadSnapshot = await uploadTask;
      const imageURL = await getDownloadURL(uploadSnapshot.ref);
      const insertResult = await manufacturesCollection.insertOne({
        MobileNo: MobileNo,
        FullName: formData.FullName,
        Status: '0',
        Device: 'Web',
        DOB: dobTimestamp,
        BusinessName: formData.BusinessName,
        Email: formData.Email,
        Image: imageURL,
      });
      console.log('Insert result:', insertResult);
      const insertedId = insertResult.insertedId;
      setFormData({
        FullName: '',
        DOB: '',
        BusinessName: '',
        Email: '',
        Image: null,
      });
      setIsLoading(false);
      Navigate('/kyc');
      localStorage.setItem('id', insertedId.toString());
    } catch (error) {
      console.error('Error submitting form data:', error);
      setValidationErrors({
        ...validationErrors,
        Image: 'Error uploading image',
      });
    }
  };

  return (
    <div className='profile-background'>
      <div className='container container-profile'>
        <div className='row profile-row'>
          <div className='profile-box'>
            <h2 className='profile-head mb-3'>Setup Profile</h2>
            <form className='form-main' onSubmit={handleFormSubmit}>
              <div className='input-group mb-3 justify-content-center align-items-center d-flex'>
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
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        alt='Preview'
                        style={{
                          width: '100%',
                          height: '100%',
                          borderRadius: '50%',
                        }}
                      />
                    ) : (
                      <i
                        style={{ fontSize: '2.5rem' }}
                        className='bi bi-person-add mt-3'
                      ></i>
                    )}
                  </label>
                  <span className='label-cam'>
                    <i className='bi bi-camera text-white'></i>
                  </span>
                </div>
              </div>
              {!validationErrors.Image && (
                <div className='text-center mt-3' style={{ color: '#818281' }}>
                  Choose Your Image
                </div>
              )}
              {validationErrors.Image && (
                <div className='text-danger text-center mt-3'>
                  {validationErrors.Image}
                </div>
              )}
              <div className='input-group mt-3 mb-2'>
                <div className='input-group-prepend'>
                  <span
                    className='input-group-text profile-badge'
                    id='basic-addon1'
                  >
                    <i className='bi bi-person-circle'></i>
                  </span>
                </div>
                <input
                  type='text'
                  id='FullName'
                  className='form-control profile-input'
                  placeholder='Full Name'
                  aria-label='Username'
                  aria-describedby='basic-addon1'
                  value={formData.FullName}
                  onChange={(e) => {
                    setFormData({ ...formData, FullName: e.target.value });
                    setValidationErrors({
                      ...validationErrors,
                      FullName: null,
                    });
                  }}
                />
              </div>
              {validationErrors.FullName && (
                <span className='text-danger'>{validationErrors.FullName}</span>
              )}
              <div className='input-group mt-3 mb-2'>
                <div className='input-group-prepend'>
                  <span
                    className='input-group-text profile-badge'
                    id='basic-addon1'
                  >
                    <i className='bi bi-calendar'></i>
                  </span>
                </div>
                <input
                  type='date'
                  id='DOB'
                  className='form-control profile-input'
                  placeholder=''
                  aria-label='Username'
                  aria-describedby='basic-addon1'
                  value={formData.DOB}
                  onChange={(e) => {
                    setFormData({ ...formData, DOB: e.target.value });
                    setValidationErrors({ ...validationErrors, DOB: null });
                  }}
                />
              </div>
              {validationErrors.DOB && (
                <span className='text-danger'>{validationErrors.DOB}</span>
              )}
              <div className='input-group mt-3 mb-2'>
                <div className='input-group-prepend'>
                  <span
                    className='input-group-text profile-badge'
                    id='basic-addon1'
                  >
                    <i className='bi bi-buildings'></i>
                  </span>
                </div>
                <input
                  type='text'
                  className='form-control profile-input'
                  id='BusinessName'
                  placeholder='Business Name'
                  aria-label='Business Name'
                  aria-describedby='basic-addon1'
                  value={formData.BusinessName}
                  onChange={(e) => {
                    setFormData({ ...formData, BusinessName: e.target.value });
                    setValidationErrors({
                      ...validationErrors,
                      BusinessName: null,
                    });
                  }}
                />
              </div>
              {validationErrors.BusinessName && (
                <span className='text-danger'>
                  {validationErrors.BusinessName}
                </span>
              )}
              <div className='input-group mt-3 mb-3 email-optional'>
                <div className='input-group-prepend'>
                  <span
                    className='input-group-text profile-badge'
                    id='basic-addon1'
                  >
                    <i class='bi bi-envelope'></i>
                  </span>
                </div>
                <input
                  type='text'
                  className='form-control profile-input'
                  id='Email'
                  placeholder='Email'
                  aria-label='Email'
                  aria-describedby='basic-addon1'
                  value={formData.Email}
                  onChange={(e) => {
                    setFormData({ ...formData, Email: e.target.value });
                    // setValidationErrors({ ...validationErrors, Email: null });
                  }}
                />
                <div className='optional'>
                  <span>Optional</span>
                </div>
              </div>
              {/* {validationErrors.Email && (
                <span className='text-danger'>{validationErrors.Email}</span>
              )} */}
              <div className='justify-content-center align-items-center d-flex mt-5'>
                <button
                  type='submit'
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
  );
};
export default Profile;
