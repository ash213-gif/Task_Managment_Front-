import React from 'react'
import { FaPlus, FaCheck, FaTimes, FaExclamation ,FaSignOutAlt } from 'react-icons/fa';


export default function Sidebar() {
    return (
        <div className='' >

            <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4 flex items-center'>
                <FaPlus className='mr-2' /> Add Task
            </button>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 flex items-center'>
                <FaCheck className='mr-2' /> Complete Task
            </button>
            <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-4 flex items-center'>
                <FaTimes className='mr-2' /> Incomplete Task
            </button>
            <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mb-4 flex items-center'>
                <FaExclamation className='mr-2' /> Important Task
            </button>
            <button className='bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded mb-4 flex items-center mt-auto'>
                <FaSignOutAlt className='mr-2' /> Logout
            </button>

        </div>
    )
}
