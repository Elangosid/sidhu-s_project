import React, { useState } from 'react'
import './SubCategory.css'
import Navbar from '../Navbar/Navbar'
import oil from '../../assets/BB-images/Retailer/oil-1.png'
import product from '../../assets/BB-images/Retailer/products-1.png'
import productBadge from '../../assets/BB-images/Retailer/product-badge.png'
import offerBadge from '../../assets/BB-images/Retailer/offer-badge.png'
import { Range } from 'react-range'
import Select from 'react-select'
import Slider from 'react-slick'
import Footer from '../Footer/Footer'

const options = [
  { value: 'option2', label: 'Price - Low to High' },
  { value: 'option3', label: 'Price - High to Low' },
  { value: 'option4', label: 'Margin - High to Low' },
  { value: 'option5', label: 'Rupee Saving - Low to High' },
  { value: 'option6', label: '% Off - High to Low' },
]

const show = [
  { value: 'option2', label: '10' },
  { value: 'option3', label: '15' },
  { value: 'option4', label: '20' },
  { value: 'option5', label: '45' },
  { value: 'option6', label: '50' },
]

const SubCategory = () => {
  const [values, setValues] = useState([10, 1000])

  const handlePriceChange = (newValues) => {
    setValues(newValues)
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  }

  return (
    <>
      <Navbar />
      <section>
        <div className='container-fluid subCategory-container'>
          <div className=' col-lg-12 subCategory-headpage'>
            <h1>Fresh Fruits</h1>
            <p>
              When an unknown printer took a galley of type and scrambled lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Ac consequat
              diam diam vel iaculis pellentesque egestas feugiat. Nunc fermentum
              vitae rutrum pellentesque egestas elementum. Mauris ipsum semper
              facilisis pharetra dolor. Diam vitae facilisis quis rhoncus
              ultrices vitae, viverra habitasse varius.
            </p>
          </div>
          <div className='slider-container'>
            <Slider {...settings}>
              {[1, 2, 3, 4, 5, 6].map((_, index) => (
                <div key={index}>
                  <div className='single-category'>
                    <div className='sub-img'>
                      <img src={oil} alt='...' />
                    </div>
                    <div className='sub-text'>
                      <p className='sub-name'>Ghee</p>
                      <p>6 products</p>
                      <p></p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className='subCategory-products'>
            <div className='row'>
              <div className='col-lg-3 col-sm-12'>
                <div className='col-12 filter'>
                  <div className='filter-price'>
                    <h3>Filter by price</h3>
                    <hr className='colored-hr' />
                    <hr style={{ marginTop: '0px', borderColor: '#45bc1b' }} />
                    <div className='range-field'>
                      <Range
                        step={10}
                        min={10}
                        max={1000}
                        values={values}
                        onChange={handlePriceChange}
                        renderTrack={({ props, children }) => (
                          <div
                            {...props}
                            style={{
                              ...props.style,
                              height: '6px',
                              width: '100%',
                              backgroundColor: '#45bc1b',
                            }}
                          >
                            {children}
                          </div>
                        )}
                        renderThumb={({ props }) => (
                          <div
                            {...props}
                            style={{
                              ...props.style,
                              height: '16px',
                              width: '16px',
                              backgroundColor: 'white', // White color for the thumb
                              borderRadius: '50%',
                              outline: '2px solid #45bc1b', // Green outline for the thumb
                            }}
                          />
                        )}
                      />
                    </div>
                    <div className='range-input'>
                      <input
                        type='text'
                        value={values[0]}
                        readOnly
                        className='min-value'
                      />
                      <input
                        type='text'
                        value={values[1]}
                        readOnly
                        className='max-value'
                      />
                    </div>
                  </div>
                </div>
                <div className='col-12 categories-filter mt-5'>
                  <div className='categories-fill'>
                    <h3>Product Categories</h3>
                    <hr className='colored-hr' />
                    <hr style={{ marginTop: '0px', borderColor: '#45bc1b' }} />

                    <div className='check-box'>
                      <label>
                        <input type='checkbox' />
                        Baking material7
                      </label>
                      <label>
                        <input type='checkbox' />
                        Wines & Drinks1
                      </label>
                      <label>
                        <input type='checkbox' />
                        Wines & Drinks1
                      </label>
                      <label>
                        <input type='checkbox' />
                        Wines & Drinks1
                      </label>
                      <label>
                        <input type='checkbox' />
                        Wines & Drinks1
                      </label>
                    </div>

                    <button className='mt-4'>Apply Filter</button>
                    <button className='mt-4 ms-2'>Reset Filter</button>
                  </div>
                </div>
              </div>
              <div className='col-lg-9 col-sm-12'>
                <div className='row'>
                  <div className='col-lg-2  mt-2'>
                    <div className='filter-btn'>
                      <button>
                        <span className='me-1'>
                          <i class='fa-solid fa-filter'></i>
                        </span>
                        Filter
                      </button>
                    </div>
                  </div>
                  <div className='col-lg-3 d-flex mt-2'>
                    <p
                      className='mt-2 pe-2'
                      style={{ fontFamily: 'Satoshi-medium' }}
                    >
                      Show :
                    </p>
                    <div className='product-show'>
                      <Select
                        options={show}
                        styles={{
                          control: (provided, state) => ({
                            ...provided,
                            outline: 'none', // Removes the default outline
                            boxShadow: 'none', // Removes the box shadow
                            border: `1px solid #45bc1b`,
                            borderRadius: '8px',
                          }),
                          dropdownIndicator: (provided) => ({
                            ...provided,
                            color: '#45bc1b', // Sets the color of the dropdown arrow to green
                          }),
                        }}
                      />
                    </div>
                  </div>
                  <div className='col-lg-2 col-sm-12 col-xs-12'></div>
                  <div className='col-lg-2 col-sm-12 col-xs-12'>
                    <p
                      style={{
                        marginTop: '15px',
                        fontFamily: 'Satoshi-medium',
                      }}
                    >
                      1435 products found
                    </p>
                  </div>
                  <div className='col-lg-3 col-sm-12 col-xs-12 mt-2'>
                    <div className='sort-price'>
                      <Select
                        options={options}
                        styles={{
                          control: (provided, state) => ({
                            ...provided,
                            outline: 'none', // Removes the default outline
                            boxShadow: 'none', // Removes the box shadow
                            border: `1px solid #45bc1b`,
                            borderRadius: '8px',
                          }),
                          dropdownIndicator: (provided) => ({
                            ...provided,
                            color: '#45bc1b', // Sets the color of the dropdown arrow to green
                          }),
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className='row mt-4'>
                  <div className='col-lg-3 col-md-3 col-sm-12  productsgroup-all mb-3'>
                    <div className='sinngleproduct'>
                      <div className='product-img'>
                        <img src={product} alt='...' className='single-img' />
                      </div>
                      <div className='product-detail'>
                        <h5>Fresh Malabar Parota</h5>
                        <p>12 Pieces</p>
                        <div className='price-cart'>
                          <p>&#8377;123</p>
                          <strike>&#8377;160</strike>
                          <button>
                            <span>
                              <i class='bi bi-cart3'></i>
                            </span>{' '}
                            Add
                          </button>
                        </div>
                      </div>
                      <div className='offer-badge'>
                        <div className='offer-text'>
                          <img
                            src={offerBadge}
                            alt='...'
                            className='offer-img'
                          />
                          <p>
                            <span>64</span>%
                          </p>
                          <p className='off'> OFF</p>
                        </div>
                      </div>
                      <div className='product-badge'>
                        <div className='badge-text'>
                          <img
                            src={productBadge}
                            alt='...'
                            className='badge-img'
                          />
                          <div className='badge-des'>Margin -45.9</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-3 col-md-3 col-sm-12  productsgroup-all mb-3'>
                    <div className='sinngleproduct'>
                      <div className='product-img'>
                        <img src={product} alt='...' className='single-img' />
                      </div>
                      <div className='product-detail'>
                        <h5>Fresh Malabar Parota</h5>
                        <p>12 Pieces</p>
                        <div className='price-cart'>
                          <p>&#8377;123</p>
                          <strike>&#8377;160</strike>
                          <button>
                            <span>
                              <i class='bi bi-cart3'></i>
                            </span>{' '}
                            Add
                          </button>
                        </div>
                      </div>
                      <div className='offer-badge'>
                        <div className='offer-text'>
                          <img
                            src={offerBadge}
                            alt='...'
                            className='offer-img'
                          />
                          <p>
                            <span>64</span>%
                          </p>
                          <p className='off'> OFF</p>
                        </div>
                      </div>
                      <div className='product-badge'>
                        <div className='badge-text'>
                          <img
                            src={productBadge}
                            alt='...'
                            className='badge-img'
                          />
                          <div className='badge-des'>Margin -45.9</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-3 col-md-3 col-sm-12  productsgroup-all mb-3'>
                    <div className='sinngleproduct'>
                      <div className='product-img'>
                        <img src={product} alt='...' className='single-img' />
                      </div>
                      <div className='product-detail'>
                        <h5>Fresh Malabar Parota</h5>
                        <p>12 Pieces</p>
                        <div className='price-cart'>
                          <p>&#8377;123</p>
                          <strike>&#8377;160</strike>
                          <button>
                            <span>
                              <i class='bi bi-cart3'></i>
                            </span>{' '}
                            Add
                          </button>
                        </div>
                      </div>
                      <div className='offer-badge'>
                        <div className='offer-text'>
                          <img
                            src={offerBadge}
                            alt='...'
                            className='offer-img'
                          />
                          <p>
                            <span>64</span>%
                          </p>
                          <p className='off'> OFF</p>
                        </div>
                      </div>
                      <div className='product-badge'>
                        <div className='badge-text'>
                          <img
                            src={productBadge}
                            alt='...'
                            className='badge-img'
                          />
                          <div className='badge-des'>Margin -45.9</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-3 col-md-3 col-sm-12  productsgroup-all mb-3'>
                    <div className='sinngleproduct'>
                      <div className='product-img'>
                        <img src={product} alt='...' className='single-img' />
                      </div>
                      <div className='product-detail'>
                        <h5>Fresh Malabar Parota</h5>
                        <p>12 Pieces</p>
                        <div className='price-cart'>
                          <p>&#8377;123</p>
                          <strike>&#8377;160</strike>
                          <button>
                            <span>
                              <i class='bi bi-cart3'></i>
                            </span>{' '}
                            Add
                          </button>
                        </div>
                      </div>
                      <div className='offer-badge'>
                        <div className='offer-text'>
                          <img
                            src={offerBadge}
                            alt='...'
                            className='offer-img'
                          />
                          <p>
                            <span>64</span>%
                          </p>
                          <p className='off'> OFF</p>
                        </div>
                      </div>
                      <div className='product-badge'>
                        <div className='badge-text'>
                          <img
                            src={productBadge}
                            alt='...'
                            className='badge-img'
                          />
                          <div className='badge-des'>Margin -45.9</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-3 col-md-3 col-sm-12  productsgroup-all mb-3'>
                    <div className='sinngleproduct'>
                      <div className='product-img'>
                        <img src={product} alt='...' className='single-img' />
                      </div>
                      <div className='product-detail'>
                        <h5>Fresh Malabar Parota</h5>
                        <p>12 Pieces</p>
                        <div className='price-cart'>
                          <p>&#8377;123</p>
                          <strike>&#8377;160</strike>
                          <button>
                            <span>
                              <i class='bi bi-cart3'></i>
                            </span>{' '}
                            Add
                          </button>
                        </div>
                      </div>
                      <div className='offer-badge'>
                        <div className='offer-text'>
                          <img
                            src={offerBadge}
                            alt='...'
                            className='offer-img'
                          />
                          <p>
                            <span>64</span>%
                          </p>
                          <p className='off'> OFF</p>
                        </div>
                      </div>
                      <div className='product-badge'>
                        <div className='badge-text'>
                          <img
                            src={productBadge}
                            alt='...'
                            className='badge-img'
                          />
                          <div className='badge-des'>Margin -45.9</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-3 col-md-3 col-sm-12  productsgroup-all mb-3'>
                    <div className='sinngleproduct'>
                      <div className='product-img'>
                        <img src={product} alt='...' className='single-img' />
                      </div>
                      <div className='product-detail'>
                        <h5>Fresh Malabar Parota</h5>
                        <p>12 Pieces</p>
                        <div className='price-cart'>
                          <p>&#8377;123</p>
                          <strike>&#8377;160</strike>
                          <button>
                            <span>
                              <i class='bi bi-cart3'></i>
                            </span>{' '}
                            Add
                          </button>
                        </div>
                      </div>
                      <div className='offer-badge'>
                        <div className='offer-text'>
                          <img
                            src={offerBadge}
                            alt='...'
                            className='offer-img'
                          />
                          <p>
                            <span>64</span>%
                          </p>
                          <p className='off'> OFF</p>
                        </div>
                      </div>
                      <div className='product-badge'>
                        <div className='badge-text'>
                          <img
                            src={productBadge}
                            alt='...'
                            className='badge-img'
                          />
                          <div className='badge-des'>Margin -45.9</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-3 col-md-3 col-sm-12  productsgroup-all mb-3'>
                    <div className='sinngleproduct'>
                      <div className='product-img'>
                        <img src={product} alt='...' className='single-img' />
                      </div>
                      <div className='product-detail'>
                        <h5>Fresh Malabar Parota</h5>
                        <p>12 Pieces</p>
                        <div className='price-cart'>
                          <p>&#8377;123</p>
                          <strike>&#8377;160</strike>
                          <button>
                            <span>
                              <i class='bi bi-cart3'></i>
                            </span>{' '}
                            Add
                          </button>
                        </div>
                      </div>
                      <div className='offer-badge'>
                        <div className='offer-text'>
                          <img
                            src={offerBadge}
                            alt='...'
                            className='offer-img'
                          />
                          <p>
                            <span>64</span>%
                          </p>
                          <p className='off'> OFF</p>
                        </div>
                      </div>
                      <div className='product-badge'>
                        <div className='badge-text'>
                          <img
                            src={productBadge}
                            alt='...'
                            className='badge-img'
                          />
                          <div className='badge-des'>Margin -45.9</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-3 col-md-3 col-sm-12  productsgroup-all mb-3'>
                    <div className='sinngleproduct'>
                      <div className='product-img'>
                        <img src={product} alt='...' className='single-img' />
                      </div>
                      <div className='product-detail'>
                        <h5>Fresh Malabar Parota</h5>
                        <p>12 Pieces</p>
                        <div className='price-cart'>
                          <p>&#8377;123</p>
                          <strike>&#8377;160</strike>
                          <button>
                            <span>
                              <i class='bi bi-cart3'></i>
                            </span>{' '}
                            Add
                          </button>
                        </div>
                      </div>
                      <div className='offer-badge'>
                        <div className='offer-text'>
                          <img
                            src={offerBadge}
                            alt='...'
                            className='offer-img'
                          />
                          <p>
                            <span>64</span>%
                          </p>
                          <p className='off'> OFF</p>
                        </div>
                      </div>
                      <div className='product-badge'>
                        <div className='badge-text'>
                          <img
                            src={productBadge}
                            alt='...'
                            className='badge-img'
                          />
                          <div className='badge-des'>Margin -45.9</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default SubCategory
