import React from 'react';
import PortfolioCard from './PortfolioCard';

const Portfolio = () => {

  const projects = [
    {
        title: 'Car Offer Data Extraction',
        description:
            `
            The solution ensures efficient data extraction, processing, and storage, while offering features such as price history tracking, 
            notifications for specific offers, and data enrichment with safety ratings and fuel efficiency information. It implements a serverless 
            architecture to provide cost-efficiency, reliability, and continuous monitoring to ensure the processes are executed correctly.      
            `,
        technologyLogos: [
            '/postgresql.svg',
            '/aws-lambda-1.svg',
            '/aws-cloudwatch.svg',
            '/aws-dynamodb.svg',
            '/aws-sns.svg'
          ],
        link: 'https://github.com/tyordanovv/CarPriceProject/tree/master#readme'
    },
    {
        title: 'Business Management System',
        description:
            `Our Business Management System is a robust and easily scalable system that streamlines business operations, increases efficiency, 
            and ultimately drives growth and profitability for your business. With features such as employee management, finance control, and many 
            more modules to effectively manage all aspects of a business. All data is stored in the cloud and is easily accessible from all devices and locations.`,
        technologyLogos: [
            '/adobe-photoshop-2.svg',
            '/adobe-xd.svg',
            '/react-2.svg',
            '/spring-3.svg',
            '/postgresql.svg',
            '/aws-2.svg',
            '/jwtio-json-web-token.svg',
          ]
    },
    {
        title: 'Business Management System',
        description:
            `Our Business Management System is a robust and easily scalable system that streamlines business operations, increases efficiency, 
            and ultimately drives growth and profitability for your business. With features such as employee management, finance control, and many 
            more modules to effectively manage all aspects of a business. All data is stored in the cloud and is easily accessible from all devices and locations.`,
        technologyLogos: [
            '/adobe-photoshop-2.svg',
            '/adobe-xd.svg',
            '/react-2.svg',
            '/spring-3.svg',
            '/postgresql.svg',
            '/aws-2.svg',
            '/jwtio-json-web-token.svg',
          ]
    },
    {
        title: 'Business Management System',
        description:
            `Our Business Management System is a robust and easily scalable system that streamlines business operations, increases efficiency, 
            and ultimately drives growth and profitability for your business. With features such as employee management, finance control, and many 
            more modules to effectively manage all aspects of a business. All data is stored in the cloud and is easily accessible from all devices and locations.`,
        technologyLogos: [
            '/adobe-photoshop-2.svg',
            '/adobe-xd.svg',
            '/react-2.svg',
            '/spring-3.svg',
            '/postgresql.svg',
            '/aws-2.svg',
            '/jwtio-json-web-token.svg',
          ]
    },
  ];

  return (
    <>
      <div className="my-4 py-4" id="portfolio">
        <h2 className="my-2 text-center text-3xl md:text-5xl font-bold">Some other projects</h2>
        <div className="flex justify-center">
          <div className="w-40 border-b-4 border-stone-900 mb-8"></div>
        </div>

        <div className="px-4" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {projects.map((project, index) => (
              <PortfolioCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
