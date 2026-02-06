import React, { useState } from 'react';

const Login = ({ onBackToHome }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loggingIn');
    
    setTimeout(() => {
      // Simple mock credential check
      if (email === 'daksh@gmail.com' && password === 'daksh@2006') {
        setStatus('success');
      } else {
        setStatus('error');
      }
    }, 1500);
  };

  const getStatusMessage = () => {
    if (status === 'loggingIn') return 'Verifying credentials...';
    if (status === 'success') return 'Login Successful! Redirecting...';
    if (status === 'error') return 'Login Failed. Invalid email or password.';
    return 'Enter your details to continue.';
  };

  const isFormDisabled = status === 'loggingIn' || status === 'success';

  return (
    <>
      <style jsx="true">{`
        :root {
          --primary-orange:  #e1a162ff;
          --dark-background: #573a35;
          --light-text: #f0f0f0;
          --accent-gray: #f1eeeeff;
        }

        .login-page {
          min-height: 86vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-image: linear-gradient(rgba(28, 28, 28, 0.8), rgba(28, 28, 28, 0.8)), url('https://i.pinimg.com/736x/e5/c5/b9/e5c5b916d85eb7ba0899e3b925b0f73c.jpg'); 
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-color: var(--dark-background); 
          box-shadow: 0 10px 30p;
        }

        .login-card {
          background-color: transperent; 
          padding: 3rem;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          width: 90%;
          max-width: 400px;
          text-align: center;
        }

        .login-card h2 {
          color: var(--primary-orange);
          margin-bottom: 2rem;
          font-size: 2rem;
          font-weight: 800;
        }

        .input-group {
          margin-bottom: 1.5rem;
          text-align: left;
        }

        .input-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: var(--accent-gray);
        }

        .input-group input {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid #100f0fff;
          border-radius: 10px;
          background-color: transparent;
          color: var(--light-text);
          font-size: 1rem;
          transition: border-color 0.3s;
        }

        .input-group input:focus {
          outline: none;
          border-color: var(--primary-orange);
        }
        
        .status-message {
            margin-bottom: 1.5rem;
            font-size: 1.1rem;
            min-height: 1.5rem;
            color: var(--accent-gray);
        }

        .status-message.success {
            color: #4CAF50;
            font-weight: 700;
        }

        .status-message.error {
            color: #f44336;
            font-weight: 700;
        }
        
        .login-button-submit {
          width: 100%;
          padding: 1rem;
          font-size: 1.1rem;
          background-color: var(--primary-orange);
          color: var(--dark-background);
          border: none;
          border-radius: 6px;
          font-weight: 700;
          cursor: pointer;
          transition: background-color 0.2s, transform 0.1s;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
        }

        .login-button-submit:hover:not(:disabled) {
          background-color: #ff9933;
          transform: translateY(-1px);
        }

        .login-button-submit:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }

        .back-link {
            display: block;
            margin-top: 1.5rem;
            color: var(--primary-orange);
            text-decoration: none;
            cursor: pointer;
        }
      `}</style>

      <div className="login-page">
        <div className="login-card">
          <h2>LOGIN ⚽</h2>
          <div className={`status-message ${status}`}>{getStatusMessage()}</div>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isFormDisabled}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isFormDisabled}
                required
              />
            </div>
            <button 
              type="submit" 
              className="login-button-submit" 
              disabled={isFormDisabled}
            >
              {status === 'loggingIn' ? 'Verifying...' : 'Login'}
            </button>
          </form>
          <span className="back-link" onClick={onBackToHome}>
            ← Back 
          </span>
        </div>
      </div>
    </>
  );
};

export default Login;