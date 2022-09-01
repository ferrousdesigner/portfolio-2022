import React from 'react'
import { Button } from './Button';

interface AboutProps {
  devName: string;
  designation: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  btnLabel: string;
  isBlurred: boolean;
  onHover: React.MouseEventHandler<HTMLDivElement> | undefined;
}

export const About: React.FC<AboutProps> = ({ devName, designation, onClick, btnLabel, isBlurred, onHover }: AboutProps): JSX.Element => <div className='about-container'>
  <div className='about-content' onMouseOver={onHover}>
    <h4 className='greeting'>Hi, I'm</h4>
    <h1 className='user-name'>{devName}</h1>
    <h2 className='designation'>{designation}</h2>
    <Button label={btnLabel} onClick={onClick} />
  </div>
</div>


