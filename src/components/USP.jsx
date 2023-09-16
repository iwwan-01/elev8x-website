import Link from 'next/link'

const USP = () => {
  return (
    <section>
      {/* Main Container */}
      <div className='flex justify-center items-center overflow-x-hidden'>
        <div className='flex justify-center items-center container'>
          <div className='lg:px-64 py-14'>
            <div className='bg-orange h-full w-full font-poppins rounded-3xl '>
              <div className='flex flex-col gap-y-12 w-full p-14'>
                {/* Headline Container */}
                <div className='flex flex-col gap-y-4 w-full'>
                  <h3 className='uppercase font-bold text-lg text-white'>
                    Why choose elev8x
                  </h3>
                  <h1 className='font-bold text-6xl text-white'>
                    Your Vision is Our Priority
                  </h1>
                </div>
                {/* Body Container  */}
                <div className='flex flex-col text-xl font-semibold text-white gap-y-12 w-full'>
                  <p>Elev8x isn't your typical digital agency.</p>
                  <p>
                    We are your passionate partner in the journey of elevating,
                    innovating, and optimizing your business.
                  </p>
                  <p>
                    We firmly reject the notion of generic, one-size-fits-all
                    solutions. Instead, we prioritize your unique vision and
                    business goals.
                  </p>
                  <h2 className='text-4xl font-bold'>
                    We are not here to dictate instead we are here to
                    collaborate.
                  </h2>
                  <p>
                    We listen intently, learn deeply, and grasp the nuances of
                    your business, ensuring that the strategies we craft for you
                    are tailored precisely to your needs, fitting seamlessly
                    into your digital journey.
                  </p>
                </div>
                {/* CTA */}
                <Link href='/'>
                  <div className='group flex justify-center items-center mt-2 bg-dark-blue rounded-full w-full h-14 hover:bg-orange transition-color duration-300 whitespace-nowrap'>
                    <span className='uppercase font-bold text-white lg:text-lg md:text-md font-poppins'>
                      Start your journey with us now
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default USP
