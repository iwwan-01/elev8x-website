import Link from 'next/link'
import Image from 'next/image'

import { useState } from 'react'

import elev8xLogo from '../../../public/elev8x_logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const [visiblity, setVisiblity] = useState('invisible')
  const [position, setPosition] = useState(0)
  const [width, setWidth] = useState(0)

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  const onHover = (index) => {
    setVisiblity('visible')

    if (index == 0) {
      setPosition(10)
      setWidth(70)
    }

    if (index == 1) {
      setPosition(95)
      setWidth(95)
    }

    if (index == 2) {
      setPosition(200)
      setWidth(100)
    }

    if (index == 3) {
      setPosition(310)
      setWidth(90)
    }
  }

  const onLeave = () => {
    setVisiblity('invisible')
  }

  return (
    <>
      {/* Navbar Container */}
      <div className='fixed lg:top-5 w-full z-50'>
        {/* Navbar (mobile + tablet) */}
        <nav className='lg:hidden bg-white rounded-b-3xl'>
          {/* Main Wrapper */}
          <div className='flex flex-row justify-center py-4 px-8'>
            {/* Logo */}
            <div className='shrink-0 w-full md:px-8 px-4'>
              <Link href='/'>
                <Image
                  className='w-24 h-12 xl:w-32'
                  priority
                  src={elev8xLogo}
                  alt='elev8x'
                  width={100}
                  height={100}
                />
              </Link>
            </div>
            {/* Hamburger Menu */}
            {isOpen ? (
              <>
                {/* xMark Icon */}
                <div
                  onClick={toggleMenu}
                  className='flex shrink-0 justify-center items-center py-4'
                >
                  <FontAwesomeIcon
                    icon={faXmark}
                    width={30}
                    height={30}
                    color='black'
                  />
                </div>
              </>
            ) : (
              <>
                {/* Hamburger Icon */}
                <div
                  onClick={toggleMenu}
                  className='flex shrink-0 justify-center items-center py-4'
                >
                  <FontAwesomeIcon
                    icon={faBars}
                    width={30}
                    height={30}
                    color='black'
                  />
                </div>
              </>
            )}
          </div>
          {/* Navbar Links (mobile + tablet) */}
          {isOpen && (
            <>
              {/* Menu Items */}
              <div className='flex flex-col justify-center items-center gap-y-6 p-4 font-poppins text-md font-bold'>
                <Link href='/#about' onClick={() => setIsOpen(!isOpen)}>
                  <span>About</span>
                </Link>

                <Link href='/#services' onClick={() => setIsOpen(!isOpen)}>
                  <span>Services</span>
                </Link>

                <Link href='/#projects' onClick={() => setIsOpen(!isOpen)}>
                  <span>Projects</span>
                </Link>

                <Link href='/#contact' onClick={() => setIsOpen(!isOpen)}>
                  <span>Contact</span>
                </Link>
              </div>
            </>
          )}
        </nav>
        {/* Navbar (desktop) Container */}
        <div className='flex justify-center items-center'>
          {/* Navbar (desktop) */}
          <nav className='hidden p-4 lg:flex lg:justify-between lg:items-center rounded-full border bg-white w-[64rem]'>
            {/* Logo */}
            <div className='shrink-0 px-8'>
              <Link href='/'>
                <Image
                  className='w-20 h-8 xl:w-30 mb-2'
                  priority
                  src={elev8xLogo}
                  alt='elev8x'
                  width={100}
                  height={100}
                />
              </Link>
            </div>
            {/* Menu Container */}
            <div className='flex justify-center items-center rounded-full border drop-shadow-sm shrink-0 relative'>
              {/* Sliding Pill */}
              <div
                className={`bg-orange absolute h-[74%] mt-1.5 rounded-full z-0 inset-0 ${visiblity} transform transition-transform duration-200`}
                style={{
                  transform: `translateX(${position}px)`,
                  width: `${width}px`,
                }}
              ></div>
              {/* Menu Items */}
              <div className='list-none flex flex-row text-md font-poppins font-semibold'>
                {/* Menu Item */}
                <div
                  className='relative w-full py-3 px-5 hover:text-white transition-colors duration-200'
                  onMouseOver={() => onHover(0)}
                  onMouseLeave={onLeave}
                >
                  <Link href='/#about'>About</Link>
                  {/* <div className='bg-orange h-0.5 w-0 absolute group-hover:w-full transition-all duration-300'></div> */}
                </div>
                {/* Menu Item */}
                <div
                  className='relative w-full py-3 px-5 hover:text-white transition-colors duration-200'
                  onMouseOver={() => onHover(1)}
                  onMouseLeave={onLeave}
                >
                  <Link href='/#services'>Services</Link>
                  {/* <div className='bg-orange h-0.5 w-0 absolute group-hover:w-full transition-all duration-300'></div> */}
                </div>
                {/* Menu Item */}
                <div
                  className='relative w-full py-3 px-5 hover:text-white transition-colors duration-200'
                  onMouseOver={() => onHover(2)}
                  onMouseLeave={onLeave}
                >
                  <Link href='/#projects'>Projects</Link>
                  {/* <div className='bg-orange h-0.5 w-0 absolute group-hover:w-full transition-all duration-300'></div> */}
                </div>
                {/* Menu Item */}
                <div
                  className='relative w-full py-3 px-5 hover:text-white transition-colors duration-200'
                  onMouseOver={() => onHover(3)}
                  onMouseLeave={onLeave}
                >
                  <Link href='/#contact'>Contact</Link>
                  {/* <div className='bg-orange h-0.5 w-0 absolute group-hover:w-full transition-all duration-300'></div> */}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
export default Nav
