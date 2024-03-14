import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import ProductImg1 from '../Assets/Oil.png'
import { Card } from 'react-bootstrap'
import './MyOrderDetails.css'

const MyorderDetails = () => {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <div class='container py-5'>
          <h2>Order Details</h2>
          <div class='row border border p-3'>
            <div class='col-md-6 col-lg-6  '>
              <div id='tracking-pre'></div>
              <div id='tracking'>
                <div class='tracking-list'>
                  <div class='tracking-item'>
                    <div class='tracking-icon status-intransit'>
                      <svg
                        class='svg-inline--fa fa-circle fa-w-16'
                        aria-hidden='true'
                        data-prefix='fas'
                        data-icon='circle'
                        role='img'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 512 512'
                        data-fa-i2svg=''
                      >
                        <path
                          fill='currentColor'
                          d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z'
                        ></path>
                      </svg>
                    </div>
                    <div class='tracking-date'>
                      <img
                        src='https://raw.githubusercontent.com/shajo/portfolio/a02c5579c3ebe185bb1fc085909c582bf5fad802/delivery.svg'
                        class='img-responsive'
                        alt='order-placed'
                      />
                    </div>

                    <div class='tracking-content'>
                      Order Placed<span>09 Aug 2025, 10:00am</span>
                    </div>
                  </div>
                  <div class='tracking-item'>
                    <div class='tracking-icon status-intransit'>
                      <svg
                        class='svg-inline--fa fa-circle fa-w-16'
                        aria-hidden='true'
                        data-prefix='fas'
                        data-icon='circle'
                        role='img'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 512 512'
                        data-fa-i2svg=''
                      >
                        <path
                          fill='currentColor'
                          d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z'
                        ></path>
                      </svg>
                    </div>
                    <div class='tracking-date'>
                      <img
                        src='https://raw.githubusercontent.com/shajo/portfolio/a02c5579c3ebe185bb1fc085909c582bf5fad802/delivery.svg'
                        class='img-responsive'
                        alt='order-placed'
                      />
                    </div>

                    <div class='tracking-content'>
                      Order Confirmed<span>09 Aug 2025, 10:30am</span>
                    </div>
                  </div>
                  <div class='tracking-item'>
                    <div class='tracking-icon status-intransit'>
                      <svg
                        class='svg-inline--fa fa-circle fa-w-16'
                        aria-hidden='true'
                        data-prefix='fas'
                        data-icon='circle'
                        role='img'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 512 512'
                        data-fa-i2svg=''
                      >
                        <path
                          fill='currentColor'
                          d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z'
                        ></path>
                      </svg>
                    </div>
                    <div class='tracking-date'>
                      <img
                        src='https://raw.githubusercontent.com/shajo/portfolio/a02c5579c3ebe185bb1fc085909c582bf5fad802/delivery.svg'
                        class='img-responsive'
                        alt='order-placed'
                      />
                    </div>
                    <div class='tracking-content'>
                      Packed the product<span>09 Aug 2025, 12:00pm</span>
                    </div>
                  </div>
                  <div class='tracking-item'>
                    <div class='tracking-icon status-intransit'>
                      <svg
                        class='svg-inline--fa fa-circle fa-w-16'
                        aria-hidden='true'
                        data-prefix='fas'
                        data-icon='circle'
                        role='img'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 512 512'
                        data-fa-i2svg=''
                      >
                        <path
                          fill='currentColor'
                          d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z'
                        ></path>
                      </svg>
                    </div>
                    <div class='tracking-date'>
                      <img
                        src='https://raw.githubusercontent.com/shajo/portfolio/a02c5579c3ebe185bb1fc085909c582bf5fad802/delivery.svg'
                        class='img-responsive'
                        alt='order-placed'
                      />
                    </div>
                    <div class='tracking-content'>
                      Arrived in the warehouse
                      <span>10 Aug 2025, 02:00pm</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-3 mt-5'>
              <p className='text-center' style={{ margin: '0rem' }}>
                <i class='bi bi-geo-alt-fill me-2'></i>
                Delivering to SHOP1
                <span>21, Rajainager, Bangaluru</span>
                <br />
                <button className='text-danger border border p-2 pe-5 ps-5 mt-4'>
                  Change
                </button>
              </p>
              <img
                className='ms-5'
                src={ProductImg1}
                alt='img '
                srcset=''
                width={200}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MyorderDetails
