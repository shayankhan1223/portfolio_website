import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <nav className='bg-[#000000] flex xs:justify-center py-5 z-10 lg:py-4 lg:justify-start lg:px-16'>
        <ul className='flex xs:text-sm text-white '>
         <Link href="/"><li className='xs:mx-3 xs:hover:text-blue-500 md:text-base'>Home</li></Link>
          <Link href="/about">  <li className='xs:mx-3 xs:hover:text-blue-500 md:text-base'>About</li></Link>
          <Link href="/portfolio">  <li className='xs:mx-3 xs:hover:text-blue-500 md:text-base'>Portfolio</li></Link>
          <Link href="/resume">  <li className='xs:mx-3 xs:hover:text-blue-500 md:text-base'>Resume</li></Link>
           
        </ul>
    </nav>
  )
}

export default Header