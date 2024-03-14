import React, { useEffect, useState } from 'react'
import Navbar from './Navbar/Navbar'
import ProductImg from '../retailerHome/Assets/biscuits.png'
import ProductImg2 from './Assets/Rice.png'
import ProductImg3 from './Assets/Oil.png'
import './SingleProduct.css'
import Footer from './Footer/Footer'

const SingleProduct = () => {
  const [activeSlide, setactiveSlide] = useState(0)

  const changeSlide = (index) => {
    setactiveSlide(index)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={{ height: '100vh' }}>
      <Navbar />
      <section className='container mb-3'>
        <div className='Header'>
          <h2 className='mt-2'>Product Details</h2>
        </div>
        <div className='row'>
          <div className='col-sm-12 col-md-12 col-lg-5 col-xs-12'>
            <div
              id='carouselExampleControls'
              className='carousel slide'
              data-interval='false'
            >
              <div className='carousel-inner border border-success rounded'>
                <div
                  className={`carousel-item ${
                    activeSlide === 0 ? 'active' : ''
                  }`}
                >
                  <img
                    className='product-image d-block w-100'
                    src={ProductImg}
                    alt='First slide'
                  />
                </div>
                <div
                  className={`carousel-item ${
                    activeSlide === 1 ? 'active' : ''
                  }`}
                >
                  <img
                    className='product-image d-block w-100'
                    src={ProductImg2}
                    alt='Second slide'
                  />
                </div>
                <div
                  className={`carousel-item ${
                    activeSlide === 2 ? 'active' : ''
                  }`}
                >
                  <img
                    className='product-image d-block w-100'
                    src={ProductImg3}
                    alt='Third slide'
                  />
                </div>
              </div>

              <a
                className='carousel-control-prev'
                href='#carouselExampleControls'
                role='button'
                data-slide='prev'
                onClick={() => changeSlide((activeSlide + 2) % 3)}
              >
                <span
                  className='carousel-control-prev-icon'
                  aria-hidden='true'
                ></span>
                <span className='sr-only'>Previous</span>
              </a>
              <a
                className='carousel-control-next'
                href='#carouselExampleControls'
                role='button'
                data-slide='next'
                onClick={() => changeSlide((activeSlide + 1) % 3)}
              >
                <span
                  className='carousel-control-next-icon'
                  aria-hidden='true'
                ></span>
                <span className='sr-only'>Next</span>
              </a>
            </div>

            {/* Add three buttons at the bottom */}
            <div className='carousel-buttons text-center mt-3 '>
              <button
                className={`carousel-button rounded border-1 ${
                  activeSlide === 0 ? 'active' : ''
                }`}
                onClick={() => changeSlide(0)}
              >
                <img src={ProductImg} width={100} alt='' srcset='' />
              </button>
              <button
                className={`carousel-button  rounded border-1 ${
                  activeSlide === 1 ? 'active' : ''
                }`}
                onClick={() => changeSlide(1)}
              >
                <img src={ProductImg2} width={100} alt='' srcset='' />
              </button>
              <button
                className={`carousel-button  rounded border-1 ${
                  activeSlide === 2 ? 'active' : ''
                }`}
                onClick={() => changeSlide(2)}
              >
                <img src={ProductImg3} width={100} alt='' srcset='' />
              </button>
            </div>
          </div>
          <div className='col'>
            <h2>Delicious Lay’s Potato Chips, Classic, 8 oz Bag</h2>
            <div className='d-flex  align-items-center mt-2'>
              <div class='ratings'>
                <i class='fa fa-star rating-color'></i>
                <i class='fa fa-star rating-color'></i>
                <i class='fa fa-star rating-color'></i>
                <i class='fa fa-star rating-color'></i>
                <i class='fa fa-star'></i>
              </div>
              <p style={{ margin: '0rem' }} class='review-count ms-3'>
                12 Reviews
              </p>
            </div>
            <div className='content-p mt-3'>
              <p>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas Vestibulum tortor quam,
                feugiat vitae, ultricies eget, tempor.
              </p>
            </div>
            <div className='list'>
              <ul>
                <li>Pellentesque habitant tristique senectus</li>
                <li>Turpis egestaVestibulum tortor quam</li>
                <li>Eugiat vitae ultricies eget tempor</li>
              </ul>
            </div>

            <div className='price-tag'>
              <span className=' fw-normal  fw-bold fs-3'>
                &#x20B9;140.00
                <span className='ms-3 text-decoration-line-through'>
                  &#x20B9;240.00
                </span>
              </span>
            </div>

            <div className='package-size mt-3 '>
              <h4>Pack Sizes</h4>
              <div className='row '>
                <div className='col-sm-1'>500G</div>
                <div className='col-sm-1'>&#x20B9;41.70</div>
                <div className='col-sm-2'>
                  <span
                    style={{
                      backgroundColor: '#FFFACA',
                      padding: '5px',
                      borderRadius: '3px',
                    }}
                  >
                    Margin 35.5
                  </span>
                </div>
                <div className='col-1'>
                  <div class='form-check'>
                    <div class='form-check'>
                      <input
                        class='form-check-input'
                        type='radio'
                        name='flexRadioDefault'
                        id='flexRadioDefault1'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr className='mt-2 w-50 hr-tag' />
              <div className='row'>
                <div className='col-sm-1'>250G</div>
                <div className='col-sm-1'>&#x20B9;21.70</div>
                <div className='col-sm-2'>
                  <span
                    style={{
                      backgroundColor: '#FFFACA',
                      padding: '5px',
                      borderRadius: '3px',
                    }}
                  >
                    Margin 48.3
                  </span>
                </div>
                <div className='col-sm-1'>
                  <div class='form-check'>
                    <div class='form-check'>
                      <input
                        class='form-check-input'
                        type='radio'
                        name='flexRadioDefault'
                        id='flexRadioDefault1'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr className='mt-2 w-50 hr-tag' />
              <div className='row'>
                <div className='col-sm-1'>150G</div>
                <div className='col-sm-1'>&#x20B9;10.50</div>
                <div className='col-sm-2'>
                  <span
                    style={{
                      backgroundColor: '#FFFACA',
                      padding: '5px',
                      borderRadius: '3px',
                    }}
                  >
                    Margin 62.3
                  </span>
                </div>
                <div className='col-sm-1'>
                  <div class='form-check'>
                    <div class='form-check'>
                      <input
                        class='form-check-input'
                        type='radio'
                        name='flexRadioDefault'
                        id='flexRadioDefault1'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr className='mt-2 w-50 hr-tag' />
            </div>

            <div className='buttons mt-4'>
              <span>
                <button className='save-later-btn'>
                  <span>
                    <i class='bi bi-bookmark-fill me-2'></i>
                  </span>
                  Save for later
                </button>
              </span>
              <span>
                <button className='ms-1 add-cart-btn'>
                  <span>
                    <i class='bi bi-cart-fill me-2'></i>
                  </span>{' '}
                  Add to cart
                </button>
              </span>
            </div>

            <div className='product-description mt-4'>
              <div className='col-sm-10 col-lg-12   gap-2'>
                <p className=''>SKU:BG-0114</p>
                <p>Category:Vegtable</p>
                <p>MFG:25/01/2024</p>
              </div>
            </div>
          </div>
          <ul className='d-flex col-12 mt-2' style={{ listStyleType: 'none' }}>
            <li className=''>
              <button
                style={{
                  borderRadius: '10px',
                  backgroundColor: '#45BC1B',
                  border: 'solid #45BC1B',
                  color: 'white',
                  padding: '8px',
                }}
                className=''
              >
                Description
              </button>
            </li>
            <li className='col-lg-11 col-sm-11 '>
              <hr style={{ marginTop: '20px' }} />
            </li>
          </ul>
          <div className='content-section'>
            <div className='description'>
              <p>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibulum tortor quam,
                feugiat vitae, ultricies eget, tempor sit amet, ante. ibero sit
                amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
                placerat eleifend leo.ea commodo consat. Duis aute irure dolor
                in reprehenderit n volup tate velitesse cillum dolore euy elit
                ale ruin irure dolor.uis aute irure dolor in reprehenderit n
                volup tate velit esse cillum
              </p>
            </div>

            {/* <div className='review text-center'>
              <hr />
              <h2>Product Review</h2>

              <p>
                How excited are you for the new Avengers movie on a scale of 1-5
                stars?
              </p>
              <div class='rating d-flex justify-content-center align-item-center'>
                <input
                  className='rating'
                  type='radio'
                  name='test'
                  id='one'
                  checked
                />
                <label for='one'>
                  <i class='fa fa-star'></i>
                </label>
                <input type='radio' name='test' id='two' />
                <label for='two'>
                  <i class='fa fa-star'></i>
                </label>
                <input type='radio' name='test' id='three' />
                <label for='three'>
                  <i class='fa fa-star'></i>
                </label>
                <input type='radio' name='test' id='four' />
                <label for='four'>
                  <i class='fa fa-star'></i>
                </label>
                <input type='radio' name='test' id='five' />
                <label for='five'>
                  <i class='fa fa-star'></i>
                </label>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default SingleProduct
