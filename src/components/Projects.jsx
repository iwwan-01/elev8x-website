import Image from 'next/image'
import Link from 'next/link'

import budgitProjectPicture from '../../public/BudgitProjectPicture.png'
import innotopiaProjectPicture from '../../public/InnotopiaProjectPicture.png'

import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiSanity, SiMongodb, SiExpress, SiNextdotjs } from 'react-icons/si'

const Projects = () => {
  return (
    <section id='projects' className='scroll-mt-10'>
      <div className='flex justify-center items-center overflow-x-hidden'>
        <div className='flex flex-col gap-y-12 py-24'>
          {/* Headline Text */}
          <div className='flex flex-col gap-y-4 lg:px-20 px-10'>
            <h3 className='font-poppins uppercase font-bold text-lg'>
              Our Portfolio
            </h3>
            <h3 className='font-poppins font-bold text-6xl'>
              What We Have Done
            </h3>
          </div>

          {/* Projects Card Wrapper */}
          <div className='flex flex-col justify-center items-center lg:w-[63rem] w-full gap-y-24'>
            {/* Project Card */}
            <div className='flex flex-col overflow-hidden border rounded-3xl bg-white border-neutral-200 h-full w-full gap-y-2 p-8 font-poppins'>
              <div className='flex lg:flex-row flex-col-reverse gap-y-10 gap-x-12 p-4'>
                <div className='flex flex-col gap-y-4 w-full'>
                  <h1 className='font-bold text-4xl'>BudgIT</h1>
                  <h3 className='font-semibold text-lg'>
                    Fintech Mobile Application
                  </h3>
                  <p className='font-normal text-md'>
                    A budgeting tool that automatically tracks all of your bank
                    accounts and provides a summary of your expenses.
                    Integration with banks is achieved through a secure
                    third-party APIs, ensuring the safe flow of data to the
                    application. The development process includes creating
                    design, prototypes, selecting relevant technologies,
                    development and testing.
                  </p>
                  <h4 className='font-semibold text-lg'>Tech Stack:</h4>
                  {/* Tech Stack Container */}
                  <div className='flex flex-row gap-x-4'>
                    <SiMongodb className='w-8 h-8' width={150} height={150} />
                    <SiExpress className='w-8 h-8' width={150} height={150} />
                    <FaReact className='w-8 h-8' width={150} height={150} />
                    <FaNodeJs className='w-8 h-8' width={150} height={150} />
                  </div>
                  <div className='flex flex-row gap-x-4'>
                    {/* CTA */}
                    <Link href='/#contact'>
                      <div className='group flex justify-center items-center mt-4 bg-dark-blue w-36 h-12 rounded-3xl drop-shadow-sm hover:bg-orange transition-color duration-300'>
                        <span className=' font-semibold text-white lg:text-lg md:text-md font-poppins'>
                          Learn More
                        </span>
                      </div>
                    </Link>
                    <Link
                      href='https://xd.adobe.com/view/812e55e4-d2f9-4a37-a876-27c05845113a-d47d/?fullscreen&hints=off'
                      target='blank'
                    >
                      <div className='group flex justify-center items-center mt-4 bg-white border border-neutral-200 w-36 h-12 rounded-3xl drop-shadow-sm hover:bg-dark-blue hover:border-none transition-color duration-300'>
                        <span className=' font-semibold lg:text-lg md:text-md group-hover:text-white font-poppins'>
                          Preview
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className='flex justify-center items-center rounded-3xl border drop-shadow-md border-neutral-200 w-full overflow-hidden'>
                  <Image
                    className='w-full h-full object-cover'
                    src={budgitProjectPicture}
                    alt='BudgIT Project Picture'
                    width={1920}
                    height={1080}
                  />
                </div>
              </div>
            </div>
            {/* Project Card */}
            <div className='flex flex-col overflow-hidden border rounded-3xl bg-white border-neutral-200 h-full w-full gap-y-2 p-8 font-poppins'>
              <div className='flex lg:flex-row-reverse flex-col-reverse gap-y-10 gap-x-12 p-4'>
                <div className='flex flex-col gap-y-4 w-full'>
                  <h1 className='font-bold text-4xl'>Innotopia</h1>
                  <h3 className='font-semibold text-lg'>
                    Web Design & Development
                  </h3>
                  <p className='font-normal text-md'>
                    Innotopia is a company based in Groningen, Netherlands that
                    is a rebrand of the company &apos;Indietopia&apos;. The new
                    company expands on the previous business model and offers
                    all kind of different creative digital solutions with a
                    focus on digital transformation and innovation acceleration.
                    The development process includes creating design, selecting
                    relevant technologies based on the client requirements,
                    development and testing.
                  </p>
                  <h4 className='font-semibold text-lg'>Tech Stack:</h4>
                  {/* Tech Stack Container */}
                  <div className='flex flex-row gap-x-4'>
                    <SiNextdotjs className='w-8 h-8' width={150} height={150} />
                    <SiSanity className='w-8 h-8' width={150} height={150} />
                  </div>
                  <div className='flex flex-row gap-x-4'>
                    {/* CTA */}
                    <Link href='/'>
                      <div className='group flex justify-center items-center mt-4 bg-dark-blue w-36 h-12 rounded-3xl drop-shadow-sm hover:bg-orange transition-color duration-300'>
                        <span className=' font-semibold text-white lg:text-lg md:text-md font-poppins'>
                          Learn More
                        </span>
                      </div>
                    </Link>
                    <Link href='/#contact'>
                      <div className='group flex justify-center items-center mt-4 bg-white border border-neutral-200 w-40 h-12 rounded-3xl drop-shadow-sm hover:bg-dark-blue hover:border-none transition-color duration-300'>
                        <span className='font-semibold lg:text-lg md:text-md group-hover:text-white font-poppins'>
                          Coming Soon
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className='flex justify-center items-center rounded-3xl border drop-shadow-md border-neutral-200 w-full overflow-hidden'>
                  <Image
                    className='w-full h-full object-contain'
                    src={innotopiaProjectPicture}
                    alt='Innotopia Project Picture'
                    width={1920}
                    height={1080}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Projects
