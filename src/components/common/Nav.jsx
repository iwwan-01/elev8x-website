import Link from 'next/link'

const Nav = () => {
  return (
    <div className='flex justify-center items-center p-5 rounded-b-3xl border-2'>
      {/* Logo  */}
      <div className='group flex justify-center items-center font-poppins text-2xl w-full hover:scale-105'>
        <Link href='/'>
          <h1 className='font-medium'>
            elevate
            <span className='font-medium '>X</span>
          </h1>
        </Link>
      </div>
      {/* Navigation Links */}
      <div className='flex justify-center items-center gap-x-8 font-poppins font-light text-lg w-full'>
        <div className='relative group'>
          <Link href='/' className='h-full w-full'>
            About
          </Link>
          <div className='bg-black h-px w-0 absolute group-hover:w-full transition-all duration-300'></div>
        </div>
        <div className='relative group'>
          <Link href='/' className='h-full w-full'>
            Services
          </Link>
          <div className='bg-black h-px w-0 absolute group-hover:w-full transition-all duration-300'></div>
        </div>
        <div className='relative group'>
          <Link href='/' className='h-full w-full'>
            Projects
          </Link>
          <div className='bg-black h-px w-0 absolute group-hover:w-full transition-all duration-300'></div>
        </div>
        <div className='relative group'>
          <Link href='/' className='h-full w-full'>
            Contact
          </Link>
          <div className='bg-black h-px w-0 absolute group-hover:w-full transition-all duration-300'></div>
        </div>
      </div>
    </div>
  )
}
export default Nav
