import React, { useState } from 'react';

interface SkillsProps {
  skills: SkillProps[]
}
interface SkillProps {
  title: string;
  img: string;
}


export const Skills: React.FC<SkillsProps> = ({ skills }: SkillsProps): JSX.Element => {
  const [expanded, setExpanded] = useState<boolean>(false)
  return (
    <div>
      <div className={`skills-container ${expanded ? 'skills-expand' : ''}`}>
        <div className='header sticky header-black'><h1>Skills</h1><button className='btn-circle' onClick={() => setExpanded(!expanded)}><span className={expanded ? 'fas fa-compress' : 'fas fa-expand'} /></button></div>
        {skills?.map((s, key): JSX.Element => <div key={key}><Skill {...s} /></div>)}
      </div>
    </div>
  );
}


const Skill: React.FC<SkillProps> = ({ title, img }: SkillProps): JSX.Element => <div className='skill'>
  <h1>{title}</h1>
  <img src={img} width='100px' alt={title} />
</div>