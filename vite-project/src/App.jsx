import React from 'react'
import { Home, Alltask ,Complete,Incomplete ,Logout } from './Allcomponenets'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
export default function App() {
  return (
    <div  >
      <BrowserRouter>
        <Routes>
          <Route exact  element={<Home />} >
            <Route index  element={<Alltask />} />
            <Route path='/complete'  element={<Complete />} />
            <Route path='/incomplete'  element={<Incomplete />} />
            <Route path='/logout'  element={<Logout />} />
            
          </Route>
        </Routes>
      </BrowserRouter>


    </div>
  )
}
