// Banner.js
import React, { useState } from 'react'
import './Banner.css'
import BannerImg from '../../assets/BB-images/slider-01__76247.jpg'
import BannerImg1 from '../../assets/BB-images/slider-02__71477.jpg'

const Banner = () => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <section className='banner-section'>
      <div className='container-fluid banner-container'>
        <div className='row'>
          <div className='col-xs-12 col-sm-12 col-md-7 col-lg-7'>
            <div
              id='carouselExampleFade'
              className='carousel slide carousel-fade'
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className='carousel-inner carousel-all'>
                <div className='carousel-item active carousel-img'>
                  <img src={BannerImg} className='d-block w-100' alt='...' />
                  <div class='carousel-caption banner-first'>
                    <h5>First slide label</h5>
                    <p>Some representative placeholder</p>
                    <button>
                      Shop Now{' '}
                      {/* <i className='fa-solid fa-chevron-right right-arrow'></i> */}
                    </button>
                  </div>
                </div>
                <div className='carousel-item carousel-img'>
                  <img src={BannerImg1} className='d-block w-100' alt='...' />
                  <div class='carousel-caption banner-first'>
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder</p>
                    <button>
                      Shop Now{' '}
                      {/* <i className='fa-solid fa-chevron-right right-arrow'></i> */}
                    </button>
                  </div>
                </div>
                <div className='carousel-item carousel-img'>
                  <img src={BannerImg} className='d-block w-100' alt='...' />
                  <div class='carousel-caption banner-first'>
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder</p>
                    <button>
                      Shop Now{' '}
                      {/* <i className='fa-solid fa-chevron-right right-arrow'></i> */}
                    </button>
                  </div>
                </div>
                <div className='carousel-item carousel-img'>
                  <img src={BannerImg1} className='d-block w-100' alt='...' />
                  <div class='carousel-caption banner-first'>
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder</p>
                    <button>
                      Shop Now{' '}
                      {/* <i className='fa-solid fa-chevron-right right-arrow'></i> */}
                    </button>
                  </div>
                </div>
              </div>
              {isHovered && (
                <button
                  className='carousel-control-prev edit-prev'
                  type='button'
                  data-bs-target='#carouselExampleFade'
                  data-bs-slide='prev'
                >
                  <i className='fa-solid fa-chevron-left'></i>
                </button>
              )}
              {isHovered && (
                <button
                  className='carousel-control-next edit-right'
                  type='button'
                  style={{ backgroundColor: '#45bc1b' }}
                  data-bs-target='#carouselExampleFade'
                  data-bs-slide='next'
                >
                  <i className='fa-solid fa-chevron-right'></i>
                </button>
              )}
            </div>
          </div>
          <div className='col-xs-12 col-sm-12 col-md-5 col-lg-5'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='banner-second'>
                  <img src={BannerImg} alt='...' className='second-img' />
                  <div className='second-content'>
                    <h5>Up to 68 Margin</h5>
                    <p>Organic dry fruits</p>
                    <button>
                      Shop Now{' '}
                      {/* <i className='fa-solid fa-chevron-right right-arrow'></i> */}
                    </button>
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='banner-third'>
                  <img src={BannerImg} alt='...' className='third-img' />
                  <div className='third-content'>
                    <h5>Up to 68 Margin</h5>
                    <p>Organic dry fruits</p>
                    <button>
                      Shop Now{' '}
                      {/* <i className='fa-solid fa-chevron-right right-arrow'></i> */}
                    </button>
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='banner-third'>
                  <img src={BannerImg} alt='...' className='third-img' />
                  <div className='third-content'>
                    <h5>Up to 68 Margin</h5>
                    <p>Organic dry fruits</p>
                    <button>
                      Shop Now{' '}
                      {/* <i className='fa-solid fa-chevron-right right-arrow'></i> */}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
