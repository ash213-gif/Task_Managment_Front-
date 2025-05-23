import React from 'react'
import { Home, Alltask ,Complete,Incomplete  , Login,Signup , Logout } from './Allcomponenets'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div className='relative ' >

     {/* <Signup/> */}
      <BrowserRouter>
       
        <Routes>
          
          <Route exact  element={<Home />} >
            <Route index  element={<Alltask />} />
            <Route path='/complete'  element={<Complete />} />
            <Route path='/incomplete'  element={<Incomplete />} />
            <Route path='/logout'  element={<Logout />} />
            
          </Route>
          <Route path='/signup'  element={<Signup/>} />
          <Route path='/login'  element={<Login/>} />
        </Routes>
      </BrowserRouter>


    </div>
  )
}
