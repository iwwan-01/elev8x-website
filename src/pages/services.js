import TopTextField from "@/components/common/TopTextField";
import Frame from "@/components/common/Frame";
import ServiceDescription from "@/components/common/ServiceDescription";

const Services = () => {
  const servicesData = [
    {
      title: 'Web/Mobile Development',
      name: 'Web/Mobile Development',
      picture: './mobile-web.jpg',
      description: 'We specialize in immersive web and mobile application development. Our agile development approach ensures rapid deployment of scalable solutions.',
      bulletPoints: ['React.js', 'React Native', 'Node.js', 'AWS', 'DevOps'],
    },
    {
      title: 'Digital Transformation & Modernization',
      name: 'Digital Transformation & Modernization',
      picture: './automation.jpg',
      description: 'We offer digital transformation and modernization services to drive your business forward. Our expertise includes CMS development, application modernization, and system integration.',
      bulletPoints: ['CMS development', 'System integration', 'Application modernization', 'Workflow Optimization', 'DevOps'],
    },
    {
      title: 'UI/UX Design',
      name: 'UI/UX Design',
      picture: './design.jpg',
      description: 'Our UI/UX design services create visually captivating and functionally elegant interfaces. We prioritize user-centric design principles and employ UI/UX prototyping techniques.',
      bulletPoints: ['UI/UX prototyping', 'Wireframing'],
    },
    {
      title: 'Enterprise Software Development',
      name: 'Enterprise Software Development',
      picture: './enterprise.jpg',
      description: 'We specialize in enterprise software development that integrates seamlessly with existing infrastructure. Our services encompass project scoping, API integration, and custom CRM development.',
      bulletPoints: ['Java', 'Spring', 'API integration', 'Custom CRM development'],
    },
  ];

  return (
    <>
      <TopTextField  text='Your Tech Partner That Helps You Accelerate Digitalisation' />  
      {servicesData.map((service, index) => (
        <Frame title={service.title} key={index}>
          <ServiceDescription
            name={service.name}
            picture={service.picture}
            description={service.description}
            bulletPoints={service.bulletPoints}
            reverseOrder={index === 1}
          />
        </Frame>
      ))}
    </>
  );
};

export default Services;
