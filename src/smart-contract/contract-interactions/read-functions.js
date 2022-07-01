import { ethers } from 'ethers';
import { contractAddress, contractAbi } from '../contract-info';
import { getProvider } from '../utils';

// Returns the current balance (int) of the input driver.
export const getBal = async (driverAddress) => {
  const provider = await getProvider();
  const contract = new ethers.Contract(contractAddress, contractAbi, provider);
  return await contract.getBalance(driverAddress);
};

// Returns true or false (boolean) on whether the input address is an administrator.
export const verifyAdminAddress = async (address) => {
  const provider = await getProvider();
  const contract = new ethers.Contract(contractAddress, contractAbi, provider);
  return await contract.verifyAdmin(address);
};
