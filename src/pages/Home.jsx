import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Welcome to the E-Voting System</h1>
    <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
  </div>
);

export default Home;