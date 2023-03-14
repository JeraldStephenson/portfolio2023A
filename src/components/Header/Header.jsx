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
        <div className={css.name}>Jerald</div>
        <ul
          style={getMenuStyles(menuOpened)}
          ref={menuRef}
          className={`flexCenter ${css.menu}`}
        >
          <li>
            <a href='#'>About Me</a>
            {/* download resume - quick snippet about myself */}
          </li>
          {/* <li>
            <a href=''>Experience</a>
          </li> */}
          <li>
            <a href='#portfolio'>Portfolio</a>
          </li>
          <li>
            <div className={`${css.headerIconContainer}`}>
              <a className={`${css.headerIcon}`} href=''>
                <BsLinkedin />
              </a>
              <p className={`${css.headerIconText}`}> LinkedIn</p>
            </div>
          </li>

          <li>
            <div className={`${css.headerIconContainer}`}>
              <a className={`${css.headerIcon}`} href=''>
                <BsGithub />
              </a>
              <p className={`${css.headerIconText}`}> GitHub</p>
            </div>
          </li>
          <li>
            <div className={`${css.headerIconContainer}`}>
              <a className={`${css.headerIcon}`} href=''>
                <BiMailSend />
              </a>
              <p className={`${css.headerIconText}`}> Email me</p>
            </div>
          </li>
          {/* <li className={css.headerIconText}>email</li> */}
          {/* <li className={`flexCenter ${css.phone}`}>
            <p>+1 (209) 923-7926</p>
            <BiPhoneCall size={'40px'} />
          </li> */}
        </ul>
        {/* for medium and small screens */}
        <div
        // className={css.menuIcon}
        // onClick={() => {
        //   setMenuOpened((prev) => !prev);
        // }}
        >
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
