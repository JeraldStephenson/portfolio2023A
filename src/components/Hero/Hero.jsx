import React from 'react';
import css from './Hero.module.scss';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn, slideIn } from '../../utils/motion';

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        {/* upper elements */}
        <div className={css.upperElements}>
          <motion.span
            variants={fadeIn('right', 'tween', 0.2, 1)}
            className='primaryText'
          >
            Hey There, <br /> I'm Jerald.
          </motion.span>
          <motion.span
            variants={fadeIn('left', 'tween', 0.4, 1)}
            className='secondaryText'
          >
            I am a full-stack engineer <br />
            that loves to solve problems
          </motion.span>
        </div>
        {/* person image */}
        <motion.div
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className={`${css.box} `}
        >
          <motion.div
            variants={fadeIn('up', 'tween', 0.3, 1)}
            className={`${css.content}`}
          >
            <img
              src='./profilepic.png'
              alt='profile pic of Jerald Stephenson'
            />
            <h2>
              <span>Download My</span>
            </h2>
            <br />
            <a href='#'>Resume/CV</a>
          </motion.div>
        </motion.div>
        {/* email */}
        {/* <a href='mailto:jstephenson.dev@gmail.com' className={css.email}>
          jstephenson.dev@gmail.com
        </a> */}

        {/* lower elements */}
        <div className={css.lowerElements}>
          <motion.div
            variants={fadeIn('right', 'tween', 0.3, 1)}
            className={css.experience}
          >
            <div className='primaryText'>01</div>
            <div className='secondaryText'>
              <div>Download</div>
              <div>Resume/CV</div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 'tween', 0.5, 1)}
            className={css.certificate}
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
