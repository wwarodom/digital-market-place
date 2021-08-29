require("@nomiclabs/hardhat-waffle")
const fs = require('fs')
 
const { ALCHEMY_ID } = require('./alchemy.json'); 

const privateKey = fs.readFileSync(".secret").toString().trim() || "01234567890123456789"
const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";  

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    kovan: {
      url: `https://kovan.infura.io/v3/${infuraId}`, 
      accounts: [privateKey] //, privateKey1, privateKey2]
    },
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_ID}`,
      accounts: [privateKey],
      chainId: 80001
      
    },
    matic: { 
      url: "https://rpc-mainnet.maticvigil.com",
      accounts: [privateKey],
      chainId: 80001
    }
  
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
} 