import React from 'react'
import './Payment.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import airtelPay from '../Assets/airtel-pay.png'
import AmazonPay from '../Assets/amazon.png'
import Upi from '../Assets/upi-img.png'

const Payment = () => {
  return (
    <div>
      <Navbar />
      <div class='container mb-3'>
        <div class='row'>
          <div class='col-lg-4 mb-lg-0 mb-3'>
            <div class='card p-3'>
              <div class='img-box'>
                <img
                  src='https://www.freepnglogos.com/uploads/visa-logo-download-png-21.png'
                  alt=''
                />
              </div>
              <div class='number'>
                <label class='fw-bold' for=''>
                  **** **** **** 1060
                </label>
              </div>
              <div class='d-flex align-items-center justify-content-between'>
                <small>
                  <span class='fw-bold'>Expiry date:</span>
                  <span>10/16</span>
                </small>
                <small>
                  <span class='fw-bold'>Name:</span>
                  <span>Kumar</span>
                </small>
              </div>
            </div>
          </div>
          <div class='col-lg-4 mb-lg-0 mb-3'>
            <div class='card p-3'>
              <div class='img-box'>
                <img
                  src='https://www.freepnglogos.com/uploads/mastercard-png/file-mastercard-logo-svg-wikimedia-commons-4.png'
                  alt=''
                />
              </div>
              <div class='number'>
                <label class='fw-bold'>**** **** **** 1060</label>
              </div>
              <div class='d-flex align-items-center justify-content-between'>
                <small>
                  <span class='fw-bold'>Expiry date:</span>
                  <span>10/16</span>
                </small>
                <small>
                  <span class='fw-bold'>Name:</span>
                  <span>Kumar</span>
                </small>
              </div>
            </div>
          </div>
          <div class='col-lg-4 mb-lg-0 mb-3'>
            <div class='card p-3'>
              <div class='img-box'>
                <img
                  src='https://www.freepnglogos.com/uploads/discover-png-logo/credit-cards-discover-png-logo-4.png'
                  alt=''
                />
              </div>
              <div class='number'>
                <label class='fw-bold'>**** **** **** 1060</label>
              </div>
              <div class='d-flex align-items-center justify-content-between'>
                <small>
                  <span class='fw-bold'>Expiry date:</span>
                  <span>10/16</span>
                </small>
                <small>
                  <span class='fw-bold'>Name:</span>
                  <span>Kumar</span>
                </small>
              </div>
            </div>
          </div>
          <div class='col-12 mt-4'>
            <div class='card p-3'>
              <p class='mb-0 fw-bold h4'>Payment Methods</p>
            </div>
          </div>
          <div class='col-12'>
            <div class='card p-3'>
              <div class='card-body border p-0'>
                <p>
                  <a
                    class='btn btn-primary w-100 h-100 d-flex align-items-center justify-content-between'
                    data-bs-toggle='collapse'
                    href='#collapseExample'
                    role='button'
                    aria-expanded='true'
                    aria-controls='collapseExample'
                  >
                    <span class='fw-bold'>PayPal</span>
                    <span class='fab fa-cc-paypal'></span>
                  </a>
                </p>
                <div class='collapse p-3 pt-0' id='collapseExample'>
                  <div class='row'>
                    <div class='col-8'>
                      <p class='h4 mb-0'>Summary</p>
                      <p class='mb-0'>
                        <span class='fw-bold'>Product:</span>
                        <span class='c-green'>: Name of product</span>
                      </p>
                      <p class='mb-0'>
                        <span class='fw-bold'>Price:</span>
                        <span class='c-green'>:$452.90</span>
                      </p>
                      <p class='mb-0'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Atque nihil neque quisquam aut repellendus, dicta
                        vero? Animi dicta cupiditate, facilis provident
                        quibusdam ab quis, iste harum ipsum hic, nemo qui!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class='card-body border p-0'>
                <p>
                  <a
                    class='btn btn-primary p-2 w-100 h-100 d-flex align-items-center justify-content-between'
                    data-bs-toggle='collapse'
                    href='#collapseAirtelMoney'
                    role='button'
                    aria-expanded='true'
                    aria-controls='collapseAirtelMoney'
                  >
                    <span class='fw-bold'>Airtel Money Pay</span>
                    <img
                      style={{
                        width: '50px',
                        height: '40px',
                        borderRadius: '10px',
                      }}
                      src={airtelPay}
                      alt='none'
                      srcset=''
                    />
                  </a>
                </p>
                <div class='collapse p-3 pt-0' id='collapseAirtelMoney'>
                  <div class='row'>
                    <div class='col-8'>
                      <p class='h4 mb-0'>Summary</p>
                      <p class='mb-0'>
                        <span class='fw-bold'>Product:</span>
                        <span class='c-green'>: Name of product</span>
                      </p>
                      <p class='mb-0'>
                        <span class='fw-bold'>Price:</span>
                        <span class='c-green'>:$452.90</span>
                      </p>
                      <p class='mb-0'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Atque nihil neque quisquam aut repellendus, dicta
                        vero? Animi dicta cupiditate, facilis provident
                        quibusdam ab quis, iste harum ipsum hic, nemo qui!
                      </p>
                    </div>
                    {/* <!-- Add Airtel Money Pay specific details or form here if needed --> */}
                  </div>
                </div>
              </div>
              <div class='card-body border p-0'>
                <p>
                  <a
                    class='btn btn-primary p-2 w-100 h-100 d-flex align-items-center justify-content-between'
                    data-bs-toggle='collapse'
                    href='#collapseAmazonPay'
                    role='button'
                    aria-expanded='true'
                    aria-controls='collapseAmazonPay'
                  >
                    <span class='fw-bold'>Amazon Pay Balance UPI</span>
                    <img
                      src={AmazonPay}
                      alt='none'
                      srcset=''
                      style={{
                        width: '50px',
                        height: '40px',
                        borderRadius: '10px',
                      }}
                    />
                  </a>
                </p>
                <div class='collapse p-3 pt-0' id='collapseAmazonPay'>
                  <div class='row'>
                    <div class='col-8'>
                      <p class='h4 mb-0'>Summary</p>
                      <p class='mb-0'>
                        <span class='fw-bold'>Product:</span>
                        <span class='c-green'>: Name of product</span>
                      </p>
                      <p class='mb-0'>
                        <span class='fw-bold'>Price:</span>
                        <span class='c-green'>:$452.90</span>
                      </p>
                      <p class='mb-0'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Atque nihil neque quisquam aut repellendus, dicta
                        vero? Animi dicta cupiditate, facilis provident
                        quibusdam ab quis, iste harum ipsum hic, nemo qui!
                      </p>
                    </div>
                    {/* <!-- Add Amazon Pay Balance UPI specific details or form here if needed --> */}
                  </div>
                </div>
              </div>
              <div class='card-body border p-0'>
                <p>
                  <a
                    class='btn btn-primary p-2 w-100 h-100 d-flex align-items-center justify-content-between'
                    data-bs-toggle='collapse'
                    href='#collapseUPIPayment'
                    role='button'
                    aria-expanded='true'
                    aria-controls='collapseUPIPayment'
                  >
                    <span class='fw-bold'>UPI Payment</span>
                    <img
                      src={Upi}
                      alt=''
                      srcset=''
                      style={{
                        width: '50px',
                        height: '40px',
                        borderRadius: '10px',
                      }}
                    />
                  </a>
                </p>
                <div class='collapse p-3 pt-0' id='collapseUPIPayment'>
                  <div class='row'>
                    <div class='col-8'>
                      <p class='h4 mb-0'>Summary</p>
                      <p class='mb-0'>
                        <span class='fw-bold'>Product:</span>
                        <span class='c-green'>: Name of product</span>
                      </p>
                      <p class='mb-0'>
                        <span class='fw-bold'>Price:</span>
                        <span class='c-green'>:$452.90</span>
                      </p>
                      <p class='mb-0'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Atque nihil neque quisquam aut repellendus, dicta
                        vero? Animi dicta cupiditate, facilis provident
                        quibusdam ab quis, iste harum ipsum hic, nemo qui!
                      </p>
                    </div>
                    {/* <!-- Add UPI Payment specific details or form here if needed --> */}
                  </div>
                </div>
              </div>
              <div class='card-body border p-0'>
                <p>
                  <a
                    class='btn btn-primary p-2 w-100 h-100 d-flex align-items-center justify-content-between'
                    data-bs-toggle='collapse'
                    href='#collapseCashOnDelivery'
                    role='button'
                    aria-expanded='true'
                    aria-controls='collapseCashOnDelivery'
                  >
                    <span class='fw-bold'>Cash on Delivery</span>
                    {/* <!-- Add Cash on Delivery logo or icon here if applicable --> */}
                  </a>
                </p>
                <div class='collapse p-3 pt-0' id='collapseCashOnDelivery'>
                  <div class='row'>
                    <div class='col-8'>
                      <p class='h4 mb-0'>Summary</p>
                      <p class='mb-0'>
                        <span class='fw-bold'>Product:</span>
                        <span class='c-green'>: Name of product</span>
                      </p>
                      <p class='mb-0'>
                        <span class='fw-bold'>Price:</span>
                        <span class='c-green'>:$452.90</span>
                      </p>
                      <p class='mb-0'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Atque nihil neque quisquam aut repellendus, dicta
                        vero? Animi dicta cupiditate, facilis provident
                        quibusdam ab quis, iste harum ipsum hic, nemo qui!
                      </p>
                    </div>
                    {/* <!-- Add Cash on Delivery specific details or form here if needed --> */}
                  </div>
                </div>
              </div>

              <div class='card-body border p-0'>
                <p>
                  <a
                    class='btn btn-primary p-2 w-100 h-100 d-flex align-items-center justify-content-between'
                    data-bs-toggle='collapse'
                    href='#collapseExample'
                    role='button'
                    aria-expanded='true'
                    aria-controls='collapseExample'
                  >
                    <span class='fw-bold'>Credit Card</span>
                    <span class=''>
                      <span class='fab fa-cc-amex'></span>
                      <span class='fab fa-cc-mastercard'></span>
                      <span class='fab fa-cc-discover'></span>
                    </span>
                  </a>
                </p>
                <div class='collapse show p-3 pt-0' id='collapseExample'>
                  <div class='row'>
                    <div class='col-lg-5 mb-lg-0 mb-3'>
                      <p class='h4 mb-0'>Summary</p>
                      <p class='mb-0'>
                        <span class='fw-bold'>Product:</span>
                        <span class='c-green'>: Name of product</span>
                      </p>
                      <p class='mb-0'>
                        <span class='fw-bold'>Price:</span>
                        <span class='c-green'>:$452.90</span>
                      </p>
                      <p class='mb-0'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Atque nihil neque quisquam aut repellendus, dicta
                        vero? Animi dicta cupiditate, facilis provident
                        quibusdam ab quis, iste harum ipsum hic, nemo qui!
                      </p>
                    </div>

                    <div class='col-lg-7'>
                      <form action='' class='form'>
                        <div class='row'>
                          <div class='col-12'>
                            <div class='form__div'>
                              <input
                                type='text'
                                class='form-control'
                                placeholder=' '
                              />
                              <label for='' class='form__label'>
                                Card Number
                              </label>
                            </div>
                          </div>

                          <div class='col-6'>
                            <div class='form__div'>
                              <input
                                type='text'
                                class='form-control'
                                placeholder=' '
                              />
                              <label for='' class='form__label'>
                                MM / yy
                              </label>
                            </div>
                          </div>

                          <div class='col-6'>
                            <div class='form__div'>
                              <input
                                type='password'
                                class='form-control'
                                placeholder=' '
                              />
                              <label for='' class='form__label'>
                                cvv code
                              </label>
                            </div>
                          </div>
                          <div class='col-12'>
                            <div class='form__div'>
                              <input
                                type='text'
                                class='form-control'
                                placeholder=' '
                              />
                              <label for='' class='form__label'>
                                name on the card
                              </label>
                            </div>
                          </div>
                          <div class='col-12'>
                            <div class='btn btn-success w-100'>Sumbit</div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class='col-12'>
            <div class='btn btn-pay payment'>Make Payment</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Payment
