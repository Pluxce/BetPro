import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BettingCoupon as BettingCouponType } from '../types/betting';
import Toast from './Toast';

interface CouponDetailsProps {
  coupon: BettingCouponType;
  onPurchase: (coupon: BettingCouponType) => void;
  isPurchased?: boolean;
  onBackToList: () => void;
}

const CouponDetails: React.FC<CouponDetailsProps> = ({ coupon, onPurchase, isPurchased = false, onBackToList }) => {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = React.useState(false);

  const handlePaymentNavigation = () => {
    navigate('/payment', { state: { couponId: coupon.id } });
  };



  React.useEffect(() => {
    if (isPurchased) {
      setShowSuccess(true);
      const timer = setTimeout(() => setShowSuccess(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isPurchased]);

  return (
    <>
      <Toast
        isVisible={showSuccess}
        message="Paiement effectué avec succès ! Voici vos sélections."
        variant="success"
        onClose={() => setShowSuccess(false)}
      />
      <div 
        className="fixed inset-0 bg-white z-50 overflow-y-auto transform transition-all duration-300 hover:shadow-2xl"
        style={{
          overscrollBehavior: 'contain',
          WebkitOverflowScrolling: 'touch',
          height: '100vh',
          paddingBottom: '80px'
        }}
      >
        {/* En-tête avec effet parallax */}
        <div className="sticky top-0 z-10 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 p-4 sm:p-8 overflow-hidden backdrop-blur-sm bg-opacity-95">
          <div className="absolute inset-0 bg-pattern opacity-10"></div>
          <div className="relative flex items-center gap-4 mb-4">
            <button
              onClick={onBackToList}
              className="p-2 rounded-full bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 backdrop-blur-sm"
            >
              <svg className="w-5 h-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-gray-800 font-medium">Retour</span>
            </button>
            <h2 className="text-2xl sm:text-3xl font-bold text-white relative z-10 animate-fade-in">{coupon.name}</h2>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0 relative z-10">
            <div className="flex flex-wrap items-center gap-4">
              <span className={`px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm ${
                coupon.riskLevel === 'faible' ? 'bg-green-500/30 text-green-100' :
                coupon.riskLevel === 'modéré' ? 'bg-yellow-500/30 text-yellow-100' :
                'bg-red-500/30 text-red-100'
              }`}>
                Risque {coupon.riskLevel}
              </span>
              <span className="text-sm text-white bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                Expire le {new Date(coupon.expirationDate).toLocaleDateString('fr-FR')}
              </span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-white bg-white/10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-center sm:text-left">
              {coupon.price.toLocaleString('fr-FR')} FCFA
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="p-4 sm:p-8 border-b border-gray-200 bg-gradient-to-b from-gray-50 to-white mt-4 sm:mt-0">
          <p className="text-gray-700 leading-relaxed">{coupon.description}</p>
        </div>

        {/* Sélections */}
        <div className="p-4 sm:p-8 bg-gradient-to-b from-white to-gray-50">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Sélections
          </h3>
          <div className="space-y-6">
            {isPurchased ? (
              coupon.selections.map((selection, index) => (
                <div 
                  key={`selection-${index}`} 
                  className="transform transition-all duration-500 animate-fade-in" 
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
                      <div className="flex items-center gap-6">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center transform transition-transform duration-300 hover:rotate-12">
                          <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{selection.eventName}</h4>
                          <p className="text-sm text-gray-500">
                            {new Date(selection.eventDate).toLocaleDateString('fr-FR')}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-2 rounded-full ring-1 ring-blue-100 hover:ring-blue-300 transition-all duration-300">
                          {selection.sport}
                        </span>
                        <span className="text-sm font-semibold text-green-600 bg-green-50 px-4 py-2 rounded-full ring-1 ring-green-100 hover:ring-green-300 transition-all duration-300">
                          {selection.category === 'match' ? 'Paris Match' :
                           selection.category === 'player_performance' ? 'Performance Joueur' :
                           'Haut Rendement'}
                        </span>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl border border-gray-200 p-6 backdrop-blur-sm backdrop-filter">
                      <div className="mb-6">
                        <h5 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                          <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Notre Sélection:
                        </h5>
                        <p className="text-gray-800 font-medium">{selection.selection}</p>
                      </div>

                      <div className="pt-6 border-t border-gray-100">
                        <h5 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
                          <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                          Analyse détaillée:
                        </h5>
                        {selection.category === 'match' ? (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                              <div className="flex items-center gap-2 mb-3">
                                <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                                <div className="text-sm text-blue-700 font-semibold">Forme récente</div>
                              </div>
                              <div className="text-2xl font-bold text-blue-800 mb-2">75%</div>
                              <div className="text-sm text-blue-600">de victoires sur les 5 derniers matchs</div>
                            </div>
                            <div className="bg-gradient-to-br from-green-50 to-green-100/50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                              <div className="flex items-center gap-2 mb-3">
                                <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div className="text-sm text-green-700 font-semibold">Historique H2H</div>
                              </div>
                              <div className="text-2xl font-bold text-green-800 mb-2">8/10</div>
                              <div className="text-sm text-green-600">pronostics similaires réussis</div>
                            </div>
                          </div>
                        ) : selection.category === 'player_performance' ? (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                              <div className="flex items-center gap-2 mb-3">
                                <svg className="w-4 h-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                                <div className="text-sm text-purple-700 font-semibold">Performance</div>
                              </div>
                              <div className="text-2xl font-bold text-purple-800 mb-2">92%</div>
                              <div className="text-sm text-purple-600">de réussite sur ce type d'action</div>
                            </div>
                            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100/50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                              <div className="flex items-center gap-2 mb-3">
                                <svg className="w-4 h-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                                <div className="text-sm text-indigo-700 font-semibold">Tendance</div>
                              </div>
                              <div className="text-2xl font-bold text-indigo-800 mb-2">↗️ +15%</div>
                              <div className="text-sm text-indigo-600">d'amélioration sur 30 jours</div>
                            </div>
                          </div>
                        ) : (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                              <div className="flex items-center gap-2 mb-3">
                                <svg className="w-4 h-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div className="text-sm text-amber-700 font-semibold">Potentiel</div>
                              </div>
                              <div className="text-2xl font-bold text-amber-800 mb-2">x3.5</div>
                              <div className="text-sm text-amber-600">retour sur investissement estimé</div>
                            </div>
                            <div className="bg-gradient-to-br from-red-50 to-red-100/50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                              <div className="flex items-center gap-2 mb-3">
                                <svg className="w-4 h-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div className="text-sm text-red-700 font-semibold">Fiabilité</div>
                              </div>
                              <div className="text-2xl font-bold text-red-800 mb-2">65%</div>
                              <div className="text-sm text-red-600">de confiance sur l'analyse</div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 bg-gradient-to-b from-gray-50 to-white rounded-xl border border-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-pattern opacity-5"></div>
                <div className="relative z-10">
                  <div className="mx-auto w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6 transform transition-transform duration-300 hover:rotate-12">
                    <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 mb-6 text-lg">
                    Contenu verrouillé - {coupon.selections.length} sélections disponibles
                  </p>
                  <button
                    onClick={() => {
                      onPurchase(coupon);
                      handlePaymentNavigation();
                    }}
                    className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Déverrouiller pour {coupon.price.toLocaleString('fr-FR')} FCFA
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CouponDetails;