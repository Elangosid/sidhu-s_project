import React, { useState } from 'react';
import './registration.css';
import { useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';

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

const Registration = () => {
  const [selectedOption, setSelectedOption] = useState('Individual');
  const [selectedCompanyType, setSelectedCompanyType] = useState(
    'Select Company Type'
  );
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [registrationNumberError, setRegistrationNumberError] = useState('');
  const [fileError, setFileError] = useState('');
  const [selectError, setSelectError] = useState('');
  const [formData, setFormData] = useState({});

  const clearErrors = () => {
    setRegistrationNumberError('');
    setFileError('');
    setSelectError('');
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    clearErrors();
  };

  const handleCompanyTypeChange = (event) => {
    setSelectedCompanyType(event.target.value);
    clearErrors();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const allowedTypes = ['image/jpeg', 'image/jpg', 'application/pdf'];
    const maxSize = 5 * 1024 * 1024; // 5 MB

    if (file) {
      if (!allowedTypes.includes(file.type)) {
        setFileError('Please select a file of type JPG, JPEG, or PDF.');
        return;
      }

      if (file.size > maxSize) {
        setFileError('File size exceeds 5 MB.');
        return;
      }

      const ResimageUrl = URL.createObjectURL(file);
      setImageUrl(ResimageUrl);
      setFormData({ ...formData, Image: file });
      setFileError('');
    } else {
      setFileError('Please select a file.');
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const documentNo = document.getElementById('documentNo').value;

    if (!documentNo) {
      setRegistrationNumberError('Please enter a registration number.');
      return;
    }

    if (!formData.Image) {
      setFileError('Please select a file.');
      return;
    } else {
      setFileError('');
    }

    const ResdocumentNum = documentNo;
    localStorage.setItem('PartnerRegdocumentNum', ResdocumentNum);

    let typeValue;
    if (selectedOption === 'Individual') {
      typeValue = '1';
      localStorage.setItem('PartnercompanyType', selectedOption);
    } else if (selectedOption === 'SoleProprietorship') {
      typeValue = '2';
      localStorage.setItem('PartnercompanyType', selectedOption);
    } else if (selectedOption === 'Company') {
      if (selectedCompanyType === 'Select Company Type') {
        setSelectError('Please select a company type.');
        return;
      }
      typeValue = '3';
      localStorage.setItem('PartnercompanyType', selectedCompanyType);
    }

    localStorage.setItem('PartnerRegistrationType', typeValue);

    const storageRef = ref(storage, `images/${formData.Type}-${Date.now()}`);
    const uploadTask = uploadBytesResumable(storageRef, formData.Image);
    setUploading(true);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
        setUploadProgress(progress);
      },
      (error) => {
        console.error(error);
        setUploading(false);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          localStorage.setItem('PartnerRegImageUrl', downloadURL);
          Navigate('/partner-kyc');
          setUploading(false);
        });
      }
    );
  };

  const Navigate = useNavigate();

  return (
    <div className='gst-background'>
      <div className='container container-profile'>
        <div className='row profile-row'>
          <div className='profile-box'>
            <h2 className='profile-head mb-3'>Registration Certificate</h2>
            <p>
              Please select the type of Registration Certification and by
              Submitting relevant documents ensure that QuickFlo has verified
              you identity.
            </p>
            <form className='form-main'>
              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='exampleRadios'
                  id='exampleRadios1'
                  value='Individual'
                  checked={selectedOption === 'Individual'}
                  onChange={handleOptionChange}
                />
                <label className='form-check-label' htmlFor='exampleRadios1'>
                  Individual
                </label>
              </div>
              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='exampleRadios'
                  id='exampleRadios2'
                  value='SoleProprietorship'
                  checked={selectedOption === 'SoleProprietorship'}
                  onChange={handleOptionChange}
                />
                <label className='form-check-label' htmlFor='exampleRadios2'>
                  Sole Proprietorship
                </label>
              </div>
              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='exampleRadios'
                  id='exampleRadios3'
                  value='Company'
                  checked={selectedOption === 'Company'}
                  onChange={handleOptionChange}
                />
                <label className='form-check-label' htmlFor='exampleRadios3'>
                  Company
                </label>
              </div>
              <div className='input-group mt-3 mb-2'>
                <div className='input-group-prepend'>
                  <span
                    className='input-group-text profile-badge'
                    id='basic-addon1'
                  >
                    <i className='bi bi-file-earmark-text'></i>
                  </span>
                </div>
                <input
                  type='text'
                  className='form-control profile-input'
                  id='documentNo'
                  placeholder='Document No'
                  aria-label='Document No'
                  aria-describedby='basic-addon1'
                />
              </div>
              {registrationNumberError && (
                <div className='text-danger mb-3'>
                  {registrationNumberError}
                </div>
              )}
              {selectedOption === 'Company' && (
                <div className='form-group'>
                  <span className='form-badge'>
                    <i className='bi bi-file-earmark-text'></i>
                  </span>
                  <select
                    className='form-control'
                    id='exampleFormControlSelect1'
                    defaultValue='Select Company Type'
                    onChange={handleCompanyTypeChange}
                  >
                    <option>Select Company Type</option>
                    <option>Private Limited Company</option>
                    <option>Public Company</option>
                    <option>Associate Company</option>
                  </select>
                </div>
              )}
              {selectError && (
                <div className='text-danger mt-2'>{selectError}</div>
              )}

              <div className='input-group mt-3 mb-3'>
                <div className='input-group-prepend'>
                  <span
                    className='input-group-text profile-badge'
                    id='basic-addon1'
                  >
                    <i className='bi bi-file-earmark-text'></i>
                  </span>
                </div>
                <input
                  type='file'
                  className='form-control profile-input'
                  id='imageInput'
                  onChange={handleImageChange}
                />
              </div>
              {fileError && <div className='text-danger mt-2'>{fileError}</div>}
              {uploading && (
                <div>
                  <div className='progress mt-3 mb-3 bg-success'>
                    <div
                      className='progress-bar'
                      role='progressbar'
                      style={{
                        width: `${uploadProgress}%`,
                        backgroundColor: '#45BC1B',
                      }}
                      aria-valuenow={uploadProgress}
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                </div>
              )}

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
                    Warning: Submitting a fake or altered document will result
                    in your account suspension.
                  </li>
                </ul>
              </div>
              <div className='justify-content-center align-items-center d-flex mt-5'>
                <button
                  onClick={handleClick}
                  type='submit'
                  className='btn-primary profile-btn justify-content-center align-items-center d-flex'
                >
                  Upload Document
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
