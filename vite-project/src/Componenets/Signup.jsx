import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
  const [formData, setFormData] = useState({
    FullName: '',
    Email: '',
    Passord: '',
  });



  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const formFields = [
    { label: 'FullName', type: 'text', name: 'FullName' },
    { label: 'Email', type: 'email', name: 'Email' },
    { label: 'Passord', type: 'password', name: 'Passord' },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3030/registration', formData);
       await console.log(response);

      setFormData({
        FullName: '',
        Email: '',
        Passord: '',
      })

      sessionStorage.setItem('Userid', response.data.data.Userid)
      navigate(`/otpverify/${response.data.data.Userid}`);


    } catch (e) { 
      setError(e.response.data.message);
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-8 bg-blue-100 rounded-3xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        {formFields.map((field, i) => (
          <div key={i} className="mb-4">
            <label className="block text-gray-700 mb-2">{field.label}:</label>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className="block w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          Sign Up
        </button>
      </form>
      {error && (
        <p className="text-green-500 mt-4">{error}</p>
      )}
      <p className="text-center mt-4">
        Already have an account?{' '}
        <a
          href="/login"
          className="text-blue-500 hover:text-blue-700 font-bold"
        >
          Please login
        </a>
      </p>
    </div>
  );
}

export default SignUp;