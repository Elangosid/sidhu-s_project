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
  const [imageUrl, setImageUrl] = useState(null);
  const [disableButton, setDisableButton] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    CompanyLogo: '',
    ShopName: '',
  });

  const [shopNameError, setShopNameError] = useState('');
  const [imageError, setImageError] = useState('');

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const Address = localStorage.getItem('addressShop');
  const PinCode = localStorage.getItem('pincodeShop');
  const State = localStorage.getItem('stateShop');
  const AddressImage = localStorage.getItem('addressImageShop');

  useEffect(() => {
    const Address = localStorage.getItem('addressShop');
    const PinCode = localStorage.getItem('pincodeShop');
    const State = localStorage.getItem('stateShop');
    const AddressImage = localStorage.getItem('addressImageShop');

    if (!Address || !PinCode || !AddressImage || !State) {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }
  }, []);

  useEffect(() => {
    // Check if the shop name is filled to hide the error message
    if (formData.ShopName.trim() !== '') {
      setShopNameError('');
    }
    // Check if the image is selected to hide the error message
    if (formData.Image) {
      setImageError('');
    }
  }, [formData]);

  const handleFormSubmit = async (e) => {
    const retailerId = localStorage.getItem('retailerId');
    const mobileNumberId = localStorage.getItem('mobileNumberId');
    const Address = localStorage.getItem('addressShop');
    const PinCode = localStorage.getItem('pincodeShop');
    const State = localStorage.getItem('stateShop');
    const AddressImage = localStorage.getItem('addressImageShop');
    e.preventDefault();

    // Validate shop name
    if (formData.ShopName.trim() === '') {
      setShopNameError('Please enter a shop name');
      return;
    } else {
      setShopNameError('');
    }

    // Validate image upload
    if (!formData.Image) {
      setImageError('Please choose an image for your shop');
      return;
    } else {
      setImageError('');
    }
    try {
      setLoading(true);
      // Check if the user is logged in

      const user = await app.logIn(
        Realm.Credentials.apiKey(
          'A8I4DRdGlz8SSMQqW9FnSp2thtq0hTUjBBWCiRw6ynXaZAGNiH7GqAf9U9uGWZDl'
        )
      );

      const retailerCollection = user
        .mongoClient('mongodb-atlas')
        .db('QUIKFLO')
        .collection('Retailer');

      if (!user) {
        console.error('User not logged in');
        return;
      }

      const storageRef = ref(storage, `images/${formData.Type}-${Date.now()}`);
      const uploadTask = uploadBytesResumable(storageRef, formData.Image);

      const uploadSnapshot = await uploadTask;

      // Get the image download URL
      const imageURL = await getDownloadURL(uploadSnapshot.ref);

      // Update data in Realm with the specified ProfileID
      if (!retailerId && !mobileNumberId) {
        console.error('Neither ProfileID nor existID is defined.');
        return;
      }

      const targetID = retailerId || mobileNumberId;

      await retailerCollection.updateOne(
        { _id: Realm.BSON.ObjectId(targetID) },
        {
          $set: {
            StoreDetails: {
              CompanyLogo: imageURL,
              ShopName: formData.ShopName,
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
        ShopName: '',
      });
      setLoading(false);
      navigate('/retailer-home');
      localStorage.removeItem('addressShop');
      localStorage.removeItem('pincodeShop');
      localStorage.removeItem('stateShop');
      localStorage.removeItem('MapImageUrl');
      localStorage.clear();
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);
      setFormData({ ...formData, Image: file });
    }
  };

  const handleImageClick = () => {
    document.getElementById('imageInput').click();
  };

  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.setItem('shopName', formData.ShopName);
    navigate('/retailer-map');
  };

  return (
    <div className='company-background'>
      <div className='container container-profile'>
        <div className='row profile-row'>
          <div className='profile-box'>
            <h2 className='profile-head mb-3'>Store Details</h2>
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
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt='Selected Image'
                        className='uploaded-image'
                        style={{
                          borderRadius: '50%',
                          width: '100px',
                          objectFit: 'contain',
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

              {imageError && (
                <div className='text-center'>
                  <span
                    className='error-message text-danger text-center'
                    style={{ fontSize: '14px' }}
                  >
                    {imageError}
                  </span>
                </div>
              )}
              {!imageUrl && (
                <p
                  className='choose-image text-center'
                  style={{ color: 'red' }}
                >
                  Choose Your Shop Image
                </p>
              )}
              <div className='input-group mt-5 mb-3'>
                <div className='input-group-prepend'>
                  <span
                    className='input-group-text profile-badge'
                    id='basic-addon1'
                  >
                    <i className='bi bi-briefcase-fill'></i>
                  </span>
                </div>
                <input
                  type='text'
                  className='form-control profile-input'
                  placeholder='Shop Name'
                  aria-label='Shop Name'
                  aria-describedby='basic-addon1'
                  id='ShopName'
                  value={formData.ShopName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      ShopName: e.target.value,
                    })
                  }
                />
              </div>

              {shopNameError && (
                <div className='mb-3'>
                  <span className='error-message text-danger'>
                    {shopNameError}
                  </span>
                </div>
              )}
              <a
                onClick={handleClick}
                className='verfiy-btn border border-success'
              >
                <span className='left-icon'>
                  <i className='bi bi-geo-alt-fill'></i>
                </span>
                <span className='verify-btn-text'>Location</span>
                {localStorage.getItem('addressShop') ? (
                  <span className='right-icon color-green'>
                    <i className='bi bi-check'></i>
                  </span>
                ) : (
                  <span className='right-icon'>
                    <i className='bi bi-chevron-right'></i>
                  </span>
                )}
              </a>
              {Address && PinCode && State && AddressImage && (
                <div className='term-condition mt-2'>
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
