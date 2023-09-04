const ServicesCard = ({ title, text }) => {
    return (
      <div class='relative flex flex-col items-start max-w-md px-6 py-5 overflow-hidden group border rounded-xl md:m-8 bg-neutral-50 border-neutral-200 h-[300px]'>
        <h1 class='mb-10 mt-3 mx-4 text-xl md:text-3xl font-black'>{title}</h1>
        <p class='mb-10 font-medium mx-4'>{text}</p>
        <div class='absolute bottom-4 w-8 h-px transition-all duration-500 -translate-x-1/2 bg-neutral-500 left-1/2 group-hover:w-[30%] ' />
      </div>
    )
  }
  export default ServicesCard