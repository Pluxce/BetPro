import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Toast from '../components/Toast';
// Import des logos
import WaveLogo from '../assets/operators/wave.jpg';
import OrangeLogo from '../assets/operators/orange.png';
import MoovLogo from '../assets/operators/moov.png';
import MtnLogo from '../assets/operators/mtn.png';

interface PaymentMethod {
  id: string;
  name: string;
  logo: string;
  color: string;
}

const paymentMethods: PaymentMethod[] = [
  {
    id: 'wave',
    name: 'Wave',
    logo: WaveLogo,
    color: 'bg-[#00D1FF]'
  },
  {
    id: 'orange',
    name: 'Orange Money',
    logo: OrangeLogo,
    color: 'bg-[#FF7900]'
  },
  {
    id: 'moov',
    name: 'Moov Money',
    logo: MoovLogo,
    color: 'bg-[#0066B3]'
  },
  {
    id: 'mtn',
    name: 'MTN Mobile Money',
    logo: MtnLogo,
    color: 'bg-[#FFC403] text-black'
  }
];

const PaymentPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const couponId = location.state?.couponId;
  const [selectedMethod, setSelectedMethod] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedMethod) {
      setToastMessage('Veuillez sélectionner une méthode de paiement');
      setShowToast(true);
      return;
    }
    if (!phoneNumber || !/^[0-9]{10}$/.test(phoneNumber)) {
      setToastMessage('Veuillez entrer un numéro de téléphone valide (10 chiffres)');
      setShowToast(true);
      return;
    }

    setIsLoading(true);
    // Simulation d'une requête de paiement
    setTimeout(() => {
      setIsLoading(false);
      setToastMessage('Paiement effectué avec succès !');
      setShowToast(true);
      
      // Redirection vers la page des coupons avec l'ID du coupon
      setTimeout(() => {
        navigate('/coupons', { state: { selectedCouponId: couponId, showDetails: true } });
      }, 2000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 py-12">
      <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Paiement Sécurisé
          </h1>
          <p className="mt-2 text-gray-600">
            Choisissez votre méthode de paiement préférée
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200/50 overflow-hidden">
          <form onSubmit={handlePayment} className="p-6 space-y-6">
            {/* Méthodes de paiement */}
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Méthode de paiement
              </label>
              <div className="relative grid grid-cols-2 gap-8 min-h-[240px]">
                {paymentMethods.map((method) => {
                  const isSelected = selectedMethod === method.id;
                  return (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => setSelectedMethod(method.id)}
                      className={`
                        absolute w-[calc(50%-8px)] transform transition-all duration-500 ease-in-out
                        flex flex-col items-center p-4 rounded-xl border-2
                        ${isSelected
                          ? `${method.color} border-transparent text-white shadow-lg scale-110 z-10 left-1/2 -translate-x-1/2`
                          : `border-gray-200 hover:border-gray-300 text-gray-600 hover:bg-gray-50 scale-90
                             ${selectedMethod ? 'opacity-50' : ''}
                             ${method.id === 'wave' ? 'left-0 top-0' :
                               method.id === 'orange' ? 'right-0 top-0' :
                               method.id === 'moov' ? 'left-0 bottom-0' :
                               'right-0 bottom-0'}`
                        }`}
                      style={{
                        transform: isSelected
                          ? 'translate(-50%, 0) scale(1.1)'
                          : selectedMethod
                            ? `translate(${method.id === 'wave' || method.id === 'moov' ? '-10%' : '10%'}, ${method.id === 'wave' || method.id === 'orange' ? '-10%' : '10%'}) scale(0.9)`
                            : 'none'
                      }}
                    >
                      <div className={`
                        w-12 h-12 rounded-full bg-white p-1.5 shadow-md overflow-hidden
                        flex items-center justify-center transition-all duration-500
                        ${isSelected ? 'scale-125' : ''}
                      `}>
                        <img src={method.logo} alt={method.name} className="w-full h-full object-cover rounded-full" />
                      </div>
                      <span className="mt-2 text-sm font-medium">{method.name}</span>
                      {isSelected && (
                        <div className="absolute top-2 right-2 animate-fade-in">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Numéro de téléphone */}
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Numéro de téléphone
              </label>
              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                  placeholder="0X XX XX XX XX"
                  className="block w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  maxLength={10}
                />
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Bouton de paiement */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-6 rounded-xl font-medium text-white
                ${isLoading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transform transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5'
                }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Traitement en cours...
                </div>
              ) : (
                'Payer maintenant'
              )}
            </button>

            {/* Message de sécurité */}
            <div className="text-center text-sm text-gray-500">
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Paiement sécurisé et crypté</span>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Toast de notification */}
      <Toast
        message={toastMessage}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
        duration={5000}
        variant={toastMessage.includes('succès') ? 'success' : 'error'}
      />
    </div>
  );
};

export default PaymentPage;