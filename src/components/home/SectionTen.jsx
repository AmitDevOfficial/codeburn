import React from 'react'
import Slider from "react-slick";
import "./sectionTen.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import admin from "../images/admin.png";


  
export default function SectionTen() {

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
    <div id='sectionTen' className='sectionTenMain'>
      <div className='conatiner-fluid sectionTainChild'>
        <h2>Student Testimonial</h2>
        <div className="leftlogo" style={{ width: "100%", margin: "auto" }}>
                    <Slider {...settings} className="slickSliderSectionTwo">

                        <div className='bgBrandMain'>
                            <div className='mybgBrand'>
                              <img src={admin} alt="Slide 1" /><span>Mohit Kumar <br /> <p className='title'>CSE Stream</p></span>
                            </div>
                            <div className='mybgBrandTwo'>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                            </div>
                        </div>

                        <div className='bgBrandMain'>
                            <div className='mybgBrand'>
                              <img src={admin} alt="Slide 1" /><span>Mohit Kumar <br /> <p className='title'>CSE Stream</p></span>
                            </div>
                            <div className='mybgBrandTwo'>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                            </div>
                        </div>

                        <div className='bgBrandMain'>
                            <div className='mybgBrand'>
                              <img src={admin} alt="Slide 1" /><span>Mohit Kumar <br /> <p className='title'>CSE Stream</p></span>
                            </div>
                            <div className='mybgBrandTwo'>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                            </div>
                        </div>

                        <div className='bgBrandMain'>
                            <div className='mybgBrand'>
                              <img src={admin} alt="Slide 1" /><span>Mohit Kumar <br /> <p className='title'>CSE Stream</p></span>
                            </div>
                            <div className='mybgBrandTwo'>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                            </div>
                        </div>
                    </Slider>
                </div>
      </div>
    </div>
  )
}
