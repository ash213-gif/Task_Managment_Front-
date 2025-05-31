import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AdminProfile() {



  const [userData, setUserData] = useState({});
  const [error, setError] = useState(null)

  const userId = sessionStorage.getItem('Userid');

  useEffect((e) => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3030/getUser/${userId}`);
        setUserData(response.data.Data);
      } catch (e) {
        if (e.response && e.response.data && e.response.data.msg) {
          setError(e.response.data.msg);
        } else {
          setError(e.message);
        }
      }
    };
    fetchUserData();
  }, [userId]);


  return (
    <div className="bg-white p-20 m-4 h-full  rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Admin Info</h2>
      <div className="space-y-4">
        <div>
          <p className="text-sm font-medium text-gray-500">Admin Name</p>
          <p className="text-lg text-gray-800">{userData.FullName}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">Email ID</p>
          <p className="text-lg text-gray-800">{userData.Email}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500"> Role :</p>
          <p className="text-lg text-gray-800">{userData.role}</p>
        </div>
      </div>

      {error && <p className='text-red-800 text-xl ' > {error} </p>}
    </div>
  );
}