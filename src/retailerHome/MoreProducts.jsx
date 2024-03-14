import React, { useState } from 'react'
import './MoreProducts.css'
import productOne from '../assets/BB-images/product_1.png'

const MoreProducts = () => {
  const [viewAll, setViewAll] = useState(false)
  const [viewAll1, setViewAll1] = useState(false)
  const [viewAll2, setViewAll2] = useState(false)
  const [viewAll3, setViewAll3] = useState(false)
  return (
    <div className='container'>
      <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
        <div className='row'>
          <div className='col'>
            <h1>Bestseller</h1>
          </div>
          <div className='col-sm-1 col-md-1 col-lg-1 mt-3'>
            <a href='#/' className='text-success'>
              See all
            </a>
          </div>
        </div>
        <div className='row '>
          <div className='col-lg-3 col-xs-12'>
            <div
              className='products-grid'
              onMouseEnter={() => setViewAll(true)}
              onMouseLeave={() => setViewAll(false)}
            >
              <div className='single-products'>
                <img src={productOne} alt='...' className='product-img' />
              </div>
              <div className='single-products'>
                <img src={productOne} alt='...' className='product-img' />
              </div>
              <div className='single-products'>
                <img src={productOne} alt='...' className='product-img' />
              </div>
              <div className='single-products more'>
                <p className='more-products'>{viewAll ? 'View All' : '+25'}</p>
              </div>
            </div>
            <div className='description-products'>
              <h6 style={{ marginBottom: '0rem' }}>Men's Products</h6>
              <p>8 Products</p>
            </div>
            <button
              style={{
                border: 'solid #45BC1B',
                borderRadius: '4px',
                color: '#45BC1B',
              }}
              className='container seeall-btn'
            >
              See All
            </button>
          </div>
          <div className='col-lg-3 col-xs-12'>
            <div
              className='products-grid'
              onMouseEnter={() => setViewAll1(true)}
              onMouseLeave={() => setViewAll1(false)}
            >
              <div className='single-products'>
                <img src={productOne} alt='...' className='product-img' />
              </div>
              <div className='single-products'>
                <img src={productOne} alt='...' className='product-img' />
              </div>
              <div className='single-products'>
                <img src={productOne} alt='...' className='product-img' />
              </div>
              <div className='single-products more'>
                <p className='more-products'>{viewAll1 ? 'View All' : '+25'}</p>
              </div>
            </div>
            <div className='description-products'>
              <h6 style={{ marginBottom: '0rem' }}>Men's Products</h6>
              <p>8 Products</p>
            </div>
            <button
              style={{
                border: 'solid #45BC1B',
                borderRadius: '4px',
                color: '#45BC1B',
              }}
              className='container seeall-btn'
            >
              See All
            </button>
          </div>
          <div className='col-lg-3 col-xs-12'>
            <div
              className='products-grid'
              onMouseEnter={() => setViewAll2(true)}
              onMouseLeave={() => setViewAll2(false)}
            >
              <div className='single-products'>
                <img src={productOne} alt='...' className='product-img' />
              </div>
              <div className='single-products'>
                <img src={productOne} alt='...' className='product-img' />
              </div>
              <div className='single-products'>
                <img src={productOne} alt='...' className='product-img' />
              </div>
              <div className='single-products more'>
                <p className='more-products'>{viewAll2 ? 'View All' : '+25'}</p>
              </div>
            </div>
            <div className='description-products'>
              <h6 style={{ marginBottom: '0rem' }}>Men's Products</h6>
              <p>8 Products</p>
            </div>
            <button
              style={{
                border: 'solid #45BC1B',
                borderRadius: '4px',
                color: '#45BC1B',
              }}
              className='container seeall-btn'
            >
              See All
            </button>
          </div>
          <div className='col-lg-3 col-xs-12'>
            <div
              className='products-grid'
              onMouseEnter={() => setViewAll3(true)}
              onMouseLeave={() => setViewAll3(false)}
            >
              <div className='single-products'>
                <img src={productOne} alt='...' className='product-img' />
              </div>
              <div className='single-products'>
                <img src={productOne} alt='...' className='product-img' />
              </div>
              <div className='single-products'>
                <img src={productOne} alt='...' className='product-img' />
              </div>
              <div className='single-products more'>
                <p className='more-products'>{viewAll3 ? 'View All' : '+25'}</p>
              </div>
            </div>
            <div className='description-products'>
              <h6 style={{ marginBottom: '0rem' }}>Men's Products</h6>
              <p>8 Products</p>
            </div>
            <button
              style={{
                border: 'solid #45BC1B',
                borderRadius: '4px',
                color: '#45BC1B',
              }}
              className='container seeall-btn'
            >
              See All
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoreProducts
