import { useEffect, useContext } from 'react';
import { ethers } from 'ethers';
import { DriverContext } from '../DriverContext';

export const useDriverAuth = () => {
  const [authedDriver, setAuthedDriver] = useContext(DriverContext);

  useEffect(() => {
    const initailAuthedUser = async () => {
      setAuthedDriver(await driverStatus());
    };
    initailAuthedUser();
  }, [setAuthedDriver]);
  console.log(authedDriver, 'from auth hook');

  const driverStatus = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    try {
      const signerAddress = await signer.getAddress();
      const signerBalance = await signer.getBalance();
      return {
        authed: true,
        driverAddress: signerAddress,
        driverBalance: Number(signerBalance),
      };
    } catch (e) {
      return { authed: false, messege: 'User not signed in' };
    }
  };

  const authDriver = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signerAddress = await provider.send('eth_requestAccounts', []);
    console.log(signerAddress);
    setAuthedDriver({
      authed: true,
      driverAddress: signerAddress[0],
    });
  };

  return { driverStatus, authDriver };
};
