import React, { useRef } from 'react';
import css from './Contact.module.scss';
import { motion } from 'framer-motion';
import { staggerChildren, fadeIn } from '../../utils/motion';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <motion.section
      id='contact'
      variants={staggerChildren}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className='anchor' id='contact'></a>
      <div className={`${css.container} innerWidth`}>
        <div className={`flexCenter  ${css.heading}`}>
          {/* animate? */}
          <div>
            <span className='primaryText'>Contact Me</span>
          </div>
        </div>
        <div className={` ${css.projectType}`}>
          <motion.span variants={fadeIn('right', 'tween', 0.5, 0.6)}>
            Send me an Email
          </motion.span>
        </div>
        <motion.form
          ref={form}
          className='yPaddings flexCenter'
          onSubmit={sendEmail}
          variants={fadeIn('up', 'tween', 0.3, 1)}
        >
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
          <button type='submit' className={`${css.btn}`}>
            Send Message
          </button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;
