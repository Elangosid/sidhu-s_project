import React, { useEffect, useState } from 'react';
import './kyc.css';
import { useNavigate } from 'react-router-dom';

import * as Realm from 'realm-web';

const REALM_APP_ID = 'application-1-zyzrj';

// Initialize a Realm App instance with your App ID
const app = new Realm.App({ id: REALM_APP_ID });

const Kyc = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  const [panNumberError, setPanNumberError] = useState('');

  const [aadhaarDataPresent, setAadhaarDataPresent] = useState(false);
  const [alternativeNumberPresent, setAlternativeNumberPresent] =
    useState(false);
  const [gstPresent, setGstPresent] = useState(false);
  const [registrationPresent, setregistrationPresent] = useState(false);

  useEffect(() => {
    const alternativeNumber = localStorage.getItem(
      'DriverAlternativeMobileNumber'
    );
    const aadhaarNumber = localStorage.getItem('DriverAadhaarNumber');
    const aadhaarName = localStorage.getItem('DriverAadhaarName');

    const RegCertificateNo = localStorage.getItem('PartnerRegdocumentNum');
    const GSTNo = localStorage.getItem('PartnerDocumentgstNo');

    setAlternativeNumberPresent(!!alternativeNumber);
    setAadhaarDataPresent(!!(aadhaarNumber && aadhaarName));

    setregistrationPresent(!!RegCertificateNo);
    setGstPresent(!!GSTNo);
  }, []);
  const [formData, setFormData] = useState({
    PanNumber: '',
  });

  const Navigate = useNavigate();

  useEffect(() => {
    const VerifyNumber = localStorage.getItem('DriverAlternativeMobileNumber');
    // const AadhaarNumber = localStorage.getItem('DriverAadhaarNumber');
    const DriverState = localStorage.getItem('Driverstate');
    const VehicleRegcer = localStorage.getItem('VehicleRegcer');

    if (!VerifyNumber || !DriverState || !VehicleRegcer) {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }
  }, []);

  const handleFormSubmit = async (e) => {
    const VerifyNumber = localStorage.getItem('DriverAlternativeMobileNumber');
    const AadhaarProfile = localStorage.getItem('DriverAadhaarProfile');
    const AadhaarAddress = localStorage.getItem('DriverAadhaarAddress');
    const AadhaarMobileHash = localStorage.getItem('DriverAadhaarMobileHash');
    const AadhaarNumber = localStorage.getItem('DriverAadhaarNumber');
    const AadhaarName = localStorage.getItem('DriverAadhaarName');
    const DriverState = localStorage.getItem('Driverstate');
    const Driverpincode = localStorage.getItem('Driverpincode');
    const Driveraddress = localStorage.getItem('Driveraddress');
    const DriverMapImageUrl = localStorage.getItem('DriverMapImageUrl');
    const VehicleRegcer = localStorage.getItem('VehicleRegcer');
    e.preventDefault();
    if (
      !formData.PanNumber ||
      !/^[A-Za-z]{5}\d{4}[A-Za-z]{1}$/.test(formData.PanNumber)
    ) {
      setPanNumberError('Please enter a valid PAN number.');
      return;
    }

    try {
      setIsLoading(true);
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
            KYC: {
              PanNumber: formData.PanNumber,
              AlternativeNumber: `+91${VerifyNumber}`,
              AadhaarProfile: AadhaarProfile,
              AadhaarAddress: AadhaarAddress,
              AadhaarMobileHash: AadhaarMobileHash,
              AadhaarNumber: AadhaarNumber,
              AadhaarName: AadhaarName,
              VehicleRegDocument: VehicleRegcer,
              State: DriverState,
              PinCode: Driverpincode,
              Address: Driveraddress,
              AddressImage: DriverMapImageUrl,
            },
          },
        }
      );

      setFormData({
        PanNumber: '',
      });
      // localStorage.removeItem('DriverAlternativeMobileNumber')
      // localStorage.removeItem('DriverAadhaarProfile')
      // localStorage.removeItem('DriverAadhaarAddress')
      // localStorage.removeItem('DriverAadhaarMobileHash')
      // localStorage.removeItem('DriverAadhaarNumber')
      // localStorage.removeItem('DriverAadhaarName')
      // localStorage.removeItem('Driverstate')
      // localStorage.removeItem('pincode')
      // localStorage.removeItem('address')
      // localStorage.removeItem('DriverMapImageUrl')
      // localStorage.removeItem('VehicleRegcer')
      localStorage.clear();
      setIsLoading(false);
      Navigate('/driver-home');
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  const handleClick = () => {
    Navigate('/driver-number');
  };

  const aadharClick = () => {
    Navigate('/driver-aadhar');
  };

  const gstClick = () => {
    Navigate('/driver-map');
  };

  const certificateClick = () => {
    Navigate('/driver-vechile');
  };

  return (
    <div className='profile-background'>
      <div className='container container-profile'>
        <div className='row profile-row'>
          <div className='profile-box'>
            <h2 className='profile-head mb-3'>KYC Verification</h2>
            <p>
              Please complete the KYC verification by Submitting relevant
              documents ensure that QuickFlo has verified you identity.
            </p>
            <form className='form-main' onSubmit={handleFormSubmit}>
              <a
                className='verfiy-btn border border-success '
                onClick={handleClick}
              >
                <span className='left-icon'>
                  <i class='bi bi-telephone'></i>
                </span>
                <span className='verify-btn-text'>
                  {alternativeNumberPresent
                    ? localStorage.getItem('DriverAlternativeMobileNumber')
                    : 'Alternate Number'}
                </span>
                {localStorage.getItem('DriverAlternativeMobileNumber') ? (
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
                    <i class='bi bi-card-checklist'></i>
                  </span>
                </div>
                <input
                  type='text'
                  className={`form-control profile-input ${
                    panNumberError && 'is-invalid'
                  }`}
                  placeholder='Pan Number'
                  id='PanNumber'
                  value={formData.PanNumber}
                  onChange={(e) => {
                    setFormData({ ...formData, PanNumber: e.target.value });
                    setPanNumberError(''); // Clear previous error message
                  }}
                  aria-label='Username'
                  aria-describedby='basic-addon1'
                />
                {panNumberError && (
                  <div className='invalid-feedback'>{panNumberError}</div>
                )}
              </div>
              <a
                className='verfiy-btn mt-3  border border-success '
                onClick={aadharClick}
              >
                <span className='left-icon'>
                  <i class='bi bi-fingerprint'></i>
                </span>
                <span className='verify-btn-text'>
                  {aadhaarDataPresent
                    ? localStorage.getItem('DriverAadhaarNumber')
                    : 'Aadhaar Number'}
                </span>
                {localStorage.getItem('DriverAadhaarNumber') ? (
                  <span className='right-icon color-green'>
                    <i className='bi bi-check'></i>
                  </span>
                ) : (
                  <span className='right-icon'>
                    <i className='bi bi-chevron-right'></i>
                  </span>
                )}
              </a>
              <a
                className='verfiy-btn mt-3  border border-success '
                onClick={gstClick}
              >
                <span className='left-icon'>
                  <i class='bi bi-geo-alt'></i>
                </span>
                <span className='verify-btn-text'>
                  {' '}
                  {gstPresent
                    ? localStorage.getItem('Driverstate')
                    : 'Location'}
                </span>
                {localStorage.getItem('Driverstate') ? (
                  <span className='right-icon color-green'>
                    <i className='bi bi-check'></i>
                  </span>
                ) : (
                  <span className='right-icon'>
                    <i className='bi bi-chevron-right'></i>
                  </span>
                )}
              </a>
              <a
                className='verfiy-btn mt-3  border border-success '
                onClick={certificateClick}
              >
                <span className='left-icon'>
                  <i class='bi bi-file-earmark-check'></i>
                </span>
                <span className='verify-btn-text'>
                  {registrationPresent
                    ? localStorage.getItem('VehicleRegcer')
                    : 'Vehicle Registration '}
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

export default Kyc;
