import React from 'react';
import Sidebar from './Sidebar'

export default function Home() {
    return (
        <div className='lg:flex gap-2'>
            <div className='lg:w-1/6 lg:flex flex-col bg-blue-400  lg:rounded-xl border-2 border-white lg:h-screen p-4'>
                <h5 className="text-2xl font-mono  font-bold   ">Task Management System</h5>
                <span className="text-sm italic text-gray-600">Sidebar@gmail.com</span>

                <Sidebar />
            </div>
            <div className='lg:w-5/6 bg-blue-400 border-2 lg:rounded-xl border-white lg:h-screen p-4'>
                home 2
            </div>
        </div>
    );
}
