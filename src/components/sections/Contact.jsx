import React from 'react'

import linkedin from '../../imgs/linkedin.png'
import fb from '../../imgs/fb.png'

import ContactForm from './Contact-form'

function Contact() {
  return (
    <section id='contact' className='section'>
        <div>
            <h3>Contact Me</h3>
            <div className='contact-card'>
                <div className='contact-text'>
                    <h4>Get in touch</h4>
                    <div className='contact-info'>
                        <p><strong>Email:</strong> angeloclint.dev@gmail.com</p>
                        <p><strong>Phone:</strong> +639950145406</p>
                    </div>
                    <div className='social-media'>
                        <p>
                            I'm looking forward to work with you soon. Feel free to message me in social media.
                        </p>
                        <a href="https://www.linkedin.com/in/acorbillo0120/" target='_blank'>
                            <img src={linkedin} alt="" />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100004395525345" target='_blank'>
                            <img src={fb} alt="" />
                        </a>
                    </div>
                </div>
                <ContactForm/>
            </div>
        </div>
    </section>
  )
}

export default Contact