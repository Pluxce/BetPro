import React, { useState } from 'react';

interface NavbarProps {
  isLoggedIn?: boolean;
  onLogin?: () => void;
  onLogout?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn = false, onLogin, onLogout }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 transition-all duration-200 ease-in-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-600 transform hover:scale-105 transition-transform duration-200">BetPro</span>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <a
                href="#"
                className="inline-flex items-center px-3 pt-1 text-sm font-medium text-gray-900 border-b-2 border-blue-500 transition-all duration-200 hover:text-blue-600"
              >
                Accueil
              </a>
              <a
                href="#"
                className="inline-flex items-center px-3 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900 hover:border-gray-300 border-b-2 border-transparent transition-all duration-200"
              >
                Coupons
              </a>
              <a
                href="#"
                className="inline-flex items-center px-3 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900 hover:border-gray-300 border-b-2 border-transparent transition-all duration-200"
              >
                Abonnements
              </a>
            </div>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <button
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-sm hover:shadow-md"
                  onClick={onLogout}
                >
                  Se déconnecter
                </button>
                <div className="relative group">
                  <button className="flex text-sm rounded-full transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-sm hover:shadow-md">
                    <span className="sr-only">Ouvrir le menu utilisateur</span>
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center">
                      <span className="text-sm font-medium text-blue-600">U</span>
                    </div>
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <button
                  className="inline-flex items-center px-4 py-2 border-2 border-blue-600 text-sm font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-sm hover:shadow-md"
                  onClick={() => {}}
                >
                  S'inscrire
                </button>
                <button
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-sm hover:shadow-md"
                  onClick={onLogin}
                >
                  Se connecter
                </button>
              </div>
            )}
          </div>

          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Ouvrir le menu principal</span>
              <svg
                className={`h-6 w-6 transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {/* Mobile menu transition */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'}`}>
        <div className="md:hidden transform transition-transform duration-200 ease-in-out">
          <div className="pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="block pl-3 pr-4 py-2 border-l-4 border-blue-500 text-base font-medium text-blue-700 bg-blue-50/80 backdrop-blur-sm transition-all duration-200"
            >
              Accueil
            </a>
            <a
              href="#"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
            >
              Coupons
            </a>
            <a
              href="#"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
            >
              Abonnements
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            {isLoggedIn ? (
              <div className="space-y-2 px-4">
                <button
                  className="block w-full text-center px-4 py-2 text-base font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md"
                  onClick={onLogout}
                >
                  Se déconnecter
                </button>
              </div>
            ) : (
              <div className="space-y-2 px-4">
                <button
                  className="block w-full text-center px-4 py-2 text-base font-medium text-blue-600 bg-white border-2 border-blue-600 rounded-md hover:bg-blue-50 transition-all duration-200 shadow-sm hover:shadow-md"
                  onClick={() => {}}
                >
                  S'inscrire
                </button>
                <button
                  className="block w-full text-center px-4 py-2 text-base font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md"
                  onClick={onLogin}
                >
                  Se connecter
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;