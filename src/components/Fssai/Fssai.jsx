import React, { useState } from 'react';
import './fssai.css';
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

const Fssai = () => {
  const Navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState(null);
  const [formData, setFormData] = useState({});
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [fileError, setFileError] = useState(null);

  const handleClick = async (e) => {
    e.preventDefault();

    if (!formData.Image) {
      setFileError('Please select an image to upload.');
      return;
    }

    const allowedFormats = ['image/jpeg', 'image/jpg', 'application/pdf'];
    if (!allowedFormats.includes(formData.Image.type)) {
      setFileError('Please select a JPG, JPEG, or PDF file.');
      return;
    }

    if (formData.Image.size > 5 * 1024 * 1024) {
      setFileError('File size exceeds 5 MB limit.');
      return;
    }

    const storageRef = ref(storage, `images/${formData.Type}-${Date.now()}`);
    const uploadTask = uploadBytesResumable(storageRef, formData.Image);
    setUploading(true);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        console.error('Error uploading image:', error);
        setUploading(false);
      },
      async () => {
        const imageURL = await getDownloadURL(uploadTask.snapshot.ref);
        console.log(imageURL);
        localStorage.setItem('FssaiImageUrl', imageURL);

        setUploading(false);
        Navigate('/kyc');
      }
    );
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);
      setFileError(null); // Reset file error message
    }
    setFormData({ ...formData, Image: file });
  };

  return (
    <div className='gst-background'>
      <div className='container container-profile'>
        <div className='row profile-row'>
          <div className='profile-box'>
            <h2 className='profile-head mb-3'>FSSAI Certificate</h2>
            <p>Please upload the required documents for verifications.</p>
            <form className='form-main' onSubmit={handleClick}>
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
                  type='file'
                  id='imageInput'
                  className='form-control profile-input'
                  onChange={handleImageChange}
                />
              </div>
              {fileError && <div className='text-danger mb-3'>{fileError}</div>}
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
              <div className='justify-content-center align-items-center d-flex mt-5'>
                <button
                  type='submit'
                  className='btn-primary profile-btn justify-content-center align-items-center d-flex'
                >
                  {uploading ? 'Uploading...' : 'Upload Image'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fssai;
