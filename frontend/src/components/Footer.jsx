import React from 'react'
import { assets } from '../assets/assets.js'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-16 my-10 mt-40 text-sm'>

        {/*----------Left---------*/}
        <div>
          <div className='flex items-center gap-2 mb-5'>
            <img className='w-15 h-20' src={assets.logo} alt="" />
            <p className='text-xl font-bold'>Dr.Connect</p>
          </div>
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>

        {/*----------Center---------*/}
        <div>
          <p className='text-xl font-medium mb-5'>Company</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/*----------Right---------*/}
        <div>
          <p className='text-xl font-medium mb-5'>Get In Touch</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+919999988888</li>
            <li>demo@gmail.com</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Footer
