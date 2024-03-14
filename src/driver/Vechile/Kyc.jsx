import React, { useEffect, useState } from 'react';
import './kyc.css';
import { useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import * as Realm from 'realm-web';

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

const Kyc = () => {
  const [loading, setLoading] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  const [imagePreview, setImagePreview] = useState(null); // State to store the temporary URL of the uploaded image
  const [formData, setFormData] = useState({
    Image: '',
  });
  const [validationErrors, setValidationErrors] = useState({
    Image: null,
  });

  useEffect(() => {
    const VehicleInsurence = localStorage.getItem('VehicleInsurenceImg');
    const DrivingLicenceImg = localStorage.getItem('DrivingLicenceImg');
    const RoadTaxImg = localStorage.getItem('RoadTaxImg');
    const VehicleNumPlate = localStorage.getItem('VehicleNumPlate');
    const VehiclePermitImg = localStorage.getItem('VehiclePermitImg');

    if (
      !VehiclePermitImg ||
      !VehicleNumPlate ||
      !RoadTaxImg ||
      !DrivingLicenceImg ||
      !VehicleInsurence
    ) {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }
  }, []);
  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      setFormData({ ...formData, Image: image });
      setValidationErrors({ ...validationErrors, Image: null });
      setImagePreview(URL.createObjectURL(image)); // Set the temporary URL for image preview
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const errors = {};

    if (!formData.Image) {
      errors.Image = 'Image is required';
    }
    setValidationErrors(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }
    try {
      setLoading(true);
      const VehicleInsurence = localStorage.getItem('VehicleInsurenceImg');
      const DrivingLicenceImg = localStorage.getItem('DrivingLicenceImg');
      const RoadTaxImg = localStorage.getItem('RoadTaxImg');
      const RegistrationCertificateDoc = localStorage.getItem('VehicleRegcer');
      const VehicleNumPlate = localStorage.getItem('VehicleNumPlate');
      const VehiclePermitImg = localStorage.getItem('VehiclePermitImg');
      const storageRef = ref(storage, `images/${formData.Type}-${Date.now()}`);
      const uploadTask = uploadBytesResumable(storageRef, formData.Image);
      const uploadSnapshot = await uploadTask;
      const imageURL = await getDownloadURL(uploadSnapshot.ref);

      const ProfileID = localStorage.getItem('DriverID');
      console.log(ProfileID);
      const existID = localStorage.getItem('DriverExistId');
      console.log(existID);
      // Ensure ProfileID is defined and not null
      if (!ProfileID && !existID) {
        console.error('Neither ProfileID nor existID is defined.');
        return;
      }
      const targetID = ProfileID || existID;

      const user = await app.logIn(
        Realm.Credentials.apiKey(
          'BERG2eukup53wsYFkqBJLzqTLRGLXgvBIu3Y9h307bmTt3pWU8ejBH96lHvB5igv'
        )
      );

      const manufacturesCollection = user
        .mongoClient('mongodb-atlas')
        .db('QUIKFLO')
        .collection('Driver');

      await manufacturesCollection.updateOne(
        { _id: Realm.BSON.ObjectId(targetID) },
        {
          $set: {
            DocumentDetails: {
              VehicleInsuance: VehicleInsurence,
              DrivingLicence: DrivingLicenceImg,
              RoadTax: RoadTaxImg,
              VehiclePermit: VehiclePermitImg,
              VehicleNumberPlate: VehicleNumPlate,
              VehicleImage: imageURL,
            },
          },
        }
      );

      setFormData({
        PanNumber: '',
      });
      setLoading(true);
      Navigate('/driver-kyc');

      // localStorage.removeItem('VehicleInsurenceImg');
      // localStorage.removeItem('DrivingLicenceImg');
      // localStorage.removeItem('RoadTaxImg');
      // localStorage.removeItem('VehicleNumPlate');
      // localStorage.removeItem('VehiclePermitImg');
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  const Navigate = useNavigate();
  const insuranceClick = () => {
    Navigate('/vehicle-insurence');
  };
  const licenceClick = () => {
    Navigate('/driving-license');
  };
  const taxClick = () => {
    Navigate('/road-tax');
  };
  const permitClick = () => {
    Navigate('/vehicle-permit');
  };
  const registerClick = () => {
    Navigate('/vehicle-reg-certificate');
  };
  const plateClick = () => {
    Navigate('/vehicle-numplate');
  };

  return (
    <div className='profile-background'>
      <div className='container container-profile'>
        <div className='row profile-row'>
          <div className='profile-box'>
            <h2 className='profile-head mb-3'>Document Verification</h2>
            <p>
              Please complete the vechile verification by Submitting relevant
              documents ensure that QuickFlo has verified your document.
            </p>
            <form className='form-main' onSubmit={handleFormSubmit}>
              <a className='verfiy-btn mb-3' onClick={insuranceClick}>
                <span className='left-icon'>
                  <i class='bi bi-car-front'></i>
                </span>
                <span className='verify-btn-text'>Vehicle Insurance</span>
                {localStorage.getItem('VehicleInsurenceImg') ? (
                  <span className='right-icon color-green'>
                    <i className='bi bi-check'></i>
                  </span>
                ) : (
                  <span className='right-icon'>
                    <i className='bi bi-chevron-right'></i>
                  </span>
                )}
              </a>
              <a className='verfiy-btn mb-3' onClick={licenceClick}>
                <span className='left-icon'>
                  <i class='bi bi-car-front'></i>
                </span>
                <span className='verify-btn-text'>Driving Licence</span>
                {localStorage.getItem('DrivingLicenceImg') ? (
                  <span className='right-icon color-green'>
                    <i className='bi bi-check'></i>
                  </span>
                ) : (
                  <span className='right-icon'>
                    <i className='bi bi-chevron-right'></i>
                  </span>
                )}
              </a>
              <a className='verfiy-btn mb-3' onClick={taxClick}>
                <span className='left-icon'>
                  <i class='bi bi-car-front'></i>
                </span>
                <span className='verify-btn-text'>Road Tax</span>
                {localStorage.getItem('RoadTaxImg') ? (
                  <span className='right-icon color-green'>
                    <i className='bi bi-check'></i>
                  </span>
                ) : (
                  <span className='right-icon'>
                    <i className='bi bi-chevron-right'></i>
                  </span>
                )}
              </a>
              <a className='verfiy-btn mb-3' onClick={permitClick}>
                <span className='left-icon'>
                  <i class='bi bi-car-front'></i>
                </span>
                <span className='verify-btn-text'>Vehicle Permit</span>
                {localStorage.getItem('VehiclePermitImg') ? (
                  <span className='right-icon color-green'>
                    <i className='bi bi-check'></i>
                  </span>
                ) : (
                  <span className='right-icon'>
                    <i className='bi bi-chevron-right'></i>
                  </span>
                )}
              </a>
              <a className='verfiy-btn mb-3' onClick={registerClick}>
                <span className='left-icon'>
                  <i class='bi bi-car-front'></i>
                </span>
                <span className='verify-btn-text'>
                  Vehicle Registration Certificate
                </span>
                {localStorage.getItem('VehicleRegcer') ? (
                  <span className='right-icon color-green'>
                    <i className='bi bi-check'></i>
                  </span>
                ) : (
                  <span className='right-icon'>
                    <i className='bi bi-chevron-right'></i>
                  </span>
                )}
              </a>
              <a className='verfiy-btn mb-3' onClick={plateClick}>
                <span className='left-icon'>
                  <i class='bi bi-car-front'></i>
                </span>
                <span className='verify-btn-text'>Vehicle Number Plate</span>
                {localStorage.getItem('VehicleNumPlate') ? (
                  <span className='right-icon color-green'>
                    <i className='bi bi-check'></i>
                  </span>
                ) : (
                  <span className='right-icon'>
                    <i className='bi bi-chevron-right'></i>
                  </span>
                )}
              </a>
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
              {validationErrors.Image && (
                <div className='text-danger text-center mt-3'>
                  {validationErrors.Image}
                </div>
              )}
              <p className='text-center'>Upload Image of your Truck</p>
              <div className='instruction mt-5'>
                <h4>
                  <span className='instruction-badge'>
                    <i class='bi bi-exclamation-circle'></i>
                  </span>
                  Instruction
                </h4>
                <ul>
                  <li>
                    The file must be submitted in the format JPG, JPEG or PDF
                    and the file size is limited to 5 MB.
                  </li>
                  <li>
                    Take a Picture or Upload the files of the required
                    documents.
                  </li>
                  <li>
                    Warning: Submitting fake or altered document will result in
                    your account suspension.
                  </li>
                </ul>
              </div>
              <div className='justify-content-center align-items-center d-flex mt-5'>
                <button
                  type='submit'
                  class={`btn-primary profile-btn justify-content-center align-items-center d-flex ${
                    disableButton ? 'disabled' : ''
                  }`}
                  disabled={disableButton}
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

export default Kyc;
