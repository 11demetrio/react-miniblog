// Login.js
import React, { useState, useEffect } from 'react';
import { useAutenticacao } from '../../hooks/useAutenticacao';

const Login = () => {
  const { login, error: authError, loading } = useAutenticacao();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmitAndre = async (e) => {
    e.preventDefault();
    setError('');

    const userDRM = {
      email,
      password,
    };

    try {
      await login(userDRM);
    } catch (error) {
      // Tratar erros específicos, se necessário
      setError('Ocorreu um erro no login, tente novamente.');
    }
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <div>
      <h1>Entrar</h1>
      <p>Faça o login para usar o sistema</p>
      <form onSubmit={handleSubmitAndre}>
        <label>
          <span>E-mail:</span>
          <input
            type='email'
            name='email'
            required
            placeholder='E-mail do usuário'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type='password'
            name='password'
            required
            placeholder='Senha do usuário'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        {!loading && (
          <button className='botao' type='submit'>
            Entrar
          </button>
        )}
        {loading && (
          <button className='botao' disabled>
            Aguarde...
          </button>
        )}
        {error && <p className='error'>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
