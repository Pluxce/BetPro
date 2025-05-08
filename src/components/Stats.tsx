import React from 'react';

const stats = [
  {
    id: 1,
    value: '90%',
    label: 'Taux de satisfaction',
    description: 'de nos utilisateurs sont satisfaits'
  },
  {
    id: 2,
    value: '50K+',
    label: 'Coupons vendus',
    description: 'depuis notre lancement'
  },
  {
    id: 3,
    value: '75%',
    label: 'Taux de réussite',
    description: 'sur nos coupons premium'
  },
  {
    id: 4,
    value: '24/7',
    label: 'Support client',
    description: 'disponible pour vous aider'
  }
];

const Stats: React.FC = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nos performances en chiffres
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Des résultats concrets qui démontrent notre expertise
          </p>
        </div>
        <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-gradient-to-br from-white via-white to-blue-50/30 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 group"
            >
              <dt>
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 group-hover:to-blue-600 transition-all duration-200">
                    {stat.value}
                  </span>
                </div>
                <p className="mt-2 text-lg font-medium text-gray-900 text-center">
                  {stat.label}
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-500 text-center">
                {stat.description}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-16 bg-blue-600 rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-8 sm:p-10 sm:pb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
                  Prêt à commencer ?
                </h3>
                <p className="mt-4 text-lg text-blue-100">
                  Rejoignez des milliers d'utilisateurs qui font confiance à notre expertise
                </p>
              </div>
              <div className="text-center sm:text-right">
                <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors duration-200">
                  Essayer gratuitement
                  <svg
                    className="ml-2 -mr-1 w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;