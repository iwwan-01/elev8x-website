import ProjectSection from "@/components/ProjectSection";
import Portfolio from "@/components/Portfolio";
import TopTextField from "@/components/TopTextField";

const Projects = () => {
  return (
    <>
      <TopTextField text={"Start your digital journey now with us."}/>
      <ProjectSection />
      <Portfolio />
    </>
  );
};

export default Projects;
