import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [rollNumber, setRollNumber] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [house, setHouse] = useState('');
  const [isCandidate, setIsCandidate] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(${import.meta.env.VITE_API_URL}/auth/register, { rollNumber, name, password, house, isCandidate });
      localStorage.setItem('token', res.data.token);
      navigate('/login');
    } catch (err) {
      console.error(err);
      alert('Registration failed');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Roll Number:</label>
          <input type="text" value={rollNumber} onChange={(e) => setRollNumber(e.target.value)} required />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div>
          <label>House:</label>
          <input type="text" value={house} onChange={(e) => setHouse(e.target.value)} required />
        </div>
        <div>
          <label>Candidate:</label>
          <input type="checkbox" checked={isCandidate} onChange={(e) => setIsCandidate(e.target.checked)} />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;