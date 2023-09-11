import ServicesCard from './ServicesCard'
import Button from './Button'
import Frame from './Frame'

const ServicesSummary = () => {
  return (
    <Frame title={'Our Services'}>
      <div className='flex flex-col'>
        <div className='flex items-center justify-center gap-8 flex-row flex-wrap lg:flex-nowrap'>
          <ServicesCard
            title={'Enterprise Solutions'}
            text={
              `
              We offer custom software solutions, mobile app development, cloud solutions, 
              and business process optimization. Our Agile project management ensures 
              efficient and adaptable results to meet your unique business needs.
              `
            }
          />
          <ServicesCard
            title={'Web Development'}
            text={
              `
              We design appealing, user-friendly websites, offer custom front-end 
              solutions, build e-commerce stores, provide ongoing maintenance, and 
              optimize conversion rates through data-driven analysis.
              `
            }
          />
          <ServicesCard
            title={'Marketing'}
            text={
              `
              We enhance online visibility through SEO, build brand recognition strategies,
              maintain a strong online presence, and create tailored marketing strategies
              across various digital channels. Our email marketing campaigns nurture leads 
              and retain customers effectively.
              `
            }
          />
        </div>
        <div className='flex justify-center py-6'>
          <Button text={'Learn more'} link={'/services'} />
        </div>
      </div>
    </Frame>
  )
}

export default ServicesSummary;
