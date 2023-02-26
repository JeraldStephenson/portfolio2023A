import React from 'react';
import css from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <div className={`innerWidth ${css.container}`}>
        <div className={css.upperElements}>
          <span>
            Hey There, <br /> I'm Jerald.
          </span>
          <span>
            I am a full-stack engineer <br />
            and I love what I do
          </span>
        </div>
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
