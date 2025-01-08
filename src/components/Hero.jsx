import { Link } from 'react-router-dom';

const Hero = ({ image, title, description, showButton, buttonText, buttonLink }) => {
  return (
    <section id="hero" className="py-16 bg-white">
      {/* Flex Container */}
      <div className="container mx-auto flex flex-col-reverse items-center px-6 md:flex-row md:items-center">
        {/* Left Item */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left md:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold text-[#614545]">{title}</h1>
          <p className="text-darkGrayishBlue">{description}</p>
          {showButton && (
            <div>
              <Link
                to={buttonLink}
                className="p-3 px-6 text-white bg-[#614545] rounded-full hover:bg-brightRedLight"
              >
                {buttonText}
              </Link>
            </div>
          )}
        </div>
        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            className="w-full max-w-sm md:max-w-md"
            src={image}
            alt="Landing Page"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
