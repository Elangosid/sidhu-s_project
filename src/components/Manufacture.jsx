import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Gst from './Gst-Update/Gst'
import Registration from './Registraction Certificate/Registration'
import CompanyDetail from './Company Details/Company'
import Map from './Locations/Map'
import Number from './Number-Verficxation/Number'
import Otp from './Otp/Otp'
import NumberOtp from './Number Otp/Otp'
import Role from './Role/Role'
import Profile from './Profile/Profile'
import Kyc from './KYC/Kyc'
import Landing from './Landing Page/Landing'
import Aadhar from './Aadhar Number/Aadhar'
import AadharOtp from './Aadhar otp/AadharOtp'
import Home from './Manufacture Home/Home'
import Login from './Login/Login'
import Fssai from './Fssai/Fssai'

const Manufacture = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />} exact></Route>
      <Route path='/role' element={<Role />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/verify-otp' element={<NumberOtp />}></Route>
      <Route path='/profile' element={<Profile />}></Route>
      <Route path='/kyc' element={<Kyc />}></Route>
      <Route path='/number' element={<Number />}></Route>
      <Route path='/otp' element={<Otp />}></Route>
      <Route path='/aadhar' element={<Aadhar />}></Route>
      <Route path='/aadharotp' element={<AadharOtp />} />
      <Route path='/gst' element={<Gst />}></Route>
      <Route path='/registration' element={<Registration />}></Route>
      <Route path='/fssai' element={<Fssai />}></Route>
      <Route path='/companydetails' element={<CompanyDetail />}></Route>
      <Route path='/map' element={<Map />}></Route>
      <Route path='/home' element={<Home />}></Route>
    </Routes>
  )
}

export default Manufacture
