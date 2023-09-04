import Frame from "@/components/common/Frame";
import Project from "@/components/common/Project";
import Portfolio from "@/components/common/Portfolio";
import TopTextField from "@/components/common/TopTextField";

const Projects = () => {

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
      <TopTextField text={"Start your digital journey now with us."}/>
      <Frame title={"Our latest work"}>
        <div className="flex-col pt-20">
          {projectsData.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
        <Portfolio />
      </Frame>
    </>
  );
};

export default Projects;
