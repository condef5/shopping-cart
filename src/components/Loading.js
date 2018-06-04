import React from 'react';
import loader from '../img/loader.svg';

const Loading = () => (
  <div style={{ display: 'flex', justifyContent: 'center'}}>
    <img src={loader} alt="loader"/>
  </div>
)

export default Loading;
