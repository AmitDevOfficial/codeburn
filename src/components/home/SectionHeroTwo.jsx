import React from 'react'
import logo2 from "../images/logo2.png"
import "./sectionHeroTwoCss.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import brand01 from "../images/brand1.png";
import brand02 from "../images/brand2.png";
import brand03 from "../images/brand3.png";
import brand04 from "../images/brand4.png";
import brand05 from "../images/brand5.png";

const SectionHeroTwo = () => {

    const settings = {
        infinite: true,
        speed: 8000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        arrows: false
    };


    return (
        <div id='sectionHeroTwo' className='sectionheroTwoStyle'>
            <div className="continer sectionHeroTwochild">
                <div className='rightlogo'>
                    <img src={logo2} alt="logo2" />
                    <span>22 Years Of Success</span>
                </div>
                <div className="leftlogo" style={{ width: "100%", margin: "auto" }}>
                    <Slider {...settings} className="slickSliderSectionTwo">

                        <div className='bgBrand'>
                            <img src={brand01} alt="Slide 1" /><span>Ranked "A" By RTU</span>
                        </div>

                        <div className='bgBrand'>
                            <img src={brand02} alt="Slide 1" /><span>Naac Accredited</span>
                        </div>

                        <div className='bgBrand'>
                            <img src={brand03} alt="Slide 1" /><span>NBA Accredited (CSE Branch)</span>
                        </div>

                        <div className='bgBrand'>
                            <img src={brand04} alt="Slide 1" /><span>RTU CoE In Air (Robotics), PCB</span>
                        </div>

                        <div className='bgBrand'>
                            <img src={brand05} alt="Slide 1" /><span>32 Awards Won</span>
                        </div>

                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default SectionHeroTwo
