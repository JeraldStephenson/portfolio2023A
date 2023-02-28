import React from 'react';
import { projectExperience, WhatDoIHelp } from '../../utils/data';
import css from './ProjectOverview.module.scss';

const ProjectOverview = () => {
  return (
    <section className={css.wrapper}>
      <div
        className={`paddings yPaddings flexCenter innerWidth ${css.container}`}
      >
        <div className={css.leftSide}>
          {projectExperience.map((exp, i) => {
            return (
              <div className={css.exp} key={i}>
                <div className='flexCenter' style={{ background: exp.bg }}>
                  <exp.icon size={25} color='white' />
                </div>
                <div>
                  <span>{exp.name}</span>
                  <span className='secondaryText'>{exp.projects}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className={css.rightSide}>
          <span className='primaryText'>What do these projects do?</span>
          <br />
          {WhatDoIHelp.map((paragraph, i) => {
            return (
              <span className='secondaryText' key={i}>
                {paragraph}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
