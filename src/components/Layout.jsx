
import Navigation from './Navigation';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

const Layout = ({ children, isLoggedIn, onLogout }) => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation isLoggedIn={isLoggedIn} onLogout={onLogout} />
      <main className="flex-grow">
        {children}
      </main>
      {!isAuthPage && <Footer />}
    </div>
  );
};

export default Layout;
