import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import * as Realm from 'realm-web';
import './Otp.css';
function OTPInputField({ value, onChange, onComplete }) {
  return (
    <input
      type='number'
      pattern='[0-9]*'
      value={value}
      onChange={onChange}
      onInput={(e) => {
        if (e.target.value.length > 1) {
          e.target.value = e.target.value.slice(0, 1);
        }
      }}
      onKeyDown={(e) => {
        if (e.key === 'Backspace' && value === '') {
          e.preventDefault();
          onComplete(-1);
        }
      }}
    />
  );
}
function OTPForm() {
  const [otpValues, setOTPValues] = useState(['', '', '', '', '', '']);
  const [errorMessage, setErrorMessage] = useState('');
  const [partnerDetails, setPartnerDetails] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isPartnerCodeCorrect, setIsPartnerCodeCorrect] = useState(true);
  const Navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    const allFieldsFilled = otpValues.every((val) => val !== '');
    if (!allFieldsFilled) {
      setErrorMessage('Please fill in all OTP fields');
      setIsPartnerCodeCorrect(true);
    } else {
      setErrorMessage('');
      const PartnerCode = otpValues.join('');
      const app = new Realm.App({ id: 'application-1-zyzrj' });
      const credentials = Realm.Credentials.apiKey(
        'BERG2eukup53wsYFkqBJLzqTLRGLXgvBIu3Y9h307bmTt3pWU8ejBH96lHvB5igv'
      );
      try {
        await app.logIn(credentials);
        const user = app.currentUser;
        const mongodb = user.mongoClient('mongodb-atlas');
        const partnerCollection = mongodb.db('QUIKFLO').collection('Partner');
        const partnerDocument = await partnerCollection.findOne({
          PartnerCode: PartnerCode,
        });
        if (partnerDocument) {
          const partnerId = partnerDocument._id;
          console.log('Partner _id:', partnerId);
          localStorage.setItem('PartnercodeID', partnerDocument._id);
          setPartnerDetails({
            fullName: partnerDocument.FullName,
            mobileNumber: partnerDocument.MobileNo,
          });
          console.log(partnerDocument.FullName);
          console.log(partnerDocument.MobileNo);
          setIsPartnerCodeCorrect(true);
          openModal();
        } else {
          setIsPartnerCodeCorrect(false);
          setErrorMessage('Incorrect Partner Code');
        }
      } catch (error) {
        console.error('Failed to log in', error);
      }
    }
  };
  const handleInputChange = (index, event) => {
    const value = event.target.value;
    const newOTPValues = [...otpValues];
    newOTPValues[index] = value;
    setOTPValues(newOTPValues);
    if (value !== '') {
      const nextInput = event.target.nextElementSibling;
      if (nextInput) {
        nextInput.focus();
      }
    }
    setErrorMessage('');
  };
  const handleComplete = (index) => {
    const newOTPValues = [...otpValues];
    newOTPValues[index] = '';
    setOTPValues(newOTPValues);
    const prevInput = index > 0 ? index - 1 : 0;
    const prevInputElement = document.querySelector(
      `.otp-field > input:nth-child(${prevInput + 1})`
    );
    if (prevInputElement) {
      prevInputElement.focus();
    }
  };
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const closePopup = () => {
    setPartnerDetails(null);
    closeModal();
  };
  return (
    <div className='container-fluid d-block otp-container'>
      <div className='row vh-100 d-flex align-items-center justify-content-center'>
        <div className='col-12 col-md-6 col-lg-4' style={{ minWidth: '500px' }}>
          <div className='card '>
            <div className='card-body p-5 text-center'>
              <h4>Partner Code</h4>
              <p>Please enter the unique code of City Partner to continue</p>
              <form>
                <div className='otp-field mb-3'>
                  {otpValues.map((value, index) => (
                    <OTPInputField
                      key={index}
                      value={value}
                      onChange={(e) => handleInputChange(index, e)}
                      onComplete={() => handleComplete(index)}
                    />
                  ))}
                </div>
                <div className='mb-3'>
                  {errorMessage && (
                    <span
                      style={{ color: isPartnerCodeCorrect ? 'red' : 'red' }}
                    >
                      {errorMessage}
                    </span>
                  )}
                </div>
                <button className='btn-primary mb-3' onClick={handleClick}>
                  Continue
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {partnerDetails && (
        <Modal show={showModal} onHide={closeModal} centered>
          <Modal.Header closeButton style={{ backgroundColor: '#E5E5E5' }}>
            <Modal.Title>Warehouse Details</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: '#E5E5E5' }}>
            <p>
              Warehouse Name: {partnerDetails.fullName}
              <br />
              Mobile Number: {partnerDetails.mobileNumber}
            </p>
          </Modal.Body>
          <Modal.Footer style={{ backgroundColor: '#E5E5E5' }}>
            <Button
              variant='secondary'
              style={{ backgroundColor: '#fff', color: '#45BC1B' }}
              onClick={closePopup}
            >
              Cancel
            </Button>
            {/* Add the navigation logic here */}
            <Button
              variant='success'
              style={{ backgroundColor: '#45BC1B', color: '#fff' }}
              onClick={() => Navigate('/driver-profile')}
            >
              Continue
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}
export default OTPForm;
