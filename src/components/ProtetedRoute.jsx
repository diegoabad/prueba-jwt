import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const ProtetedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (!user) {
    return <div>Debes iniciar sesión para ver el profile</div>;
  }
  return <>{children}</>;
};

export default ProtetedRoute;
