import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>PROFILE</h1>
      name: {user.name}
      <br />
      email:
      {user.email}
    </div>
  );
};

export default Profile;
