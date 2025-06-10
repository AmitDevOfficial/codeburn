import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./sectionFive.css";
import "./sectionNine.css"
import aryaOne from "../images/aryaOne.png";
import aryaTwo from "../images/aryaTwo.png";
import aryaThree from "../images/aryaThree.png";
import aryaFour from "../images/aryaFour.png";
import { AiOutlineDownload } from "react-icons/ai";
import award1 from "../images/award1.png"
import award2 from "../images/award2.png"
import award3 from "../images/award3.png"
import award4 from "../images/award4.png"
import award5 from "../images/award5.png"
import award6 from "../images/award6.png"
import award7 from "../images/award7.png"
import award8 from "../images/award8.png"
import award9 from "../images/award9.png"
import award10 from "../images/award10.png"

export default function SectionNine() {
    return (
        <div className='sectionNine'>
            <div id='sectionFive' className='sectionFiveMain'>
                <div className='container sectionFiveChild'>
                    <h2>Awards & Recognition Received By Arya College</h2>
                    <p className='aryaPara'>ARYA provide Excellent Infrastructure & propitious Academics for Professional & Technical Growth of all the Studentsand Faculty Members.</p>
                    <Tabs defaultIndex={1}>
                        <TabList>
                            <Tab>Awards</Tab>
                            <Tab>Students Life</Tab>
                        </TabList>

                        <TabPanel>
                            <div className='aryaClgImage'>
                                <div className='container aryaClgImageStyle'>

                                    <div className='mainClgCard'>
                                        <img src={aryaOne} alt="imageOne" />
                                        <h6>2021-2022 Placements</h6>
                                        <p>750+ Placements Offers</p>
                                        <button className='downloadBtn'><AiOutlineDownload className='download' />Download PDF</button>
                                    </div>

                                    <div className='mainClgCard'>
                                        <img src={aryaTwo} alt="imageOne" />
                                        <h6>2021-2022 Placements</h6>
                                        <p>750+ Placements Offers</p>
                                        <button className='downloadBtn'><AiOutlineDownload className='download' />Download PDF</button>
                                    </div>

                                    <div className='mainClgCard'>
                                        <img src={aryaThree} alt="imageOne" />
                                        <h6>2021-2022 Placements</h6>
                                        <p>750+ Placements Offers</p>
                                        <button className='downloadBtn'><AiOutlineDownload className='download' />Download PDF</button>
                                    </div>

                                    <div className='mainClgCard'>
                                        <img src={aryaFour} alt="imageOne" />
                                        <h6>2021-2022 Placements</h6>
                                        <p>750+ Placements Offers</p>
                                        <button className='downloadBtn'><AiOutlineDownload className='download' />Download PDF</button>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='mainImage'>
                                <div className='mainImageMain'>
                                    <div className='galleryOne'>
                                        <div className='mainImageChild'>
                                            <img src={award1} alt="" />
                                            <img src={award2} alt="" />
                                        </div>
                                        <div className='mainImageChild'>
                                            <img src={award3} alt="" />
                                            <img src={award4} alt="" />
                                        </div>
                                        <div className='mainImageChild'>
                                            <img src={award5} alt="" />
                                            <img src={award6} alt="" />
                                        </div>
                                    </div>
                                    <div className='galleryOne galleryTwo'>
                                        <div className='mainImageChild'>
                                            <img src={award7} alt="" />
                                            <img src={award8} alt="" />
                                        </div>
                                        <div className='mainImageChild'>
                                            <img src={award9} alt="" />
                                            <img src={award10} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}
