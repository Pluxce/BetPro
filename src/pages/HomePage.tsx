import React from 'react';
import { Link } from 'react-router-dom';
import Stats from '../components/Stats';

const HomePage: React.FC = () => {

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 pattern-background opacity-10"></div>
        <div className="relative py-16 sm:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 animate-fade-in-down">
                BetPro - Expert en Paris Sportifs
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl mx-auto animate-fade-in">
                Découvrez nos sélections de paris optimisées pour maximiser vos chances de gains
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up">
                <Link
                  to="/coupons"
                  className="w-full sm:w-auto bg-gradient-to-r from-white to-blue-50 text-blue-600 px-8 py-3 rounded-md font-medium hover:from-blue-50 hover:to-white transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
                >
                  <span>Voir nos coupons</span>
                  <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  to="/abonnements"
                  className="w-full sm:w-auto bg-gradient-to-r from-transparent to-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:from-white hover:to-white hover:text-blue-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
                >
                  <span>Nos abonnements</span>
                  <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <Stats />

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 animate-fade-in-down">
            Pourquoi choisir BetPro ?
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in">
            Une expertise reconnue dans le domaine des paris sportifs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="bg-gradient-to-br from-white to-blue-50/30 p-8 rounded-xl shadow-lg hover:shadow-xl border border-gray-200/50 transition-all duration-300 transform hover:scale-105 group animate-fade-in">
            <div className="text-blue-600 mb-6 transform group-hover:scale-110 transition-transform duration-300">
              <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">Analyses Expertes</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Des analyses approfondies réalisées par nos experts pour maximiser vos chances de gains.
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-blue-50/30 p-8 rounded-xl shadow-lg hover:shadow-xl border border-gray-200/50 transition-all duration-300 transform hover:scale-105 group animate-fade-in delay-100">
            <div className="text-blue-600 mb-6 transform group-hover:scale-110 transition-transform duration-300">
              <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">Mises à jour en temps réel</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Recevez instantanément nos dernières sélections et analyses pour ne manquer aucune opportunité.
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-blue-50/30 p-8 rounded-xl shadow-lg hover:shadow-xl border border-gray-200/50 transition-all duration-300 transform hover:scale-105 group animate-fade-in delay-200">
            <div className="text-blue-600 mb-6 transform group-hover:scale-110 transition-transform duration-300">
              <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">Support Premium</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Une équipe dédiée pour répondre à vos questions et vous accompagner dans vos paris.
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <Link
            to="/abonnements"
            className="inline-flex items-center text-lg font-semibold text-blue-600 hover:text-blue-500 transition-colors duration-200 group"
          >
            <span className="border-b-2 border-transparent group-hover:border-blue-500 transition-all duration-200">
              Découvrir tous nos avantages
            </span>
            <svg 
              className="ml-2 h-6 w-6 transform group-hover:translate-x-2 transition-transform duration-200" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;