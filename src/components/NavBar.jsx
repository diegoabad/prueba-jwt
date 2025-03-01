import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const NavBar = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <nav>
      <ul style={{ display: 'flex', justifyContent: 'space-around' }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        {user && (
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        )}

        {!user && (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}

        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
      {user && <button onClick={logout}>LOGOUT</button>}
    </nav>
  );
};

export default NavBar;
