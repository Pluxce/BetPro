import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BettingCoupon as BettingCouponType } from '../types/betting';

interface BettingCouponProps {
  coupon: BettingCouponType;
  onPurchase: (coupon: BettingCouponType) => void;
}

const BettingCoupon: React.FC<BettingCouponProps> = ({ coupon, onPurchase }) => {
  const navigate = useNavigate();
  const [isPurchased, setIsPurchased] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handlePurchase = () => {
    setIsPurchased(true);
    onPurchase(coupon);
    navigate('/payment');
  };

  return (
    <div className="relative bg-white rounded-xl shadow-sm border border-gray-200/50 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-blue-200/50 group">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-blue-800 transition-all duration-300">
            {coupon.name}
          </h3>
          <div className={`px-3 py-1 rounded-full text-sm font-medium ${getRiskLevelStyle(coupon.riskLevel)}`}>
            {coupon.riskLevel}
          </div>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2">
          {coupon.description}
        </p>

        <div className="space-y-4">
          {isPurchased ? (
            <div className="space-y-3">
              <div className="text-sm text-gray-500 flex justify-between items-center">
                <span>Sélections:</span>
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                >
                  {showDetails ? 'Masquer les détails' : 'Voir les détails'}
                </button>
              </div>
              {coupon.selections.map((selection, index) => (
                <div
                  key={index}
                  className={`p-4 bg-gradient-to-br from-white to-blue-50/30 rounded-lg border border-gray-200/50 hover:shadow-md transition-all duration-200 ${!showDetails ? 'max-h-[120px] overflow-hidden' : ''}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{selection.eventName}</div>
                        <div className="text-sm text-gray-500">{new Date(selection.eventDate).toLocaleDateString('fr-FR')}</div>
                      </div>
                    </div>
                    <div className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {selection.sport}
                    </div>
                  </div>
                  
                  {showDetails && (
                    <>
                      <div className="mt-4 space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-medium text-gray-900">Notre Sélection:</div>
                          <div className="text-sm font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded">
                            {selection.category === 'match' ? 'Paris Match' :
                             selection.category === 'player_performance' ? 'Performance Joueur' :
                             'Haut Rendement'}
                          </div>
                        </div>
                        <div className="p-3 bg-gray-50 rounded border border-gray-100">
                          {selection.selection}
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="text-sm text-gray-600">
                          <span className="font-medium">Pourquoi cette sélection ?</span>
                          <p className="mt-1">
                            {selection.category === 'match' ? (
                              <>
                                <div className="grid grid-cols-2 gap-4 mt-3">
                                  <div className="bg-blue-50 p-3 rounded">
                                    <div className="text-xs text-blue-600 font-medium mb-1">Forme récente</div>
                                    <div className="text-lg font-bold text-blue-800">75%</div>
                                    <div className="text-xs text-blue-600">de victoires sur les 5 derniers matchs</div>
                                  </div>
                                  <div className="bg-green-50 p-3 rounded">
                                    <div className="text-xs text-green-600 font-medium mb-1">Historique H2H</div>
                                    <div className="text-lg font-bold text-green-800">8/10</div>
                                    <div className="text-xs text-green-600">pronostics similaires réussis</div>
                                  </div>
                                </div>
                                <p className="mt-3 text-sm text-gray-600">
                                  Basé sur l'analyse des performances récentes et des statistiques historiques entre ces équipes.
                                </p>
                              </>
                            ) : selection.category === 'player_performance' ? (
                              <>
                                <div className="grid grid-cols-2 gap-4 mt-3">
                                  <div className="bg-purple-50 p-3 rounded">
                                    <div className="text-xs text-purple-600 font-medium mb-1">Performance</div>
                                    <div className="text-lg font-bold text-purple-800">92%</div>
                                    <div className="text-xs text-purple-600">de réussite sur ce type d'action</div>
                                  </div>
                                  <div className="bg-indigo-50 p-3 rounded">
                                    <div className="text-xs text-indigo-600 font-medium mb-1">Tendance</div>
                                    <div className="text-lg font-bold text-indigo-800">↗️ +15%</div>
                                    <div className="text-xs text-indigo-600">d'amélioration sur 30 jours</div>
                                  </div>
                                </div>
                                <p className="mt-3 text-sm text-gray-600">
                                  Sélection basée sur la forme actuelle du joueur et ses statistiques dans des conditions similaires.
                                </p>
                              </>
                            ) : (
                              <>
                                <div className="grid grid-cols-2 gap-4 mt-3">
                                  <div className="bg-amber-50 p-3 rounded">
                                    <div className="text-xs text-amber-600 font-medium mb-1">Potentiel</div>
                                    <div className="text-lg font-bold text-amber-800">x3.5</div>
                                    <div className="text-xs text-amber-600">retour sur investissement estimé</div>
                                  </div>
                                  <div className="bg-red-50 p-3 rounded">
                                    <div className="text-xs text-red-600 font-medium mb-1">Fiabilité</div>
                                    <div className="text-lg font-bold text-red-800">65%</div>
                                    <div className="text-xs text-red-600">de confiance sur l'analyse</div>
                                  </div>
                                </div>
                                <p className="mt-3 text-sm text-gray-600">
                                  Opportunité à fort potentiel identifiée par nos analystes avec un excellent rapport risque/rendement.
                                </p>
                              </>
                            )}
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="relative p-4 bg-gray-50 rounded-lg text-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-gray-400 animate-pulse"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <p className="text-gray-500 blur-sm select-none">
                Contenu verrouillé - {coupon.selections.length} sélections disponibles
              </p>
            </div>
          )}

          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              {coupon.price.toLocaleString('fr-FR')} FCFA
            </div>
            <button
              onClick={handlePurchase}
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-medium
                       transform transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
            >
              {isPurchased ? 'Voir les détails' : 'Déverrouiller (Payant)'}
            </button>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Expire le {new Date(coupon.expirationDate).toLocaleDateString('fr-FR')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const getRiskLevelStyle = (riskLevel: string): string => {
  switch (riskLevel.toLowerCase()) {
    case 'faible':
      return 'bg-green-100 text-green-800';
    case 'modéré':
      return 'bg-yellow-100 text-yellow-800';
    case 'élevé':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default BettingCoupon;