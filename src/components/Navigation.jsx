
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Leaf } from 'lucide-react';

const Navigation = ({ isLoggedIn, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="agri-container">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-agri-green" />
            <span className="text-xl font-bold text-agri-green">AgriWeb</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-agri-green transition-colors">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-agri-green transition-colors">About</Link>
            <Link to="/resources" className="text-gray-700 hover:text-agri-green transition-colors">Resources</Link>
            {isLoggedIn ? (
              <>
                <Link to="/dashboard" className="text-gray-700 hover:text-agri-green transition-colors">Dashboard</Link>
                <Button 
                  variant="outline" 
                  className="border-agri-green text-agri-green hover:bg-agri-green hover:text-white"
                  onClick={onLogout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline" className="border-agri-green text-agri-green hover:bg-agri-green hover:text-white">
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="bg-agri-green text-white hover:bg-agri-green-dark">
                    Register
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-agri-green transition-colors" onClick={closeMenu}>Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-agri-green transition-colors" onClick={closeMenu}>About</Link>
              <Link to="/resources" className="text-gray-700 hover:text-agri-green transition-colors" onClick={closeMenu}>Resources</Link>
              {isLoggedIn ? (
                <>
                  <Link to="/dashboard" className="text-gray-700 hover:text-agri-green transition-colors" onClick={closeMenu}>Dashboard</Link>
                  <Button 
                    variant="outline" 
                    className="border-agri-green text-agri-green hover:bg-agri-green hover:text-white w-full"
                    onClick={() => {
                      closeMenu();
                      onLogout();
                    }}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login" className="w-full" onClick={closeMenu}>
                    <Button variant="outline" className="border-agri-green text-agri-green hover:bg-agri-green hover:text-white w-full">
                      Login
                    </Button>
                  </Link>
                  <Link to="/register" className="w-full" onClick={closeMenu}>
                    <Button className="bg-agri-green text-white hover:bg-agri-green-dark w-full">
                      Register
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
