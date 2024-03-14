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
  const [isLoading, setIsLoading] = useState(false);
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    FullName: '',
    DOB: '',
    Email: '',
    ShopName: '',
    Image: '',
  });
  const [validationErrors, setValidationErrors] = useState({
    FullName: null,
    DOB: null,
    Email: null,
    ShopName: null,
    Image: null,
  });
  const [imagePreview, setImagePreview] = useState(null); // State to store the temporary URL of the uploaded image

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      setFormData({ ...formData, Image: image });
      setValidationErrors({ ...validationErrors, Image: null });
      setImagePreview(URL.createObjectURL(image)); // Set the temporary URL for image preview
    }
  };
  const handleFormSubmit = async (e) => {
    const DriverMobile = localStorage.getItem('DriverNumber');
    const PartnercodeID = localStorage.getItem('PartnercodeID');
    const Type = localStorage.getItem('PartnerType');
    e.preventDefault();
    // Validation
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
    if (!formData.ShopName) {
      errors.ShopName = 'Shop Name is required';
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
          'BERG2eukup53wsYFkqBJLzqTLRGLXgvBIu3Y9h307bmTt3pWU8ejBH96lHvB5igv'
        )
      );
      const manufacturesCollection = user
        .mongoClient('mongodb-atlas')
        .db('QUIKFLO')
        .collection('Driver');
      const dobTimestamp = formData.DOB
        ? new Date(formData.DOB).toISOString()
        : null;
      const storageRef = ref(storage, `images/${formData.Type}-${Date.now()}`);
      const uploadTask = uploadBytesResumable(storageRef, formData.Image);
      const uploadSnapshot = await uploadTask;
      const imageURL = await getDownloadURL(uploadSnapshot.ref);

      const insertResult = await manufacturesCollection.insertOne({
        MobileNo: DriverMobile,
        FullName: formData.FullName,
        Status: '0',
        Device: 'Web',
        PartnerId: PartnercodeID,
        Type: Type,
        DOB: dobTimestamp,
        LicenceNo: formData.ShopName,
        Email: formData.Email,
        Image: imageURL,
      });
      console.log('Insert result:', insertResult);
      const insertedId = insertResult.insertedId;
      setFormData({
        FullName: '',
        DOB: '',
        LicenceNo: '',
        Email: '',
        Image: null,
      });
      setIsLoading(false);
      Navigate('/driver-kyc');
      localStorage.setItem('DriverID', insertedId.toString());
    } catch (error) {
      console.error('Error submitting form data:', error);
      setValidationErrors({
        ...validationErrors,
        Image: 'Error uploading image',
      }); // Set image error message
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
              <div className='text-center' style={{ color: '#818281' }}>
                Choose Your Image
              </div>
              {validationErrors.Image && (
                <div className='text-danger text-center'>
                  {validationErrors.Image}
                </div>
              )}
              <div className='input-group mt-3 mb-3'>
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
              <div className='input-group mt-3 mb-3'>
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
              <div className='input-group mt-3 mb-3'>
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
                  id='ShopName'
                  placeholder='Driving Licence Number'
                  aria-label='Shop Name'
                  aria-describedby='basic-addon1'
                  value={formData.ShopName}
                  onChange={(e) => {
                    setFormData({ ...formData, ShopName: e.target.value });
                    setValidationErrors({
                      ...validationErrors,
                      ShopName: null,
                    });
                  }}
                />
              </div>
              {validationErrors.ShopName && (
                <span className='text-danger'>{validationErrors.ShopName}</span>
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
                  }}
                />
                <div className='optional'>
                  <span>Optional</span>
                </div>
              </div>

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
