
import Image from 'next/image'
import React from 'react'
import logo from '../app/images/logo.png'
import Link from 'next/link'


const Header = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto bg-black py-3
      ">
        <div className="logo">
        <Image 
        src={logo}
        alt='logo'
        width={"100px"}
        height={"100px"}
        />
      </div>
      <div className="menu">
        <ul className='font-semibold text-lg text-white space-x-6 flex justify-center'>
            <Link href={"/"}><li>Home</li></Link>
            <Link href={"/about"}><li>About</li></Link>
            <Link href={"/service"}><li>Service</li></Link>
            <Link href={"/blog"}><li>Blog</li></Link>
            <Link href={"/contact"}><li>Contact</li></Link>
        </ul>
      </div>

      </div>
    </div>
  )
}

export default Header
