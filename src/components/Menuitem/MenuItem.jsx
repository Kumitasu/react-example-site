import React from 'react';

import './MenuItem.css';

const MenuItem = ({title, price, tags}) => (
  <div className='app__menuItem'>
    <div className='app__menuItem-head'>
      <div className='app__menuItem-name'>
        <p className='p__cormorant' style={{ color: '#DCCA87'}}>{title}</p>
      </div>
    </div>
  </div>
);

export default MenuItem;
