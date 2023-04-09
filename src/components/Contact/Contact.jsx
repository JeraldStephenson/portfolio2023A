import React from 'react';
import css from './Contact.module.scss';

const Contact = () => {
  return (
    <section id='contact' className={`paddings ${css.wrapper}`}>
      <a className='anchor' id='contact'></a>
      <div className={`${css.container} innerWidth `}>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
        <form action='' className='innerWidth'>
          <input
            type='text'
            name='name'
            id=''
            placeholder='Your Full Name'
            required
          />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea
            name='message'
            id=''
            cols='30'
            rows='10'
            placeholder='Your Message'
            required
          ></textarea>
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
