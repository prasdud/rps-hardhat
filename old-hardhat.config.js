require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    mumbai: {
      //url: `https://polygon-amoy.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      url: "https://rpc-amoy.polygon.technology/",
      accounts: [process.env.PRIVATE_KEY],
      chainId: 80002, // Amoy Testnet Chain ID
    },
  },
};
