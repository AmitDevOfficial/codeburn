import React from 'react'
import "./sectionSeven.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import indOne from "../images/indOne.png";
import indTwo from "../images/indTwo.png";
import indThree from "../images/indThree.png";
import indFour from "../images/indFour.png";
import indFive from "../images/indFive.png";
import indSix from "../images/indSix.png";
import indSeven from "../images/indSeven.png";

export default function SectionSeven() {

     const settings = {
        infinite: true,
        speed: 8000,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 0,
        cssEase: "linear",
        arrows: true
    };

    return (
        <div id='sectionSeven' className='sectionSevenChild'>
            <div className="container-fluid">
                <h2>Industrial Alliance</h2>
                <div className="leftlogo" style={{ width: "100%", margin: "auto" }}>
                    <Slider {...settings} className="slickSliderSectionTwo">

                        <div className='bgBrand'>
                            <img src={indOne} alt="Slide 1" />
                        </div>

                        <div className='bgBrand'>
                            <img src={indTwo} alt="Slide 1" />
                        </div>

                        <div className='bgBrand'>
                            <img src={indThree} alt="Slide 1" />
                        </div>

                        <div className='bgBrand'>
                            <img src={indFour} alt="Slide 1" />
                        </div>

                        <div className='bgBrand'>
                            <img src={indFive} alt="Slide 1" />
                        </div>

                        <div className='bgBrand'>
                            <img src={indSix} alt="Slide 1" />
                        </div>
                        
                        <div className='bgBrand'>
                            <img src={indSeven} alt="Slide 1" />
                        </div>

                    </Slider>
                </div>
            </div>
        </div>
    )
}
