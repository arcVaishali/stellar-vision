import React from 'react';

import { NavLink } from 'react-router-dom';
import logo from './Images/logoimage.ico';
const Footer = () => {
  return (
<>
<footer>
  <div className="footerimg1">
  <img src={logo} alt="footerlogoomg"  className='footerlogoomg'/>
           <p className='footerimg1txt'> Relief Connect </p>
            </div>
     <div className='factsfooter'>
     <NavLink>FACTS</NavLink>
     </div>
     <div className='footerlast'>
     4434 University Drive #170-117, Houston TX, 77204
     </div>
    </footer>
</>
  )
}

export default Footer;