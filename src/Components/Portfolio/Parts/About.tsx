import React from 'react'
import { Button } from './Button';

interface AboutProps {
  devName: string;
  designation: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  btnLabel: string;
}

export const About: React.FC<AboutProps> = ({ devName, designation, onClick, btnLabel }: AboutProps): JSX.Element => <div className='about-container'>
  <div className='about-content'>
    <h4>Hi, I'm</h4>
    <h1>{devName}</h1>
    <h2>{designation}</h2>
    <Button label={btnLabel} onClick={onClick} />
  </div>
</div>


