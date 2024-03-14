import React, { useState } from 'react'
import './role.css'
import Illustration from '../../assets/BB-images/Illustration.jpg'
import brand from '../../assets/BB-images/Frame.png'
import { useNavigate } from 'react-router-dom'

const Role = () => {
  const [selectedRole, setSelectedRole] = useState(null)
  const [error, setError] = useState('')

  const Navigate = useNavigate()

  const handleRoleSelect = (role) => {
    setSelectedRole(role)
    setError('') // Clear error when a role is selected

    // Set the corresponding type in local storage
    if (role === 'service') {
      localStorage.setItem('userType', '1')
    } else if (role === 'brand') {
      localStorage.setItem('userType', '2')
    }
  }

  const handleBlur = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleClick = () => {
    if (selectedRole) {
      Navigate('/profile')
    } else {
      setError('Please select a role before continuing.')
    }
  }

  return (
    <section className='role-background'>
      <div className='container cantainer-role'>
        <div className='row role-parent'>
          <div className='role-box'>
            <h2 className='text-center text-white mb-3'>Identify Your Role</h2>
            <p>
              Select the option that best describes you: Are you a Manufacturer
              or a Retailer?
            </p>
            <div className='role-1'>
              <button
                className={`role-type ${
                  selectedRole === 'service' ? 'active' : ''
                }`}
                onClick={() => handleRoleSelect('service')}
                onBlur={handleBlur}
              >
                <div className='row'>
                  <div className='col-4'>
                    <img
                      className='illustration'
                      src={Illustration}
                      alt='barnd-owner'
                    />
                  </div>
                  <div className='col-8 service-head'>
                    <div className='service-text'>
                      <h4>I am Service Provider</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et
                      </p>
                    </div>
                  </div>
                </div>
                {selectedRole === 'service' && (
                  <span className='tick'>&#10003;</span>
                )}
              </button>
            </div>
            <div className='role-1'>
              <button
                className={`role-type ${
                  selectedRole === 'brand' ? 'active' : ''
                }`}
                onClick={() => handleRoleSelect('brand')}
                onBlur={handleBlur}
              >
                <div className='row'>
                  <div className='col-4'>
                    <img
                      className='illustration'
                      src={brand}
                      alt='barnd-owner'
                    />
                  </div>
                  <div className='col-8 service-head'>
                    <div className='service-text'>
                      <h4>I am Brand Owner</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et
                      </p>
                    </div>
                  </div>
                </div>
                {selectedRole === 'brand' && (
                  <span className='tick'>&#10003;</span>
                )}
              </button>
            </div>
            <span
              className='error-message d-flex justify-content-center mb-3'
              style={{ color: 'red', marginTop: '10px' }}
            >
              {error}
            </span>
            <div className='btn-parent'>
              <button className='continue' onClick={handleClick}>
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Role
