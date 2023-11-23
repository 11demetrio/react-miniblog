// useAutenticacao.js
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { db } from '../firebase/config'; 

export const useAutenticacao = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [cancelarAposdarCerto, setCancelarAposdarCerto] = useState(false);
  const auth = getAuth();

  const validarIfIsCancelled = () => {
    if (cancelarAposdarCerto) {
      return;
    }
  };

  const createUsuario = async (data) => {
    validarIfIsCancelled();
    setLoading(true);
    setError('');

    try {
      const { user } = await createUserWithEmailAndPassword(auth, data.email, data.password);
      await updateProfile(user, { displayName: data.displayName });
      setLoading(false);
      return user;
    } catch (catError) {
      console.error("Erro durante a criação do usuário:", catError);

      let erroAPI;
      if (catError.message.includes("Password")) {
        erroAPI = "A senha está fora do padrão do Firebase. Deve conter 6 caracteres.";
      } else {
        if (catError.message.includes("email-already")) {
          erroAPI = "E-mail já cadastrado.";
        } else {
          erroAPI = "Ocorreu um erro, tente novamente mais tarde.";
        }
      }
      setError(erroAPI);
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => setCancelarAposdarCerto(true);
  }, []);

  const logout = async () => {
    validarIfIsCancelled();
    signOut(auth);
  };

  const login = async (data) => {
    validarIfIsCancelled();
    setError(false);
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      setLoading(false);
    } catch (catError) {
      console.error("Erro durante o login:", catError);

      let erroAPI;
      if (catError.message.includes("user-not-found")) {
        erroAPI = "Usuário não cadastrado.";
      } else {
        if (catError.message.includes("wrong-password")) {
          erroAPI = "Senha incorreta.";
        } else {
          erroAPI = "Ocorreu um erro no login, tente novamente mais tarde.";
        }
      }
      setError(erroAPI);
      setLoading(false);
    }
  };

  return {
    auth,
    createUsuario,
    error,
    loading,
    logout,
    login,
  };
};
