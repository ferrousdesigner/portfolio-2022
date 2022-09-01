import React, { useEffect, useState } from 'react';

interface ProjectsProps {
  projects: ProjectProps[],
  isBlurred: boolean;
  onHover: React.MouseEventHandler<HTMLDivElement> | undefined;
}
interface ProjectProps {
  title: string;
  desc: string;
  img: string;
}


export const Projects: React.FC<ProjectsProps> = ({ projects, isBlurred, onHover }: ProjectsProps): JSX.Element => {
  const [expanded, setExpanded] = useState<boolean>(false)
  const [bigHeader, setBigHeader] = useState<boolean>(true)
  const [pause, setPause] = useState<boolean>(false)

  const handleScroll = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLDivElement;
    if(target?.scrollTop > 30) {
      // console.log(target?.scrollTop)
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
        {projects?.map((p, key): JSX.Element => <Project {...p} key={key} />)}
      </div>
    </div>
  );
}


const Project: React.FC<ProjectProps> = ({ title, desc, img }: ProjectProps): JSX.Element => <div className='project'>
  <h2>{title}</h2>
  <p>{desc}</p>
  <img src={img} width='100px' alt={title} />
  <img src={img} className='img-shadow' width='100px' alt={title} />
  <div className='actions'>
    <a href={'https://google.com'}>View Project</a>
    <a href={'https://google.com'}>Github </a>
  </div>
</div>