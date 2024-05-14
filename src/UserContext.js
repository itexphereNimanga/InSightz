import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext(null);

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    token: localStorage.getItem('token'),
    userName: localStorage.getItem('userName'),
    userEmail: localStorage.getItem('userEmail')
  });

  const login = (token, userName, userEmail) => {
    localStorage.setItem('token', token);
    localStorage.setItem('userName', userName);
    localStorage.setItem('userEmail', userEmail);
    setUser({ token, userName, userEmail });
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
