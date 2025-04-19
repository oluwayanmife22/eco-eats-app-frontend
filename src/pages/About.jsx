import React from "react";

const aboutBg = "/about-image.jpg";  // Path to image in the public folder

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat lg:h-screen"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay for readability */}
        <div className="relative z-10 flex items-center justify-center h-full px-6 sm:px-12 text-center text-white">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold sm:text-6xl">
              Welcome to Eco Eats
            </h1>
            <p className="mt-4 text-lg sm:text-xl">
              Discover sustainable food options that are good for you and the planet. Join us in making the earth a greener place, one meal at a time.
            </p>
            <a
              href="#learn-more"
              className="mt-8 inline-block px-8 py-3 bg-green-600 text-white text-lg font-semibold rounded-md hover:bg-green-700 transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section id="learn-more" className="px-6 lg:px-12 py-20">
        <h2 className="text-3xl text-center mb-8 font-semibold text-secondary sm:text-5xl sm:leading-relaxed">
          About Eco Eats
        </h2>
        <p className="text-center sm:w-1/2 mx-auto mb-20">
          Eco Eats is more than just a food delivery service – it's a movement toward a healthier, more sustainable planet. We partner with local restaurants, farms, and producers to bring you eco-friendly, nutritious meals that nourish both your body and the planet.
        </p>
        <p className="text-center sm:w-1/2 mx-auto">
          At Eco Eats, we are committed to reducing waste, supporting sustainable agriculture, and helping you make conscious choices about the food you consume. We believe that eating well shouldn't cost the earth.
        </p>
      </section>
    </>
  );
};

export default About;
