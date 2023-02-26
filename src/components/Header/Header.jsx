import React, { useState } from 'react';
import css from './Header.module.scss';
import { BiPhoneCall, BiMenuAltRight } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { getMenuStyles, headerVariants } from '../../utils/motion';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <motion.div
      initial='hidden'
      whileInView='show'
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>Jerald</div>
        <ul
          style={getMenuStyles(menuOpened)}
          className={`flexCenter ${css.menu}`}
        >
          <li>
            <a href=''>About Me</a>
            {/* download resume - quick snippet about myself */}
          </li>
          <li>
            <a href=''>Experience</a>
          </li>
          <li>
            <a href=''>Portfolio</a>
          </li>
          <li className={`flexCenter ${css.phone}`}>
            <p>+1 (209) 923-7926</p>
            <BiPhoneCall size={'40px'} />
          </li>
        </ul>
        {/* for medium and small screens */}
        <div
          className={css.menuIcon}
          onClick={() => {
            setMenuOpened((prev) => !prev);
          }}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
