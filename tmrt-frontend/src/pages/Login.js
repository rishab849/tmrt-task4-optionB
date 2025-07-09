// src/pages/Login.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../assets/logo.png';
import '../styles/main.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/login', { email, password });
      if (res.data.message === 'Login successful') {
        navigate('/home', { replace: true });
      } else {
        alert('Login failed');
      }
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <div className="auth-container">
      <header className="logo-only-header">
        <img src={logo} alt="TMRT Logo" className="logo-img" />
      </header>

      <form className="auth-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input type="email" onChange={e => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit">Login</button>
        <p>Don't have an account? <span className="link" onClick={() => navigate('/register')}>Register</span></p>
      </form>
    </div>
  );
}
