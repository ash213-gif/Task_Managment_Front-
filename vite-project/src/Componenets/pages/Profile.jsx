import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

export default function Profile() {

    const userId = sessionStorage.getItem('Userid');
   

    const [userdata, setuserdata] = useState({});
    const [newdiv, setnewdiv] = useState(false)
    const [error, setError] = useState(null)
    const [success, setsuccess] = useState(null)
    const navigate = useNavigate()



    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`http://localhost:3030/getUser/${userId}`);
                  console.log(response);
                setuserdata(response.data.Data);

            } catch (e) {
                setError(e.message);

            }
        };
        fetchUserData();
    }, [userId]);


    const handleadmit = async () => {
        setnewdiv(true)

    }
    
    const handleadmin = async () => {
        try {
            const response = await axios.put(`http://localhost:3030/Userupdate/${userId}`);
          

            if (response.data.status === true) {
                setuserdata(prev => ({ ...prev, role: 'admin' }));
                setsuccess('Updated successfully');
                navigate('/admin')
            }
        } catch (e) {
            if (e.response && e.response.data && e.response.data.message) {
                setError(e.response.data.message);
            } else {
                setError(e.message);
            }
        }
    };
    return (
        <div className="flex relative items-center justify-center min-h-screen bg-blue-400 p-4">
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
                <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-700">Role :</h4>
                    <p className="text-blue-600 font-semibold ">{userdata.role}</p>
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

            {error && <p className='text-red-800 text-xl ' >
                {error}
            </p>}
            {newdiv && (
                <div className="h-screen absolute w-full  opacity-100  flex   items-center justify-center bg-gray-800">
                    <div className="bg-white  p-6 rounded-lg shadow-lg text-center">
                        <h2 className="text-xl font-semibold mb-4">Are you sure you want to become an admin?</h2>
                        {success ? success :   error}

                        <button
                            onClick={handleadmin}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
                            Confirm as Admin
                        </button>
                    </div>
                </div>
            )}

        </div>

    );
}