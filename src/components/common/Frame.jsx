const Frame = ({ children, title }) => {
    return (
      <div className='pt-20 bg-neutral-100'>
        <div className='p-6 bg-neutral-100 flex-col justify-center py-32 md:px-12 md:py-40 relative'>
          <div className='flex justify-center gap-2 items-center p-6'>
            <h3 className='text-3xl md:text-5xl font-semibold text-df-accent'>
              {title}
            </h3>
          </div>
          {children}
        </div>
      </div>
    )
  }
  export default Frame;
  