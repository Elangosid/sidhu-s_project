import React from 'react'
import './ProductsGroup.css'
import product from '../../assets/BB-images/Retailer/products-1.png'
import productBadge from '../../assets/BB-images/Retailer/product-badge.png'
import offerBadge from '../../assets/BB-images/Retailer/offer-badge.png'
import { useNavigate } from 'react-router-dom'

const ProductsGroup = () => {
  const Navigate = useNavigate()

  const HandleClick = () => {
    Navigate('/retailer-single-product')
  }
  const CartClick = () => {
    Navigate('/retailer-cart')
  }
  return (
    <section className='productsgroup'>
      <div className='container-fluid container-productsgroup'>
        <div className='row'>
          <div className='productsgroup-head'>
            <h2>Trending Nearby</h2>
            <a href='#/'>See all</a>
          </div>
          <div className='col-lg-3 productsgroup-all mb-3'>
            <div className='sinngleproduct'>
              <div className='product-img' onClick={HandleClick}>
                <img src={product} alt='...' className='single-img' />
              </div>
              <div className='product-detail'>
                <h5>Fresh Malabar Parota</h5>
                <p>12 Pieces</p>
                <div className='price-cart'>
                  <p>&#8377;123</p>
                  <strike>&#8377;160</strike>
                  <button onClick={CartClick}>
                    <span>
                      <i class='bi bi-cart3'></i>
                    </span>{' '}
                    Add
                  </button>
                </div>
              </div>
              <div className='offer-badge'>
                <div className='offer-text'>
                  <img src={offerBadge} alt='...' className='offer-img' />
                  <p>
                    <span>64</span>%
                  </p>
                  <p className='off'> OFF</p>
                </div>
              </div>
              <div className='product-badge'>
                <div className='badge-text'>
                  <img src={productBadge} alt='...' className='badge-img' />
                  <div className='badge-des'>Margin -45.9</div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-3 productsgroup-all mb-3'>
            <div className='sinngleproduct'>
              <div className='product-img' onClick={HandleClick}>
                <img src={product} alt='...' className='single-img' />
              </div>
              <div className='product-detail'>
                <h5>Fresh Malabar Parota</h5>
                <p>12 Pieces</p>
                <div className='price-cart'>
                  <p>&#8377;123</p>
                  <strike>&#8377;160</strike>
                  <button onClick={CartClick}>
                    <span>
                      <i class='bi bi-cart3'></i>
                    </span>{' '}
                    Add
                  </button>
                </div>
              </div>
              <div className='offer-badge'>
                <div className='offer-text'>
                  <img src={offerBadge} alt='...' className='offer-img' />
                  <p>
                    <span>64</span>%
                  </p>
                  <p className='off'> OFF</p>
                </div>
              </div>
              <div className='product-badge'>
                <div className='badge-text'>
                  <img src={productBadge} alt='...' className='badge-img' />
                  <div className='badge-des'>Margin -45.9</div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-3 productsgroup-all mb-3'>
            <div className='sinngleproduct' onClick={HandleClick}>
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
                  <img src={offerBadge} alt='...' className='offer-img' />
                  <p>
                    <span>64</span>%
                  </p>
                  <p className='off'> OFF</p>
                </div>
              </div>
              <div className='product-badge'>
                <div className='badge-text'>
                  <img src={productBadge} alt='...' className='badge-img' />
                  <div className='badge-des'>Margin -45.9</div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-3 productsgroup-all mb-3'>
            <div className='sinngleproduct' onClick={HandleClick}>
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
                  <img src={offerBadge} alt='...' className='offer-img' />
                  <p>
                    <span>64</span>%
                  </p>
                  <p className='off'> OFF</p>
                </div>
              </div>
              <div className='product-badge'>
                <div className='badge-text'>
                  <img src={productBadge} alt='...' className='badge-img' />
                  <div className='badge-des'>Margin -45.9</div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-3 productsgroup-all mb-3'>
            <div className='sinngleproduct' onClick={HandleClick}>
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
                  <img src={offerBadge} alt='...' className='offer-img' />
                  <p>
                    <span>64</span>%
                  </p>
                  <p className='off'> OFF</p>
                </div>
              </div>
              <div className='product-badge'>
                <div className='badge-text'>
                  <img src={productBadge} alt='...' className='badge-img' />
                  <div className='badge-des'>Margin -45.9</div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-3 productsgroup-all mb-3'>
            <div className='sinngleproduct' onClick={HandleClick}>
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
                  <img src={offerBadge} alt='...' className='offer-img' />
                  <p>
                    <span>64</span>%
                  </p>
                  <p className='off'> OFF</p>
                </div>
              </div>
              <div className='product-badge'>
                <div className='badge-text'>
                  <img src={productBadge} alt='...' className='badge-img' />
                  <div className='badge-des'>Margin -45.9</div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-3 productsgroup-all mb-3'>
            <div className='sinngleproduct' onClick={HandleClick}>
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
                  <img src={offerBadge} alt='...' className='offer-img' />
                  <p>
                    <span>64</span>%
                  </p>
                  <p className='off'> OFF</p>
                </div>
              </div>
              <div className='product-badge'>
                <div className='badge-text'>
                  <img src={productBadge} alt='...' className='badge-img' />
                  <div className='badge-des'>Margin -45.9</div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-3 productsgroup-all mb-3'>
            <div className='sinngleproduct' onClick={HandleClick}>
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
                  <img src={offerBadge} alt='...' className='offer-img' />
                  <p>
                    <span>64</span>%
                  </p>
                  <p className='off'> OFF</p>
                </div>
              </div>
              <div className='product-badge'>
                <div className='badge-text'>
                  <img src={productBadge} alt='...' className='badge-img' />
                  <div className='badge-des'>Margin -45.9</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductsGroup
