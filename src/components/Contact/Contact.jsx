import React from 'react';
import css from './Contact.module.scss';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn, slideIn } from '../../utils/motion';

const Contact = () => {
  return (
    <section id='contact' className={`paddings ${css.wrapper}`}>
      <a className='anchor' id='contact'></a>
      <div className={`${css.container} innerWidth `}>
        {/* <h5>Get In Touch</h5>
        <h2>Contact Me</h2> */}
        <div className={`flexCenter ${css.heading}`}>
          <div>
            <span className='primaryText'>Contact Me</span>
          </div>
          {/* delete a tag if dont plan on linking defualt email app */}
          <a
            href='mailto:jstephenson.dev@gmail.com'
            target={'_blank'}
            className='secondaryText'
          >
            {/* Email */}
          </a>
        </div>
        <div className={` ${css.projectType}`}>
          <motion.span variants={fadeIn('right', 'tween', 0.5, 0.6)}>
            Send me an Email
          </motion.span>
        </div>
        <form action='' className='yPaddings'>
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
