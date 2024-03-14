import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DriverLogin from './Login/Login';
import DriverNumber from './Number Otp/Otp';
import DriverRole from './Role/Role';
import DriverCode from './Code Driver/Otp';
import DriverProfile from './Profile/Profile';
import DriverKyc from './KYC/Kyc';
import DriverVechile from './Vechile/Kyc';
import DriverUpload from './Vechile Upload/Fssai';
import DriverNumberVerify from './Number-Verficxation/Number';
import DriverOtp from './Otp/Otp';
import DriverAadhar from './Aadhar Number/Aadhar';
import DriverRegister from './Registraction Certificate/Registration';
import DriverGst from './Gst-Update/Gst';
import DriverCompany from './Company Details/Company';
import DriverMap from './Locations/Map';
import DriverHome from './Manufacture Home/Home';
import DriverAAdharOtp from './AAdharOtp/DriverAadharOtp';
import VehicleInsurence from './VehicleDocuments/VehicleInsurence';
import DrivingLicense from './VehicleDocuments/DrivingLicense';
import RoadTax from './VehicleDocuments/RoadTax';
import VehiclePermit from './VehicleDocuments/VehiclePermit';
import VehicleRegCertificate from './VehicleDocuments/VehicleRegCertificate';
import VehicleNumPlate from './VehicleDocuments/VehicleNumPlate';

const Driver = () => {
  return (
    <Routes>
      <Route path='/driver-login' element={<DriverLogin />}></Route>
      <Route path='/driver-code' element={<DriverCode />}></Route>
      <Route path='/driver-Verify' element={<DriverNumber />}></Route>
      <Route path='/driver-vechile' element={<DriverVechile />}></Route>
      <Route path='/driver-upload' element={<DriverUpload />}></Route>
      <Route path='/driver-role' element={<DriverRole />}></Route>
      <Route path='/driver-profile' element={<DriverProfile />}></Route>
      <Route path='/driver-kyc' element={<DriverKyc />}></Route>
      <Route path='/driver-number' element={<DriverNumberVerify />}></Route>
      <Route path='/driver-otp' element={<DriverOtp />}></Route>
      <Route path='/driver-aadhar' element={<DriverAadhar />}></Route>
      <Route path='/driver-gst' element={<DriverGst />}></Route>
      <Route path='/driver-register' element={<DriverRegister />}></Route>
      <Route path='/driver-companydetails' element={<DriverCompany />}></Route>
      <Route path='/driver-map' element={<DriverMap />}></Route>
      <Route path='/driver-home' element={<DriverHome />}></Route>
      <Route path='/driver-aadharotp' element={<DriverAAdharOtp />}></Route>
      <Route path='/vehicle-insurence' element={<VehicleInsurence />} />
      <Route path='/driving-license' element={<DrivingLicense />} />
      <Route path='/road-tax' element={<RoadTax />} />
      <Route path='/vehicle-permit' element={<VehiclePermit />} />
      <Route
        path='/vehicle-reg-certificate'
        element={<VehicleRegCertificate />}
      />
      <Route path='/vehicle-numplate' element={<VehicleNumPlate />} />
    </Routes>
  );
};

export default Driver;
