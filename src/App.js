import React from 'react'
import "./App.css";
import SectionOne from './components/header/SectionOne';
import SectionHero from './components/home/SectionHero';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutArya from './components/pages/AboutArya';
import Academics from "./components/pages/Academics"
import Blog from "./components/pages/Blogs"
import ContactUs from "./components/pages/ContactUs"
import Events from "./components/pages/Events"
import Gallery from "./components/pages/Gallery"
import Infra from "./components/pages/Infrastructure"
import Placement from "./components/pages/Placements"
import Resource from "./components/pages/Resources"
import FooterTop from './components/header/FooterTop';
import MobileHeader from './components/header/MobileHeader';
import MobileFooter from './components/header/MobileFooter';

export default function App() {

  return (
    <div>

      <BrowserRouter>
        <SectionOne />
        <MobileHeader />
        <Routes>
          <Route exact path="/" element={<SectionHero />} />
          <Route exact path="/about" element={<AboutArya />} />
          <Route exact path="/acadmic" element={<Academics />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/conatct-us" element={<ContactUs />} />
          <Route exact path="/event" element={<Events />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/infra" element={<Infra />} />
          <Route exact path="/placement" element={<Placement />} />
          <Route exact path="/resource" element={<Resource />} />
        </Routes>
        <FooterTop />
        <MobileFooter />
      </BrowserRouter>

    </div>
  )
}
