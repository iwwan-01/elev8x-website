import AboutCard from './common/AboutCard'

function AboutMain() {
  return (
    <section>
      <div className='relative bg-neutral-50 md:p-0'>
        <div
          className='
          px-4 sm:px-6 md:px-8 ipad:px-10 lg:px-12
          relative z-10 py-32 bg-neutral-100 md:rounded-none 
        '
        >
          <div className='flex justify-center gap-2 items-center mb-6 p-6'>
            <h3 className='text-xl md:text-5xl opacity-60 md:opacity-40 font-semibold text-df-accent'>
              Who are we
            </h3>
          </div>
          <div className='flex justify-center'>
            <p className='max-w-4xl mb-20 text-center sm:text-2xl'>
              We will make your software
            </p>
          </div>
          {/* Container for about cards*/}
          <div className='flex flex-col content-start md:flex-row flex-wrap gap-10 justify-center items-center md:px-2 md:min-h-[35vh] '>
            <AboutCard
              title={'01 - Who are we'}
              text={
                'We are DigID. asdas dasasa asdd asdfafa sf a fa fafsfasfas asf atr q g b w eg  tqsfasfaqwr.'
              }
            />
            <AboutCard
              title={'02 - What we do'}
              text={
                'we do softweareWe are DigID. asdas dasasa asdd asdfafa sf a fa fafsfasfas asf atr q g b w eg  tqsfasfaqwr.'
              }
            />
            <AboutCard
              title={'03 - Why us'}
              text={
                'cuz we need money We are DigID. asdas dasasa asdd asdfafa sf a fa fafsfasfas asf atr q g b w eg  tqsfasfaqwr.'
              }
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default AboutMain;
