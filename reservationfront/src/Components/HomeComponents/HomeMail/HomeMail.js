import React from 'react'
import "./HomeMail.scss"
function HomeMail() {
  return (
    <section className='homemail'>
        <div className='homemail_width'>
                <h3>Save time, save money!</h3>
                <p>Sign up and we'll send the best deals to you</p>
                <div className='homemail_input'>
                    <input type={"text"} placeholder="Your email address"/>
                    <button>Subscribe</button>
                </div>
        </div>
    </section>
  )
}

export default HomeMail