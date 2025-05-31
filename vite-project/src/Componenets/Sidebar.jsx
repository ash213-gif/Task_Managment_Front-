import React from 'react'
import { FaTasks, FaCheckCircle, FaExclamationCircle, FaPlusCircle, FaSignOutAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Sidebar() {

   

    const task = [
        { title: 'All task', icon: <FaTasks />, link: '/user' },
        { title: 'Complete', icon: <FaCheckCircle />, link: '/user/complete' },
        { title: 'Incomplete', icon: <FaExclamationCircle />, link: '/user/incomplete' },
        { title: 'Profile', icon: <FaExclamationCircle />, link: '/user/profile' },
        
    ]
    return (
        <>
            <div className=' h-screen flex flex-col' >
                {task.map((item, i) => (
                    <Link to={item.link}>
                        <div className='bg-blue-600 p-2 m-2  rounded-xl text-white flex items-center gap-2 hover:bg-blue-800 transition duration-300'
                            key={i} >
                            {item.icon}
                            {item.title}
                        </div>
                    </Link>
                ))}
                <Link to='/user/logout' >
                    <button
                        
                        className='bg-blue-600   m-1.5 p-2 w-[190px]  rounded-xl text-white flex items-center  hover:bg-blue-800  transition duration-300' >
                        <FaSignOutAlt />
                        Logout</button>
                </Link>


            </div>
        </>
    )
}