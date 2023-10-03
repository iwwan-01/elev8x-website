import Link from 'next/link'
import Image from 'next/image'
import {
  FaLinkedin,
  FaSquareFacebook,
  FaSquareTwitter,
  FaSquareInstagram,
} from 'react-icons/fa6'

import elev8xLogoWhite from '../../../public/elev8x_logo_white.svg'

const Footer = () => {
  return (
    <footer>
      <div className='flex justify-center items-center bg-orange w-full overflow-x-hidden'>
        {/* Main Wrapper */}
        <div className='flex flex-col-reverse lg:flex-row justify-between gap-y-8 lg:px-64 py-8 w-full h-full container'>
          {/* Left Container */}
          <div className='flex flex-col font-poppins justify-center items-center text-sm font-semibold text-white gap-y-8 p-8'>
            <Image
              src={elev8xLogoWhite}
              width={150}
              height={150}
              color='white'
            />
            {/* Social Media Links */}
            <div className='flex flex-row gap-x-2'>
              <Link
                target='_blank'
                href='https://www.linkedin.com/company/elev8x/'
              >
                <FaLinkedin className='w-8 h-8' width={150} height={150} />
              </Link>
              <Link target='_blank' href='https://www.facebook.com/elev8x/'>
                <FaSquareFacebook
                  className='w-8 h-8'
                  width={150}
                  height={150}
                />
              </Link>
              <Link target='_blank' href='https://twitter.com/elev8xeu'>
                <FaSquareTwitter className='w-8 h-8' width={150} height={150} />
              </Link>
              <Link target='_blank' href='https://www.instagram.com/elev8xeu'>
                <FaSquareInstagram
                  className='w-8 h-8'
                  width={150}
                  height={150}
                />
              </Link>
            </div>
            <h3>{new Date().getFullYear()}© elev8x. All rights reserved.</h3>
          </div>
          {/* Right Container */}
          <div className='flex flex-col text-center gap-y-4 p-8'>
            <div>
              <h1 className='font-poppins font-bold whitespace-nowrap text-white text-2xl'>
                Working Hours
              </h1>
            </div>
            <div className='flex flex-col font-poppins whitespace-nowrap text-white text-md gap-y-2'>
              <div className='flex flex-col gap-y-1'>
                <h3 className='font-semibold'>Monday - Friday</h3>
                <h4 className='font-light'>08:00AM - 6:00PM</h4>
              </div>
              <div className='flex flex-col gap-y-1'>
                <h3 className='font-semibold'>Saturday</h3>
                <h4 className='font-light'>10:00AM - 4:00PM</h4>
              </div>
              <div className='flex flex-col gap-y-1'>
                <h3 className='font-semibold'>Sunday</h3>
                <h4 className='font-light'>Closed</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
