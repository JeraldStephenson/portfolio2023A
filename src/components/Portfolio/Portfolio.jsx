import React from 'react';
import css from './Portfolio.module.scss';
import { motion } from 'framer-motion';
import {
  staggerContainer,
  fadeIn,
  slideIn,
  staggerChildren,
} from '../../utils/motion';
import { container } from '../../styles/app.module.scss';

const Portfolio = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <div className={`innerwidth flexCenter ${css.container}`}>
        <div className={`flexCenter ${css.heading}`}>
          <div>
            <span className='primaryText'>My Latest Work</span>
            {/* <p style={{ marginTop: '10px' }}>
              Perfect solution for digial experience
            </p> */}
          </div>
          <a
            href='https://github.com/JeraldStephenson'
            target={'_blank'}
            className='secondaryText'
          >
            Explore my GitHub
          </a>
        </div>
        {/*  images - replace src with screenshots of my projects */}{' '}
        <div className={`flexCenter ${css.listContainer}`}>
          {/* PROJECT 1: GRAPHERRQL */}
          <motion.div
            variants={fadeIn('right', 'tween', 0.5, 0.6)}
            className='container2'
          >
            <h2 className='paddings'>GraphErrQL</h2>

            <div className={`flexCenter ${css.showCase}`}>
              <motion.img
                variants={fadeIn('right', 'tween', 0.5, 0.6)}
                src='./GraphErrQLDemo.gif'
                alt='project'
              />
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 'tween', 0.6, 0.7)}
            className={`paddings ${css.showCase}`}
          >
            <p className='paddings'>
              GraphErrQL official launch site
              <br />
              <br />
              GraphErrQL is an npm developer tool I co-created with a small team
              of engineers to provide developers with a GUI that centralized
              GraphQL query validation, metrics, and error assistance. We
              created this product with an emphasis on utilizing these tools
              within a natural and nondisruptive to the developer workflow.
              <br />
              <br />
              GitHub repo and readme
            </p>
          </motion.div>
        </div>
        <div className={`flexCenter ${css.listContainer}`}>
          {/* PROJECT 2: BIG BRAIN Z STRAIN */}
          <motion.div
            variants={fadeIn('right', 'tween', 0.5, 0.6)}
            className='container2'
          >
            <h2 className='paddings'>Big Brain Z-Strain</h2>
            <div className={`flexCenter ${css.showCase}`}>
              <motion.img
                variants={fadeIn('right', 'tween', 0.5, 0.6)}
                src='./BBZS.gif'
                alt='project'
              />
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn('left', 'tween', 0.6, 0.7)}
            className={`paddings ${css.showCase}`}
          >
            <p className='paddings'>
              A macOS local multiplayer game in which players compete to be the
              dominant zombie virus strain. This is a porject I took on to learn
              the basics of native iOS programming language and library (Swift
              and SwiftUI) to create a small game to play with family members
              before our Holiday parties.
              <br />
              <br />
              GitHub repo and readme
            </p>
          </motion.div>
        </div>
        {/* <MotionConfig.img
            variants={fadeIn('up', 'tween', 0.5, 0.6)}
            src='./showCase2.png'
            alt='project'
          />
          <MotionConfig.img
            variants={fadeIn('up', 'tween', 0.5, 0.6)}
            src='./showCase3.png'
            alt='project'
          /> */}
      </div>
    </motion.section>
  );
};

export default Portfolio;
