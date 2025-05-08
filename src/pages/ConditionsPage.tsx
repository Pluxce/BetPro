import React from 'react';

const ConditionsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Conditions d'utilisation</h1>
        
        <div className="prose prose-blue max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Acceptation des conditions</h2>
          <p className="text-gray-600 mb-4">
            En accédant et en utilisant le site BetPro, vous acceptez d'être lié par ces conditions d'utilisation.
            Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre service.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Description du service</h2>
          <p className="text-gray-600 mb-4">
            BetPro fournit des conseils et des analyses de paris sportifs. Nos services incluent :
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>Des coupons de paris premium</li>
            <li>Des analyses détaillées des événements sportifs</li>
            <li>Des abonnements pour un accès régulier à nos sélections</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Responsabilité</h2>
          <p className="text-gray-600 mb-4">
            Les paris sportifs comportent des risques de pertes financières. BetPro ne peut être tenu
            responsable des pertes encourues suite à l'utilisation de nos services. Nos analyses et
            conseils sont fournis à titre informatif uniquement.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Utilisation du compte</h2>
          <p className="text-gray-600 mb-4">
            Vous êtes responsable de maintenir la confidentialité de votre compte et de votre mot de passe.
            Toute activité effectuée sous votre compte relève de votre responsabilité.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Paiements et remboursements</h2>
          <p className="text-gray-600 mb-4">
            Les paiements pour nos services sont non remboursables sauf mention contraire. Les prix
            sont indiqués en euros et incluent toutes les taxes applicables.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Modification des conditions</h2>
          <p className="text-gray-600 mb-4">
            BetPro se réserve le droit de modifier ces conditions à tout moment. Les modifications
            entrent en vigueur dès leur publication sur le site.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Contact</h2>
          <p className="text-gray-600 mb-4">
            Pour toute question concernant ces conditions d'utilisation, veuillez nous contacter à
            l'adresse suivante : contact@betpro.fr
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConditionsPage;