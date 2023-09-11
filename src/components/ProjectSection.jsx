import Frame from "./common/Frame"
import Project from "./common/Project"
import Image from "next/image";
// import thumb from "../public/thumb.svg";
import { FaReact } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiAdobexd, SiAdobephotoshop } from 'react-icons/si'

const ProjectSection = () => {
    const projectsData = [
        {
          pic: "./test-project.png",
          name: "BudgIT",
          shortDescr: "Mobile finance tracker",
          description:
                `A budgeting tool that automatically tracks all your bank accounts and provides a summary of your expenses. 
                Integration with banks is achieved through a secure third-party API, ensuring the safe flow of data to the application. 
                The development process includes creating design prototypes, selecting relevant technologies, development, and testing.
                `,
          gitRepo: "#",
          technologyLogos: [
            '/adobe-photoshop-2.svg',
            '/adobe-xd.svg',
            '/react-2.svg',
            '/spring-3.svg',
            '/postgresql.svg',
            '/aws-2.svg',
            '/jwtio-json-web-token.svg'
          ],
        },
        {
          pic: "./test-project.png",
          name: "BudgIT",
          shortDescr: "this is budgeting tool",
          description:
            "this is budgeting tool... (your long description)",
          gitRepo: "#",
          technologyLogos: [
            '/react-2.svg',
            '/favicon.ico',
            '/favicon.ico',
          ],
        },
      ];

    return (
        <>
          <div className='h-[100vh] w-[100vw] flex justify-center ease-linear duration-300 items-center bg-gray-100 dark:bg-slate-900'>
            <div className="md:w-[70rem] md:h-[30.5rem] w-[30.5rem] h-[55rem] p-4 rounded-2xl bg-white dark:bg-slate-800 shadow-lg dark:shadow-slate-700 flex flex-col ease-linear duration-300 md:flex-row-reverse">
              <div className=" h-full w-full  shadow-md rounded-2xl basis-2/3 relative">
                <div className="h-full w-full relative border-2 border-white rounded-2xl">
                  <Image
                    src={"/test-project.png"}
                    alt="thumbnail"
                    layout="fill"
                    objectFit="cover"
                    className=" rounded-2xl"
                  />
                </div>
              </div>

              <div className=" h-full w-full mr-2 rounded-2xl ">
                <p className="m-2 font-bold pl-1 text-lg text-purple-900">Mobile Finance Tracker</p>
                <h1 className="m-2 text-4xl font-bold dark:text-white">
                  BudgIT
                </h1>
                <p className="m-2 font-bold pl-1 text-lg">
                  A budgeting tool that automatically tracks all your bank accounts and provides a summary of your expenses. 
                  Integration with banks is achieved through a secure third-party API, ensuring the safe flow of data to the application. 
                  The development process includes creating design prototypes, selecting relevant technologies, development, and testing.
                </p>

                <div className=" pt-10 px-2 flex flex-row justify-around flex-wrap">
                  <div className="flex flex-row items-center m-2">
                    <FaReact size={30} color="#61DBFB" />
                    <h1 className="pl-1 dark:text-white">React Native</h1>
                  </div>
                  <div className="flex flex-row items-center m-2">
                    <FaAws size={30} color="orange" />
                    <h1 className="pl-1 dark:text-white">AWS</h1>
                  </div>
                  <div className="flex flex-row items-center m-2">
                    <SiSpring size={30} color="green" className="dark:text-white" />
                    <h1 className="pl-1 dark:text-white">Spring</h1>
                  </div>
                  <div className="flex flex-row items-center m-2">
                    <BiLogoPostgresql size={30} color="blue" className="dark:text-white" />
                    <h1 className="pl-1 dark:text-white">Postgres</h1>
                  </div>
                  <div className="flex flex-row items-center m-2">
                    <SiAdobexd size={30} color="blue" className="dark:text-white" />
                    <h1 className="pl-1 dark:text-white">Adobe XD</h1>
                  </div>
                  <div className="flex flex-row items-center m-2">
                    <SiAdobephotoshop size={30} color="blue" className="dark:text-white" />
                    <h1 className="pl-1 dark:text-white">Adobe Photoshop</h1>
                  </div>
                  <div className="flex flex-row items-center m-2">
                    <img
                      key={"Logo jwt"}
                      src={"jwtio-json-web-token.svg"}
                      alt={`Logo jwt`}
                      className="w-20 h-15"
                    />
                    <h1 className="pl-1 dark:text-white">JWT</h1>
                  </div>
                </div>
                <div className="flex gap-4 justify-center mt-4 ">
                  <a href={"#"} className="px-4 py-2 bg-purple-900 hover:bg-inherit hover:text-purple-900 border hover:border-purple-900 text-white rounded-full">
                    Know More
                  </a>
                  <a href={"#"} className="px-4 py-2 bg-white border border-purple-900 hover:bg-purple-900 hover:text-white text-purple-900 rounded-full flex items-center justify-center gap-1">
                    <span>Preview</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Frame title={"Our latest work"}>
              <div className="flex-col pt-20">
                  {projectsData.map((project, index) => (
                      <Project key={index} {...project} />
                  ))}
              </div>
          </Frame>
        </>
    )
}

export default ProjectSection;