import React, { useState } from 'react';
import './sectionHero.css';
import bannerImage from "../images/bannerImage.png"
import SectionHeroTwo from './SectionHeroTwo';
import SectionThree from './SectionThree';
import SectionFour from './SectionFour';
import SectionFive from './SectionFive';
import SectionSix from './SectionSix';
import SectionSeven from './SectionSeven';
import SectionEight from './SectionEight';
import SectionNine from './SectionNine';
import SectionTen from './SectionTen';

export default function SectionHero() {
  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div id='sectionHero' className='sectionHeroStyle'>
        <div className='container sectionHeroChild'>
          <div className='heroleft'>
            <div className="btnOne">
              <button className='topBtn'>Admission Open 2023</button>
              <button className='topBtnOne left'>Pay Online</button>
            </div>
            <h1>Arya College</h1>
            <p>We don’t just teach students, but we train them to be successful professionals. We motivate and orient our students and to take on the corporate world.</p>
            <div className='btnTwo'>
              <button
                className={`bottomBtn ${!hovering ? 'mimicHover' : ''}`}
              >
                Read More
              </button>

              <button
                className='bottomBtn left'
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
              >
                Brochure
              </button>
            </div>
          </div>
          <div className='heroright'>
            <img src={bannerImage} alt="" />
          </div>
        </div>
      </div>

      <SectionHeroTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <SectionNine />
      <SectionTen />

    </>
  );
}
