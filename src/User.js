import React from 'react';

const User = ({ name, description }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{description}</p>
    </div>
  );
}

export default User;