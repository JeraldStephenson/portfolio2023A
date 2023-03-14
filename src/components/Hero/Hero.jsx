import React from 'react';
import css from './Hero.module.scss';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn, slideIn } from '../../utils/motion';
import {
  TbBrandJavascript,
  TbBrandHtml5,
  TbBrandCss3,
  
} from 'react-icons/tb';
import { FaReact, FaNodeJs, FaDocker } from 'react-icons/fa';
import {
  SiTypescript,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiJest,
  SiCypress,
  SiSwift,
  SiKubernetes,
} from 'react-icons/si';

import Resume from '../../../public/Resume.pdf';

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
            that loves to solve problems.
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
            <a href={Resume} download>
              Resume/CV
            </a>
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
            <div className='primaryText'>2023</div>
            <div className='secondaryText'>
              <div>Tech</div>
              <div>Stack</div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 'tween', 0.8, 2)}
            className={` ${css.stackIcons}`}
          >
            {/* <a href='https://github.com/JeraldStephenson' target='blank'>
              
            </a>
            <a href='https://github.com/JeraldStephenson' target='blank'>
              
            </a>
            <a href='https://github.com/JeraldStephenson' target='blank'></a> */}
            <div className={`${css.icons}`}>
              <a>
                <TbBrandHtml5 />
              </a>
              <p>HTML</p>
            </div>
            <div className={`${css.icons}`}>
              <a>
                <TbBrandCss3 />
              </a>
              <p>CSS</p>
            </div>
            <div className={`${css.icons}`}>
              <a>
                <FaReact />
              </a>
              <p>React</p>
            </div>
            <div className={`${css.icons}`}>
              <a>
                <TbBrandJavascript />
              </a>
              <p>JavaScript</p>
            </div>
            <div className={`${css.icons}`}>
              <a>
                <SiTypescript />
              </a>
              <p>TypeScript</p>
            </div>
            <div className={`${css.icons}`}>
              <a>
                <FaNodeJs />
              </a>
              <p>Node</p>
            </div>
            <div className={`${css.icons}`}>
              <a>
                <SiExpress />
              </a>
              <p>Express</p>
            </div>
            <div className={`${css.icons}`}>
              <a>
                <SiPostgresql />
              </a>
              <p>PostgreSQL</p>
            </div>
            <div className={`${css.icons}`}>
              <a>
                <SiMongodb />
              </a>
              <p>MongoDb</p>
            </div>
            <div className={`${css.icons}`}>
              <a>
                <SiGraphql />
              </a>
              <p>GraphQL</p>
            </div>
            <div className={`${css.icons}`}>
              <a>
                <SiJest />
              </a>
              <p>Jest</p>
            </div>
            <div className={`${css.icons}`}>
              <a>
                <SiCypress />
              </a>
              <p>Cypress.io</p>
            </div>
            <div className={`${css.icons}`}>
              <a>
                <SiSwift />
              </a>
              <p>Swift</p>
            </div>
            <div className={`${css.icons}`}>
              <a>
                <FaDocker />
              </a>
              <p>Docker</p>
            </div>
            <div className={`${css.icons}`}>
              <a>
                <SiKubernetes />
              </a>
              <p>Kubernetes</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
