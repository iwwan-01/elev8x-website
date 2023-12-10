import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import WordChanger from './common/WordChanger';

const Main = () => {
  const [isOn, setIsOn] = useState(false);
  const [isTurned, setIsTurned] = useState(false);

  const handleIsOn = () => {
    setIsOn(!isOn);
  };

  const handleIsTurned = () => {
    setIsTurned(!isTurned);
  };

  return (
    <section id='main'>
      <div className='flex justify-center items-center'>
        <div className='flex flex-col-reverse md:flex-row justify-center items-center overflow-x-hidden lg:container gap-x-40 gap-y-16 px-14 pt-48 pb-24'>
          {/* Sales Text Container */}
          <div className='flex flex-col gap-y-4'>
            <h3 className='font-poppins text-lg text-left font-normal'>
              Your trusted digital partner
            </h3>
            <WordChanger />
            <h2 className='text-black text-xl text-left font-poppins font-semibold mt-20 lg:mt-10 md:mt-8'>
              Unleash the digital potential of your business.
            </h2>
            <div className='flex flex-row gap-x-4'>
              {/* CTA */}
              <Link target='_blank' href='https://calendly.com/elev8x'>
                <div className='group flex justify-center items-center mt-2 rounded-full bg-orange w-44 h-11 hover:scale-105 transition-transform duration-300'>
                  <span className='uppercase font-bold text-white text-lg font-poppins'>
                    Let&apos;s Meet
                  </span>
                </div>
              </Link>
              {/* CTA */}
              <Link href='/#contact'>
                <div className='group flex justify-center items-center mt-2 rounded-full border border-neutral-200 w-44 h-11 hover:scale-105 transition-transform duration-300'>
                  <span className='uppercase font-bold text-black text-lg font-poppins'>
                    Contact Us
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* Hero Container */}
          <div className='flex justify-center items-center lg:pr-8'>
            <div className='rounded-full border w-[200px] h-[350px] relative'></div>
            <div className='absolute flex flex-col gap-y-4'>
              <div
                onClick={handleIsOn}
                className={
                  isOn
                    ? 'w-0 h-0 border-l-[60px] border-l-transparent border-b-[100px] border-b-orange border-r-[60px] border-r-transparent'
                    : 'w-0 h-0 border-l-[60px] border-l-transparent border-b-[100px] border-b-dark-blue border-r-[60px] border-r-transparent hover:border-b-orange transition-colors duration-300'
                }
              ></div>
              <div
                onClick={handleIsTurned}
                className={
                  isTurned
                    ? 'w-0 h-0 border-l-[60px] border-l-transparent border-t-[100px] border-t-dark-blue border-r-[60px] border-r-transparent rotate-180'
                    : 'w-0 h-0 border-l-[60px] border-l-transparent border-t-[100px] border-t-dark-blue border-r-[60px] border-r-transparent hover:rotate-180 transition-transform duration-300'
                }
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Main;
