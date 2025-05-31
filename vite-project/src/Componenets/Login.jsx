import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    Email: '',
    Passord: '', // Corrected the typo here
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null); // Corrected the function name
  const navigate = useNavigate();

  const formFields = [
    { label: 'Email', type: 'email', name: 'Email' },
    { label: 'Password', type: 'password', name: 'Passord' }, // Corrected the typo here
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3030/login', formData);

      if (response.data.status === true) {
        setSuccess(response.data.msg);
        sessionStorage.setItem('Userid', response.data.UserId);
        setFormData({
          Email: '',
          Password: '',
        });
       await   navigate('/user');
      }
    } catch (e) {
      console.log(e.response); // Log the error response
      if (e.response && e.response.data && e.response.data.msg) {
        setError(e.response.data.msg);
      } else {
        setError(e.message );
      }
      setSuccess(null);
    }
  };

  return (
    <div className="max-w-sm  mx-auto mt-10 p-8 bg-blue-100 rounded-3xl  shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        {formFields.map((field) => (
          <div key={field.name} className="mb-4">
            <label className="block text-gray-700 mb-2">{field.label}:</label>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              required
              className="block w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}
        {success && <p className="text-green-500 mb-4">{success}</p>}
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          Login
        </button>
      </form>
      <p className="text-center mt-4">
        Don't have an account?{' '}
        <a
          href="/signup"
          className="text-blue-500 hover:text-blue-700 font-bold"
        >
          Sign up
        </a>
      </p>
    </div>
  );
}

export default Login;