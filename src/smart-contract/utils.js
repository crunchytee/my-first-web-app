import { ethers } from 'ethers';

// Returns an instance of the authenticated signer.
export const getSignerInstance = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  return signer;
};

// Returns a provider instance.
export const getProvider = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  return provider;
};
