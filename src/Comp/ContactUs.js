import React from 'react'
import footerlogo from '../images/footerlogo.png'

export const ContactUs = () => {
  return (
    <footer>
    <div className="logo-footer">
        <img src={footerlogo}/>
    </div>
    <div className="cont-footer"><h1 style={{fontWeight: "600"}}>Contact Us</h1></div>
    <div className="cont-container">
        <span><i className="fa fa-map-marker" aria-hidden="true"></i>
            Location</span>
        <span><i className="fa fa-phone" aria-hidden="true"></i>
            Call +91 1234567890</span>
        <span><i className="fa fa-envelope" aria-hidden="true"></i>
            demo@gmail.com</span>
    </div>
    <div className="copyright">@2023 All Rights Reserved. Developer: Hardik Sawhney </div>
</footer>
  )
}
