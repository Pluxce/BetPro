import React from 'react';

const ConfidentialitePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Politique de confidentialité</h1>
        
        <div className="prose prose-blue max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Collecte des données</h2>
          <p className="text-gray-600 mb-4">
            BetPro collecte les informations que vous nous fournissez directement, notamment :
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>Nom et prénom</li>
            <li>Adresse email</li>
            <li>Informations de paiement</li>
            <li>Préférences de paris et historique d'utilisation</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Utilisation des données</h2>
          <p className="text-gray-600 mb-4">
            Nous utilisons vos données personnelles pour :
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>Gérer votre compte et vous fournir nos services</li>
            <li>Personnaliser votre expérience utilisateur</li>
            <li>Vous envoyer des communications marketing (avec votre consentement)</li>
            <li>Améliorer nos services et développer de nouvelles fonctionnalités</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Protection des données</h2>
          <p className="text-gray-600 mb-4">
            Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données
            personnelles contre tout accès non autorisé, modification, divulgation ou destruction.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Partage des données</h2>
          <p className="text-gray-600 mb-4">
            Nous ne vendons pas vos données personnelles à des tiers. Nous pouvons partager vos
            données avec des prestataires de services qui nous aident à exploiter notre plateforme,
            toujours dans le respect de cette politique de confidentialité.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Cookies</h2>
          <p className="text-gray-600 mb-4">
            Nous utilisons des cookies pour améliorer votre expérience sur notre site. Vous pouvez
            contrôler l'utilisation des cookies via les paramètres de votre navigateur.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Vos droits</h2>
          <p className="text-gray-600 mb-4">
            Conformément au RGPD, vous disposez des droits suivants :
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>Droit d'accès à vos données personnelles</li>
            <li>Droit de rectification de vos données</li>
            <li>Droit à l'effacement de vos données</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit à la portabilité des données</li>
            <li>Droit d'opposition au traitement</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Contact</h2>
          <p className="text-gray-600 mb-4">
            Pour toute question concernant notre politique de confidentialité ou pour exercer vos droits,
            veuillez nous contacter à l'adresse suivante : privacy@betpro.fr
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Modifications</h2>
          <p className="text-gray-600 mb-4">
            Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment.
            Les modifications entrent en vigueur dès leur publication sur le site.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfidentialitePage;