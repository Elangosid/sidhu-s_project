import React, { useState, useEffect } from 'react';
import './kyc.css';
import { useNavigate } from 'react-router-dom';
import * as Realm from 'realm-web';

const REALM_APP_ID = 'application-1-zyzrj';

const Kyc = () => {
  const Navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [panNumber, setPanNumber] = useState('');
  const [alternativeNumberPresent, setAlternativeNumberPresent] =
    useState(false);
  const [aadhaarDataPresent, setAadhaarDataPresent] = useState(false);
  const [gstDataPresent, setGstDataPresent] = useState(false);
  const [showRightIcon, setShowRightIcon] = useState(true);
  const [panNumberError, setPanNumberError] = useState('');

  useEffect(() => {
    const alternativeNumber = localStorage.getItem('AlternativeNumber');
    const aadhaarNumber = localStorage.getItem('AadhaarNumber');
    const aadhaarName = localStorage.getItem('AadhaarName');
    const imageUrl = localStorage.getItem('GstUrl');
    const gstDocumentNumber = localStorage.getItem('gstDocumentNumber');

    setAlternativeNumberPresent(!!alternativeNumber);
    setAadhaarDataPresent(!!(aadhaarNumber && aadhaarName));
    setGstDataPresent(!!imageUrl && gstDocumentNumber);
  }, []);

  const handleClick = () => {
    Navigate('/retailer-number');
  };

  const aadharClick = () => {
    Navigate('/retailer-aadhar');
  };

  const gstClick = () => {
    Navigate('/retailer-gst');
  };
  const validatePanNumber = () => {
    const panRegex = /^[A-Za-z]{5}\d{4}[A-Za-z]{1}$/;
    if (!panRegex.test(panNumber)) {
      setPanNumberError('Invalid PAN number format');
    } else {
      setPanNumberError('');
    }
  };
  const companyClick = async (e) => {
    e.preventDefault();

    const altNumber = localStorage.getItem('AlternativeNumber');
    const aadhaarAddress = localStorage.getItem('AadhaarAddress');
    const aadhaarMobileHash = localStorage.getItem('AadhaarMobileHash');
    const aadhaarName = localStorage.getItem('AadhaarName');
    const aadhaarProfile = localStorage.getItem('AadhaarProfile');
    const aadhaarNumber = localStorage.getItem('AadhaarNumber');
    const imageUrl = localStorage.getItem('GstUrl');
    const gstDocumentNumber = localStorage.getItem('gstDocumentNumber');

    const retailerId = localStorage.getItem('retailerId');
    const mobileNumberId = localStorage.getItem('mobileNumberId');

    // Check if PAN number is empty
    if (panNumber.trim() === '') {
      setPanNumberError('Please enter PAN number');
      return;
    }

    // Check if PAN number is invalid
    validatePanNumber();
    if (panNumberError) {
      return;
    }

    try {
      setLoading(true);
      const app = new Realm.App({ id: REALM_APP_ID });
      const credentials = Realm.Credentials.apiKey(
        'A8I4DRdGlz8SSMQqW9FnSp2thtq0hTUjBBWCiRw6ynXaZAGNiH7GqAf9U9uGWZDl'
      );
      await app.logIn(credentials);

      const user = app.currentUser;
      const retailerCollection = user
        .mongoClient('mongodb-atlas')
        .db('QUIKFLO')
        .collection('Retailer');

      if (!retailerId && !mobileNumberId) {
        console.error('Neither ProfileID nor existID is defined.');
        return;
      }
      const targetID = retailerId || mobileNumberId;

      const updateResult = await retailerCollection.updateOne(
        { _id: Realm.BSON.ObjectId(targetID) }, // Convert retailerId to ObjectId
        {
          $set: {
            'KYC.PanNumber': panNumber,
            'KYC.AlternativeNumber': altNumber,
            'KYC.AadhaarProfile': aadhaarProfile,
            'KYC.AadhaarAddress': aadhaarAddress,
            'KYC.AadhaarMobileHash': aadhaarMobileHash,
            'KYC.AadhaarNumber': aadhaarNumber,
            'KYC.AadhaarName': aadhaarName,
            'KYC.GSTDocument': imageUrl,
            'KYC.GSTNo': gstDocumentNumber,
          },
        }
      );

      console.log('Update result:', updateResult);

      if (updateResult.modifiedCount === 0) {
        console.warn(
          'No document was updated. Retailer ID might be incorrect.'
        );
      }

      localStorage.removeItem('AlternativeNumber');
      localStorage.removeItem('AadhaarAddress');
      localStorage.removeItem('AadhaarMobileHash');
      localStorage.removeItem('AadhaarName');
      localStorage.removeItem('AadhaarProfile');
      localStorage.removeItem('AadhaarNumber');
      localStorage.removeItem('GstUrl');
      localStorage.removeItem('gstDocumentNumber');

      // Navigate to the next page
      Navigate('/retailer-companydetails');
    } catch (error) {
      console.error('Error updating PAN number:', error);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className='profile-background'>
      <div className='container container-profile'>
        <div className='row profile-row'>
          <div className='profile-box'>
            <h2 className='profile-head mb-3'>KYC Verification</h2>
            <p>
              Please complete the KYC verification by submitting relevant
              documents to ensure that QuickFlo has verified your identity.
            </p>
            <form className='form-main'>
              <a className='verfiy-btn' onClick={handleClick}>
                <span className='left-icon'>
                  <i className='bi bi-telephone'></i>
                </span>
                <span className='verify-btn-text'>
                  {alternativeNumberPresent
                    ? localStorage.getItem('AlternativeNumber')
                    : 'Alternate Number'}
                </span>
                {alternativeNumberPresent ? (
                  <span className='right-icon color-green'>
                    <i className='bi bi-check'></i>
                  </span>
                ) : (
                  showRightIcon && (
                    <span className='right-icon'>
                      <i className='bi bi-chevron-right'></i>
                    </span>
                  )
                )}
              </a>
              <div className='input-group mt-3 mb-3'>
                <div className='input-group-prepend'>
                  <span
                    className='input-group-text profile-badge'
                    id='basic-addon1'
                  >
                    <i className='bi bi-card-checklist'></i>
                  </span>
                </div>
                <input
                  type='text'
                  value={panNumber}
                  onChange={(e) => setPanNumber(e.target.value)}
                  onBlur={validatePanNumber}
                  className={`form-control profile-input ${
                    panNumberError ? 'is-invalid' : ''
                  }`}
                  placeholder='Pan Number'
                  aria-label='Username'
                  aria-describedby='basic-addon1'
                />
                {panNumberError && (
                  <div className='invalid-feedback'>{panNumberError}</div>
                )}
              </div>
              <a className='verfiy-btn mt-3' onClick={aadharClick}>
                <span className='left-icon'>
                  <i className='bi bi-fingerprint'></i>
                </span>
                <span className='verify-btn-text'>
                  {aadhaarDataPresent
                    ? localStorage.getItem('AadhaarNumber')
                    : 'Aadhaar Number'}
                </span>
                {aadhaarDataPresent ? (
                  <span className='right-icon color-green'>
                    <i className='bi bi-check'></i>
                  </span>
                ) : (
                  showRightIcon && (
                    <span className='right-icon'>
                      <i className='bi bi-chevron-right'></i>
                    </span>
                  )
                )}
              </a>
              <a className='verfiy-btn mt-3' onClick={gstClick}>
                <span className='left-icon'>
                  <i className='bi bi-file-earmark'></i>
                </span>
                <span className='verify-btn-text'>
                  {gstDataPresent
                    ? localStorage.getItem('gstDocumentNumber')
                    : 'Gst Number'}
                </span>
                {gstDataPresent ? (
                  <span className='right-icon color-green'>
                    <i className='bi bi-check'></i>
                  </span>
                ) : (
                  showRightIcon && (
                    <span className='right-icon'>
                      <i className='bi bi-chevron-right'></i>
                    </span>
                  )
                )}
              </a>
              <div className='instruction mt-5'>
                <h4>
                  <span className='instruction-badge'>
                    <i className='bi bi-exclamation-circle'></i>
                  </span>
                  Instruction
                </h4>
                <ul>
                  <li>
                    The file must be submitted in the format JPG, JPEG, or PDF
                    and the file size is limited to 5 MB.
                  </li>
                  <li>
                    Take a Picture or Upload the files of the required
                    documents.
                  </li>
                  <li>
                    Warning: Submitting fake or altered documents will result in
                    your account suspension.
                  </li>
                </ul>
              </div>
              <div className='justify-content-center align-items-center d-flex mt-5'>
                <button
                  onClick={companyClick}
                  type='submit'
                  className={`btn-primary profile-btn justify-content-center align-items-center d-flex ${
                    !localStorage.getItem('AlternativeNumber') ||
                    !localStorage.getItem('gstDocumentNumber')
                      ? 'disabled'
                      : ''
                  }`}
                  disabled={
                    !localStorage.getItem('AlternativeNumber') ||
                    !localStorage.getItem('gstDocumentNumber')
                  }
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
