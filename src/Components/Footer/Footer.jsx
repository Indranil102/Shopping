import React from 'react'
import './Fotter.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatapp_icon from '../Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
           <img src={footer_logo} alt="" />
           <p>SHOPPER</p>

      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">

        <div className="footer-icon-cointer">
            <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icon-cointer">
            <img src={pintester_icon} alt="" />
            
        </div>
        <div className="footer-icon-cointer">
            <img src={whatapp_icon} alt="" />
            
        </div>
      </div>

      <div className="footer-copyright">
        <hr />
        <p>Copyright @2024 - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
