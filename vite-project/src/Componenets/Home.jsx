import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

export default function Home() {
    return (
        <div className='flex lg:h-screen  gap-5    ' >

            <div className=' w-1/6 border-2 rounded-xl  bg-blue-400 border-white  ' >

                <Sidebar />
            </div>
            <div className='w-5/6  border-2 rounded-xl bg-blue-400 border-white  ' >
                <Outlet />
            </div>

        </div>
    )
}
