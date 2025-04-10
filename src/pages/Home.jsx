
import Hero from '../components/Hero';
import FeatureSection from '../components/FeatureSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="animate-fade-in">
      <Hero />
      <FeatureSection />
      
      {/* Testimonial Section */}
      <div className="py-16 bg-white">
        <div className="agri-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-agri-green-dark mb-4">Trusted by Farmers Worldwide</h2>
            <p className="max-w-2xl mx-auto text-gray-700">
              Hear what our community of farmers has to say about how AgriWeb has transformed their farming practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-agri-green-light h-12 w-12 rounded-full flex items-center justify-center text-white font-bold">JD</div>
                <div className="ml-4">
                  <h4 className="font-semibold">John Deere</h4>
                  <p className="text-sm text-gray-600">Wheat Farmer, Kansas</p>
                </div>
              </div>
              <p className="text-gray-700">
                "AgriWeb's weather forecasting feature has been a game-changer for planning my harvests. I've saved time and resources by making data-driven decisions."
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-agri-brown-light h-12 w-12 rounded-full flex items-center justify-center text-white font-bold">MR</div>
                <div className="ml-4">
                  <h4 className="font-semibold">Maria Rodriguez</h4>
                  <p className="text-sm text-gray-600">Organic Farmer, California</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The crop management tools have helped me track the growth of my organic produce more efficiently. The resources section is also filled with valuable information."
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-agri-blue-light h-12 w-12 rounded-full flex items-center justify-center text-white font-bold">TS</div>
                <div className="ml-4">
                  <h4 className="font-semibold">Thomas Smith</h4>
                  <p className="text-sm text-gray-600">Dairy Farmer, Wisconsin</p>
                </div>
              </div>
              <p className="text-gray-700">
                "I've been using AgriWeb for six months, and the analytics have given me insights into optimizing my farm operations that I never had before. Highly recommended!"
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/register">
              <Button className="bg-agri-green text-white hover:bg-agri-green-dark">
                Join Our Community
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-agri-green py-16">
        <div className="agri-container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Farming?</h2>
          <p className="max-w-2xl mx-auto text-gray-100 mb-8">
            Join thousands of farmers who are already using AgriWeb to improve their agricultural practices.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register">
              <Button size="lg" className="bg-white text-agri-green hover:bg-gray-100">
                Get Started for Free
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-agri-green">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
