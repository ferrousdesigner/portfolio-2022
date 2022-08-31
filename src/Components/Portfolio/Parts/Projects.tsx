import React, { useState } from 'react';

interface ProjectsProps {
  projects: ProjectProps[]
}
interface ProjectProps {
  title: string;
  desc: string;
  img: string;
}


export const Projects: React.FC<ProjectsProps> = ({ projects }: ProjectsProps): JSX.Element => {
  const [expanded, setExpanded] = useState<boolean>(false)
  return (
    <div>
      <div className={`projects-container ${expanded ? 'pc-expand' : ''}`}>
        <div className='header sticky'><h1>Recent Projects</h1><button className='btn-circle' onClick={() => setExpanded(!expanded)}><span className={expanded ? 'fas fa-compress' : 'fas fa-expand'} /></button></div>
        {projects?.map((p, key):JSX.Element  => <Project {...p} key={key} />)}
      </div>
    </div>
  );
}


const Project: React.FC<ProjectProps> = ({ title, desc, img }: ProjectProps): JSX.Element => <div className='project'>
  <h2>{title}</h2>
  <p>{desc}</p>
  <img src={img} width='100px' alt={title} />
</div>