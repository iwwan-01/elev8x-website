function TopTextField({ text }){
    return(
        <div className="relative h-screen/2 bg-neutral-100">
            {/* <div
            className="absolute inset-0"
            style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/Mauve.jpg)`,
            zIndex: -2,
            }}
            ></div> */}
            <div className="h-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12">
                <h3 className='text-xl md:text-5xl text-center opacity-60 md:opacity-80 font-semibold text-df-accent px-5 py-20 sm:p-40'>
                    {text}
                </h3>
            </div>
        </div>
    )
}

export default TopTextField;