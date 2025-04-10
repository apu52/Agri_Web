
import { Check } from 'lucide-react';

const About = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="bg-agri-green text-white py-16">
        <div className="agri-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">About AgriWeb</h1>
            <p className="text-xl mb-0">
              Empowering farmers with modern technology to increase productivity and sustainability in agriculture.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16">
        <div className="agri-container">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1500076656116-558758c991c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1351&q=80" 
                alt="Farmer in field" 
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-agri-green-dark mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-6">
                At AgriWeb, we believe that modern technology can revolutionize the way farming is done. Our mission is to provide farmers with easy-to-use digital tools that help them make better decisions, increase yields, and promote sustainable farming practices.
              </p>
              <p className="text-gray-700 mb-6">
                Founded in 2023, AgriWeb was born from a passion for agriculture and technology. We understand the challenges farmers face in today's rapidly changing world, and we're committed to being partners in their success.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="mr-2 mt-1">
                    <Check className="h-5 w-5 text-agri-green" />
                  </div>
                  <p>Innovative tools for modern farming</p>
                </div>
                <div className="flex items-start">
                  <div className="mr-2 mt-1">
                    <Check className="h-5 w-5 text-agri-green" />
                  </div>
                  <p>Data-driven insights for better decision making</p>
                </div>
                <div className="flex items-start">
                  <div className="mr-2 mt-1">
                    <Check className="h-5 w-5 text-agri-green" />
                  </div>
                  <p>Supporting sustainable agricultural practices</p>
                </div>
                <div className="flex items-start">
                  <div className="mr-2 mt-1">
                    <Check className="h-5 w-5 text-agri-green" />
                  </div>
                  <p>Building a community of forward-thinking farmers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-gray-50">
        <div className="agri-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-agri-green-dark mb-4">Our Team</h2>
            <p className="max-w-2xl mx-auto text-gray-700">
              Meet the passionate professionals behind AgriWeb who are dedicated to transforming agriculture through technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-60 bg-agri-green-light"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Sarah Johnson</h3>
                <p className="text-agri-green mb-4">Co-Founder & CEO</p>
                <p className="text-gray-600">
                  With over 15 years of experience in agricultural technology, Sarah leads our vision for the future of farming.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-60 bg-agri-brown-light"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Michael Chen</h3>
                <p className="text-agri-green mb-4">Co-Founder & CTO</p>
                <p className="text-gray-600">
                  Michael combines his engineering expertise with a passion for sustainable agriculture to build innovative solutions.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-60 bg-agri-blue-light"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Amara Patel</h3>
                <p className="text-agri-green mb-4">Lead Agricultural Scientist</p>
                <p className="text-gray-600">
                  With a PhD in Agricultural Science, Amara ensures our platform incorporates the latest research and best practices.
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
