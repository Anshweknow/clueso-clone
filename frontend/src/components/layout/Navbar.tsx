import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/layout.css';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <header className="navbar">
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </header>
  );
};

export default Navbar;