import React, { useState } from 'react'

const SuperNav = () => {
  const [showSuperNav, setShowSuperNav] = useState(true)

  const handleCloseClick = () => {
    setShowSuperNav(false)
  }
  return (
    <div className=''>
      {showSuperNav && (
        <div
          style={{
            background: 'linear-gradient(to right, #45BC1B,#088E5D)',
          }}
          className='superNav border-bottom py-2 text-white container-fluid'
          id='superNavs'
        >
          <div className='container navbar-maxwidth'>
            <div style={{ fontSize: '15px' }} className='row'>
              <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 centerOnMobile'>
                <span className='d-none d-lg-inline-block d-md-inline-block d-sm-inline-block d-xs-none me-3 '>
                  <span>
                    <strong>Delivery in </strong>
                  </span>
                  <strong className='fs-5'>17hrs</strong>
                </span>
                <span className='me-3'>
                  <i className='bi bi-geo-alt-fill me-1 '></i>
                  <strong>Panvel, Navi Mumbai, Maharashtra, India</strong>
                </span>
              </div>
              <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 d-none d-lg-block d-md-block-d-sm-block d-xs-none text-end'>
                {/* <span className='me-3'>
                  <i className='bi bi-person-circle fs-4'></i>
                  <a
                    className='text-muted ms-1'
                    href='#/'
                    style={{ textDecoration: 'none' }}
                  >
                    User
                  </a>
                </span> */}
                <span className='me-3 '>
                  <a
                    className='text-white ms-1'
                    href='#/'
                    style={{ textDecoration: 'none' }}
                    onClick={handleCloseClick}
                  >
                    <i class='bi bi-x-square fs-4'></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SuperNav
