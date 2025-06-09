import React from 'react'
import "./sectionThree.css";
import myclgImage from "../images/collageImage.png"
import StarIcon from '@mui/icons-material/Star';

export default function SectionThree() {
    return (
        <div id='sectionThree' className='sectionThreeMain'>
            <div className='container sectionThreeMainChild'>
                <div className='threeOne'>
                    <h2>Arya College Jaipur</h2>
                    <p>Arya College is the Best Engineering College in the entire Rajasthan. We don’t just teach students, but we train them to be successful professionals. We motivate and orient our students and to take on the corporate world.</p>
                </div>
                <div className="threeTwo">
                    <div className="myclgOne">

                        <div className='myclgCard'>
                            <div className='paraoneMain'>
                                <p className='paraOne'>Our-Mission</p>
                            </div>
                            <div className='paraTwo'><p>To Create a Progressive Academic Environment for the Students </p> <p>Help Students Achieve Qualities like Techno-Managerial Skills and become Innovative and Creative Professionals </p> <p>Develop Individuals who can Contribute in the Development and Progress of the Society, Nation & the World as a whole.</p></div>
                        </div>

                        <div className='myclgCard myclgCardsecond'>
                            <div className='paraoneMain'>
                                <p className='paraOne'>Our-Mission</p>
                            </div>
                            <div className='paraTwo'><p>To Create a Progressive Academic Environment for the Students </p> <p>Help Students Achieve Qualities like Techno-Managerial Skills and become Innovative and Creative Professionals </p> <p>Develop Individuals who can Contribute in the Development and Progress of the Society, Nation & the World as a whole.</p></div>
                        </div>
                    </div>
                    <div className='myclgTwo'>
                        <div>
                            <img src={myclgImage} alt="myColleageImage" />
                        </div>
                        <div className='myclgTwoChild'>
                            <div className="headStar">
                                <div>
                                    <p>15500+</p>
                                </div>
                                <div>
                                    <button className='topBtn'>Admission Open</button>
                                </div>
                            </div>
                             <p>Students Placed</p>
                                <StarIcon style={{ color: "#FFC600" }} />
                                <StarIcon style={{ color: "#FFC600" }} />
                                <StarIcon style={{ color: "#FFC600" }} />
                                <StarIcon style={{ color: "#FFC600" }} />
                                <StarIcon style={{ color: "#FFC600" }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
