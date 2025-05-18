import React,{useNavigate} from 'react'

export default function Logout() {

  return (
    <div  class="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center ">
  <div class="bg-white p-4 rounded shadow-md w-96">
    <h2 class="text-lg font-bold mb-2">Confirm Logout</h2>
    <p class="mb-4">Are you sure you want to log out?</p>
    <div class="flex justify-end space-x-2">
      <button id="cancel-btn" class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">
        Cancel
      </button>
      <button id="confirm-logout-btn" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Logout
      </button>
    </div>
  </div>
</div>
  )
}
