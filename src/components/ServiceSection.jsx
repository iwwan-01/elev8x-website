import Frame from "@/components/common/Frame";
import ServiceDescription from "@/components/common/ServiceDescription";


const ServiceSection = () => {
    const servicesData = [
        {
          title: 'Web Development',
          name: 'Web and Mobile Development',
          picture: './mobile-web.jpg',
          description: 'We specialize in immersive web and mobile application development. Our agile development approach ensures rapid deployment of scalable solutions.',
          bulletPoints: ['React.js', 'React Native', 'Node.js', 'UI/UX prototyping'],
        },
        {
          title: 'Enterprise Solutions',
          name: 'Enterprise Software Development',
          picture: './enterprise.jpg',
          description: 'We specialize in enterprise software development that integrates seamlessly with existing infrastructure. Our services encompass project scoping, API integration, and custom CRM development.',
          bulletPoints: ['Java', 'Spring', 'API integration', 'AWS', 'DevOps'],
        },
        {
          title: 'Marketing',
          name: 'Digital Marketing Services',
          picture: './enterprise.jpg',
          description: 'We excel in digital marketing services that enhance your online presence and drive business growth. Our data-driven approach maximizes your ROI.',
          bulletPoints: ['SEO', 'Brand Strategy', 'Social Media Management', 'Paid Advertising', 'Email Marketing'],
        },
      ];

    return(
        <>   
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
    )
}

export default ServiceSection;