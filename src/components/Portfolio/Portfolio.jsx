import React from 'react';
import css from './Portfolio.module.scss';

const Portfolio = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <div className={`innerwidth flexCenter ${css.container}`}>
        <div className={`flexCenter ${css.heading}`}>
          <div>
            <span className='primaryText'>My Latest Work</span>
            <p style={{ marginTop: '10px' }}>
              Perfect solution for digial experience
            </p>
          </div>
          <span className='secondaryText'>Explore More Works</span>
        </div>
        {/*  images - replace src with screenshots of my projects */}
        {/* <div className={css.showCase}>
          <MotionConfig.img
            variants={fadeIn('up', 'tween', 0.5, 0.6)}
            src='./showCase1.png'
            alt='project'
          />
          <MotionConfig.img
            variants={fadeIn('up', 'tween', 0.5, 0.6)}
            src='./showCase2.png'
            alt='project'
          />
          <MotionConfig.img
            variants={fadeIn('up', 'tween', 0.5, 0.6)}
            src='./showCase3.png'
            alt='project'
          />
        </div> */}
      </div>
    </section>
  );
};

export default Portfolio;
