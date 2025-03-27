 import React, { createContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const NavigationContext = createContext();

 const NavigationProvider = ({ children }) => {
  const navigate = useNavigate();

   const goBack = () => {
    navigate(-1);
  };

  return (
    <NavigationContext.Provider value={{ goBack }}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
