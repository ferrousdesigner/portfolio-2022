import React, { useState } from 'react'
import { Projects } from './Parts/Projects';
import { Skills } from './Parts/Skills';
import { About } from './Parts/About';
import './Portfolio.css'
import reactLogo from './Parts/skills/react.svg'
import jsLogo from './Parts/skills/jslogo.svg'
import cssLogo from './Parts/skills/css3.svg'
import firebaselogo from './Parts/skills/fblogo.svg'
import htmllogo from './Parts/skills/html5.svg'
import rubyLogo from './Parts/skills/ruby.svg'
import figma from './Parts/skills/figma.svg'
import tf from './Parts/skills/tensorflow-2.svg'

import invision from './Parts/skills/invisionlogo.svg'



const sampleImage = 'https://images.pexels.com/photos/9318382/pexels-photo-9318382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'

export const skills = [
  { title: 'React', img: reactLogo },
  { title: 'JavaScript', img: jsLogo },
  { title: 'CSS', img: cssLogo },
  { title: 'Firebase', img: firebaselogo },
  { title: 'HTML', img: htmllogo },
  { title: 'Ruby', img: rubyLogo },
  { title: 'TensorFlow', img: tf },
  { title: 'Figma', img: figma },
  { title: 'Invision Studio', img: invision },

]

export const Portfolio: React.FC = (): JSX.Element => {
  const [blur, setBlur] = useState<number>(1)
  const projects = [
    {
      title: 'Trushy', desc: 'Tarot Simulator Game', link: 'https://ferrousdesigner.github.io/trueshy/', github: '', stackList: 'css,html,javascript',
    },
    {
      title: 'Singularity', desc: 'A React UI Component Library', link: 'https://ferrousdesigner.github.io/singularity/dist/', github: '', stackList: 'react,html,javascript,css'
    },
    {
      title: 'Softlight', desc: 'A virtual key light', link: 'https://softlight.web.app/', github: '', stackList: 'react,html,javascript,css,firebase'
    },
    {
      title: 'Listup', desc: 'Task keeper', link: 'https://project-listup.web.app/', github: '', stackList: 'react,html,javascript,css,firebase'
    },
    {
      title: 'Societi', desc: ' A social network to limit phone addition', link: 'https://societi-app.web.app/component', github: '', stackList: 'react,html,javascript,css,firebase'
    },
    {
      title: 'Leanior', desc: ' A duel voting system', link: 'https://leanior-app.web.app/component', github: '', stackList: 'react,html,javascript,css,firebase'
    },
    {
      title: 'InTaxia', desc: ' Indian Income Tax Visualizer', link: 'https://ferrousdesigner.github.io/intaxia', github: '', stackList: 'react,html,javascript,css,firebase'
    },
    {
      title: 'CodeStack', desc: 'Company Page', link: 'https://company-dev.web.app/', github: '', stackList: 'react,html,javascript,css,firebase'
    },
    // {
    //   title: 'Expensee', desc: 'expense calculator', link: 'https://expensee-app.web.app/', github: '', stackList: 'react,html,javascript,css,firebase'
    // },
    {
      title: 'Inventoric', desc: 'An inventory app', link: 'https://inventoric-app.web.app/', github: '', stackList: 'react,html,javascript,css,firebase'
    },
    {
      title: 'InstaPdfy', desc: 'Instagram post to pdfs', link: 'https://instapdfy-app.web.app/', github: '', stackList: 'react,html,javascript,css,firebase'

    },
    {
      title: 'Qryus', desc: 'A question answer app with word limit', link: 'https://presize-app.web.app/', github: '', stackList: 'react,html,javascript,css,firebase'

    },
    {
      title: 'Subtle', desc: 'A minimal animation css framework', link: 'https://ferrousdesigner.github.io/subtle.css/', github: '', stackList: 'css'

    },
    {
      title: 'Stylemaker', desc: 'A simple tool to write and use css in js without css-loader, implements css isolation.', link: 'https://www.npmjs.com/package/stylemaker', github: '', stackList: 'javascript'

    },
    {
      title: 'Betterback', desc: 'A small Javascript tool to create random fascinating animated backgrounds. ', link: 'https://ferrousdesigner.github.io/betterbacks', github: '', stackList: 'javascript'

    },
    {
      title: 'Multigradient', desc: 'A small multi-point gradient background maker inspired from 4 color gradient effect in Adobe After Effects.', link: 'https://ferrousdesigner.github.io/multigradient/', github: '', stackList: 'javascript'

    },
    {
      title: 'SmartCSS', desc: 'A chrome extension for devs ', link: 'https://ferrousdesigner.github.io/subtle.css/', github: '', stackList: 'css,html,javascript'

    },

  ]

  return <div className='portfolio-container'>
    <About devName='Faraz Khan' designation='Frontend Developer & UI/UX Designer' onClick={() => alert('Test')} btnLabel="Let's Connect" isBlurred={blur === 2 || blur === 3} onHover={() => setBlur(1)} />
    <Projects projects={projects} isBlurred={blur === 2} onHover={() => setBlur(3)} />
    <Skills skills={skills} isBlurred={blur === 3} onHover={() => setBlur(2)} />
  </div>
}


