import React from "react";
import Image from "next/image";
import Link from "next/link";
// import {  FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

const Page = () => {
  return (
    <div className="relative w-full min-h-screen bg-black lg:bg-[url('/FAV.jpeg')] bg-cover bg-no-repeat flex flex-col overflow-hidden">
      <nav className='bg-transparent flex xs:justify-center py-5 z-10 md:py-4 md:justify-start md:px-16'>
        <ul className='flex xs:text-sm text-white '>
          <Link href="/">  <li className='xs:mx-3 xs:hover:text-blue-500 md:text-base'>Home</li></Link>
          <Link href="/about">  <li className='xs:mx-3 xs:hover:text-blue-500 md:text-base'>About</li></Link>
          <Link href="/portfolio">  <li className='xs:mx-3 xs:hover:text-blue-500 md:text-base'>Portfolio</li></Link>
          <Link href="/resume">  <li className='xs:mx-3 xs:hover:text-blue-500 md:text-base'>Resume</li></Link>
           
        </ul>
    </nav>

      <div className="relative flex-grow flex justify-center items-center">
        <Image
          src="/FAV.jpeg" // Path to your image file
          alt="Description of the image"
          layout="fill" // This makes the image fill the parent container
          objectFit="cover" // Maintains aspect ratio while covering the container
          className="xs:h-full xs:w-full -z-10" // Ensures the image takes full height and width
        />

        {/* Main Div */}
        <div className="text-white flex flex-col justify-center items-center text-center relative xs:-top-14 lg:absolute lg:left-40 lg:top-40">
          <span className="text-[#e8e8e8] xs:block xs:tracking-tight xs:text-[16px] transform scale-y-150 lg:transfrom lg:scale-y-[2] lg:tracking-wide lg:text-xl lg:absolute lg:left-1 lg:-top-7">
            MOHAMMAD
          </span>
          <span className="text-white font-bold xs:block xs:text-6xl xs:tracking-tighter">
            SHAYAN
          </span>
          <span className="text-[#afafaf] xs:block xs:tracking-[0.2rem] xs:mt-2 text-base">
            Front End Developer
          </span>

          {/* Buttons Div */}
          <div className="flex justify-center w-full xs:mt-10">
            <button className="text-white bg-transparent border rounded-full hover:border-blue-500 xs:px-4 xs:pb-1 xs:mx-2">
              Resume
            </button>
            <button className="text-white bg-transparent border rounded-full hover:border-blue-500 xs:px-4 xs:pb-1 xs:mx-2">
              Portfolio
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-transparent text-white text-center py-4">
        This is Footer
      </footer>
    </div>
  );
};

export default Page;
