import { useState, useContext, useEffect } from 'react';
import { DriverContext } from '../DriverContext';
import { useDriverAuth } from '../hooks/useDriverAuth';

const CryptoAuth = () => {
  const [driverAddress, setDriverAddress] = useState('');

  const [authedDriver, setAuthedDriver] = useContext(DriverContext);

  const { driverStatus, authDriver } = useDriverAuth();

  window.ethereum.on('accountsChanged', async () => {
    setAuthedDriver(await driverStatus());
  });

  useEffect(() => {
    driverStatus();
    if (authedDriver.authed) {
      document.getElementById('login-btn').disabled = true;
      // Isolates the first four characters of the dirver's address
      const addressBegining = authedDriver.driverAddress.substring(0, 4);
      // Isolates the last five characters of driver's address
      const addressEnd = authedDriver.driverAddress.substring(37, 42);
      setDriverAddress(
        addressBegining.concat('.'.padEnd(6, '.').concat(addressEnd))
      );
    } else {
      document.getElementById('login-btn').disabled = false;
    }
  }, [driverStatus, authedDriver.authed, authedDriver.driverAddress]);

  return (
    <button id="login-btn" onClick={authDriver}>
      {authedDriver.authed ? driverAddress : 'Login'}
    </button>
  );
};

export default CryptoAuth;
