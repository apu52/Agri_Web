
import { Leaf, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-agri-green-dark text-white">
      <div className="agri-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-6 w-6" />
              <span className="text-xl font-bold">AgriWeb</span>
            </div>
            <p className="text-sm text-gray-100">
              Connecting farmers with the tools and information they need to thrive in the modern agricultural landscape.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-100 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-100 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/resources" className="text-gray-100 hover:text-white transition-colors">Resources</Link></li>
              <li><Link to="/login" className="text-gray-100 hover:text-white transition-colors">Login</Link></li>
              <li><Link to="/register" className="text-gray-100 hover:text-white transition-colors">Register</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contact@agriweb.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>123 Farm Road, Harvest Valley</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-gray-100 mb-4">Subscribe to our newsletter for the latest farming tips and updates.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 rounded-l-md text-gray-900 focus:outline-none focus:ring-1 focus:ring-agri-green-light w-full"
              />
              <button className="bg-agri-brown hover:bg-agri-brown-dark px-4 py-2 rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-agri-green pt-6 mt-8 text-center text-sm text-gray-100">
          <p>© {currentYear} AgriWeb. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
