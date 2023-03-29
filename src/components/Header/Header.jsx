import React, { useState, useEffect, useRef } from 'react';
import css from './Header.module.scss';
import { BiPhoneCall, BiMenuAltRight, BiMailSend } from 'react-icons/bi';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { getMenuStyles, headerVariants } from '../../utils/motion';
import useHeaderShadow from '../../hooks/useHeaderShadow';
import useOutsideAlerter from '../../hooks/useOutsideAlerter';

const Header = () => {
  const menuRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();

  //to handle click outside of sidebar on mobile
  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });

  return (
    <motion.div
      initial='hidden'
      whileInView='show'
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      className={`bg-primary paddings ${css.wrapper}`}
      // the border-shadow that appears on header when we scroll down to create a divider
      style={{ boxShadow: headerShadow }}
    >
      <div className={`flexCenter innerWidth ${css.container}`}>
        <a className={css.name} href='#'>
          Jerald
        </a>
        <ul
          style={getMenuStyles(menuOpened)}
          ref={menuRef}
          className={`flexCenter ${css.menu}`}
        >
          <li>
            <a href='#'>About Me</a>
          </li>

          <li>
            <a href='#portfolio'>Portfolio</a>
          </li>
          <li>
            <div className={`${css.headerIconContainer}`}>
              <a
                className={`${css.headerIcon}`}
                href='https://www.linkedin.com/in/jerald-stephenson/'
                target={'_blank'}
              >
                <BsLinkedin />
              </a>
              <a
                className={`${css.headerIconText}`}
                href='https://www.linkedin.com/in/jerald-stephenson/'
                target={'_blank'}
              >
                {' '}
                LinkedIn
              </a>
            </div>
          </li>

          <li>
            <div className={`${css.headerIconContainer}`}>
              <a
                className={`${css.headerIcon}`}
                href='https://github.com/JeraldStephenson'
                target={'_blank'}
              >
                <BsGithub />
              </a>
              <a
                href='https://github.com/JeraldStephenson'
                target={'_blank'}
                className={`${css.headerIconText}`}
              >
                {' '}
                GitHub
              </a>
            </div>
          </li>
          <li>
            <div className={`${css.headerIconContainer}`}>
              <a
                className={`${css.headerIcon}`}
                href='mailto:jstephenson.dev@gmail.com'
              >
                <BiMailSend />
              </a>
              <a
                className={`${css.headerIconText}`}
                href='mailto:jstephenson.dev@gmail.com'
              >
                {' '}
                Email me
              </a>
            </div>
          </li>
        </ul>
        {/* for medium and small screens */}
        <div>
          <BiMenuAltRight
            size={30}
            className={css.menuIcon}
            onClick={() => {
              setMenuOpened((prev) => !prev);
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
