import { Link } from 'react-router-dom';
import '../styles/main.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h3 className="logo">TMRT</h3>
      <div>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}