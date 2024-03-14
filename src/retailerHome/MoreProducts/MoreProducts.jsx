import React, { useState } from 'react';
import './MoreProducts.css';
import productOne from '../../assets/BB-images/product_1.png';
import { useNavigate } from 'react-router-dom';

const MoreProducts = () => {
  const Navigate = useNavigate();

  const SeeAllClick = () => {
    Navigate('/retailer-category');
  };

  return (
    <div className='container-fluid moreproducts-container'>
      <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
        <div className='row mb-5'>
          <div className='moreproducts-head'>
            <h2>Bestseller</h2>
            <a href='#/'>See all</a>
          </div>
          <div className='col col-xs-12'>
            <div className='products-grid'>
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
                <p className='more-products'>+25</p>
              </div>
            </div>
            <div className='description-products'>
              <h6 style={{ marginBottom: '0rem' }}>Men's Products</h6>
              <p>8 Products</p>
            </div>
            <button
              style={{
                border: '2px solid #45BC1B',
                borderRadius: '4px',
                color: '#45BC1B',
              }}
              className='container seeall-btn'
              onClick={SeeAllClick}
            >
              See All
            </button>
          </div>
          <div className='col col-xs-12'>
            <div className='products-grid'>
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
                <p className='more-products'>+25</p>
              </div>
            </div>
            <div className='description-products'>
              <h6 style={{ marginBottom: '0rem' }}>Men's Products</h6>
              <p>8 Products</p>
            </div>
            <button
              style={{
                border: '2px solid #45BC1B',
                borderRadius: '4px',
                color: '#45BC1B',
              }}
              className='container seeall-btn'
              onClick={SeeAllClick}
            >
              See All
            </button>
          </div>
          <div className='col col-xs-12'>
            <div className='products-grid'>
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
                <p className='more-products'>+25</p>
              </div>
            </div>
            <div className='description-products'>
              <h6 style={{ marginBottom: '0rem' }}>Men's Products</h6>
              <p>8 Products</p>
            </div>
            <button
              style={{
                border: '2px solid #45BC1B',
                borderRadius: '4px',
                color: '#45BC1B',
              }}
              className='container seeall-btn'
              onClick={SeeAllClick}
            >
              See All
            </button>
          </div>
          <div className='col col-xs-12'>
            <div className='products-grid'>
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
                <p className='more-products'>+25</p>
              </div>
            </div>
            <div className='description-products'>
              <h6 style={{ marginBottom: '0rem' }}>Men's Products</h6>
              <p>8 Products</p>
            </div>
            <button
              style={{
                border: '2px solid #45BC1B',
                borderRadius: '4px',
                color: '#45BC1B',
              }}
              className='container seeall-btn'
              onClick={SeeAllClick}
            >
              See All
            </button>
          </div>
          <div className='col col-xs-12'>
            <div className='products-grid'>
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
                <p className='more-products'>+25</p>
              </div>
            </div>
            <div className='description-products'>
              <h6 style={{ marginBottom: '0rem' }}>Men's Products</h6>
              <p>8 Products</p>
            </div>
            <button
              style={{
                border: '2px solid #45BC1B',
                borderRadius: '4px',
                color: '#45BC1B',
              }}
              className='container seeall-btn'
              onClick={SeeAllClick}
            >
              See All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreProducts;
