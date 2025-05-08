import React from 'react';


interface Plan {
  id: string;
  name: string;
  price: number;
  period: string;
  features: Array<{
    text: string;
    tooltip?: string;
  }>;
  isPopular?: boolean;
}

const plans: Plan[] = [
  {
    id: 'starter',
    name: 'Débutant',
    price: 9.99,
    period: 'mois',
    features: [
      { text: 'Accès aux coupons basiques', tooltip: 'Coupons avec un taux de réussite prouvé' },
      { text: 'Notifications par email', tooltip: 'Recevez des alertes pour les nouveaux coupons' },
      { text: 'Support par email', tooltip: 'Réponse sous 24h ouvrées' },
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 19.99,
    period: 'mois',
    features: [
      { text: 'Tous les avantages Débutant' },
      { text: 'Coupons premium', tooltip: 'Coupons exclusifs avec un meilleur retour sur investissement' },
      { text: 'Analyses détaillées', tooltip: 'Statistiques et tendances approfondies' },
      { text: 'Support prioritaire', tooltip: 'Réponse sous 12h ouvrées' },
    ],
    isPopular: true,
  },
  {
    id: 'expert',
    name: 'Expert',
    price: 29.99,
    period: 'mois',
    features: [
      { text: 'Tous les avantages Pro' },
      { text: 'Coupons exclusifs', tooltip: 'Coupons VIP avec les meilleures cotes' },
      { text: 'Conseils personnalisés', tooltip: 'Recommandations adaptées à votre profil' },
      { text: 'Support 24/7', tooltip: 'Assistance disponible à tout moment' },
      { text: 'Accès aux statistiques avancées', tooltip: 'Outils d\'analyse professionnels' },
    ],
  },
];

const SubscriptionPlans: React.FC = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Choisissez votre plan
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Sélectionnez l'abonnement qui correspond le mieux à vos besoins
          </p>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-lg shadow-lg divide-y divide-gray-200 ${plan.isPopular ? 'border-2 border-blue-500' : 'border border-gray-200'}`}
            >
              <div className="p-6">
                {plan.isPopular && (
                  <span className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-blue-100 text-blue-600 mb-4">
                    Le plus populaire
                  </span>
                )}
                <h3 className="text-2xl font-semibold text-gray-900">{plan.name}</h3>
                <p className="mt-4">
                  <span className="text-4xl font-extrabold text-gray-900">{plan.price}€</span>
                  <span className="text-base font-medium text-gray-500">/{plan.period}</span>
                </p>
                <p className="mt-6 text-gray-500">
                  Le meilleur choix pour profiter de nos services.
                </p>

                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature.text} className="flex">
                      <svg
                        className="flex-shrink-0 w-6 h-6 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="ml-3 text-gray-500">{feature.text}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium ${plan.isPopular
                    ? 'text-white bg-blue-600 hover:bg-blue-700'
                    : 'text-blue-600 bg-blue-50 hover:bg-blue-100'}`}
                >
                  {plan.price === 0 ? 'Commencer gratuitement' : 'Commencer'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlans;