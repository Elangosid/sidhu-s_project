import React from 'react'
import Navbar from '../Navbar/Navbar'
import productOne from '../Assets/coldrink.png'
import './MyOrder.css'
import Footer from '../Footer/Footer'
import { useNavigate } from 'react-router-dom'
const MyOrder = () => {
  const Navigate = useNavigate()

  const handleClick = () => {
    Navigate('/retailer-order')
  }

  return (
    <div>
      <Navbar />
      <div className='container col-sm-12 col-xs-12 col-lg-12  mt-3'>
        <h2>My Orders</h2>
        <div
          style={{ backgroundColor: '#FFFFFF' }}
          className='row border border-success'
        >
          <div className='col-lg-3 col-xs-12 col-sm-12  p-4'>
            <div className='col col-xs-12'>
              <div
                style={{ backgroundColor: '#FFFFFF' }}
                className='products-grid'
              >
                <div
                  style={{ backgroundColor: '#E2E2E2' }}
                  className='single-products'
                >
                  <img src={productOne} alt='...' className='product-img' />
                </div>
                <div
                  style={{ backgroundColor: '#E2E2E2' }}
                  className='single-products'
                >
                  <img src={productOne} alt='...' className='product-img' />
                </div>
                <div
                  style={{ backgroundColor: '#E2E2E2' }}
                  className='single-products'
                >
                  <img src={productOne} alt='...' className='product-img' />
                </div>
                <div
                  style={{ backgroundColor: '#E2E2E2' }}
                  className='single-products more'
                >
                  <p className='more-products'>+25</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-xs-12 col-lg-9 col-sm-12   p-5'>
            <div className='row '>
              <h5>
                Billing No:{' '}
                <span className='text-success'>#BAG432646127YT</span>
              </h5>
            </div>
            <div className='row p-2'>
              <span className='dispatch-badge  text-center p-1'>Dispatch</span>
            </div>
            <div className='row p-2'>
              <div className=' col-lg-2 col-xs-12 col-sm-12'>
                <h5>
                  Items : <span className='text-success'>25</span>
                </h5>
              </div>
              <div className='col-lg-2 col-xs-12 col-sm-12'>
                <h5>
                  {' '}
                  Price :<span className='text-success'>₹1322</span>
                </h5>
              </div>
            </div>
            <div className='row p-2'>
              <p style={{ color: '#979797' }}>
                Jan 12, 2018 | <span>4:00 PM</span>
              </p>
            </div>
            <button className='btn btn-success' onClick={handleClick}>
              Order Details
            </button>
          </div>
        </div>

        <div
          style={{ backgroundColor: '#FFFFFF' }}
          className='row border border-success mt-2 mb-2'
        >
          <div className='col-lg-3 col-xs-12 col-sm-12  p-4'>
            <div className='col col-xs-12'>
              <div
                style={{ backgroundColor: '#FFFFFF' }}
                className='products-grid'
              >
                <div
                  style={{ backgroundColor: '#E2E2E2' }}
                  className='single-products'
                >
                  <img src={productOne} alt='...' className='product-img' />
                </div>
                <div
                  style={{ backgroundColor: '#E2E2E2' }}
                  className='single-products'
                >
                  <img src={productOne} alt='...' className='product-img' />
                </div>
                <div
                  style={{ backgroundColor: '#E2E2E2' }}
                  className='single-products'
                >
                  <img src={productOne} alt='...' className='product-img' />
                </div>
                <div
                  style={{ backgroundColor: '#E2E2E2' }}
                  className='single-products more'
                >
                  <p className='more-products'>+25</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-xs-12 col-lg-9 col-sm-12   p-5'>
            <div className='row '>
              <h5>
                Billing No:{' '}
                <span className='text-success'>#BAG432646127YT</span>
              </h5>
            </div>
            <div className='row p-2'>
              <span className='dispatch-badge  text-center p-1'>Dispatch</span>
            </div>
            <div className='row p-2'>
              <div className='col-lg-2 col-xs-12 col-sm-12 col-md-12'>
                <h5>
                  Items : <span className='text-success'>25</span>
                </h5>
              </div>
              <div className='col-lg-2 col-xs-12 col-sm-12 col-md-12'>
                <h5>
                  {' '}
                  Price :<span className='text-success'>₹1322</span>
                </h5>
              </div>
            </div>
            <div className='row p-2'>
              <p style={{ color: '#979797' }}>
                Jan 12, 2018 | <span>4:00 PM</span>
              </p>
            </div>
            <button className='btn btn-success' onClick={handleClick}>
              Order Details
            </button>
          </div>
        </div>
        <div
          style={{ backgroundColor: '#FFFFFF' }}
          className='row border border-success mb-2'
        >
          <div className='col-lg-3 col-xs-12 col-sm-12  p-4'>
            <div className='col col-xs-12'>
              <div
                style={{ backgroundColor: '#FFFFFF' }}
                className='products-grid'
              >
                <div
                  style={{ backgroundColor: '#E2E2E2' }}
                  className='single-products'
                >
                  <img src={productOne} alt='...' className='product-img' />
                </div>
                <div
                  style={{ backgroundColor: '#E2E2E2' }}
                  className='single-products'
                >
                  <img src={productOne} alt='...' className='product-img' />
                </div>
                <div
                  style={{ backgroundColor: '#E2E2E2' }}
                  className='single-products'
                >
                  <img src={productOne} alt='...' className='product-img' />
                </div>
                <div
                  style={{ backgroundColor: '#E2E2E2' }}
                  className='single-products more'
                >
                  <p className='more-products'>+25</p>
                </div>
              </div>
            </div>
          </div>
          <div className=' col-xs-12 col-lg-9 col-sm-12   p-5'>
            <div className='row '>
              <h5>
                Billing No:{' '}
                <span className='text-success'>#BAG432646127YT</span>
              </h5>
            </div>
            <div className='row p-2'>
              <span className='dispatch-badge  text-center p-1'>Dispatch</span>
            </div>
            <div className='row p-2'>
              <div className='col-lg-2 col-xs-12 col-sm-12 col-md-12 '>
                <h5>
                  Items : <span className='text-success'>25</span>
                </h5>
              </div>
              <div className='col-lg-2 col-xs-12 col-sm-12 col-md-12'>
                <h5>
                  {' '}
                  Price :<span className='text-success'>₹1322</span>
                </h5>
              </div>
            </div>
            <div className='row p-2'>
              <p style={{ color: '#979797' }}>
                Jan 12, 2018 | <span>4:00 PM</span>
              </p>
            </div>
            <button className='btn btn-success' onClick={handleClick}>
              Order Details
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MyOrder
