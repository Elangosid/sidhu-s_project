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
  const [panNumberError, setPanNumberError] = useState('');

  const ProfileID = localStorage.getItem('PartnerId');
  const existID = localStorage.getItem('partnerExistId');

  const [aadhaarDataPresent, setAadhaarDataPresent] = useState(false);
  const [alternativeNumberPresent, setAlternativeNumberPresent] =
    useState(false);
  const [gstPresent, setGstPresent] = useState(false);
  const [registrationPresent, setregistrationPresent] = useState(false);

  useEffect(() => {
    const VerifyNumber = localStorage.getItem('PartnerAlternativeMobileNumber');

    const AadhaarNumber = localStorage.getItem('PartnerAadhaarNumber');

    const GSTNo = localStorage.getItem('PartnerDocumentgstNo');

    const RegCertificateNo = localStorage.getItem('PartnerRegdocumentNum');

    if (!VerifyNumber || !GSTNo || !RegCertificateNo) {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }
  }, []);

  useEffect(() => {
    const alternativeNumber = localStorage.getItem(
      'PartnerAlternativeMobileNumber'
    );
    const aadhaarNumber = localStorage.getItem('PartnerAadhaarNumber');
    const aadhaarName = localStorage.getItem('ParnerAadhaarName');

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

  const handleFormSubmit = async (e) => {
    const VerifyNumber = localStorage.getItem('PartnerAlternativeMobileNumber');
    const AadhaarProfile = localStorage.getItem('PartnerAadhaarProfile');
    const AadhaarAddress = localStorage.getItem('PartnerAadhaarAddress');
    const AadhaarMobileHash = localStorage.getItem('PartnerAadhaarMobileHash');
    const AadhaarNumber = localStorage.getItem('PartnerAadhaarNumber');
    const AadhaarName = localStorage.getItem('ParnerAadhaarName');
    const GSTNo = localStorage.getItem('PartnerDocumentgstNo');
    const GSTDocument = localStorage.getItem('PartnerImageUrl');
    const RegCertificateNo = localStorage.getItem('PartnerRegdocumentNum');
    const RegCertificateType = localStorage.getItem('PartnerRegistrationType');
    const RegCompanyType = localStorage.getItem('PartnercompanyType');
    const RegDocument = localStorage.getItem('PartnerRegImageUrl');

    e.preventDefault();
    if (
      !formData.PanNumber ||
      !/^[A-Za-z]{5}\d{4}[A-Za-z]{1}$/.test(formData.PanNumber)
    ) {
      setPanNumberError('Please enter a valid PAN number.');
      return;
    }

    try {
      setLoading(true);
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
        .collection('Partner');

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
            },
          },
        }
      );

      setFormData({
        PanNumber: '',
      });
      localStorage.removeItem('PartnerAlternativeMobileNumber');
      localStorage.removeItem('PartnerAadhaarProfile');
      localStorage.removeItem('PartnerAadhaarAddress');
      localStorage.removeItem('PartnerAadhaarMobileHash');
      localStorage.removeItem('PartnerAadhaarNumber');
      localStorage.removeItem('ParnerAadhaarName');
      localStorage.removeItem('PartnerDocumentgstNo');
      localStorage.removeItem('PartnerImageUrl');
      localStorage.removeItem('PartnerRegdocumentNum');
      localStorage.removeItem('PartnerRegistrationType');
      localStorage.removeItem('PartnercompanyType');
      localStorage.removeItem('PartnerRegImageUrl');
      setLoading(false);
      Navigate('/partner-companydetails');
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  const handleClick = () => {
    Navigate('/partner-number');
  };

  const aadharClick = () => {
    Navigate('/partner-aadhar');
  };

  const gstClick = () => {
    Navigate('/partner-gst');
  };

  const certificateClick = () => {
    Navigate('/partner-register');
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
                    ? localStorage.getItem('PartnerAlternativeMobileNumber')
                    : 'Alternate Number'}
                </span>
                {localStorage.getItem('PartnerAlternativeMobileNumber') ? (
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
                    ? localStorage.getItem('PartnerAadhaarNumber')
                    : 'Aadhaar Number'}
                </span>
                {localStorage.getItem('PartnerAadhaarNumber') ? (
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
                  {gstPresent
                    ? localStorage.getItem('PartnerDocumentgstNo')
                    : 'Gst Details'}
                </span>
                {localStorage.getItem('PartnerDocumentgstNo') ? (
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
                    ? localStorage.getItem('PartnerRegdocumentNum')
                    : 'Registration Certificate'}
                </span>
                {localStorage.getItem('PartnerRegistrationType') ? (
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
