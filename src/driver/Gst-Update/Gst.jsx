import React from 'react';
import './gst.css';
import { useNavigate } from 'react-router-dom';

const Gst = () => {
  const Navigate = useNavigate();
  const handleClick = () => {
    Navigate('/driver-otp');
  };
  return (
    <div className='gst-background'>
      <div className='container container-profile'>
        <div className='row profile-row'>
          <div className='profile-box'>
            <h2 className='profile-head mb-3'>GST Details Update</h2>
            <p>
              Please select the type of GST Registration and by Submitting
              relevant documents ensure that QuickFlo has verified you identity.
            </p>
            <form className='form-main'>
              <div class='form-check'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='exampleRadios'
                  id='exampleRadios1'
                  value='option1'
                />
                <label class='form-check-label' for='exampleRadios1'>
                  Regular
                </label>
              </div>
              <div class='form-check'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='exampleRadios'
                  id='exampleRadios1'
                  value='option1'
                  checked
                />
                <label class='form-check-label' for='exampleRadios1'>
                  Composition
                </label>
              </div>
              <div class='form-check'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='exampleRadios'
                  id='exampleRadios1'
                  value='option1'
                />
                <label class='form-check-label' for='exampleRadios1'>
                  Casual
                </label>
              </div>
              <div class='input-group mt-3 mb-3'>
                <div class='input-group-prepend'>
                  <span
                    class='input-group-text profile-badge'
                    id='basic-addon1'
                  >
                    <i class='bi bi-file-earmark-text'></i>
                  </span>
                </div>
                <input
                  type='text'
                  class='form-control profile-input'
                  placeholder='Document No'
                  aria-label='Document No'
                  aria-describedby='basic-addon1'
                  disabled='false'
                />
              </div>
              <div class='input-group mt-3 mb-3'>
                <div class='input-group-prepend'>
                  <span
                    class='input-group-text profile-badge'
                    id='basic-addon1'
                  >
                    <i class='bi bi-file-earmark-text'></i>
                  </span>
                </div>
                <input type='file' class='form-control profile-input' />
              </div>

              <div className='instruction'>
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
                  onClick={handleClick}
                  type='submit'
                  class=' btn-primary profile-btn justify-content-center align-items-center d-flex'
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

export default Gst;
