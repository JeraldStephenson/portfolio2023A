import React from 'react';
import css from './Header.module.scss';
import { BiPhoneCall } from 'react-icons/bi';

const Header = () => {
  return (
    <div className={`paddings ${css.wrapper}`}>
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>Jerald</div>
        <ul>
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
          <li>
            <p>+1 (209) 923-7926</p>
            <BiPhoneCall size={'40px'} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
