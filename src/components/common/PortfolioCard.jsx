const PortfolioCard = ({ title, description, technologyLogos, link }) => {
  return (
    <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
      <div className="m-2 text-justify text-sm">
        <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">{title}</h4>
        <p className="text-md font-medium leading-5 h-auto md:h-48">{description}</p>
        {/* Add logos of technologies here */}
        <div className="flex justify-center gap-4 py-4">
          {technologyLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="w-10 h-10"
            />
          ))}
        </div>
        <div className="flex justify-center my-4">
          <a
            to={link}
            className="text-white bg-purple-900 hover:bg-inherit hover:text-purple-900 border hover:border-purple-900 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl"
          >
            Know More
            <svg
              className="w-4 h-4 ml-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
