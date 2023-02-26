import React from 'react';
import css from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <div className={`innerWidth ${css.container}`}>
        {/* upper elements */}
        <div className={css.upperElements}>
          <span className='primaryText'>
            Hey There, <br /> I'm Jerald.
          </span>
          <span className='secondaryText'>
            I am a full-stack engineer <br />
            and I love what I do
          </span>
        </div>
        {/* person image */}
        <div className={css.person}>
          <img src='./profilepic.png' alt='profile pic of Jerald Stephenson' />
        </div>
        {/* email */}
        <a href='mailto:jstephenson.dev@gmail.com' className={css.email}>
          jstephenson.dev@gmail.com
        </a>

        {/* lower elements */}
        <div className={css.lowerElements}>
          <div className={css.experience}>
            <div className='primaryText'>01</div>
            <div className='secondaryText'>
              <div>Download</div>
              <div>Resume/CV</div>
            </div>
          </div>
          <div className={css.certificate}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
