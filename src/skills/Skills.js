import React from 'react';
import './Skills.css';
import { FaCog } from 'react-icons/fa';

const Skills = ({ skills }) => {
  return (
    <div className="SkillsSection">
      <h1>Skills that I am hired for</h1>

      <ul className="SkillList">
        {skills &&
          skills.map((skill) => (
            <li className="SkillItem" key={skill.name}>
              <img className="SkillImage" src={skill.src} alt={skill.name} />
              <p className="SkillName">{skill.name}</p>
            </li>
          ))}
        <li className="SkillItem">
          <FaCog
            className="RotateItem"
            style={{
              width: '70px',
              height: '70px',
              transform: [{ rotateY: '180deg' }],
            }}
          />
          <p className={'SkillName'}>and progressing</p>
        </li>
      </ul>
    </div>
  );
};

export default Skills;
