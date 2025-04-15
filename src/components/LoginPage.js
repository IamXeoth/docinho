import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import '../styles/login.css';

const LoginPage = () => {
  const [accessCode, setAccessCode] = useState('');
  const [error, setError] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (accessCode.toLowerCase().trim() === 'docinho') {
      navigate('/main');
      setError(false);
    } else {
      setError(true);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <img 
          src="/images/buttercup.gif" 
          alt="Buttercup" 
          className="character-gif"
        />

        <h2 className="login-title">Nosso mundo</h2>
        <p className="login-subtitle">Um pedaço do nosso universo</p>

        <form onSubmit={handleLogin} className="login-form">
          <div className="input-wrapper">
            <input 
              type={showPassword ? "text" : "password"}
              value={accessCode}
              onChange={(e) => {
                setAccessCode(e.target.value);
                setError(false);
              }}
              placeholder="Digite o código secreto"
              className="login-input"
            />
            <button 
              type="button"
              className="password-toggle"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {error && (
            <div className="error-message">
              É sério que tu errou? Tenta novamente.
            </div>
          )}

          <button 
            type="submit" 
            className="login-button"
          >
            Revelar
          </button>
        </form>

        <div 
          className="login-hint" 
          onClick={() => setShowHint(!showHint)}
        >
          Precisa de uma dica?
        </div>

        {showHint && (
          <div className="hint-text">
            Seu apelido meu bebê 💚 🤭
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;