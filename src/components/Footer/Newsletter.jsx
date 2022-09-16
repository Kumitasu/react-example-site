import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className='app__newsletter-heading'>
      <SubHeading title='Newsletter' />
      <h1 className='headtext__cormorant'>Subscribe</h1>
      <p className='p__opensans'>lorem ipsum</p>
    </div>

    <div className='app__newsletter-input flex__center'>
      <input type='email' placeholder='Enter your email address' />
      <button className='custom_botton'>Submit</button>
    </div>
  </div>
);

export default Newsletter;
