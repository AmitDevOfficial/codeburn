import React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import "./Section.css"
import SectionTwo from './SectionTwo';

export default function SectionOne() {
  return (
    <div>
      <header id='topHeader' className='topHeaderStyle'>
        <div className='phone'>
            <PhoneIcon className='iconHeaderPhone' style={{color:"white"}}/> <span>1800-102-1044</span>
        </div>
        <div className='email'>
            <MailIcon className='iconHeaderEmail' style={{color:"white"}}/> <span>admission@aryacollege.org</span>
        </div>
      </header>
      <SectionTwo />
    </div>
  )
}
