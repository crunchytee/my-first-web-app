import { ethers } from 'ethers';
import { contractAddress, contractAbi } from '../contract-info';
import { getSignerInstance } from '../utils';

// Allows a driver to withdraw balance.
export const withdrawDriverFunds = async () => {
  const signer = getSignerInstance();
  const contract = new ethers.Contract(contractAddress, contractAbi, signer);
  await contract.withdraw();
};

// Stores any records that are associated with a driver.
export const storeDriverRecords = async (driverRecord, driverAddress) => {
  const signer = getSignerInstance();
  const contract = new ethers.Contract(contractAddress, contractAbi, signer);
  await contract.storeDriverRecord(driverRecord, driverAddress);
};

// Stores a hash of the total vehicle vin numbers.
export const storeTotalVinsHash = async (totalVinsHash) => {
  const signer = getSignerInstance();
  const contract = new ethers.Contract(contractAddress, contractAbi, signer);
  await contract.storeVinsAsHash(totalVinsHash);
};

// Adds debt to an associated driver's address based on how much they owe.
export const applyDebtToDriver = async (driverAddress, amount) => {
  const signer = getSignerInstance();
  const contract = new ethers.Contract(contractAddress, contractAbi, signer);
  await contract.applyDebt(driverAddress, amount);
};

// Subtracts debt associated with a driver based on how much the driver has paid off.
export const subtractDebtFromDriver = async (driverAddress, amount) => {
  const signer = getSignerInstance();
  const contract = new ethers.Contract(contractAddress, contractAbi, signer);
  await contract.subtractDebt(driverAddress, amount);
};
