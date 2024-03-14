import React, { useState } from 'react'
import './role.css'
import Illustration from '../../assets/BB-images/Illustration.jpg'
import truck from '../../assets/BB-images/truck.png'
import { useNavigate } from 'react-router-dom'

const Role = () => {
  const [selectedRole, setSelectedRole] = useState(null)
  const Navigate = useNavigate()

  const handleClick = () => {
    if (selectedRole === 'service') {
      Navigate('/driver-login')
    } else if (selectedRole === 'brand') {
      Navigate('/partner-login')
    } else {
      // Handle case where no role is selected
      console.log('Please select a role')
    }
  }

  const handleRoleSelect = (role) => {
    setSelectedRole(role)
    if (role === 'service') {
      localStorage.setItem('PartnerType', '4')
    } else if (role === 'brand') {
      localStorage.setItem('PartnerType', '3')
    }
  }

  return (
    <section className='role-background'>
      <div className='container cantainer-role'>
        <div className='row role-parent'>
          <div className='role-box'>
            <h2 className='text-center text-white mb-3'>Identify Your Role</h2>
            <p className='text-dark'>
              Select the option that best describes you: Are you a Manufacturer
              or a Retailer?
            </p>
            <div className='role-1'>
              <button
                className={`role-type ${
                  selectedRole === 'service' ? 'active' : ''
                }`}
                onClick={() => handleRoleSelect('service')}
              >
                <div className='row'>
                  <div className='col-4'>
                    <img
                      className='illustration'
                      src={truck}
                      alt='barnd-owner'
                    />
                  </div>
                  <div className='col-8 service-head'>
                    <div className='service-text'>
                      <h4>I am Delivery Partner</h4>
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
                      <h4>I am Warehouse Partner</h4>
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
