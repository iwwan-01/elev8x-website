import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlinePhone } from "react-icons/ai";
import Link from 'next/link'


function Footer() {
  const iconsTab = [
    { icon: <AiOutlineInstagram /> },
    { icon: <AiOutlineLinkedin /> },
  ];
  return (
    <>
      <footer className="bg-white">
        <div className="container mx-auto  py-[10rem]">
          {/* footer div all */}
          <div className="flex justify-between flex-col md:flex-row  items-center md:items-start  md:gap-[5rem] text-left">
            {/* logo side */}
            <div className="flex flex-col w-1/2 md:p-0 py-4 gap-8">
                <h1 className="text-xl md:text-5xl font-semibold text-df-accent">Elev8-X</h1>
                <p className="text-[15px] font-medium text-[#646464]">
                    Unleash the digital potential of your business.
                </p>
                {/* socials */}
                <div className="flex gap-7 text-[18px] text-[#646464] justify-center md:justify-start">
                    {iconsTab.map(({ icon }, index) => {
                    return (
                        <div
                        key={index}
                        className="text-2xl bg-[#efefef] p-2 rounded-full hover:bg-purple-900 hover:text-white"
                        style={{ transition: "all 0.3s" }}
                        >
                        {icon}
                        </div>
                    );
                    })}
                </div>
                <p className="text-[16px] font-medium text-[#646464]">
                    © {new Date().getFullYear()} Elev8-X. All rights reserved<br />
                </p>
            </div>

            {/* middle div */}
            <div className="flex flex-col gap-8 relative">
                <p className="text-[22px] font-bold footer-main">See more</p>
                <span className="top-[33px] absolute w-[7rem] h-[4px] bg-purple-900"></span>
                <p className="text-[16px] hover:text-purple-900 cursor-pointer text-[#646464] font-medium hover:font-bold">
                    <Link href='/about' className='h-full w-full'>
                        About us
                    </Link>
                </p>
                <p className="text-[16px] hover:text-purple-900 cursor-pointer text-[#646464] font-medium hover:font-bold">
                    <Link href='/services' className='h-full w-full'>
                        Services
                    </Link>
                </p>
                <p className="text-[16px] hover:text-purple-900 cursor-pointer text-[#646464] font-medium hover:font-bold">
                    <Link href='/projects' className='h-full w-full'>
                        Projects
                    </Link>
                </p>
                <p className="text-[16px] hover:text-purple-900 cursor-pointer text-[#646464] font-medium hover:font-bold">
                    <Link href='/contact' className='h-full w-full'>
                        Contact us
                    </Link>
                </p>
            </div>

            {/* right div */}
            <div className="flex flex-col gap-8 relative">
                <p className="text-[22px] font-bold footer-main">Working Hours</p>

                <span className="top-[33px] absolute w-[7rem] h-[4px] bg-purple-900"></span>

                <p className="text-[16px]  text-[#646464] font-bold">
                    Monday - Friday:
                </p>
                <p className="text-[16px] text-[#646464] font-medium">
                    7:00am - 21:00pm
                </p>
                <p className="text-[16px] text-[#646464] font-bold ">
                    Saturday - Closed
                </p>
                <p className="text-[16px] text-[#646464] font-bold ">
                    Sunday - Closed
                </p>
            </div>
            

            {/* middle div */}
            <span></span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;