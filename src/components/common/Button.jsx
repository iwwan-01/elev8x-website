function Button({text, link}){
    return(
        <>
            <a href={link}>
                <div class="px-10 py-3 border w-max relative group flex justify-center items-center transition-all duration-500 focus:outline-none focus:ring-0 rounded-lg overflow-hidden flex-shrink-0 cursor-pointer transparent text-black hover:text-white border-neutral-600 md:mt-6">
                    <span class="text-sm md:text-base font-medium z-10">
                        {text}
                    </span>
                    <span class="absolute h-full w-0 left-0 bottom-0 top-0 transition-all group-hover:h-40 group-hover:w-96 group-hover:bg-purple-900 group-focus:w-full duration-500">
                    </span>
                </div>
            </a>
        </>
    )
}
export default Button;