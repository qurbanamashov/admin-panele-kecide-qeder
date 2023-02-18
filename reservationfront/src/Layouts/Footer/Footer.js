import React from 'react'
import "./Footer.scss"
function Footer() {
  return (
    <footer>
        <div className='footer_width'>
            <div className='footer_contoct_us'>
                <h3>Coontact us</h3>
                <div className='footer_contact_number'>
                    <p>Toll Free Customer Care</p>
                    <span>+994 51 697 79 77</span>
                </div>
                <div className='footer_contact_number'>
                    <p>gmail</p>
                    <span>reservation@gmail.com</span>
                </div>
            </div>
            <div className='footer_navbar_menu'>
                <h3>Company</h3>
                <ul>
                    <li>Home</li>
                    <li>Listing</li>
                    <li>About</li>
                    <li>Contant</li>
                </ul>
            </div>
            <div className='footer_media'>
                <h3>Social Media</h3>
                <div className='footer_media_menu'>
                    <div className='footer_icon'>
                    <i className="fa-brands fa-instagram"></i><span>hotel_reservation</span>
                    </div>
                    <div className='footer_icon'>
                    <i className="fa-brands fa-facebook"></i><span>Hotel Reservation</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='footer_auter'>
            <span>Hotel Reservation</span>
        </div>
    </footer>
  )
}

export default Footer