/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    // polygonTestnet: {
    //   url: process.env.ALCHEMY_RPC_URL,
    //   accounts: [process.env.SIGNER_PRIV_KEY],
    // },
    // goerli: {
    //   url: process.env.ALCHEMY_RPC_URL,
    //   accounts: [process.env.SIGNER_PRIV_KEY],
    // },
    // localhost: {
    //   url: "http://127.0.0.1:8545",
    // },
  },
  mocha: {
    timeout: 21000000,
  },
  // etherscan: {
  //   apiKey: {
  //     goerli: process.env.ETHERSCAN_API_KEY,
  //     polygonMumbai: process.env.POLYGONSCAN_API_KEY,
  //   },
  // },
  // plugins: ["solidity-coverage"],
};
