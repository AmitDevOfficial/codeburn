import React from 'react'
import "./footer.css";
import footerlogo from "../images/footerlogo.png"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import FooterBottom from './FooterBottom';

export default function FooterTop() {
    return (
        <div id='footer'>
            <footer id='footerOne' className='footerMain'>
                <div className='container footerChild'>

                    <div className='footerOneSection'>
                        <div className='footerlogoHead'>
                            <img src={footerlogo} alt="" />
                            <p>Arya College is the Best Engineering College in the entire Rajasthan.</p>
                        </div>
                        <div>
                            <h6 className='footerHeadingOne'>Address</h6>
                            <p>SP-40, RIICO Industrial Area, Kukas, Jaipur, Rajasthan, 302028</p>
                        </div>
                        <div>
                            <h6 className='footerHeadingTwo'>Social Media</h6>
                            <div className='footerIcons'>
                                <FaFacebookF className='myFooterIcon'/><FaInstagram className='myFooterIcon'/><FaTwitter className='myFooterIcon'/><FaYoutube className='myFooterIcon'/>
                            </div>
                        </div>
                    </div>

                    <div className='footerTwoSection'>
                        <h6>Quick Links</h6>
                        <ul>
                            <li>About Us </li>
                            <li>News </li>
                            <li>Placement </li>
                            <li>Contact us </li>
                            <li>Blogs </li>
                            <li>Resources </li>
                            <li>Mail Center </li>
                            <li>Google </li>
                            <li>Wikipedia</li>
                        </ul>
                    </div>

                    <div className='footerThreeSection'>
                        <h6>Admissions</h6>
                        <ul>
                            <li>Download  </li>
                            <li>Prospectus </li>
                            <li>Admision </li>
                            <li>Procedure </li>
                            <li>Fee Structure </li>
                            <li>Our Affiliation </li>
                            <li>Degree Status </li>
                            <li>Bank Loan Assistance </li>
                            <li>Industrial Alliances </li>
                            <li>Privacy Policy </li>
                            <li>Terms and Conditions </li>
                            <li>Refund Policy</li>
                        </ul>
                    </div>

                    <div className='footerFourSection'>
                        <h6>Other Links</h6>
                        <p>Top Engineering College in Jaipur Best Engineering College in Jaipur
                            Best B.Tech College in India Best University for B.tech in India Best Private University in India for b tech Best Private Engineering College in India Top 10 Private Engineering College in IndiaBachelor of Technology - B Tech Courses</p>
                    </div>
                </div>
            </footer>
            <FooterBottom />
        </div>
    )
}
