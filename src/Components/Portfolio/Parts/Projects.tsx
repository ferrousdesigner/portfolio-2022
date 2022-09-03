import React, { useState } from 'react';
import { Stack } from './Skills';

interface ProjectsProps {
  projects: ProjectProps[],
  isBlurred: boolean;
  onHover: React.MouseEventHandler<HTMLDivElement> | undefined;
}
interface ProjectProps {
  title: string;
  desc: string;
  link: string;
  github: string,
  stackList: string
}


export const Projects: React.FC<ProjectsProps> = ({ projects, isBlurred, onHover }: ProjectsProps): JSX.Element => {
  const [expanded, setExpanded] = useState<boolean>(false)
  const [bigHeader, setBigHeader] = useState<boolean>(true)

  const handleScroll = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLDivElement;
    if (target?.scrollTop > 30) {
      setBigHeader(false)
    } else {
      setBigHeader(true)
    }
  }
  return (
    <div>
      <div className={`projects-container ${expanded ? 'pc-expand' : ''} ${isBlurred ? 'blurred' : ''}`}
        onScroll={(e) => handleScroll(e)} onMouseOver={onHover}>
        <div className={`header sticky ${!bigHeader && 'header-compact'}`}><h1>Projects</h1><button className='btn-circle' onClick={() => setExpanded(!expanded)}><span className={expanded ? 'fas fa-compress' : 'fas fa-expand'} /></button></div>
        {projects?.map((p, key): JSX.Element => <Project {...p} key={key}  />)}
      </div>
    </div>
  );
}


const Project: React.FC<ProjectProps> = ({ title, desc, link, github, stackList }: ProjectProps): JSX.Element => {
  return <div className='project'>
    <h2>{title}</h2>
    <p>{desc}</p>
    {stackList && <Stack stackList={stackList} />}
    <div className='actions'>
      <a href={link} target='_blank' rel='noopener noreferrer'>View Project</a>
      <a href={github} target='_blank' rel='noopener noreferrer'>Github </a>
    </div>
  </div>
}