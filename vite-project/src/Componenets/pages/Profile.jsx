import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

export default function Profile() {
    const userId = sessionStorage.getItem('Userid');
    const [userdata, setuserdata] = useState({});
    const navigate = useNavigate()


    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`http://localhost:3030/getUser/${userId}`);
                setuserdata(response.data);

            } catch (error) {
                setError(error.message);

            }
        };
        fetchUserData();
    }, [userId]);


    const handleadmit = () => {

        navigate('/login')
    }



    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-400 p-4">
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">User Profile</h2>
                <div className="flex flex-col items-center mb-4">
                    <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                        <span className="text-4xl font-bold  text-gray-600">{userdata.FullName}</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-700">Profile Name:</h4>
                    <p className="text-blue-600 font-semibold ">{userdata.FullName}</p>
                </div>
                <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-700">Email:</h4>
                    <p className="text-blue-600 font-semibold ">{userdata.Email}</p>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-md">
                    <span className="text-lg font-semibold text-gray-700">Become an Admin</span>
                    <button
                        onClick={handleadmit}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                        Admit
                    </button>
                </div>
            </div>
        </div>

    );
}