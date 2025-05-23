import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Logout() {

  const navigavte = useNavigate();

  const [logouut, setlogout] = React.useState(true)
  const [canncel, setcancel] = React.useState(false)

  const logout = () => {
    setlogout(true)
    navigavte('/signup')
  }

  const cancel = () => {
    setcancel(false)
    navigavte('/')
  }

  return (
    // <div class="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center ">
    <>

      <div className="flex justify-center items-center h-screen">
        <div className="bg-white flex-col flex p-4 rounded shadow-md w-96">
          <h2 className="text-lg font-bold mb-2">Confirm Logout</h2>
          <p className="mb-4">Are you sure you want to log out?</p>
          <div className="flex justify-end space-x-2">
            <button
              onClick={cancel}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">
              Cancel
            </button>
            <button
              onClick={logout}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
    // </div>
  )
}
