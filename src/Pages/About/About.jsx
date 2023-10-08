

const About = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
      <div className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800">About Our Wedding Management System</h1>
        <p className="mt-4 text-xl text-gray-600">
          Making your dream wedding a reality.
        </p>
      </div>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800">
                  Our Mission
                </h2>
                <p className="mt-2 text-gray-600">
                  We are on a mission to simplify and enhance the wedding planning experience. Our wedding management system is designed to help couples plan, organize, and celebrate their special day with ease and joy.
                </p>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800">
                  Our Team
                </h2>
                <p className="mt-2 text-gray-600">
                  Our dedicated team of professionals is passionate about weddings. We bring together expertise in event planning, technology, and creativity to create a platform that empowers couples to design their dream weddings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default About;