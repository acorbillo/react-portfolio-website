import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vaakj7o', 'template_qkn1qxo', form.current, '5oAC9VP-7uc4Rn0gX')
        .then((result) => {
            console.log(result.text);
            alert('Sent Successfully')

            const inputs = document.querySelectorAll('input[type="text"], input[type="email"], textarea');
              inputs.forEach(input => input.value = ''); // Reset the input fields

        }, (error) => {
            console.log(error.text);
            alert('Try again')
        });

      
    };
  
    return (
        <form className='contact-form' ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            placeholder='Name...'
            name="user_name"
          />
          <input
            type="email"
            placeholder='Email...'
            name="user_email"
          />
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder='Message'
          ></textarea>
          <button className='submit-btn'>Send</button>
        </form>
    );
  };
  
  export default ContactForm;