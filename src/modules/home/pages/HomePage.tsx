import Logout from '../../auth/components/Logout';
import React, { Component } from 'react';


interface Props {}

const HomePage = (props: Props) => {
  
  return (
    <div>
      <p>HomePage</p>
      <Logout/>
    </div>
  );
};

export default HomePage;
