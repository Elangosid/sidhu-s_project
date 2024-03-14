import React from 'react';
import Slider from 'react-slick';
import './TrendingBrands.css';
import productOne from '../../assets/BB-images/product_1.png';

const TrendingBrands = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false, // Remove arrows
    autoplay: true, // Remove autoplay
    autoplaySpeed: 2000,
  };
  return (
    <section className='slider-section'>
      <div className='container slider-container'>
        <Slider {...settings}>
          <div>
            <div className='slider-main'>
              <div className='row'>
                <div className='col-4 slider-img'>
                  <img
                    src={productOne}
                    alt=''
                    style={{ width: '120px', height: '120px' }}
                  />
                </div>
                <div className=' col-1 vertical-line'></div>
                <div className='col-7 slider-content'>
                  <div>
                    <h6>Big Range Off</h6>
                    <h5>Fresh Fruits</h5>
                    <p>
                      Up to 25% Off{' '}
                      <span>
                        <i className='fa-solid fa-chevron-right'></i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='slider-main'>
              <div className='row'>
                <div className='col-4 slider-img'>
                  <img
                    src={productOne}
                    alt=''
                    style={{ width: '120px', height: '120px' }}
                  />
                </div>
                <div className=' col-1 vertical-line'></div>
                <div className='col-7 slider-content'>
                  <div>
                    <h6>Big Range Off</h6>
                    <h5>Fresh Fruits</h5>
                    <p>
                      Up to 25% Off{' '}
                      <span>
                        <i className='fa-solid fa-chevron-right'></i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='slider-main'>
              <div className='row'>
                <div className='col-4 slider-img'>
                  <img
                    src={productOne}
                    alt=''
                    style={{ width: '120px', height: '120px' }}
                  />
                </div>
                <div className=' col-1 vertical-line'></div>
                <div className='col-7 slider-content'>
                  <div>
                    <h6>Big Range Off</h6>
                    <h5>Fresh Fruits</h5>
                    <p>
                      Up to 25% Off{' '}
                      <span>
                        <i className='fa-solid fa-chevron-right'></i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='slider-main'>
              <div className='row'>
                <div className='col-4 slider-img'>
                  <img
                    src={productOne}
                    alt=''
                    style={{ width: '120px', height: '120px' }}
                  />
                </div>
                <div className=' col-1 vertical-line'></div>
                <div className='col-7 slider-content'>
                  <div>
                    <h6>Big Range Off</h6>
                    <h5>Fresh Fruits</h5>
                    <p>
                      Up to 25% Off{' '}
                      <span>
                        <i className='fa-solid fa-chevron-right'></i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default TrendingBrands;
