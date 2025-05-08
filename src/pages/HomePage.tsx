import React from 'react';
import { Link } from 'react-router-dom';
import Stats from '../components/Stats';

const HomePage: React.FC = () => {

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">BetPro - Expert en Paris Sportifs</h1>
            <p className="text-xl mb-8">
              Découvrez nos sélections de paris optimisées pour maximiser vos chances de gains
            </p>
            <div className="space-x-4">
              <Link
                to="/coupons"
                className="bg-gradient-to-r from-white to-blue-50 text-blue-600 px-8 py-3 rounded-md font-medium hover:from-blue-50 hover:to-white transition-all duration-200 inline-block"
              >
                Voir nos coupons
              </Link>
              <Link
                to="/abonnements"
                className="bg-gradient-to-r from-transparent to-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:from-white hover:to-white hover:text-blue-600 transition-all duration-200 inline-block"
              >
                Nos abonnements
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <Stats />

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Pourquoi choisir BetPro ?</h2>
          <p className="mt-4 text-xl text-gray-600">
            Une expertise reconnue dans le domaine des paris sportifs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-white to-blue-50/30 p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
            <div className="text-blue-600 mb-4">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Analyses Expertes</h3>
            <p className="text-gray-600">
              Des analyses approfondies réalisées par nos experts pour maximiser vos chances de gains.
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-blue-50/30 p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
            <div className="text-blue-600 mb-4">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Mises à jour en temps réel</h3>
            <p className="text-gray-600">
              Recevez instantanément nos dernières sélections et analyses pour ne manquer aucune opportunité.
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-blue-50/30 p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
            <div className="text-blue-600 mb-4">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Support Premium</h3>
            <p className="text-gray-600">
              Une équipe dédiée pour répondre à vos questions et vous accompagner dans vos paris.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/abonnements"
            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-500"
          >
            Découvrir tous nos avantages
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;