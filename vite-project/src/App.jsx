import React from 'react';
import { Home, Alltask, Complete, Incomplete, Login, Signup, Otpvery, Logout } from './Allcomponenets';
import AdminDash from './Componenets/Admin/AdminDash';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/otpverify/:Userid" element={<Otpvery />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDash />} />
        <Route exact path="/" element={<Home />}>
          <Route index element={<Alltask />} />
          <Route path="/complete" element={<Complete />} />
          <Route path="/incomplete" element={<Incomplete />} />
          <Route path="/logout" element={<Logout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}