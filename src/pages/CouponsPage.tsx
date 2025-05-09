import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CouponCard from '../components/CouponCard';
import CouponDetails from '../components/CouponDetails';
import { BettingCoupon as BettingCouponType } from '../types/betting';

const MOCK_COUPONS: BettingCouponType[] = [
  {
    id: '1',
    name: 'Pack Premier League Weekend',
    description: 'Sélections premium pour les matchs du weekend de Premier League',
    price: 2000,
    riskLevel: 'modéré',
    selections: [
      {
        id: '1',
        eventId: 'pl_001',
        eventName: 'Manchester City vs Liverpool',
        eventDate: new Date('2024-05-10'),
        selection: 'Manchester City Victoire',
        sport: 'Football',
        category: 'match',
        odds: 1.85
      },
      {
        id: '2',
        eventId: 'pl_002',
        eventName: 'Arsenal vs Chelsea',
        eventDate: new Date('2024-05-10'),
        selection: 'Plus de 2.5 buts',
        sport: 'Football',
        category: 'match',
        odds: 1.95
      }
    ],
    expirationDate: '2024-05-11'
  },
  {
    id: '2',
    name: 'Pack Performance Joueurs',
    description: 'Sélections basées sur les performances individuelles',
    price: 1500,
    riskLevel: 'faible',
    selections: [
      {
        id: '3',
        eventId: 'pl_003',
        eventName: 'Manchester City vs Liverpool',
        eventDate: new Date('2024-05-10'),
        selection: 'Haaland marque',
        sport: 'Football',
        category: 'player_performance',
        odds: 1.65
      }
    ],
    expirationDate: '2024-05-11'
  },
  {
    id: '3',
    name: 'Pack High Yield',
    description: 'Sélections à haut rendement avec cotes élevées',
    price: 3000,
    riskLevel: 'élevé',
    selections: [
      {
        id: '4',
        eventId: 'pl_004',
        eventName: 'Newcastle vs Brighton',
        eventDate: new Date('2024-05-12'),
        selection: 'Score exact 3-2',
        sport: 'Football',
        category: 'high_yield',
        odds: 21.00
      }
    ],
    expirationDate: '2024-05-12'
  }
];

const CouponsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCoupon, setSelectedCoupon] = useState<BettingCouponType | null>(null);
  const [isViewingDetails, setIsViewingDetails] = useState(false);
  const [purchasedCoupons, setPurchasedCoupons] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const categories = [
    { id: 'all', name: 'Tous les coupons' },
    { id: 'match', name: 'Paris sur les matchs' },
    { id: 'player_performance', name: 'Performance des joueurs' },
    { id: 'high_yield', name: 'Haut rendement' }
  ];

  const filteredCoupons = MOCK_COUPONS.filter(coupon => {
    const matchesSearch = coupon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         coupon.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const handlePurchase = (coupon: BettingCouponType) => {
    setPurchasedCoupons(prev => [...prev, coupon.id]);
    console.log('Achat du coupon:', coupon.id);
  };

  const location = useLocation();

  useEffect(() => {
    if (location.state?.selectedCouponId && location.state?.showDetails) {
      const coupon = MOCK_COUPONS.find(c => c.id === location.state.selectedCouponId);
      if (coupon) {
        setSelectedCoupon(coupon);
        setIsViewingDetails(true);
        setPurchasedCoupons(prev => [...prev, coupon.id]);
      }
    }
  }, [location]);

  const handleViewDetails = (coupon: BettingCouponType) => {
    setSelectedCoupon(coupon);
    setIsViewingDetails(true);
  };

  const handleBackToList = () => {
    setIsViewingDetails(false);
    setTimeout(() => setSelectedCoupon(null), 300); // Attendre la fin de l'animation
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Coupons Premium</h1>
          <p className="mt-3 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez nos sélections expertisées pour optimiser vos paris
          </p>
        </div>

        <div className={`transition-all duration-300 transform ${isViewingDetails ? 'translate-x-[-100vw] opacity-0' : 'translate-x-0 opacity-100'}`}>
          {/* Barre de recherche avec filtre de catégories */}
          <div className="mb-6 w-full flex gap-4 items-center">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Rechercher un coupon..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-4 rounded-lg border border-gray-200/50 bg-white/50
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white
                           transition-all duration-300 hover:shadow-md"
              />
            </div>
            <div className="relative w-48">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full pl-4 pr-10 py-4 rounded-lg border border-gray-200/50 bg-white/50
                         text-left text-gray-700 font-medium
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white
                         transition-all duration-300 hover:shadow-md"
              >
                {categories.find(cat => cat.id === selectedCategory)?.name || 'Tous les coupons'}
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <svg 
                    className={`h-5 w-5 text-gray-400 transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {isDropdownOpen && (
                <div 
                  className="absolute z-10 w-full mt-2 py-1 bg-white rounded-lg shadow-lg border border-gray-200/50
                           animate-in fade-in duration-200 slide-in-from-top-2"
                >
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        setSelectedCategory(category.id);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors duration-200
                                ${selectedCategory === category.id ? 'text-blue-600 font-medium bg-blue-50' : 'text-gray-700'}`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredCoupons.map(coupon => (
              <CouponCard
                key={coupon.id}
                coupon={coupon}
                isPurchased={purchasedCoupons.includes(coupon.id)}
                onViewDetails={() => handleViewDetails(coupon)}
              />
            ))}
          </div>

          {filteredCoupons.length === 0 && (
            <div className="col-span-full text-center py-16 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200/50">
              <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-500 text-lg font-medium">
                Aucun coupon ne correspond à vos critères de recherche.
              </p>
              <button
                onClick={() => { setSelectedCategory('all'); setSearchTerm(''); }}
                className="mt-4 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>

        {/* Vue détaillée */}
        {selectedCoupon && (
          <div 
            className={`fixed inset-0 bg-white z-50 overflow-y-auto transition-transform duration-300 transform
              ${isViewingDetails ? 'translate-x-0' : 'translate-x-[100vw]'}`}
          >
            <div className="max-w-4xl mx-auto px-4 py-8">
              <button
                onClick={handleBackToList}
                className="group flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 mb-8"
              >
                <svg 
                  className="w-5 h-5 transform transition-transform duration-200 group-hover:translate-x-[-4px]" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>Retour à la liste</span>
              </button>

              <CouponDetails
                coupon={selectedCoupon}
                onPurchase={handlePurchase}
                isPurchased={purchasedCoupons.includes(selectedCoupon.id)}
                onBackToList={handleBackToList}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CouponsPage;