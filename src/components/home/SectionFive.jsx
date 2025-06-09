import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./sectionFive.css";
import aryaOne from "../images/aryaOne.png";
import aryaTwo from "../images/aryaTwo.png";
import aryaThree from "../images/aryaThree.png";
import aryaFour from "../images/aryaFour.png";
import { AiOutlineDownload } from "react-icons/ai";

export default function SectionFive() {
    return (
        <div id='sectionFive' className='sectionFiveMain'>
            <div className='container sectionFiveChild'>
                <h2>Recruitment In Arya College</h2>
                <Tabs>
                    <TabList>
                        <Tab>Highest Package</Tab>
                        <Tab>Top Recruiters</Tab>
                        <Tab>Award & Achievement</Tab>
                        <Tab>Student Placed</Tab>
                    </TabList>

                    <TabPanel>
                        <div className='aryaClgImage'>
                            <div className='container aryaClgImageStyle'>

                                <div className='mainClgCard'>
                                    <img src={aryaOne} alt="imageOne" />
                                    <h6>2021-2022 Placements</h6>
                                    <p>750+ Placements Offers</p>
                                    <button className='downloadBtn'><AiOutlineDownload className='download'/>Download PDF</button>
                                </div>

                                <div className='mainClgCard'>
                                    <img src={aryaTwo} alt="imageOne" />
                                    <h6>2021-2022 Placements</h6>
                                    <p>750+ Placements Offers</p>
                                    <button className='downloadBtn'><AiOutlineDownload className='download'/>Download PDF</button>
                                </div>

                                <div className='mainClgCard'>
                                    <img src={aryaThree} alt="imageOne" />
                                    <h6>2021-2022 Placements</h6>
                                    <p>750+ Placements Offers</p>
                                    <button className='downloadBtn'><AiOutlineDownload className='download'/>Download PDF</button>
                                </div>

                                <div className='mainClgCard'>
                                    <img src={aryaFour} alt="imageOne" />
                                    <h6>2021-2022 Placements</h6>
                                    <p>750+ Placements Offers</p>
                                    <button className='downloadBtn'><AiOutlineDownload className='download'/>Download PDF</button>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 3</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 4</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )
}
