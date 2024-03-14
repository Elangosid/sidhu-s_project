import React from 'react'
import { Routes, Route } from 'react-router-dom'
import RetailerLogin from './Login/Login'
import RetailerNumber from './Number Otp/Otp'
import RetailerProfile from './Profile/Profile'
import RetailerKyc from './KYC/Kyc'
import RetailerNumberVerify from './Number-Verficxation/Number'
import RetailerOtp from './Otp/Otp'
import RetailerAadhar from './Aadhar Number/Aadhar'
import RetailerAadharOtp from './Aadhar Otp/Otp'
import RetailerGst from './Gst-Update/Gst'
import RetailerCompany from './Company Details/Company'
import RetailerMap from './Locations/Map'
import RetailerHome from '../retailerHome/Home'
import SingleProduct from '../retailerHome/SingleProduct'
import Category from '../retailerHome/Category'
import AddCart from '../retailerHome/AddToCart/AddCart'
import Order from '../retailerHome/Order-page/Order'
import MyOrder from '../retailerHome/MyOrders/MyOrder'
import SubCategory from '../retailerHome/SubCategory/SubCategory'
import ReOrder from '../retailerHome/ReOrder/ReOrder'
import MyOrderDetails from '../retailerHome/MyOrder-details/MyorderDetails'
import Slider from '../retailerHome/Slider'
// import Payment from '../retailerHome/Payment/Payment'
const Retailer = () => {
  return (
    <Routes>
      <Route path='/retailer-login' element={<RetailerLogin />}></Route>
      <Route path='/retailer-Verify' element={<RetailerNumber />}></Route>
      <Route path='/retailer-profile' element={<RetailerProfile />}></Route>
      <Route path='/retailer-kyc' element={<RetailerKyc />}></Route>
      <Route path='/retailer-number' element={<RetailerNumberVerify />}></Route>
      <Route path='/retailer-otp' element={<RetailerOtp />}></Route>
      <Route path='/retailer-aadhar' element={<RetailerAadhar />}></Route>
      <Route
        path='/retailer-aadhar-otp'
        element={<RetailerAadharOtp />}
      ></Route>
      <Route path='/retailer-gst' element={<RetailerGst />}></Route>
      <Route
        path='/retailer-companydetails'
        element={<RetailerCompany />}
      ></Route>
      <Route path='/retailer-map' element={<RetailerMap />}></Route>
      <Route path='/retailer-home' element={<RetailerHome />}></Route>
      <Route path='/retailer-single-product' element={<SingleProduct />} />
      <Route path='/retailer-category' element={<Category />} />
      <Route path='/retailer-cart' element={<AddCart />} />
      <Route path='/retailer-order' element={<Order />} />
      <Route path='/retailer-myorder' element={<MyOrder />} />
      <Route path='/retailer-subcategory' element={<SubCategory />} />
      <Route path='/retailer-reorder' element={<ReOrder />} />
      {/* <Route path='/retailer-payment' element={<Payment />} /> */}
      <Route path='/retailer-myorderdetails' element={<MyOrderDetails />} />
      <Route path='/retailer-slider' element={<Slider />} />
    </Routes>
  )
}

export default Retailer
