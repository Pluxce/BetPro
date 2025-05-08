import React from 'react';

const MentionsLegalesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Mentions légales</h1>
        
        <div className="prose prose-blue max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Informations légales</h2>
          <p className="text-gray-600 mb-4">
            BetPro est une société par actions simplifiée (SAS) au capital de 10 000 euros,
            immatriculée au Registre du Commerce et des Sociétés sous le numéro RCS XXX XXX XXX.
          </p>
          <p className="text-gray-600 mb-4">
            Siège social : [Adresse du siège social]
            <br />
            Numéro de TVA intracommunautaire : FR XX XXX XXX XXX
            <br />
            Directeur de la publication : [Nom du directeur]
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Hébergement</h2>
          <p className="text-gray-600 mb-4">
            Le site BetPro est hébergé par :
            <br />
            [Nom de l'hébergeur]
            <br />
            [Adresse de l'hébergeur]
            <br />
            [Numéro de téléphone]
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Propriété intellectuelle</h2>
          <p className="text-gray-600 mb-4">
            L'ensemble du contenu de ce site (textes, images, vidéos, etc.) est protégé par le droit
            d'auteur. Toute reproduction ou représentation, totale ou partielle, du site ou de son
            contenu, par quelque procédé que ce soit, sans autorisation expresse, est interdite et
            constituerait une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code
            de la propriété intellectuelle.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Protection des données personnelles</h2>
          <p className="text-gray-600 mb-4">
            Conformément à la loi Informatique et Libertés du 6 janvier 1978 modifiée et au Règlement
            Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de
            rectification, de suppression et d'opposition aux données personnelles vous concernant.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Cookies</h2>
          <p className="text-gray-600 mb-4">
            Le site utilise des cookies pour améliorer l'expérience utilisateur. En naviguant sur
            le site, vous acceptez l'utilisation de cookies conformément à notre politique de
            confidentialité.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Limitation de responsabilité</h2>
          <p className="text-gray-600 mb-4">
            BetPro ne saurait être tenu responsable des dommages directs ou indirects résultant
            de l'accès au site ou de l'utilisation des informations et services proposés.
            Les conseils et analyses fournis sont donnés à titre informatif uniquement.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Droit applicable</h2>
          <p className="text-gray-600 mb-4">
            Les présentes mentions légales sont soumises au droit français. En cas de litige,
            les tribunaux français seront seuls compétents.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Contact</h2>
          <p className="text-gray-600 mb-4">
            Pour toute question concernant ces mentions légales, vous pouvez nous contacter à
            l'adresse suivante : legal@betpro.fr
          </p>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegalesPage;