import React, { useEffect, useState } from 'react';
import './company.css';
import { useNavigate } from 'react-router-dom';
import * as Realm from 'realm-web';
import { initializeApp } from 'firebase/app';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';

const REALM_APP_ID = 'application-1-zyzrj';

// Initialize a Realm App instance with your App ID
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

const Company = () => {
  const [disableButton, setDisableButton] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [fileError, setFileError] = useState('');
  const [errors, setErrors] = useState({
    LegalName: '',
  });

  const [formData, setFormData] = useState({
    CompanyLogo: '',
    LegalName: '',
    Website: '',
    BrandName: '',
  });

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const Address = localStorage.getItem('ManufactureAddress');
  const PinCode = localStorage.getItem('ManufacturePincode');
  const State = localStorage.getItem('ManufactureState');
  const AddressImage = localStorage.getItem('ManufactureAddresImage');
  useEffect(() => {
    const Address = localStorage.getItem('ManufactureAddress');
    const PinCode = localStorage.getItem('ManufacturePincode');
    const State = localStorage.getItem('ManufactureState');
    const AddressImage = localStorage.getItem('ManufactureAddresImage');

    if (!Address || !PinCode || !AddressImage || !State) {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }
  }, []);

  const handleFormSubmit = async (e) => {
    const Address = localStorage.getItem('ManufactureAddress');
    const PinCode = localStorage.getItem('ManufacturePincode');
    const State = localStorage.getItem('ManufactureState');
    const AddressImage = localStorage.getItem('ManufactureAddresImage');
    e.preventDefault();
    // Validation logic
    let formIsValid = true;
    const newErrors = {};

    if (formData.LegalName.trim() === '') {
      newErrors.LegalName = 'Legal Name is required';
      formIsValid = false;
    }
    if (!formData.Image) {
      setFileError('Please select an image file');
      return;
    }

    if (!formIsValid) {
      setErrors(newErrors);
      return;
    }
    try {
      setLoading(true);
      const user = await app.logIn(
        Realm.Credentials.apiKey(
          'TE9xYqQaMnLCU0PVeYzYTbyYBkGcx9wCRanoKtrkpyNgUjTYq4JWcW4Drp3jLIgS'
        )
      );

      if (!user) {
        console.error('User not logged in');
        return;
      }

      const manufacturesCollection = user
        .mongoClient('mongodb-atlas')
        .db('QUIKFLO')
        .collection('Manufacture');

      const storageRef = ref(storage, `images/${formData.Type}-${Date.now()}`);
      const uploadTask = uploadBytesResumable(storageRef, formData.Image);

      const uploadSnapshot = await uploadTask;

      // Get the image download URL
      const imageURL = await getDownloadURL(uploadSnapshot.ref);

      // Update data in Realm with the specified ProfileID

      const ProfileID = localStorage.getItem('id');
      const manufactureId = localStorage.getItem('manufactureId');

      if (!ProfileID && !manufactureId) {
        console.error('Neither ProfileID nor existID is defined.');
        return;
      }
      const targetID = ProfileID || manufactureId;

      await manufacturesCollection.updateOne(
        { _id: Realm.BSON.ObjectId(targetID) },
        {
          $set: {
            CompanyDetails: {
              CompanyLogo: imageURL,
              LegalName: formData.LegalName,
              Website: formData.Website,
              BrandName: formData.BrandName,
              Address: Address,
              PinCode: PinCode,
              State: State,
              AddressImage: AddressImage,
            },
          },
        }
      );

      setFormData({
        CompanyLogo: null,
        LegalName: '',
        Website: '',
        BrandName: '',
      });
      setLoading(false);
      localStorage.removeItem('ManufactureAddress');
      localStorage.removeItem('ManufacturePincode');
      localStorage.removeItem('ManufactureState');
      localStorage.removeItem('ManufactureAddresImage');
      localStorage.clear();
      Navigate('/home');
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/png'];
    if (!allowedTypes.includes(file.type)) {
      setFileError('Please select a valid image file (JPEG, PNG, GIF)');
      return;
    }

    // Validate file size
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      setFileError('File size exceeds 5MB. Please choose a smaller file.');
      return;
    }

    const imageUrl = URL.createObjectURL(file);
    setImageUrl(imageUrl);
    setFormData({ ...formData, Image: file });
    setFileError('');
  };

  const handleImageClick = () => {
    document.getElementById('imageInput').click();
  };
  const Navigate = useNavigate();
  const handleClick = () => {
    Navigate('/map');
  };

  return (
    <div className='company-background'>
      <div className='container container-profile'>
        <div className='row profile-row'>
          <div className='profile-box'>
            <h2 className='profile-head mb-3'>Company Details</h2>
            <form className='form-main' onSubmit={handleFormSubmit}>
              <div className='input-group mb-3 justify-content-center align-items-center d-flex'>
                <input
                  type='file'
                  className='visually-hidden'
                  id='imageInput'
                  accept='image/jpeg,image/png,image/gif'
                  onChange={handleImageChange}
                />
                <div className='profile-label'>
                  <label
                    htmlFor='imageInput'
                    className='profile-upload d-flex mt-3 justify-content-center'
                  >
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt='Selected Image'
                        style={{ width: '110px', borderRadius: '50%' }}
                      />
                    ) : (
                      <i
                        class='bi bi-cloud-arrow-up '
                        style={{ fontSize: '35px', marginTop: '20px' }}
                      ></i>
                    )}
                  </label>
                  <span className='label-cam'>
                    <i className='bi bi-camera text-white'></i>
                  </span>
                </div>
              </div>

              {fileError && (
                <div className='error-message text-center text-danger'>
                  {fileError}
                </div>
              )}
              <p className='choose-image text-center' style={{ color: 'red' }}>
                Choose Your Logo
              </p>
              <div class='input-group mt-4 mb-3'>
                <div class='input-group-prepend'>
                  <span
                    class='input-group-text profile-badge'
                    id='basic-addon1'
                  >
                    <i class='bi bi-briefcase-fill'></i>
                  </span>
                </div>
                <input
                  type='text'
                  class='form-control profile-input'
                  placeholder='Legal Name'
                  aria-label='Legal Name'
                  aria-describedby='basic-addon1'
                  id='LegalName'
                  value={formData.LegalName}
                  onChange={(e) =>
                    setFormData({ ...formData, LegalName: e.target.value })
                  }
                />
              </div>
              {errors.LegalName && (
                <div className='error-message text-danger mb-3'>
                  {errors.LegalName}
                </div>
              )}
              <a
                onClick={handleClick}
                className='verfiy-btn border border-success'
              >
                <span className='left-icon'>
                  <i class='bi bi-geo-alt-fill'></i>
                </span>
                <span className='verify-btn-text'>Location</span>
                {localStorage.getItem('ManufactureAddress') ? (
                  <span className='right-icon color-green'>
                    <i className='bi bi-check'></i>
                  </span>
                ) : (
                  <span className='right-icon'>
                    <i className='bi bi-chevron-right'></i>
                  </span>
                )}
              </a>
              <div class='input-group mt-3 mb-3'>
                <div class='input-group-prepend'>
                  <span
                    class='input-group-text profile-badge'
                    id='basic-addon1'
                  >
                    <i class='bi bi-globe-americas'></i>
                  </span>
                </div>
                <input
                  type='text'
                  class='form-control profile-input'
                  placeholder='Website'
                  aria-label='Website'
                  aria-describedby='basic-addon1'
                  id='Website'
                  value={formData.Website}
                  onChange={(e) =>
                    setFormData({ ...formData, Website: e.target.value })
                  }
                />
                <span
                  className='input-optional small'
                  style={{ color: 'gray' }}
                >
                  optional
                </span>
              </div>
              <div class='input-group mt-3 mb-3'>
                <div class='input-group-prepend'>
                  <span
                    class='input-group-text profile-badge'
                    id='basic-addon1'
                  >
                    <i class='bi bi-globe-americas'></i>
                  </span>
                </div>
                <input
                  type='text'
                  class='form-control profile-input'
                  placeholder='Brand Name'
                  aria-label='Brand Name'
                  aria-describedby='basic-addon1'
                  id='BrandName'
                  value={formData.BrandName}
                  onChange={(e) =>
                    setFormData({ ...formData, BrandName: e.target.value })
                  }
                />
                <span
                  className='input-optional small'
                  style={{ color: 'gray' }}
                >
                  optional
                </span>
              </div>
              {Address && PinCode && State && AddressImage && (
                <div className='term-condition'>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      id='exampleCheck1'
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    <label
                      className='form-check-label'
                      htmlFor='exampleRadios1'
                    >
                      By submitting, I am accepting QuickFlo’s
                      <a href=''> Terms and Conditions</a> and
                      <a href=''> Privacy Policy</a>
                    </label>
                  </div>
                </div>
              )}
              <div className='justify-content-center align-items-center d-flex mt-5'>
                <button
                  type='submit'
                  style={{ boxShadow: 'none' }}
                  className={`btn-primary profile-btn justify-content-center align-items-center d-flex ${
                    !isChecked ? 'disabled' : ''
                  }`}
                  disabled={!isChecked || disableButton}
                >
                  {loading ? 'Loading...' : 'Save & Continue'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Company;
