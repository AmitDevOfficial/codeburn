import React from 'react'
import "./sectionFour.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import MedicationIcon from '@mui/icons-material/Medication';
import FeedIcon from '@mui/icons-material/Feed';

export default function SectionFour() {
    return (
        <div id='sectionFour' className='sectionFourMain'>
            <div className="container sectionFourMainChild">
                <div className='fourOne'>
                    <button className='topBtn'>Admission Open</button>
                    <h2>Successfully Complete Your Degree At Arya College</h2>
                    <p>Arya College is the Best Engineering College in the entire Rajasthan. We don’t just teach students, but we train them to be successful professionals. We motivate and orient our students and to take on the corporate world.</p>
                </div>
                <div className="fourTwo">
                    <div>
                        <div className='cardOne'>
                            <div className='bgBack'>
                                <SchoolIcon sx={{ fontSize: 40 }} className='listIcon' />
                            </div>
                            <p className='cardOneParaTwo'>Under Graduation</p>
                        </div>
                        <div className='cardOne'>
                            <div className='bgBack'>
                                <MedicationIcon sx={{ fontSize: 40 }} className='listIcon' />
                            </div>
                            <p>Pharma and Medical</p>
                        </div>
                    </div>
                   
                     <div>
                        <div className='cardOne'>
                            <div className='bgBack'>
                                <WorkspacePremiumIcon sx={{ fontSize: 40 }} className='listIcon' />
                            </div>
                            <p className='cardOneParaTwo'>Post Graduation </p>
                        </div>
                        <div className='cardOne'>
                            <div className='bgBack'>
                                <FeedIcon sx={{ fontSize: 40 }} className='listIcon' />
                            </div>
                            <p>Online Admission Procedure</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
