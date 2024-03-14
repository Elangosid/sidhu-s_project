import '../Navbar/Navbar.css'
import Logo from '../../assets/BB-images/Retailer/quickflo-white.png'
import LogoGreen from '../../assets/BB-images/Retailer/quikFlo-green.png'
import { Button, Offcanvas } from 'react-bootstrap'
import React, { useState } from 'react'
import DropDown from '../DropDown/DropDown'
import { useNavigate } from 'react-router-dom'

const RetailerHomePage = () => {
  const [show, setShow] = React.useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const Navigate = useNavigate()

  const HomeClick = () => {
    Navigate('/retailer-home')
  }
  const CategoryClick = () => {
    Navigate('/retailer-category')
  }
  const OrderClick = () => {
    Navigate('/retailer-myorder')
  }
  const ReOrderClick = () => {
    Navigate('/retailer-reorder')
  }
  const CartClick = () => {
    Navigate('/retailer-cart')
  }

  return (
    <div>
      <div
        className='superNav border-bottom py-2 bg-light sticky-top  '
        id='superNav '
      >
        <div class='container sticky-top'>
          <div class='row'>
            <div class='col-lg-6 col-md-6 col-sm-12 col-xs-12 centerOnMobile'>
              <select class='me-3 border-0 bg-light'>
                <option value='en-us'>EN-US</option>
              </select>
              <span class='d-none d-lg-inline-block d-md-inline-block d-sm-inline-block d-xs-none me-3'>
                <strong>info@somedomain.com</strong>
              </span>
              <span class='me-3'>
                <i class='bi bi-telephone-fill'></i>{' '}
                <strong>1-800-123-1234</strong>
              </span>
            </div>
            <div class='col-lg-6 col-md-6 col-sm-12 col-xs-12 d-none d-lg-block d-md-block-d-sm-block d-xs-none text-end'>
              <span class='me-3'>
                <i class='bi bi-truck ' style={{ fontSize: '15px' }}></i>
                <a
                  class='text-muted ms-1'
                  href='#/'
                  style={{ textDecoration: 'none' }}
                >
                  Shipping
                </a>
              </span>
              <span class='me-3'>
                <i class='bi bi-card-text'></i>
                <a
                  class='text-muted ms-1'
                  href='#/'
                  style={{ textDecoration: 'none' }}
                >
                  Policy
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <nav
        className={`navbar navbar-expand-lg sticky-top navbar-light p-3 shadow-sm`}
        id='Navbar-background'
      >
        <div class='container-fluid navbar-maxwidth'>
          <button
            className='text-white fs-4 me-5  btn-nav'
            variant=''
            onClick={handleShow}
          >
            <i class='bi bi-list'></i>
          </button>

          <Offcanvas show={show} onHide={handleClose} placement='start'>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <img src={LogoGreen} alt='...' style={{ width: '150px' }} />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <DropDown />
            </Offcanvas.Body>
          </Offcanvas>

          <a class='navbar-brand' href='#/'>
            <img src={Logo} alt='' srcset='' width={150} />
          </a>

          <button
            class='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavDropdown'
            aria-controls='navbarNavDropdown'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon'></span>
          </button>
          <div class='mx-auto my-3 d-lg-none d-sm-block d-xs-block'>
            <div class='input-group'>
              <input
                type='text'
                class='form-control '
                style={{ color: '#7a7a7a' }}
                placeholder='search'
              />
              {/* <button class='btn btn-dark  text-white'>Search</button> */}
            </div>
          </div>
          <div class=' collapse navbar-collapse' id='navbarNavDropdown'>
            <ul class='navbar-nav ms-auto '>
              <li class='nav-item'>
                <a
                  class='nav-link mx-2 text-uppercase text-white'
                  aria-current='page'
                  href='#/'
                  onClick={HomeClick}
                >
                  <i class='bi bi-house-fill me-1'></i>
                  Home
                </a>
              </li>
              <li class='nav-item'>
                <a
                  class='nav-link mx-2 text-uppercase text-white'
                  href='#/'
                  onClick={CategoryClick}
                >
                  <i class='bi bi-box-seam-fill me-1'></i>
                  Category
                </a>
              </li>
              <li class='nav-item'>
                <a
                  class='nav-link mx-2 text-uppercase text-white'
                  href='#/'
                  onClick={OrderClick}
                >
                  <i class='bi bi-basket2 me-1'></i>
                  Order
                </a>
              </li>
              <li class='nav-item'>
                <a
                  class='nav-link mx-2 text-uppercase text-white'
                  href='#/'
                  onClick={ReOrderClick}
                >
                  <i class='bi bi-arrow-repeat me-1'></i>
                  Reorder
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link mx-2 text-uppercase text-white' href='#/'>
                  <i class='bi bi-graph-up me-1'></i>
                  Analytics
                </a>
              </li>
            </ul>
            <div class='ms-auto  d-none d-lg-block'>
              <div class='input-group'>
                <input
                  style={{ outline: 'none' }}
                  type='text'
                  class='search-bar'
                  placeholder='Search Products..'
                  aria-label='Search'
                />

                <button id='search-bar-btn' class='btn-primary text-white'>
                  Search
                </button>
              </div>
            </div>
            <ul class='navbar-nav ms-auto '>
              <li class='nav-item'>
                <a
                  class='cart-icon nav-link mt-1 text-uppercase text-white'
                  href='#/'
                  onClick={CartClick}
                >
                  <span className='badge-cart text-center'>0</span>
                  <i class='bi bi-cart-fill  fs-4'></i>
                </a>
              </li>
              <li class='nav-item'>
                <a
                  class='nav-link mx-2 text-uppercase text-white'
                  href='#/'
                  id='cart-icon'
                >
                  {' '}
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link mx-2 text-uppercase text-white' href='#/'>
                  <i class='bi bi-person-circle fs-3'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default RetailerHomePage
