import React, {useState} from 'react'
import { Projects } from './Parts/Projects';
import { Skills } from './Parts/Skills';
import { About } from './Parts/About';
import './Portfolio.css'
import smallImg from './Parts/skills/react.svg'

const sampleImage = 'https://images.pexels.com/photos/9318382/pexels-photo-9318382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'

const projects = [
  { title: 'Foleoz', desc: 'A professional Portfolio Maker', img: sampleImage },
  { title: 'Foleoz', desc: 'A professional Portfolio Maker', img: sampleImage },
  { title: 'Foleoz', desc: 'A professional Portfolio Maker', img: sampleImage },
  { title: 'Foleoz', desc: 'A professional Portfolio Maker', img: sampleImage },
  { title: 'Foleoz', desc: 'A professional Portfolio Maker', img: sampleImage },
  { title: 'Foleoz', desc: 'A professional Portfolio Maker', img: sampleImage }
]

const skills = [
  { title: 'React', img: smallImg },
  { title: 'JavaScript', img: smallImg },
  { title: 'CSS', img: smallImg },
  { title: 'Firebase', img: smallImg },
  { title: 'HTML', img: smallImg },
  { title: 'Ruby', img: smallImg },
  { title: 'TensorFlow', img: smallImg },
  { title: 'ML5JS', img: smallImg },
  { title: 'A-Frame JS', img: smallImg },
  { title: 'Figma', img: smallImg },
  { title: 'Invision Studio', img: smallImg },
  
  { title: 'Wireframing', img: smallImg },
  { title: 'UI Design', img: smallImg },
  { title: 'UX Design', img: smallImg },
  { title: 'Serverless', img: smallImg },
]

export const Portfolio: React.FC = (): JSX.Element => { 
  const [blur, setBlur] = useState<number>(1)

  return <div className='portfolio-container'>
    <About devName='Faraz Khan' designation='Frontend Developer & UI/UX Designer' onClick={() => alert('Test')} btnLabel="Let's Connect" isBlurred={blur === 2 || blur === 3} onHover={() => setBlur(1)} />
    <Projects projects={projects} isBlurred={blur === 2} onHover={() => setBlur(3)} />
    <Skills skills={skills} isBlurred={blur === 3} onHover={() => setBlur(2)} />
</div>}


