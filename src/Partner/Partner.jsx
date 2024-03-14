import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PartnerLogin from './Login/Login';
import PartnerNumber from './Number Otp/Otp';
import PartnerRole from './Role/Role';
import PartnerProfile from './Profile/Profile';
import PartnerKyc from './KYC/Kyc';
import PartnerNumberVerify from './Number-Verficxation/Number';
import PartnerOtp from './Otp/Otp';
import PartnerAadhar from './Aadhar Number/Aadhar';
import PartnerAadharOtp from './AadharOtp/PartnerAadharOtp';
import PartnerRegister from './Registraction Certificate/Registration';
import PartnerGst from './Gst-Update/Gst';
import PartnerCompany from './Company Details/Company';
import PartnerMap from './Locations/Map';
import PartnerHome from './Manufacture Home/Home';

const Partner = () => {
  return (
    <Routes>
      <Route path='/partner-login' element={<PartnerLogin />}></Route>

      <Route path='/partner-Verify' element={<PartnerNumber />}></Route>
      <Route path='/partner-role' element={<PartnerRole />}></Route>
      <Route path='/partner-profile' element={<PartnerProfile />}></Route>
      <Route path='/partner-kyc' element={<PartnerKyc />}></Route>
      <Route path='/partner-number' element={<PartnerNumberVerify />}></Route>
      <Route path='/partner-otp' element={<PartnerOtp />}></Route>
      <Route path='/partner-aadhar' element={<PartnerAadhar />}></Route>
      <Route path='/partner-aadharotp' element={<PartnerAadharOtp />}></Route>
      <Route path='/partner-gst' element={<PartnerGst />}></Route>
      <Route path='/partner-register' element={<PartnerRegister />}></Route>
      <Route
        path='/partner-companydetails'
        element={<PartnerCompany />}
      ></Route>
      <Route path='/partner-map' element={<PartnerMap />}></Route>
      <Route path='/partner-home' element={<PartnerHome />}></Route>
    </Routes>
  );
};

export default Partner;
