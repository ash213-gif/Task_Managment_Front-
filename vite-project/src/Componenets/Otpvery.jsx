import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function OtpVerify() {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const navigate = useNavigate();

  const params = useParams();
  const userid = params.Userid;

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3030/VerifyOtp/${userid}`, { Otp: otp });

      if (response.status === 200) {
        setSuccess(response.data.msg);
        setError(null);
        await navigate(`/user`)

      }
    } catch (e) {
      if (e.response && e.response.data && e.response.data.msg) {
        setError(e.response.data.msg);
      } else {
        setError(e.msg);
      }
      setSuccess(null);
    }
    setOtp('');

  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">OTP Verification</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Enter OTP:</label>
          <input
            name='Otp'
            type="text"
            value={otp}
            onChange={handleChange}
            required
            className="block w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          Verify OTP
        </button>
      </form>
    </div>
  );
}

export default OtpVerify;