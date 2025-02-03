import { ethers } from 'ethers';

export const CONTRACT_ADDRESS = '0xd1C522aF7bC539F96BE6a03195472cD2b2476114';

export const CONTRACT_ABI = [
  // Add your contract ABI here
];

export const getContract = (provider: ethers.Provider) => {
  return new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);
};