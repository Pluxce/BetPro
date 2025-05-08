import React from 'react';
import SubscriptionPlans from '../components/SubscriptionPlans';

const AbonnementsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Nos Abonnements</h1>
          <p className="mt-4 text-xl text-gray-600">
            Choisissez l'abonnement qui correspond le mieux à vos besoins et profitez de nos services premium
          </p>
        </div>

        {/* Section Avantages */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="text-blue-600 mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Accès Premium</h3>
              <p className="text-gray-600">
                Profitez d'un accès illimité à tous nos coupons et analyses premium pendant toute la durée de votre abonnement.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="text-blue-600 mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Notifications Instantanées</h3>
              <p className="text-gray-600">
                Recevez des alertes en temps réel pour ne manquer aucune opportunité de paris à fort potentiel.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="text-blue-600 mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Support Prioritaire</h3>
              <p className="text-gray-600">
                Bénéficiez d'un support client dédié et prioritaire pour répondre à toutes vos questions.
              </p>
            </div>
          </div>
        </div>

        {/* Section FAQ */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Questions Fréquentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Comment fonctionne l'abonnement ?</h3>
              <p className="text-gray-600">
                L'abonnement vous donne un accès complet à notre plateforme pendant la durée choisie.
                Vous pouvez le renouveler automatiquement ou manuellement à son expiration.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Puis-je annuler à tout moment ?</h3>
              <p className="text-gray-600">
                Oui, vous pouvez annuler votre abonnement à tout moment. L'accès aux services reste
                actif jusqu'à la fin de la période en cours.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quels sont les moyens de paiement acceptés ?</h3>
              <p className="text-gray-600">
                Nous acceptons les principales cartes de crédit (Visa, Mastercard) ainsi que les
                paiements via PayPal pour plus de flexibilité.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Y a-t-il une garantie de satisfaction ?</h3>
              <p className="text-gray-600">
                Nous offrons une garantie de remboursement de 14 jours si vous n'êtes pas satisfait
                de nos services premium.
              </p>
            </div>
          </div>
        </div>

        {/* Section Plans d'abonnement */}
        <SubscriptionPlans />
      </div>
    </div>
  );
};

export default AbonnementsPage;