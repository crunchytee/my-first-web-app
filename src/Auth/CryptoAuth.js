import { useState } from 'react';
import { ethers } from 'ethers';

const CryptoAuth = () => {
  const [signerAddress, setSignerAddress] = useState('');

  const login = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signerAddress = await provider.send('eth_requestAccounts', []);
    // Isolates the first several charactors of user's address
    const addressBegining = signerAddress[0].substring(0, 4);
    // Isolates the last several charactors of user's address
    const addressEnd = signerAddress[0].substring(37, 42);
    setSignerAddress(
      addressBegining.concat('.'.padEnd(6, '.')).concat(addressEnd)
    );
  };

  window.ethereum.on('accountsChanged', async () => {
    await login();
  });

  return (
    <button onClick={login}>
      {signerAddress !== '' ? signerAddress : 'Login'}
    </button>
  );
};

export default CryptoAuth;
