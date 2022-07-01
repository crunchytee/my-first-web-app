import { ethers } from 'ethers';

// Returns an instance of the authenticated signer.
export const getSignerInstance = async () => {
  const provider = await ethers.providers.Web3Provider(window.ethereum);
  const signer = await provider.getSigner();
  return signer;
};

// Returns a provider instance.
export const getProvider = async () => {
  const provider = await ethers.providers.Web3Provider(window.ethereum);
  return provider;
};
