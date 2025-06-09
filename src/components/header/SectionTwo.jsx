import React from 'react'
import logo from "../images/logo.png";
import "./sectionTwo.css";
import { Link } from "react-router-dom";


export default function SectionTwo() {
    return (
        <div id='topHeadertwo' className='topHeaderTwoStyle'>
            <div className='iconHeader'>
                <Link to="/"><img src={logo} alt="logo" /></Link>
            </div>
            <div className='menuHeader'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Arya</Link></li>
                    <li><Link to="/acadmic">Academic</Link></li>
                    <li><Link to="/placement">Placements</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/infra">Infrastructure</Link></li>
                    <li><Link to="/resource">Resources</Link></li>
                    <li><Link to="/blog">Blogs</Link></li>
                    <li><Link to="/conatct-us">Contact Us</Link></li>
                </ul>
            </div>
        </div>
    )
}
