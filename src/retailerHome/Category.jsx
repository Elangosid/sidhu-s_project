import React, { useEffect } from 'react'
import Navbar from './Navbar/Navbar'
import Slider from 'react-slick'
import './Category.css'

import Product2 from './Assets/biscuits.png'
import Product3 from './Assets/chocolate.png'
import Footer from './Footer/Footer'
import { useNavigate } from 'react-router-dom'

const Category = () => {
  const Navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const HandleClick = () => {
    Navigate('/retailer-subcategory')
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          arrows: false, // Show arrows on screens wider than 1024px
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false, // Hide arrows on screens between 768px and 1023px
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          arrows: false, // Hide arrows on screens narrower than 768px
        },
      },
    ],
  }

  return (
    <div className='' style={{ height: '100vh' }}>
      <Navbar />
      <div className='text-center mt-4'>
        <h2>Product Category Oil</h2>
        <p>
          When an unknown printer took a galley of type and scrambled make
          specimen book It has survived five centuries.
        </p>
      </div>
      <div className='container-fluid sliders-container mt-4'>
        <Slider {...settings}>
          <div className='sliders-main' onClick={HandleClick}>
            <div className='col-12  sliders-img '>
              <div className='row w-100 slider-img-css d-flex justify-content-center align-items-center'>
                <img src={Product3} alt='Product 5' />
              </div>
              <div className='text-center mt-3'>
                <h6>Drinks & Juice</h6>
                <p>6 Products</p>
              </div>
            </div>
          </div>
          <div className='sliders-main'>
            <div className='col-12  sliders-img '>
              <div className='row w-100 slider-img-css d-flex justify-content-center align-items-center'>
                <img src={Product3} alt='Product 5' width={100} />
              </div>
              <div className='text-center mt-3'>
                <h6>Drinks & Juice</h6>
                <p>6 Products</p>
              </div>
            </div>
          </div>
          <div>
            <div className='sliders-main' style={{ margin: '0rem' }}>
              <div className='col-12  sliders-img '>
                <div className='row w-100 slider-img-css d-flex justify-content-center align-items-center'>
                  <img src={Product2} alt='Product 5' width={100} />
                </div>
                <div className='text-center mt-3'>
                  <h6>Drinks & Juice</h6>
                  <p>6 Products</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='sliders-main' style={{ margin: '0rem' }}>
              <div className='col-12  sliders-img '>
                <div className='row w-100 slider-img-css d-flex justify-content-center align-items-center'>
                  <img src={Product2} alt='Product 5' width={100} />
                </div>
                <div className='text-center mt-3'>
                  <h6>Drinks & Juice</h6>
                  <p>6 Products</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='sliders-main' style={{ margin: '0rem' }}>
              <div className='col-12  sliders-img '>
                <div className='row w-100 slider-img-css d-flex justify-content-center align-items-center'>
                  <img src={Product3} alt='Product 5' width={100} />
                </div>
                <div className='text-center mt-3'>
                  <h6>Drinks & Juice</h6>
                  <p>6 Products</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='sliders-main' style={{ margin: '0rem' }}>
              <div className='col-12  sliders-img '>
                <div className='row w-100 slider-img-css d-flex justify-content-center align-items-center'>
                  <img src={Product2} alt='Product 5' width={150} />
                </div>
                <div className='text-center mt-3'>
                  <h6>Drinks & Juice</h6>
                  <p>6 Products</p>
                </div>
              </div>
            </div>
          </div>
          {/* Add more similar divs for additional products */}
        </Slider>
      </div>
      <div className='text-center mt-4'>
        <h2>Product Category Grocery</h2>
        <p>
          When an unknown printer took a galley of type and scrambled make
          specimen book It has survived five centuries.
        </p>
      </div>
      <div className='container-fluid sliders-container mt-4'>
        <Slider {...settings}>
          <div className='sliders-main' onClick={HandleClick}>
            <div className='col-12  sliders-img '>
              <div className='row w-100 slider-img-css d-flex justify-content-center align-items-center'>
                <img src={Product3} alt='Product 5' />
              </div>
              <div className='text-center mt-3'>
                <h6>Drinks & Juice</h6>
                <p>6 Products</p>
              </div>
            </div>
          </div>
          <div className='sliders-main'>
            <div className='col-12  sliders-img '>
              <div className='row w-100 slider-img-css d-flex justify-content-center align-items-center'>
                <img src={Product3} alt='Product 5' width={100} />
              </div>
              <div className='text-center mt-3'>
                <h6>Drinks & Juice</h6>
                <p>6 Products</p>
              </div>
            </div>
          </div>
          <div>
            <div className='sliders-main' style={{ margin: '0rem' }}>
              <div className='col-12  sliders-img '>
                <div className='row w-100 slider-img-css d-flex justify-content-center align-items-center'>
                  <img src={Product2} alt='Product 5' width={100} />
                </div>
                <div className='text-center mt-3'>
                  <h6>Drinks & Juice</h6>
                  <p>6 Products</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='sliders-main' style={{ margin: '0rem' }}>
              <div className='col-12  sliders-img '>
                <div className='row w-100 slider-img-css d-flex justify-content-center align-items-center'>
                  <img src={Product2} alt='Product 5' width={100} />
                </div>
                <div className='text-center mt-3'>
                  <h6>Drinks & Juice</h6>
                  <p>6 Products</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='sliders-main' style={{ margin: '0rem' }}>
              <div className='col-12  sliders-img '>
                <div className='row w-100 slider-img-css d-flex justify-content-center align-items-center'>
                  <img src={Product3} alt='Product 5' width={100} />
                </div>
                <div className='text-center mt-3'>
                  <h6>Drinks & Juice</h6>
                  <p>6 Products</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='sliders-main' style={{ margin: '0rem' }}>
              <div className='col-12  sliders-img '>
                <div className='row w-100 slider-img-css d-flex justify-content-center align-items-center'>
                  <img src={Product2} alt='Product 5' width={150} />
                </div>
                <div className='text-center mt-3'>
                  <h6>Drinks & Juice</h6>
                  <p>6 Products</p>
                </div>
              </div>
            </div>
          </div>
          {/* Add more similar divs for additional products */}
        </Slider>
      </div>
      <div className='text-center mt-4'>
        <h2>Product Category Snacks & Drinks</h2>
        <p>
          When an unknown printer took a galley of type and scrambled make
          specimen book It has survived five centuries.
        </p>
      </div>
      <div className='container-fluid sliders-container mt-4 mb-4'>
        <Slider {...settings}>
          <div className='sliders-main' style={{ margin: '0rem' }}>
            <div className='col-12  sliders-img '>
              <div className='row w-100 slider-img-css d-flex justify-content-center align-items-center'>
                <img src={Product3} alt='Product 5' width={100} />
              </div>
              <div className='text-center mt-3'>
                <h6>Drinks & Juice</h6>
                <p>6 Products</p>
              </div>
            </div>
          </div>
          <div>
            <div className='sliders-main' style={{ margin: '0rem' }}>
              <div className='col-12  sliders-img '>
                <div className='row w-100 slider-img-css d-flex justify-content-center align-items-center'>
                  <img src={Product2} alt='Product 5' width={100} />
                </div>
                <div className='text-center mt-3'>
                  <h6>Drinks & Juice</h6>
                  <p>6 Products</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='sliders-main' style={{ margin: '0rem' }}>
              <div className='col-12  sliders-img '>
                <div className='row w-100 slider-img-css d-flex justify-content-center align-items-center'>
                  <img src={Product2} alt='Product 5' width={100} />
                </div>
                <div className='text-center mt-3'>
                  <h6>Drinks & Juice</h6>
                  <p>6 Products</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='sliders-main' style={{ margin: '0rem' }}>
              <div className='col-12  sliders-img '>
                <div className='row w-100 slider-img-css d-flex justify-content-center align-items-center'>
                  <img src={Product3} alt='Product 5' width={100} />
                </div>
                <div className='text-center mt-3'>
                  <h6>Drinks & Juice</h6>
                  <p>6 Products</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='sliders-main' style={{ margin: '0rem' }}>
              <div className='col-12  sliders-img '>
                <div className='row w-100 slider-img-css d-flex justify-content-center align-items-center'>
                  <img src={Product2} alt='Product 5' width={150} />
                </div>
                <div className='text-center mt-3'>
                  <h6>Drinks & Juice</h6>
                  <p>6 Products</p>
                </div>
              </div>
            </div>
          </div>
          {/* Add more similar divs for additional products */}
        </Slider>
      </div>
      <Footer />
    </div>
  )
}

export default Category
