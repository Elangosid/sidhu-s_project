import React, { useEffect, useState } from 'react';
import './kyc.css';
import { useNavigate } from 'react-router-dom';

import * as Realm from 'realm-web';

const REALM_APP_ID = 'application-1-zyzrj';

// Initialize a Realm App instance with your App ID
const app = new Realm.App({ id: REALM_APP_ID });

const Kyc = () => {
  const [loading, setLoading] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  const [panValidationMessage, setPanValidationMessage] = useState('');

  const [aadhaarDataPresent, setAadhaarDataPresent] = useState(false);
  const [alternativeNumberPresent, setAlternativeNumberPresent] =
    useState(false);

  const [gstPresent, setGstPresent] = useState(false);
  const [fssaiPresent, setFssaiPresent] = useState(false);
  const [registrationPresent, setregistrationPresent] = useState(false);
  const [fssiDocumentPresent, setFssiDocumentPresent] = useState(true);

  useEffect(() => {
    const VerifyNumber = localStorage.getItem('MobileNumber');
    const AadhaarNumber = localStorage.getItem('AadhaarNumber');
    const GSTNo = localStorage.getItem('GstManufactureNumber');
    const RegCertificateNo = localStorage.getItem('RegManufactureNumber');

    if (!VerifyNumber || !GSTNo || !RegCertificateNo) {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }
  }, []);

  useEffect(() => {
    const alternativeNumber = localStorage.getItem('MobileNumber');
    const aadhaarNumber = localStorage.getItem('AadhaarNumber');
    const aadhaarName = localStorage.getItem('AadhaarName');
    const fssaiImageUrl = localStorage.getItem('FssaiImageUrl');
    const RegCertificateNo = localStorage.getItem('RegManufactureNumber');
    const GSTNo = localStorage.getItem('GstManufactureNumber');

    setAlternativeNumberPresent(!!alternativeNumber);
    setAadhaarDataPresent(!!(aadhaarNumber && aadhaarName));
    setFssaiPresent(!!fssaiImageUrl);
    setregistrationPresent(!!RegCertificateNo);
    setGstPresent(!!GSTNo);
  }, []);

  useEffect(() => {
    const FSSIDocument = localStorage.getItem('FssaiImageUrl');
    setFssiDocumentPresent(!FSSIDocument);
  }, []);

  const [formData, setFormData] = useState({
    PanNumber: '',
  });

  const Navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const panRegex = /^[A-Za-z]{5}\d{4}[A-Za-z]{1}$/;
    if (!panRegex.test(formData.PanNumber)) {
      setPanValidationMessage('Please enter a valid PAN number.');
      return;
    }
    const VerifyNumber = localStorage.getItem('MobileNumber');
    const AadhaarProfile = localStorage.getItem('AadhaarProfile');
    const AadhaarAddress = localStorage.getItem('AadhaarAddress');
    const AadhaarMobileHash = localStorage.getItem('AadhaarMobileHash');
    const AadhaarNumber = localStorage.getItem('AadhaarNumber');
    const AadhaarName = localStorage.getItem('AadhaarName');
    const GSTNo = localStorage.getItem('GstManufactureNumber');
    const GSTDocument = localStorage.getItem('GstManufactureUrl');
    const RegCertificateNo = localStorage.getItem('RegManufactureNumber');
    const RegCertificateType = localStorage.getItem(
      'ManufactureRegistrationType'
    );
    const RegCompanyType = localStorage.getItem('ManufacturecompanyType');
    const RegDocument = localStorage.getItem('RegManufactureImgUrl');
    const FSSIDocument = localStorage.getItem('FssaiImageUrl');

    try {
      setLoading(true);
      // Ensure ProfileID is defined and not null

      const app = new Realm.App({ id: REALM_APP_ID });
      const credentials = Realm.Credentials.apiKey(
        'TE9xYqQaMnLCU0PVeYzYTbyYBkGcx9wCRanoKtrkpyNgUjTYq4JWcW4Drp3jLIgS'
      );
      await app.logIn(credentials);

      const user = app.currentUser;

      const manufacturesCollection = user
        .mongoClient('mongodb-atlas')
        .db('QUIKFLO')
        .collection('Manufacture');

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
            KYC: {
              PanNumber: formData.PanNumber,
              AlternativeNumber: VerifyNumber,
              AadhaarProfile: AadhaarProfile,
              AadhaarAddress: AadhaarAddress,
              AadhaarMobileHash: AadhaarMobileHash,
              AadhaarNumber: AadhaarNumber,
              AadhaarName: AadhaarName,
              GSTNo: GSTNo,
              GSTDocument: GSTDocument,
              RegCertificateNo: RegCertificateNo,
              RegCertificateType: RegCertificateType,
              RegCompanyType: RegCompanyType,
              RegDocument: RegDocument,
              FSSIDocument: FSSIDocument,
            },
          },
        }
      );

      setFormData({
        PanNumber: '',
      });
      localStorage.removeItem('MobileNumber');
      localStorage.removeItem('AadhaarProfile');
      localStorage.removeItem('AadhaarAddress');
      localStorage.removeItem('AadhaarMobileHash');
      localStorage.removeItem('AadhaarNumber');
      localStorage.removeItem('AadhaarName');
      localStorage.removeItem('GstManufactureUrl');
      localStorage.removeItem('GstManufactureNumber');
      localStorage.removeItem('RegManufactureNumber');
      localStorage.removeItem('RegManufactureImgUrl');
      localStorage.removeItem('ManufactureRegistrationType');
      localStorage.removeItem('userType');
      localStorage.removeItem('FssaiImageUrl');
      setLoading(false);
      Navigate('/companydetails');
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  const handleClick = () => {
    Navigate('/number');
  };

  const aadharClick = () => {
    Navigate('/aadhar');
  };

  const gstClick = () => {
    Navigate('/gst');
  };

  const certificateClick = () => {
    Navigate('/registration');
  };

  const fssaiClick = () => {
    Navigate('/fssai');
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
                    ? localStorage.getItem('MobileNumber')
                    : 'Alternate Number'}
                </span>
                {localStorage.getItem('MobileNumber') ? (
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
                  class='form-control profile-input'
                  placeholder='Pan Number'
                  id='PanNumber'
                  value={formData.PanNumber}
                  onChange={(e) => {
                    setFormData({ ...formData, PanNumber: e.target.value });
                    setPanValidationMessage(''); // Clear validation message when user types
                  }}
                  aria-label='Username'
                  aria-describedby='basic-addon1'
                />
              </div>
              {panValidationMessage && (
                <span className='text-danger'>{panValidationMessage}</span>
              )}
              <a
                className='verfiy-btn mt-3  border border-success '
                onClick={aadharClick}
              >
                <span className='left-icon'>
                  <i class='bi bi-fingerprint'></i>
                </span>
                <span className='verify-btn-text'>
                  {aadhaarDataPresent
                    ? localStorage.getItem('AadhaarNumber')
                    : 'Aadhaar Number'}
                </span>
                {localStorage.getItem('AadhaarNumber') ? (
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
                  <i class='bi bi-file-earmark'></i>
                </span>
                <span className='verify-btn-text'>
                  {' '}
                  {gstPresent
                    ? localStorage.getItem('GstManufactureNumber')
                    : 'Gst Details'}
                </span>
                {localStorage.getItem('GstManufactureNumber') ? (
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
                    ? localStorage.getItem('RegManufactureNumber')
                    : 'Registration Certificate'}
                </span>
                {localStorage.getItem('RegManufactureNumber') ? (
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
                className='verfiy-btn mt-3  border border-success'
                onClick={fssaiClick}
              >
                <span className='left-icon'>
                  <i class='bi bi-file-earmark-check'></i>
                </span>
                <span className='verify-btn-text'> FSSAI Certificate</span>
                {localStorage.getItem('FssaiImageUrl') ? (
                  <span className='right-icon color-green'>
                    <i className='bi bi-check'></i>
                  </span>
                ) : (
                  <span className='right-icon'>
                    <i className='bi bi-chevron-right'></i>
                  </span>
                )}
                {fssiDocumentPresent && (
                  <span
                    className='right-optional small'
                    style={{ color: 'gray' }}
                  >
                    optional
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
