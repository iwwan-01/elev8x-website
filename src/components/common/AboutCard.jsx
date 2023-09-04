function AboutCard({ title, text }){
    return (
        <div className="relative flex flex-col items-center md:px-8 md:py-6 md:max-w-sm group explain-item">
            {/* Title field*/}
            <div className="w-full pb-5 border-b border-df-bg-4 font-semibold">
                <h2 className="text-lg md:text-left text-center">{title}</h2>
            </div>
            {/* Text field*/}
            <div className="pt-5 pb-8">
                <p className="text-base mx-6 md:mx-0 text-neutral-800">{text}</p>
            </div>
        </div>
    )
}

export default AboutCard;