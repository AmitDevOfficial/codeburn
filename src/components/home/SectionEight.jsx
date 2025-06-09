import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./sectionFive.css";
import "./sectionEight.css";
import clgOne from "../images/clgOne.png";
import clgTwo from "../images/clgTwo.png";
import clgThree from "../images/clgThree.png";
import clgFour from "../images/clgFour.png";
import allOne from "../images/allOne.png";
import { AiOutlineDownload } from "react-icons/ai";

export default function SectionEight() {
    return (
        <div id='sectionFive' className='sectionEightMain'>
            <div className='container sectionFiveChild'>
                <div className='eightMain'>
                    <h2>Recruitment In Arya College</h2>
                    <p className='eghtPara'>The best under one roof</p>
                </div>
                <Tabs>
                    <TabPanel>
                        <div className='aryaClgImage'>
                            <div className='container aryaClgImageStyle'>

                                <div className='mainClgCard'>
                                    <img src={clgOne} alt="imageOne" />
                                    <div className='logoHeading'>
                                        <div>
                                            <img src={allOne} alt="" />
                                        </div>
                                        <div>
                                            <h6>2021-2022 Placements</h6>
                                            <p>750+ Placements Offers</p>
                                        </div>
                                    </div>
                                    <p className='eightPara'>A.I.E.T.M., the Arya Institute of Engineering Technology & Management, is one of the most prominent colleges ...</p>
                                    <div className='eghtBtn'>
                                        <button className='downloadBtnOne'>View More</button>
                                        <button className='downloadBtnTwo'>Apply Now</button>
                                    </div>
                                </div>

                                <div className='mainClgCard'>
                                    <img src={clgTwo} alt="imageOne" />
                                    <div className='logoHeading'>
                                        <div>
                                            <img src={allOne} alt="" />
                                        </div>
                                        <div>
                                            <h6>2021-2022 Placements</h6>
                                            <p>750+ Placements Offers</p>
                                        </div>
                                    </div>
                                    <p className='eightPara'>A.I.E.T.M., the Arya Institute of Engineering Technology & Management, is one of the most prominent colleges ...</p>
                                    <div className='eghtBtn'>
                                        <button className='downloadBtnOne'>View More</button>
                                        <button className='downloadBtnTwo'>Apply Now</button>
                                    </div>
                                </div>

                                <div className='mainClgCard'>
                                    <img src={clgThree} alt="imageOne" />
                                    <div className='logoHeading'>
                                        <div>
                                            <img src={allOne} alt="" />
                                        </div>
                                        <div>
                                            <h6>2021-2022 Placements</h6>
                                            <p>750+ Placements Offers</p>
                                        </div>
                                    </div>
                                    <p className='eightPara'>A.I.E.T.M., the Arya Institute of Engineering Technology & Management, is one of the most prominent colleges ...</p>
                                    <div className='eghtBtn'>
                                        <button className='downloadBtnOne'>View More</button>
                                        <button className='downloadBtnTwo'>Apply Now</button>
                                    </div>
                                </div>

                                <div className='mainClgCard'>
                                    <img src={clgFour} alt="imageOne" />
                                    <div className='logoHeading'>
                                        <div>
                                            <img src={allOne} alt="" />
                                        </div>
                                        <div>
                                            <h6>2021-2022 Placements</h6>
                                            <p>750+ Placements Offers</p>
                                        </div>
                                    </div>
                                    <p className='eightPara'>A.I.E.T.M., the Arya Institute of Engineering Technology & Management, is one of the most prominent colleges ...</p>
                                    <div className='eghtBtn'>
                                        <button className='downloadBtnOne'>View More</button>
                                        <button className='downloadBtnTwo'>Apply Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )
}
