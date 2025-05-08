import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from './Input';
import Button from './Button';
import Modal from './Modal';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'register';
  onAuthSuccess?: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, initialMode = 'login', onAuthSuccess }) => {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Simulation d'appel API avec délai
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simuler une réponse réussie
      console.log(mode === 'login' ? 'Connexion' : 'Inscription', { email, password, name });
      
      // Réinitialiser les champs
      setEmail('');
      setPassword('');
      setName('');
      
      // Fermer la modal et notifier le succès
      onClose();
      onAuthSuccess?.();
    } catch (error) {
      console.error('Erreur d\'authentification:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={mode === 'login' ? 'Connexion' : 'Inscription'}
      size="sm"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {mode === 'register' && (
          <Input
            label="Nom"
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            icon={(
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            )}
            required
          />
        )}

        <Input
          label="Email"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon={(
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          )}
          required
        />

        <Input
          label="Mot de passe"
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          icon={(
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          )}
          required
        />

        <Button
          type="submit"
          variant="primary"
          className="w-full"
          isLoading={isLoading}
        >
          {mode === 'login' ? 'Se connecter' : "S'inscrire"}
        </Button>

        <div className="text-center">
          <button
            type="button"
            onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
            className="text-sm text-blue-600 hover:text-blue-500"
          >
            {mode === 'login'
              ? "Pas encore de compte ? S'inscrire"
              : 'Déjà un compte ? Se connecter'}
          </button>
        </div>

        <div className="text-center text-xs text-gray-500">
          En continuant, vous acceptez nos{' '}
          <Link to="/conditions" className="text-blue-600 hover:text-blue-500">
            conditions d'utilisation
          </Link>{' '}
          et notre{' '}
          <Link to="/confidentialite" className="text-blue-600 hover:text-blue-500">
            politique de confidentialité
          </Link>
        </div>
      </form>
    </Modal>
  );
};

export default AuthModal;