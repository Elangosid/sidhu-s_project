import React from 'react'
import './fssai.css'
import { useNavigate } from 'react-router-dom'

const Fssai = () => {
  const Navigate = useNavigate()
  const handleClick = () => {
    Navigate('/driver-vechile')
  }
  return (
    <div className='gst-background'>
      <div className='container container-profile'>
        <div className='row profile-row'>
          <div className='profile-box'>
            <h2 className='profile-head mb-3'>Document Verification </h2>
            <p>Please upload the required documents for veifications.</p>
            <form className='form-main'>
              <div class='input-group mt-3 mb-5'>
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

              <div className='justify-content-center align-items-center d-flex mt-5'>
                <button
                  onClick={handleClick}
                  type='submit'
                  class=' btn-primary profile-btn justify-content-center align-items-center d-flex'
                >
                  Upload Image
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fssai
