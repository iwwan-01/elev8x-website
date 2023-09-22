import Link from 'next/link'

const Services = () => {
  return (
    <section id='services' className='scroll-mt-10'>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col font-poppins gap-y-12 py-24 lg:w-[63rem] w-full container'>
          {/* Headline Text */}
          <div className='flex flex-col gap-y-4 lg:px-20 px-10'>
            <h3 className='uppercase font-bold text-lg'>What we do</h3>
            <h1 className='font-bold text-6xl'>How We Can Help You</h1>
          </div>
          {/* Services Wrapper */}
          <div className='grid lg:grid-cols-3 gap-x-6 gap-y-10'>
            <div className='flex items-center justify-center flex-col w-full'>
              <div className='relative group flex flex-col justify-center items-center overflow-hidden border rounded-3xl bg-white border-neutral-200 h-full w-full gap-y-2 p-8'>
                <h1 className='font-bold text-lg text-center whitespace-nowrap'>
                  Web Design & Development
                </h1>
                <div className='flex justify-center items-center lg:h-[200px] md:h-[100px] h-[150px]'>
                  <p className='font-normal text-sm text-center'>
                    We design appealing, user-friendly websites, offer custom
                    front-end solutions, build e-commerce stores, provide
                    ongoing maintenance, and optimize conversion rates through
                    data-driven analysis.
                  </p>
                </div>
                <div className='absolute bottom-4 w-[30%] h-[0.5px] transition-all duration-300 bg-dark-blue group-hover:w-[75%]' />
              </div>
            </div>
            <div className='flex items-center justify-center flex-col w-full'>
              <div className='relative group flex flex-col justify-center items-center overflow-hidden border rounded-3xl bg-white border-neutral-200 h-full w-full gap-y-2 p-8'>
                <h1 className='font-bold text-lg text-center whitespace-nowrap'>
                  Digital Marketing & SEO
                </h1>
                <div className='flex justify-center items-center lg:h-[200px] md:h-[100px] h-[150px]'>
                  <p className='font-normal text-sm text-center'>
                    We enhance online visibility through SEO, build brand
                    recognition strategies, maintain a strong online presence,
                    and create tailored marketing strategies across various
                    digital channels. Our email marketing campaigns nurture
                    leads and retain customers effectively.
                  </p>
                </div>
                <div className='absolute bottom-4 w-[30%] h-[0.5px] transition-all duration-300 bg-dark-blue group-hover:w-[75%]' />
              </div>
            </div>
            <div className='flex items-center justify-center flex-col w-full'>
              <div className='relative group flex flex-col justify-center items-center overflow-hidden border rounded-3xl bg-white border-neutral-200 h-full w-full gap-y-2 p-8'>
                <h1 className='font-bold text-lg whitespace-nowrap'>
                  Custom Enterprise Solutions
                </h1>
                <div className='flex justify-center items-center lg:h-[200px] md:h-[100px] h-[150px]'>
                  <p className='font-normal text-sm text-center'>
                    We offer custom software solutions, mobile app development,
                    cloud solutions, and business process optimization. Our
                    Agile project management ensures efficient and adaptable
                    results to meet your unique business needs.
                  </p>
                </div>
                <div className='absolute bottom-4 w-[30%] h-[0.5px] transition-all duration-300 bg-dark-blue group-hover:w-[75%]' />
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <Link href='/#contact'>
              <div className='px-10 py-3 border rounded-3xl w-full relative group flex justify-center items-center overflow-x-hidden bg-white border-neutral-200'>
                <span className='absolute h-full w-0 inset-0 transition-all group-hover:bg-orange group-hover:w-full duration-500 z-0'></span>
                <span className='text-md font-medium z-10 group-hover:text-white transition-colors duration-500'>
                  Learn more
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
