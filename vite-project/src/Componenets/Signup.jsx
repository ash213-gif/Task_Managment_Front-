import React, { useState } from 'react';

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);

  const formFields = [
    { label: 'Username', type: 'text', name: 'username' },
    { label: 'Email', type: 'email', name: 'email' },
    { label: 'Password', type: 'password', name: 'password' },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // API call ya database mein data save karne ka logic yahan daalein
    console.log('Sign up details:', formData);
    setError(null);
    setFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-8 bg-blue-100 rounded-3xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
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
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          Sign Up
        </button>
      </form>
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