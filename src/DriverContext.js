import { useState, createContext } from 'react';

export const DriverContext = createContext();

export const DriverProvider = ({ children }) => {
  const [authedDriver, setAuthedDriver] = useState({});
  return (
    <DriverContext.Provider value={[authedDriver, setAuthedDriver]}>
      {children}
    </DriverContext.Provider>
  );
};
