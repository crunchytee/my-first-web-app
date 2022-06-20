import {ethers} from 'ethers'

const CryptoAuth = () => {
    
    const login = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = await provider.send('eth_requestAccounts', []);
        console.log(signer)
    }

  return (
    <button onClick={login}>CryptoAuth</button>
  )
}

export default CryptoAuth