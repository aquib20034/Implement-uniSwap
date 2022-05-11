require('dotenv').config();
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require('@openzeppelin/hardhat-upgrades');
const { API_URL, PRIVATE_KEY }  = process.env;
const ETHERSCAN_API_KEY         = process.env.ETHERSCAN_API_KEY;

////////// Configuration of the contract on Rinkeby/ Mainnet //////////
/*
 module.exports = {
   solidity: "0.8.4",
   defaultNetwork: "rinkeby",
   networks: {
      hardhat: {},
      rinkeby: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      }
   },
   etherscan: {
    apiKey: ETHERSCAN_API_KEY
  }
} 

*/
////////// Configuration of the contract on kovan/ Mainnet //////////

module.exports = {
   solidity: "0.8.4",
   defaultNetwork: "kovan",
   networks: {
      hardhat: {},
      kovan: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      }
   },
   etherscan: {
    apiKey: ETHERSCAN_API_KEY
  }
} 

////////// Configuration of the contract on hardhat local network for unit testing //////////
/*
module.exports = {
   solidity: "0.8.4",
   defaultNetwork: "hardhat",
   networks: {
      hardhat: {}
   },
   mocha: {
     timeout: 400000000
   }
}*/

