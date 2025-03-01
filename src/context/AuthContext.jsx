import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { createContext, useEffect, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const userJWT = jwtDecode(token);
      setToken(token);
      setUser(userJWT);
    }
  }, []);

  const login = async ({ email, password }) => {
    try {
      const response = await axios.post('http://localhost:3010/login', {
        email,
        password,
      });
      const userJWT = jwtDecode(response.data.token);
      setUser(userJWT);
      setToken(response.data.token);
      localStorage.setItem('token', response.data.token);
      return response;
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ login, token, user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
