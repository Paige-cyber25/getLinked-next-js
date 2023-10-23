'use client'

import { useState } from "react";
import { Button } from "@/components/Button/Button";
import { Divider } from "@/components/Divider/Divider";
import "./Navbar.css";
export function Navbar() {
  const [activeLink, setActiveLink] = useState('');
  return (
    <div>
      <nav className="navbar z-[100] fixed top-0 left-0 right-0 w-[100%] px-[8.47%] border-b-[1px] border-b-[#FFFFFF2E] pt-[4.43%] pb-[1.98%] flex items-center justify-between">
        <a className="text-white text-[36px]" href="/">
          get<span className="text-[#D434FE] text-[36px]">Linked</span>
        </a>
        <section className="flex items-center justify-between max-[620px]:hidden">
            <ul className="flex items-center mr-[100px] links">
            <li className={`line text-[16px] text-[#fff] ${activeLink === 'timeline' ? 'active-link' : ''}`}><a href="#timeline" onClick={() => setActiveLink('timeline')}>Timeline</a></li>
            <li className={`text-[16px] text-[#fff] ml-[56px] ${activeLink === 'overview' ? 'active-link' : ''}`}><a href="#overview" onClick={() => setActiveLink('overview')}>Overview</a></li>
            <li className={`text-[16px] text-[#fff] ml-[56px] ${activeLink === 'faq' ? 'active-link' : ''}`}><a href="#faq" onClick={() => setActiveLink('faq')}>FAQs</a></li>
            <li className={`text-[16px] text-[#fff] ml-[56px] ${activeLink === 'contact' ? 'active-link' : ''}`}><a href="#contact" onClick={() => setActiveLink('contact')}>Contact</a></li>
            </ul>
        </section>      
        <Button />

        <button className="sm:hidden">

        </button>
      </nav>

     <Divider />
    </div>
  );
}
