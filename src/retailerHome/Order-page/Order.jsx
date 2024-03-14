import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import ProductImg from '../Assets/Rice.png';
import ProductImg1 from '../Assets/Oil.png';
import Footer from '../Footer/Footer';
import productBadge from '../../assets/BB-images/Retailer/product-badge.png';
import down from '../../assets/BB-images/Retailer/down.png';
import up from '../../assets/BB-images/Retailer/up.png';
import './Order.css';
import { Container, Card, Col, Row, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Order = () => {
  const [activeContainer, setActiveContainer] = useState('container-1');

  const Navigate = useNavigate();
  const TrackClick = () => {
    Navigate('/retailer-myorderdetails');
  };
  return (
    <div>
      <Navbar />
      <div className='container'>
        <h2 className='mt-3'>Order Details</h2>
        <div
          style={{ backgroundColor: '#EFF4EA', border: 'solid #EFF4EA' }}
          className='btns row d-flex align-item-center justify-content-center text-white p-2'
        >
          <div className='col-4 text-center'>
            <button
              id='btns'
              className='btn border btn-success'
              onClick={() => setActiveContainer('container-1')}
            >
              Summary
            </button>
          </div>
          <div className='col-3 text-center'>
            <button
              id='btns'
              className='btn border btn-success'
              onClick={() => setActiveContainer('container-2')}
            >
              Items
            </button>
          </div>
          <div className='col-3 text-center'>
            <button
              id='btns'
              className='btn border btn-success'
              onClick={() => setActiveContainer('container-3')}
            >
              Track
            </button>
          </div>
        </div>

        {activeContainer === 'container-1' && (
          <div className='container-1 mt-3'>
            <div style={{ backgroundColor: '#FFFFFF' }} className='row '>
              <div className='d-flex'>
                <h3>Products</h3>
                <p className='mt-2 ms-2 text-muted'>(Total 11)</p>
              </div>
              <div className='product col'>
                <img src={ProductImg} alt='none' srcset='' width={150} />
              </div>
              <div className='product col'>
                <img src={ProductImg1} alt='none' srcset='' width={150} />
              </div>
              <div className='product col'>
                <img src={ProductImg1} alt='none' srcset='' width={150} />
              </div>
              <div className='product col'>
                <img src={ProductImg} alt='none' srcset='' width={150} />
              </div>
              <div className='product col'>
                <img src={ProductImg1} alt='none' srcset='' width={150} />
              </div>
              <div className='product col'>
                <button className='btn-success btn btn-1 mt-5'>
                  <span>5+</span>
                  <br />
                  <span>See all</span>
                </button>
              </div>
            </div>

            <div className='price-details mt-2 row '>
              <div className=' '>
                <div style={{ backgroundColor: '#55951A0A' }} className='row'>
                  <h4 className='fw-bold'>Price Deatails</h4>
                  <div className='col col-lg-3  mt-3'>
                    <div className='d-flex'>
                      <p>Item Total amount</p>
                      <i class='bi bi-chevron-down ms-2'></i>
                    </div>
                    <div className='d-flex'>
                      <p>Taxes & Delivery Charges</p>
                      <i class='bi bi-chevron-down ms-2'></i>
                    </div>
                    <div className='d-flex'>
                      <p>Discount/Offer</p>
                      <i class='bi bi-percent text-success ms-1'></i>
                    </div>
                    <div className='d-flex'>
                      <p>Margin</p>
                      <i class='bi bi-chevron-down ms-2'></i>
                    </div>
                    <div className='d-flex'>
                      <p>Grand Total</p>
                    </div>
                  </div>

                  <div className='col  col-lg-4    mt-3'>
                    <div className='d-flex'>
                      <p>₹ 25098.00</p>
                    </div>
                    <div className='d-flex'>
                      <p>₹ 250.00</p>
                    </div>
                    <div className='d-flex'>
                      <p className='text-success'>(-)₹599.00</p>
                    </div>
                    <div className='d-flex'>
                      <p>₹ 250.00</p>
                    </div>
                    <div className='d-flex'>
                      <p>₹ 25098.00</p>
                    </div>
                  </div>
                  <div className=' col-lg-5 col-sm-12 col-xs-12'>
                    <h2>Delivery</h2>
                    <p>
                      <span>
                        <i class='bi bi-geo-alt-fill text-success me-1'></i>
                      </span>
                      101-209-21, Cubbon ParkNearest Metro Station, Bus Stand
                      Road, Dr. B.R. Ambedkar Station ...
                    </p>
                    <p>Vidhana Soudha , Bangalore - 560087</p>
                    <p>
                      <span>
                        <i class='bi bi-telephone-fill text-success me-1'></i>
                      </span>
                      +91-9873645345
                    </p>
                    <button className='btns'>
                      <span>
                        <i class='bi bi-file-earmark-medical me-1'></i>
                      </span>
                      Download Invoice
                    </button>
                  </div>
                  <div className=''>
                    <span
                      className='p-1'
                      style={{
                        color: '#FF7043 ',
                        border: 'dotted #FD916D',
                        backgroundColor: '#fd916d3b',
                      }}
                    >
                      You have saved ₹599 on this order
                    </span>
                  </div>

                  <div className='col mt-3'>
                    {' '}
                    <span
                      style={{
                        backgroundColor: '#8c8c8c3e',
                        border: 'dotted #8c8c8c6e',
                      }}
                      className='p-1 '
                    >
                      <i class='bi bi-truck text-success border-2 border me-2'></i>
                      Cash on Delivery (COD){' '}
                      <span style={{ backgroundColor: '' }}>
                        <a
                          style={{ color: '#45bc1b' }}
                          className=' ms-2'
                          href='#'
                        >
                          Free
                        </a>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeContainer === 'container-2' && (
          <div className='container-2'>
            <section className='productsgroup'>
              <div className='container-fluid container-productsgroup'>
                <div className='d-flex'>
                  <h3>Products</h3>
                  <p className='mt-2 ms-2 text-muted'>(Total 11)</p>
                </div>
                <div className='row'>
                  <div className='col-lg-3 productsgroup-all mb-3'>
                    <div className='sinngleproduct'>
                      <div className='product-img'>
                        <img
                          src={ProductImg}
                          alt='...'
                          className='single-img'
                          width={50}
                          height={50}
                        />
                      </div>
                      <div className='product-badge'>
                        <div className='badge-text'>
                          <img
                            src={productBadge}
                            alt='...'
                            className='badge-img '
                          />
                          <div className='badge-des badge-down'>
                            <img src={down} alt='...' />
                            <span>Margin -45.9</span>{' '}
                          </div>
                        </div>
                      </div>
                      <div className='product-detail'>
                        <h5>Fresh Malabar Parota</h5>
                        <p style={{ marginBottom: '10px' }}>
                          Qty-2Kg (10 Pockets)
                        </p>
                        <div className='bottom-badge'>
                          <div className='badge-down'>
                            <img src={down} alt='...' />
                            <span>Margin -45.9</span>{' '}
                          </div>
                        </div>

                        <div className='row mt-3'>
                          <div className='col-8'>
                            <p className='text-dark'>₹ 199</p>
                          </div>
                          <div className='col-4'>
                            <p style={{ color: '#45BC1B' }}>Happy</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-3 productsgroup-all mb-3'>
                    <div className='sinngleproduct'>
                      <div className='product-img'>
                        <img
                          src={ProductImg}
                          alt='...'
                          className='single-img'
                          width={50}
                          height={50}
                        />
                      </div>
                      <div className='product-badge'>
                        <div className='badge-text'>
                          <img
                            src={productBadge}
                            alt='...'
                            className='badge-img '
                          />
                          <div className='badge-des badge-down'>
                            <img src={up} alt='...' />
                            <span>Margin -45.9</span>{' '}
                          </div>
                        </div>
                      </div>
                      <div className='product-detail'>
                        <h5>Fresh Malabar Parota</h5>
                        <p style={{ marginBottom: '10px' }}>
                          Qty-2Kg (10 Pockets)
                        </p>
                        <div className='bottom-badge'>
                          <div className='badge-down'>
                            <img src={up} alt='...' />
                            <span>Margin -45.9</span>{' '}
                          </div>
                        </div>

                        <div className='row mt-3'>
                          <div className='col-8'>
                            <p className='text-dark'>₹ 199</p>
                          </div>
                          <div className='col-4'>
                            <p style={{ color: '#45BC1B' }}>Happy</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-3 productsgroup-all mb-3'>
                    <div className='sinngleproduct'>
                      <div className='product-img'>
                        <img
                          src={ProductImg}
                          alt='...'
                          className='single-img'
                          width={50}
                          height={50}
                        />
                      </div>
                      <div className='product-badge'>
                        <div className='badge-text'>
                          <img
                            src={productBadge}
                            alt='...'
                            className='badge-img '
                          />
                          <div className='badge-des badge-down'>
                            <img src={down} alt='...' />
                            <span>Margin -45.9</span>{' '}
                          </div>
                        </div>
                      </div>
                      <div className='product-detail'>
                        <h5>Fresh Malabar Parota</h5>
                        <p style={{ marginBottom: '10px' }}>
                          Qty-2Kg (10 Pockets)
                        </p>
                        <div className='bottom-badge'>
                          <div className='badge-down'>
                            <img src={down} alt='...' />
                            <span>Margin -45.9</span>{' '}
                          </div>
                        </div>

                        <div className='row mt-3'>
                          <div className='col-8'>
                            <p className='text-dark'>₹ 199</p>
                          </div>
                          <div className='col-4'>
                            <p style={{ color: '#45BC1B' }}>Happy</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-3 productsgroup-all mb-3'>
                    <div className='sinngleproduct'>
                      <div className='product-img'>
                        <img
                          src={ProductImg}
                          alt='...'
                          className='single-img'
                          width={50}
                          height={50}
                        />
                      </div>
                      <div className='product-badge'>
                        <div className='badge-text'>
                          <img
                            src={productBadge}
                            alt='...'
                            className='badge-img '
                          />
                          <div className='badge-des badge-down'>
                            <img src={up} alt='...' />
                            <span>Margin -45.9</span>{' '}
                          </div>
                        </div>
                      </div>
                      <div className='product-detail'>
                        <h5>Fresh Malabar Parota</h5>
                        <p style={{ marginBottom: '10px' }}>
                          Qty-2Kg (10 Pockets)
                        </p>
                        <div className='bottom-badge'>
                          <div className='badge-down'>
                            <img src={up} alt='...' />
                            <span>Margin -45.9</span>{' '}
                          </div>
                        </div>

                        <div className='row mt-3'>
                          <div className='col-8'>
                            <p className='text-dark'>₹ 199</p>
                          </div>
                          <div className='col-4'>
                            <p style={{ color: '#45BC1B' }}>Happy</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeContainer === 'container-3' && (
          <div className='container-3 mb-3 mt-3'>
            <Container>
              <Card>
                <Card.Header>My Orders / Tracking</Card.Header>
                <Card.Body>
                  {/* Order details */}
                  <h6>Order ID: OD45345345435</h6>
                  <strong>Estimated Delivery time:</strong>
                  <br />
                  29 Nov 2019
                  <Card>
                    <Card.Body className='row d-flex' onClick={TrackClick}>
                      <div className='col-1'>
                        <img
                          src={ProductImg1}
                          alt='none'
                          srcset=''
                          width={100}
                        />
                      </div>
                      <div className='col'>
                        <div className='track'>
                          <div className='step active'>
                            <span className='icon'>
                              <i className='fa fa-check'></i>
                            </span>
                            <span className='text'>Order confirmed</span>
                          </div>
                          <div className='step active'>
                            <span className='icon'>
                              <i className='fa fa-user'></i>
                            </span>
                            <span className='text'> Picked by courier</span>
                          </div>
                          <div className='step'>
                            <span className='icon'>
                              <i className='fa fa-truck'></i>
                            </span>
                            <span className='text'> On the way </span>
                          </div>
                          <div className='step'>
                            <span className='icon'>
                              <i className='fa fa-box'></i>
                            </span>
                            <span className='text'>Ready for pickup</span>
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                  {/* Order details */}
                  <div className='mt-2'>
                    <h6>Order ID: OD45345345435</h6>
                    <strong>Estimated Delivery time:</strong>
                    <br />
                    29 Nov 2019
                    <Card>
                      <Card.Body className='row d-flex' onClick={TrackClick}>
                        <div className='col-1'>
                          <img
                            src={ProductImg1}
                            alt='none'
                            srcset=''
                            width={100}
                          />
                        </div>
                        <div className='col'>
                          <div className='track'>
                            <div className='step active'>
                              <span className='icon'>
                                <i className='fa fa-check'></i>
                              </span>
                              <span className='text'>Order confirmed</span>
                            </div>
                            <div className='step active'>
                              <span className='icon'>
                                <i className='fa fa-user'></i>
                              </span>
                              <span className='text'> Picked by courier</span>
                            </div>
                            <div className='step'>
                              <span className='icon'>
                                <i className='fa fa-truck'></i>
                              </span>
                              <span className='text'> On the way </span>
                            </div>
                            <div className='step'>
                              <span className='icon'>
                                <i className='fa fa-box'></i>
                              </span>
                              <span className='text'>Ready for pickup</span>
                            </div>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                  {/* Tracking steps */}
                  {/* Back to orders button */}
                  <Button variant='warning' data-abc='true' className='mt-3'>
                    <i className='fa fa-chevron-left'></i> Back to orders
                  </Button>
                </Card.Body>
              </Card>
            </Container>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Order;
