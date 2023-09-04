import Frame from "./common/Frame"
import Footer from "./common/Footer"
import AboutSummary from "./common/AboutSummary"
import ServicesSummary from "./common/ServicesSummary"

const Main = () => {
  return (
    <section>
      <div className='flex justify-center items-center p-14'>
        <div className='flex flex-col gap-y-6'>
          <p className='text-black text-6xl font-bold font-poppins text-center'>
            Welcome to elevateX
          </p>
          <p className='text-black text-6xl text-center font-poppins font-light '>
            Unleash the digital potential of your business
          </p>
        </div>
      </div>
      {/* Main page content */}
      <div className='pt-20 bg-neutral-100'>
        <Frame title={'About us'}>
          <AboutSummary />
        </Frame>
        <Frame title={'Our Services'}>
          <ServicesSummary />
        </Frame>
      </div>
      <Footer />
    </section>
    
  )
}
export default Main
