import React from 'react';
import { BettingCoupon as BettingCouponType } from '../types/betting';

interface CouponCardProps {
  coupon: BettingCouponType;
  isPurchased?: boolean;
  onViewDetails: (coupon: BettingCouponType) => void;
}

const CouponCard: React.FC<CouponCardProps> = ({ coupon, isPurchased = false, onViewDetails }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200/50 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-blue-200/50 group">
      <div className="p-6">
        {/* En-tête */}
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-blue-800 transition-all duration-300">
            {coupon.name}
          </h3>
          <div className={`px-3 py-1 rounded-full text-sm font-medium ${
            coupon.riskLevel === 'faible' ? 'bg-green-100 text-green-800' :
            coupon.riskLevel === 'modéré' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {coupon.riskLevel}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-2">
          {coupon.description}
        </p>

        {/* Aperçu des sélections */}
        <div className="mb-4">
          <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
            <span>{coupon.selections.length} sélection{coupon.selections.length > 1 ? 's' : ''}</span>
            {isPurchased && (
              <div className="flex items-center text-green-600">
                <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Acheté</span>
              </div>
            )}
          </div>
          <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
            {coupon.selections.slice(0, 1).map((selection, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-900">{selection.eventName}</span>
                  <span className="text-xs text-gray-500">
                    {new Date(selection.eventDate).toLocaleDateString('fr-FR')}
                  </span>
                </div>
                <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                  {selection.sport}
                </span>
              </div>
            ))}
            {coupon.selections.length > 1 && (
              <div className="mt-2 text-sm text-gray-500 text-center">
                + {coupon.selections.length - 1} autre{coupon.selections.length > 2 ? 's' : ''}
              </div>
            )}
          </div>
        </div>

        {/* Pied de carte */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            {coupon.price.toLocaleString('fr-FR')} FCFA
          </div>
          <button
            onClick={() => onViewDetails(coupon)}
            className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-medium
                     transform transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
          >
            {isPurchased ? 'Voir les détails' : 'Voir l\'offre'}
          </button>
        </div>

        {/* Date d'expiration */}
        <div className="flex items-center justify-end text-sm text-gray-500 mt-4">
          <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Expire le {new Date(coupon.expirationDate).toLocaleDateString('fr-FR')}</span>
        </div>
      </div>
    </div>
  );
};

export default CouponCard;