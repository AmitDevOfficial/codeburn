import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../images/logo.png";
import { Link } from 'react-router-dom';
// import './MobileHeader.css'; // make sure CSS is imported

export default function MobileHeader() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const closeMenu = () => {
        setMenuOpen(false);
    }

    return (
        <>
            <div id='myNav' className={`overlay ${menuOpen ? 'open' : ''}`}>
                <ul className="menu-items">
                    <li><Link to="/" onClick={closeMenu} >Home</Link></li>
                    <li><Link to="/about" onClick={closeMenu} >About Arya</Link></li>
                    <li><Link to="/acadmic" onClick={closeMenu} >Academic</Link></li>
                    <li><Link to="/placement" onClick={closeMenu} >Placements</Link></li>
                    <li><Link to="/gallery" onClick={closeMenu} >Gallery</Link></li>
                    <li><Link to="/infra" onClick={closeMenu} >Infrastructure</Link></li>
                    <li><Link to="/resource" onClick={closeMenu} >Resources</Link></li>
                    <li><Link to="/blog" onClick={closeMenu} >Blogs</Link></li>
                    <li><Link to="/conatct-us" onClick={closeMenu} >Contact Us</Link></li>
                </ul>
            </div>

            <div id='mobileMenu'>
                <div className='mobLeft'>
                    <Link to="/" onClick={closeMenu} ><img src={logo} alt="logo" /></Link>
                </div>
                <div className='mobRight'>
                    <MenuIcon fontSize="large" style={{ color: "black" }} onClick={toggleMenu} />
                </div>
            </div>
        </>
    )
}
