import React, { useState } from 'react';

interface SkillsProps {
  skills: SkillProps[],
  isBlurred: boolean,
  onHover: React.MouseEventHandler<HTMLDivElement> | undefined;
}
interface SkillProps {
  title: string;
  img: string;
}


export const Skills: React.FC<SkillsProps> = ({ skills, isBlurred, onHover }: SkillsProps): JSX.Element => {
  const [expanded, setExpanded] = useState<boolean>(false)
  const [bigHeader, setBigHeader] = useState<boolean>(true)
  const handleScroll = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLDivElement;
    if (target?.scrollTop > 20) {
      setBigHeader(false)
    } else {
      setBigHeader(true)
    }
  }
  return (
    <div>
      <div className={`skills-container ${expanded ? 'skills-expand' : ''} ${isBlurred ? 'blurred' : ''}`} onMouseOver={onHover}  onScroll={(e) => handleScroll(e)}>
        <div className={`header skill-header sticky ${!bigHeader && 'header-compact'}`}><h1>Skills</h1><button className='btn-circle' onClick={() => setExpanded(!expanded)}><span className={expanded ? 'fas fa-compress' : 'fas fa-expand'} /></button></div>
        {skills?.map((s, key): JSX.Element =><Skill {...s} key={key} />)}
      </div>
    </div>
  );
}


const Skill: React.FC<SkillProps> = ({ title, img }: SkillProps): JSX.Element => <div className='skill'>
  <img src={img} width='100px' alt={title} />
  <h1>{title}</h1>
</div>