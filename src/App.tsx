import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CouponsPage from './pages/CouponsPage';
import AbonnementsPage from './pages/AbonnementsPage';
import ConditionsPage from './pages/ConditionsPage';
import ConfidentialitePage from './pages/ConfidentialitePage';
import MentionsLegalesPage from './pages/MentionsLegalesPage';
import PaymentPage from './pages/PaymentPage';
import AuthModal from './components/AuthModal';
import logo from './assets/logo.svg';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<'login' | 'register'>('login');

  const handleLogin = () => {
    setAuthModalMode('login');
    setIsAuthModalOpen(true);
  };

  const handleRegister = () => {
    setAuthModalMode('register');
    setIsAuthModalOpen(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleCloseAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-gradient-to-b from-white to-gray-50/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center">
                <Link to="/" className="flex items-center">
                  <img src={logo} alt="BetPro" className="h-8" />
                </Link>
                <div className="hidden md:flex space-x-8 ml-10">
                  <Link to="/coupons" className="text-gray-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 transition-all duration-200">Coupons</Link>
                  <Link to="/abonnements" className="text-gray-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 transition-all duration-200">Abonnements</Link>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                {!isLoggedIn ? (
                  <>
                    <button
                      onClick={handleLogin}
                      className="text-gray-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 transition-all duration-200"
                    >
                      Se connecter
                    </button>
                    <button
                      onClick={handleRegister}
                      className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-md hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
                    >
                      S'inscrire
                    </button>
                  </>
                ) : (
                  <button
                    onClick={handleLogout}
                    className="text-gray-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 transition-all duration-200"
                  >
                    Se déconnecter
                  </button>
                )}
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/coupons" element={<CouponsPage />} />
          <Route path="/abonnements" element={<AbonnementsPage />} />
          <Route path="/conditions" element={<ConditionsPage />} />
          <Route path="/confidentialite" element={<ConfidentialitePage />} />
          <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>

        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={handleCloseAuthModal}
          initialMode={authModalMode}
          onAuthSuccess={() => setIsLoggedIn(true)}
        />

        {/* Footer */}
        <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">BetPro</h3>
                <p className="text-gray-400">
                  Expert en sélections de paris sportifs optimisées pour maximiser vos chances de gains.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/" className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-white transition-all duration-200">
                      Accueil
                    </Link>
                  </li>
                  <li>
                    <Link to="/coupons" className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-white transition-all duration-200">
                      Coupons
                    </Link>
                  </li>
                  <li>
                    <Link to="/abonnements" className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-white transition-all duration-200">
                      Abonnements
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Mentions légales</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/conditions" className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-white transition-all duration-200">
                      Conditions d'utilisation
                    </Link>
                  </li>
                  <li>
                    <Link to="/confidentialite" className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-white transition-all duration-200">
                      Politique de confidentialité
                    </Link>
                  </li>
                  <li>
                    <Link to="/mentions-legales" className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-white transition-all duration-200">
                      Mentions légales
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
              <p>© 2024 BetPro. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
