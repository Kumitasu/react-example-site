import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact</h1>
        <p className='p__opensans'>Adres</p>
        <p className='p__opensans'>19272-121-212</p>
        <p className='p__opensans'>9291-2121-2121</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt='footer_logo' />
        <p className='p__opensans'>Lorem ipsum</p>
        <img src={images.spoon} alt='spoon' className='spoon__img' style={{marginTop: 15}}  />
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Mon-Friday:</p>
        <p className='p__opensans'>8.00 - 12.00</p>
        <p className='p__opensans'>Sat-Sun:</p>
        <p className='p__opensans'>8.00 - 15.00</p>
      </div>
    </div>

    <div className='footer__copyright'>
      <p className='p__opensans'>Gericht</p>
    </div>
  </div>
);

export default Footer;
