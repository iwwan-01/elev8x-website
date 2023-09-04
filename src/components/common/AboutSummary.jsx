import Button from './Button'

const AboutSummary = () => {
  return (
    <div class='px-7 sm:px-6 md:px-8 lg:px-28 flex flex-col mx-auto'>
      <div class='flex flex-col pr-10 gap-y-6'>
        <h1 class='mt-2 text-3xl text-neutral-900 font-bold lg:text-4xl'>
          DigIT will help you streamline your business operations.
        </h1>
        <h2 class='text-xl font-light lg:text-2xl pr-10'>
          Inefficient manual workflows are slowing down your business
          operations, leading to wasted time and resources.
        </h2>
        <br />
      </div>
      <div class='flex flex-col justify-between flex-1 mt-4 md:mt-0'>
        <p class='mb-4 md:font-light text-neutral-500 md:text-2xl'>
          We offer custom reliable solutions, which streamline your processes,
          automate tasks, and maximize efficiency, ensuring your business
          operates at its full potential
        </p>
        <div className='flex justify-center py-6'>
          <Button text={'Learn more'} link={'/services'} />
        </div>
      </div>
    </div>
  )
}
export default AboutSummary
