import ServicesCard from './ServicesCard'
import Button from './Button'
import Frame from './Frame'

const ServicesSummary = () => {
  return (
    <Frame title={'Our Services'}>
      <div className='flex flex-col'>
        <div class='flex items-center justify-center gap-8 flex-row flex-wrap lg:flex-nowrap'>
          <ServicesCard
            title={'Software Development'}
            text={
              'We will mae your app line no one else. Just trust us it is not a scam, bro. Im writing this text to test the card. Dont focus in the text here and continue reading. Thanks!'
            }
          />
          <ServicesCard
            title={'Mobile Development'}
            text={
              'We will mae your app line no one else. Just trust us it is not a scam, bro. Im writing this text to test the card. Dont focus in the text here and continue reading. Thanks!'
            }
          />
          <ServicesCard
            title={'UI/UX Design'}
            text={
              'We will mae your app line no one else. Just trust us it is not a scam, bro. Im writing this text to test the card. Dont focus in the text here and continue reading. Thanks!'
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
