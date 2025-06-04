import React from 'react';
import { Home, Alltask, Complete, Incomplete, Login, Signup, Otpvery, Logout, Profile } from './Allcomponenets';
import AdminDash from './Componenets/Admin/AdminDash';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>


        {/*  userDashboard Dashboard */}

        <Route exact path="/user" element={<Home />}>
          <Route index element={<Alltask />} />
          <Route path="/user/complete" element={<Complete />} />
          <Route path="/user/incomplete" element={<Incomplete />} />
          <Route path='/user/profile' element={<Profile />} />
          <Route path="/user/logout" element={<Logout />} />
        </Route>

        {/* Puclic Route  */}
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/otpverify/:Userid" element={<Otpvery />} />
        <Route path="/login" element={<Login />} />


        {/*   Admin  Dashboard */}
        <Route path="/admin" element={<AdminDash />} />

      </Routes>
    </BrowserRouter>
  );
}