import React from 'react'
import "./sectionSix.css";
import allOne from "../images/allOne.png"

export default function SectionSix() {
    return (
        <div id='sectionSix' className='sectionSixMain'>
            <div className='container sectionSixMain'>
                <div className='alheading'>
                    <h2>Industrial Alliance</h2>
                <p className='alpara'>Arya College Jaipur has a definite purpose and represents inter-firm cooperative agreements aiming to achieve a competitive advantage for the partners. Arya College Jaipur also highlights the primary advantage for the academic community, industry, research funding, and practical learning opportunities for students.</p>
                </div>

                <div className='alMain'>
                    <div className='allistOne'>
                        <div className='alcard'>
                            <img src={allOne} alt="" />
                            <p>Arya College has a definite purpose and represents the inter-firm cooperative agreements aiming to achieve a competitive advantage for the partners.</p>
                        </div>
                        <div className='alcard'>
                            <img src={allOne} alt="" />
                            <p>Arya College has a definite purpose and represents the inter-firm cooperative agreements aiming to achieve a competitive advantage for the partners.</p>
                        </div>
                    </div>
                    <div className='alllistTwo'>
                        <div className='alcard'>
                            <img src={allOne} alt="" />
                            <p>Arya College has a definite purpose and represents the inter-firm cooperative agreements aiming to achieve a competitive advantage for the partners.</p>
                        </div>
                        <div className='alcard'>
                            <img src={allOne} alt="" />
                            <p>Arya College has a definite purpose and represents the inter-firm cooperative agreements aiming to achieve a competitive advantage for the partners.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
