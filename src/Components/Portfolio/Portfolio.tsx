import React from 'react'
import { Projects } from './Parts/Projects';
import { Skills } from './Parts/Skills';
import { About } from './Parts/About';
import './Portfolio.css'

const sampleImage = 'https://images.pexels.com/photos/9318382/pexels-photo-9318382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
const smallImg = 'https://cdn-icons-png.flaticon.com/512/174/174854.png'

const projects = [
  { title: 'Foleoz', desc: 'A professional Portfolio Maker', img: sampleImage },
  { title: 'Foleoz', desc: 'A professional Portfolio Maker', img: sampleImage },
  { title: 'Foleoz', desc: 'A professional Portfolio Maker', img: sampleImage },
  { title: 'Foleoz', desc: 'A professional Portfolio Maker', img: sampleImage },
  { title: 'Foleoz', desc: 'A professional Portfolio Maker', img: sampleImage },
  { title: 'Foleoz', desc: 'A professional Portfolio Maker', img: sampleImage }
]

const skills = [
  {title: 'HTML', img: smallImg},
  { title: 'HTML', img: smallImg },
  { title: 'HTML', img: smallImg },
  { title: 'HTML', img: smallImg },
  { title: 'HTML', img: smallImg },
]

export const Portfolio: React.FC = (): JSX.Element => <div className='portfolio-container'>
  <About devName='Faraz Khan' designation='Frontend Developer & UI/UX Designer' onClick={() => alert('Test')} btnLabel="Let's Connect"/>
  <Projects projects={projects}/>
  <Skills skills={skills} />
</div>


