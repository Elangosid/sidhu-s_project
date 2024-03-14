import React, { useState } from 'react';
import './gst.css';
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

const Gst = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const Navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState(null);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const isValidGSTNumber = (gstNumber) => {
    // GST number format: 2 characters (state code) + 10 characters (GSTIN number)
    const gstRegex =
      /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[0-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;

    return gstRegex.test(gstNumber);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const documentNo = document.getElementById('documentNo').value;
    const fileInput = document.getElementById('imageInput');

    // Reset previous errors
    setErrors({});

    // Validate document number
    if (!documentNo.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        documentNo: 'Document number is required',
      }));
      return;
    }

    // Validate GST number
    if (!isValidGSTNumber(documentNo)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        documentNo: 'Invalid GST number format',
      }));
      return;
    }

    // Validate file upload
    if (!fileInput.files[0]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        file: 'Please upload a file',
      }));
      return;
    }

    // Validate file type
    const fileType = fileInput.files[0].type;
    if (
      fileType !== 'image/jpeg' &&
      fileType !== 'image/jpg' &&
      fileType !== 'application/pdf'
    ) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        file: 'File must be in JPG, JPEG, or PDF format',
      }));
      return;
    }

    // Validate file size
    const fileSize = fileInput.files[0].size / 1024 / 1024; // in MB
    if (fileSize > 5) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        file: 'File size must be less than 5MB',
      }));
      return;
    }

    // Store the document number in local storage
    const GstDocumentNumber = documentNo;

    localStorage.setItem('GstManufactureNumber', GstDocumentNumber);
    console.log(GstDocumentNumber);

    const storageRef = ref(storage, `images/${formData.Type}-${Date.now()}`);
    const uploadTask = uploadBytesResumable(storageRef, formData.Image);

    setUploading(true);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
        setUploadProgress(progress); // Update the upload progress state
      },
      (error) => {
        // Handle unsuccessful uploads
        console.error(error);
        setUploading(false);
      },
      () => {
        // Handle successful uploads on complete
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          localStorage.setItem('GstManufactureUrl', downloadURL);
          Navigate('/kyc');
          setUploading(false);
        });
      }
    );
  };

  const ImageUrl = imageUrl;
  localStorage.setItem('GstUrl', ImageUrl);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);
    }
    if (e.target.files[0]) {
      setFormData({ ...formData, Image: e.target.files[0] });
    }
  };
  return (
    <div className='gst-background'>
      <div className='container container-profile'>
        <div className='row profile-row'>
          <div className='profile-box'>
            <h2 className='profile-head mb-3'>GST Details Update</h2>
            <p>
              Please select the type of GST Registration and by Submitting
              relevant documents ensure that QuickFlo has verified your
              identity.
            </p>
            <form className='form-main' onSubmit={handleClick}>
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
                  type='text'
                  id='documentNo'
                  className='form-control profile-input'
                  placeholder='Document No'
                  aria-label='Document No'
                  aria-describedby='basic-addon1'
                />
              </div>
              {errors.documentNo && (
                <div className='error-message text-danger mb-3'>
                  {errors.documentNo}
                </div>
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
                  className='form-control profile-input upload-file'
                  id='imageInput'
                  placeholder='UPLOAD FILE'
                  onChange={handleImageChange}
                />
              </div>
              {errors.file && (
                <div className='error-message text-danger mb-3'>
                  {errors.file}
                </div>
              )}
              {uploading && (
                <div>
                  <div className='progress mt-3 mb-3 bg-success'>
                    <div
                      className='progress-bar'
                      role='progressbar'
                      style={{
                        width: `${uploadProgress}%`,
                        backgroundColor: '#45bc1b',
                      }}
                      aria-valuenow={uploadProgress}
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                </div>
              )}
              <div className='instruction'>
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
                  type='submit'
                  className='btn-primary profile-btn justify-content-center align-items-center d-flex'
                >
                  {uploading ? 'Uploading...' : 'Upload Document'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gst;
