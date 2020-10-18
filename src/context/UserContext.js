import React, { useState, createContext, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import URL from '../config/index';

const URL_LOGIN = `${URL}/auth/authenticate`;
const URL_SIGNUP = `${URL}/auth/register`;

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);

  const history = useHistory();

  const userLogout = useCallback(async () => {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    setToken(null);

    window.localStorage.removeItem('login');
    window.localStorage.removeItem('token');

    history.push('/'); 
  }, [history]);

  const authenticate = async data => {
    try {
      setError(null);
      setLoading(true);

      const response = await fetch(URL_LOGIN, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Erro: Usuário e/ou senha inválidos!');
      }

      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        localStorage.setItem('login', JSON.stringify(data));
        localStorage.setItem('token', token);
        setToken(token);
        setData(data);
        setLogin(true);
      }

      history.push('/');
    } catch (error) {
      setError(error.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }; 

  const signUp = async data => {
    try {
      setError(null);
      setLoading(true);

      const response = await fetch(URL_SIGNUP, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        setError('E-mail já cadastrado');
      }

      if (response.ok) {
        history.push('/');
      }

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const autoLogin = async () => {
      const token = window.localStorage.getItem('token');

      if (token) {
        try {
          setError(null);
          setLoading(true);

          

          history.push('/');
        } catch (error) {
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    };

    autoLogin();
  }, [userLogout, history]);

  return (
    <UserContext.Provider value={{ 
      userLogout, 
      data, 
      error, 
      loading, 
      login,
      authenticate,
      token,
      signUp
    }}>
      {children}
    </UserContext.Provider>
  );
};
