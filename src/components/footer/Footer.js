
import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer>
        <div className='container'>
            <div className='footer_main'>
                <div className='footer_item'>
                    <h3>Contact Us</h3>
                    <p>9 W 53rd St, New York, NY 10019, USA</p>
                    <p>+1 212-344-1230</p>
                    <p>+1 212-555-1230</p>
                </div>
                <div className='footer_item'>
                  <h2>Gerícht</h2>
                  <p style={ {color:"#FFFFFF"} }>"The best way to find yourself is to lose yourself in</p>
                  <p style={ {color:"#FFFFFF"} }>the service of others.”</p>
                  <div className='footer_item_icon_one'>
                    <i class="fa-solid fa-key"></i>
                  </div>
                  <div className='footer_item_icon_two'>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                  </div>
                </div>
                <div className='footer_item'>
                  <h3>Working Hours</h3>
                  <p>Monday-Friday:</p>
                  <p>08:00 am -12:00 am</p>
                  <p>Saturday-Sunday:</p>
                  <p>07:00am -11:00 pm</p>
                </div>
            </div>
        </div>
        <div className='footer_down'>
          <p>2021 Gerícht. All Rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer
