import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import ProductImg from '../Assets/Oil.png'
import './AddCart.css'
import Footer from '../Footer/Footer'
import { useNavigate } from 'react-router-dom'

const AddCart = () => {
  const Navigate = useNavigate()

  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  const handleClick = () => {
    Navigate('/retailer-payment')
  }

  return (
    <div className='' style={{ height: '100vh' }}>
      <Navbar />
      <div className='container cart-container '>
        <h2 className='mt-3'>Shop Cart</h2>
        <table class='table mt-5  text-center  col-sm-12 col-md-12 col-lg-12 col-xs-12'>
          <thead className='col-sm-12 col-md-12 col-lg-8 col-xs-12'>
            <tr className='table-active col-sm-12 col-md-12 col-lg-8 col-xs-12'>
              <th scope='col'>#</th>
              <th scope='col'></th>
              <th scope='col'>Product</th>
              <th scope='col'>Price</th>
              <th scope='col'> Quantity</th>
              <th scope='col'> Subtotal</th>
            </tr>
          </thead>
          <tbody className='col-sm-12 col-md-12 col-lg-8 col-xs-12'>
            <tr className='col-sm-12 col-md-12 col-lg-8 col-xs-12'>
              <th scope='row'>1</th>
              <td>
                <img src={ProductImg} alt='' srcset='' width={80} />
              </td>
              <td>
                <span className='text-success fw-bold pt-5 '>
                  Gorton’s Beer Battered Fish Fillets
                </span>
              </td>
              <td>$48.21</td>
              <td>
                <button
                  type='button'
                  class='btn btn-success'
                  data-bs-toggle='modal'
                  data-bs-target='#exampleModal'
                >
                  Add
                </button>

                <div
                  class='modal fade'
                  id='exampleModal'
                  tabindex='-1'
                  aria-labelledby='exampleModalLabel'
                  aria-hidden='true'
                >
                  <div class='modal-dialog modal-dialog-centered'>
                    <div class='modal-content'>
                      <div class='modal-header'>
                        <h1 class='modal-title fs-5' id='exampleModalLabel'>
                          Cart Details
                        </h1>
                        <button
                          type='button'
                          class='btn-close'
                          data-bs-dismiss='modal'
                          aria-label='Close'
                        ></button>
                      </div>
                      <div class='modal-body'>
                        {' '}
                        <div class='row'>
                          <div class='col-4'>
                            <strong>Quantity:</strong>
                          </div>
                          <div class='col-4'>25 Packs</div>
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
                        <div class='row mt-2'>
                          <div class='col-4'>
                            <strong>Quantity:</strong>
                          </div>
                          <div class='col-4'>50 Packs</div>
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
                        <div class='row mt-2'>
                          <div class='col-4'>
                            <strong>Quantity:</strong>
                          </div>
                          <div class='col-4'>75 Packs</div>
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
                      </div>
                      <div class='modal-footer'>
                        <button
                          type='button'
                          class='btn btn-secondary'
                          data-bs-dismiss='modal'
                        >
                          Close
                        </button>
                        <button type='button' class='btn btn-primary'>
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td>$47.81</td>
            </tr>
            <tr className=''>
              <th scope='row'>2</th>
              <td>
                <img src={ProductImg} alt='' srcset='' width={80} />
              </td>
              <td>
                <span className='text-success fw-bold pt-5 '>
                  Gorton’s Beer Battered Fish Fillets
                </span>
              </td>
              <td>$48.21</td>
              <td>
                <button
                  type='button'
                  class='btn btn-success'
                  data-bs-toggle='modal'
                  data-bs-target='#exampleModal'
                >
                  Add
                </button>

                <div
                  class='modal fade'
                  id='exampleModal'
                  tabindex='-1'
                  aria-labelledby='exampleModalLabel'
                  aria-hidden='true'
                >
                  <div class='modal-dialog modal-dialog-centered'>
                    <div class='modal-content'>
                      <div class='modal-header'>
                        <h1 class='modal-title fs-5' id='exampleModalLabel'>
                          Cart Details
                        </h1>
                        <button
                          type='button'
                          class='btn-close'
                          data-bs-dismiss='modal'
                          aria-label='Close'
                        ></button>
                      </div>
                      <div class='modal-body'>
                        {' '}
                        <div class='row'>
                          <div class='col-4'>
                            <strong>Quantity:</strong>
                          </div>
                          <div class='col-4'>25 Packs</div>
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
                        <div class='row mt-2'>
                          <div class='col-4'>
                            <strong>Quantity:</strong>
                          </div>
                          <div class='col-4'>50 Packs</div>
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
                        <div class='row mt-2'>
                          <div class='col-4'>
                            <strong>Quantity:</strong>
                          </div>
                          <div class='col-4'>75 Packs</div>
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
                      </div>
                      <div class='modal-footer'>
                        <button
                          type='button'
                          class='btn btn-secondary'
                          data-bs-dismiss='modal'
                        >
                          Close
                        </button>
                        <button type='button' class='btn btn-primary'>
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td>$47.81</td>
            </tr>
          </tbody>
        </table>
        <div className='row'>
          <div className='col-sm-12 col-md-12 col-lg-4 col-xs-12 mt-1'>
            <input
              className='form-control'
              placeholder='Enter Coupen code'
              type='text'
            />
          </div>
          <div className='col-sm-12 col-md-12 col-lg-3 col-xs-12'>
            {' '}
            <button className='btn col-sm-12 col-md-12 col-lg-8 col-xs-12 btn-success mt-1'>
              Apply Coupen
            </button>
          </div>
          <div className='col-sm-12 col-md-12 col-lg-2 col-xs-12'>
            {' '}
            <button className='btn col-sm-12 col-md-12 mt-1 col-lg-10 col-xs-12  btn-success  '>
              Empty Cart
            </button>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-8'>
            <h2>Available Coupons</h2>
            <div className='coupons mt-2 border border p-2'>
              <p>
                Find Rs. 35 Off on Purchase of Cadcury Silk products worth Rs.
                360 or More.
              </p>
              <p>
                Valid Once per customer{' '}
                <span style={{ color: '#45bc1b' }}>View Details</span>
              </p>
              <div className='row'>
                <div className='col-2'>
                  <button
                    style={{
                      border: 'dashed #A0A4AB',
                      backgroundColor: 'white',
                    }}
                    className='btn'
                  >
                    SIKL35
                  </button>
                </div>
                <div className='col-1'>
                  <button className='btn btn-success'>Add</button>
                </div>
              </div>
            </div>
            <div className='coupons mt-5 mb-3 border border p-2'>
              <p>
                Find Rs. 35 Off on Purchase of Cadcury Silk products worth Rs.
                360 or More.
              </p>
              <p>
                Valid Once per customer{' '}
                <span style={{ color: '#45bc1b' }}>View Details</span>
              </p>
              <div className='row'>
                <div className='col-2'>
                  <button
                    style={{
                      border: 'dashed #A0A4AB',
                      backgroundColor: 'white',
                    }}
                    className='btn'
                  >
                    SIKL35
                  </button>
                </div>
                <div className='col-1'>
                  <button className='btn btn-success'>Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className=' col-xs-12 col-sm-12 col-lg-4 col-md-12'>
            <h2>Cart totals</h2>
            <div className='table'>
              <div class='table-responsive'>
                <table class='table table-'>
                  <tbody>
                    <tr>
                      <th scope='row'>Subtotal</th>
                      <td className='text-success'>$48.75</td>
                    </tr>
                    <tr>
                      <th scope='row'>Shipping</th>
                      <td>
                        <span>Flate Rate</span>
                        <br />
                        <span>Shipping CA</span>
                        <br />
                        <span className='text-success'>Address</span>
                      </td>
                    </tr>
                    <tr>
                      <th scope='row'>Total</th>
                      <td className='text-success'>$78.25</td>
                    </tr>
                    <button
                      onClick={handleClick}
                      className='btn btn-success mt-2 mb-2 text-white '
                    >
                      Proceed to checkout
                    </button>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AddCart
