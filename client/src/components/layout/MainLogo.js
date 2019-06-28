import React, { Fragment } from 'react';
import logo from './TIM.jpg';

export default () => (
  <Fragment>
    <img
      src={logo}
      style={{ width: '20px', margin: 'auto', display: 'block' }}
      alt='Loading...'
    />
  </Fragment>
);