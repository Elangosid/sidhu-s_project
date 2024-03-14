import React from 'react'
import Navbar from '../Navbar/Navbar'
import productOne from '../Assets/coldrink.png'
import Footer from '../Footer/Footer'
import { useNavigate } from 'react-router-dom'
const ReOrder = () => {
  const Navigate = useNavigate()

  const HandleClick = () => {
    Navigate('/retailer-order')
  }

  return (
    <div>
      <Navbar />
      <div className='container'>
        <h2 className='mt-3'>Re Order</h2>
        <div
          style={{ backgroundColor: '#FFFFFF' }}
          className='row border border-success mt-2'
        >
          <div className='col-lg-3 col-xs-12 col-sm-12  p-4'>
            <div className='col col-xs-12'>
              <div style={{ backgroundColor: '#FFFFFF' }} className=''>
                <div style={{ backgroundColor: '#E2E2E2' }} className=''>
                  <img
                    src={productOne}
                    alt='...'
                    className='product-img'
                    width={200}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='col-xs-12 col-lg-9 col-sm-12   p-3'>
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
            <div className='row '>
              <h5 className='ms-2'>
                Billing No:{' '}
                <span className='text-success'>#BAG432646127YT</span>
              </h5>
            </div>
            <div className='row p-2'>
              <p style={{ marginBottom: '0rem', color: '#B2B2B2' }}>Margin</p>
              <h5>-450</h5>
            </div>

            <div className='row p-2'>
              <button
                onClick={HandleClick}
                style={stylesbtn.btn}
                className='col-4 text-center'
              >
                <i class='bi bi-arrow-repeat me-2'></i>Reorder
              </button>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundColor: '#FFFFFF' }}
          className='row border border-success mt-2'
        >
          <div className='col-lg-3 col-xs-12 col-sm-12  p-4'>
            <div className='col col-xs-12'>
              <div style={{ backgroundColor: '#FFFFFF' }} className=''>
                <div style={{ backgroundColor: '#E2E2E2' }} className=''>
                  <img
                    src={productOne}
                    alt='...'
                    className='product-img'
                    width={200}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='col-xs-12 col-lg-9 col-sm-12   p-3'>
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
            <div className='row '>
              <h5 className='ms-2'>
                Billing No:{' '}
                <span className='text-success'>#BAG432646127YT</span>
              </h5>
            </div>
            <div className='row p-2'>
              <p style={{ marginBottom: '0rem', color: '#B2B2B2' }}>Margin</p>
              <h5>-450</h5>
            </div>

            <div className='row p-2'>
              <button style={stylesbtn.btn} className='col-4 text-center'>
                <i class='bi bi-arrow-repeat me-2'></i>Reorder
              </button>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundColor: '#FFFFFF' }}
          className='row border border-success mt-2 mb-2'
        >
          <div className='col-lg-3 col-xs-12 col-sm-12  p-4'>
            <div className='col col-xs-12'>
              <div style={{ backgroundColor: '#FFFFFF' }} className=''>
                <div style={{ backgroundColor: '#E2E2E2' }} className=''>
                  <img
                    src={productOne}
                    alt='...'
                    className='product-img'
                    width={200}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='col-xs-12 col-lg-9 col-sm-12   p-3'>
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
            <div className='row '>
              <h5 className='ms-2'>
                Billing No:{' '}
                <span className='text-success'>#BAG432646127YT</span>
              </h5>
            </div>
            <div className='row p-2'>
              <p style={{ marginBottom: '0rem', color: '#B2B2B2' }}>Margin</p>
              <h5>-450</h5>
            </div>

            <div className='row p-2'>
              <button style={stylesbtn.btn} className='col-4 text-center'>
                <i class='bi bi-arrow-repeat me-2'></i>Reorder
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ReOrder

const stylesbtn = {
  btn: {
    backgroundColor: '#45BC1B',
    border: 'solid #45BC1B',
    borderRadius: '10px',
    color: '#ffff',
    padding: '8px',
  },
}
