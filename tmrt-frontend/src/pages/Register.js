// src/pages/Register.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../assets/logo.png';
import '../styles/main.css';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/register', { name, email, password });
      alert(res.data.message);
      if (res.data.message === 'User registered successfully') {
        navigate('/');
      }
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
    <div className="auth-container">
      <header className="logo-only-header">
        <img src={logo} alt="TMRT Logo" className="logo-img" />
      </header>

      <form className="auth-form" onSubmit={handleRegister}>
        <h2>Register</h2>
        <input type="text" onChange={e => setName(e.target.value)} placeholder="Name" required />
        <input type="email" onChange={e => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit">Register</button>
        <p>Already have an account? <span className="link" onClick={() => navigate('/')}>Login</span></p>
      </form>
    </div>
  );
}
