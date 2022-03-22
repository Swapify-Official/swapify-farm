require("dotenv").config();

const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  contracts_build_directory: "./build",
  networks: {
    // Useful for testing. The `development` name is special - truffle uses it by default
    // if it's defined here and no other network is specified at the command line.
    // You should run a client (like ganache-cli, geth or parity) in a separate terminal
    // tab if you use this network and you must also set the `host`, `port` and `network_id`
    // options below to some value.
    //
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 9545, // Standard Ethereum port (default: none)
      network_id: "*", // Any network (default: none)
    },
    mumbai: {
      provider: () =>
        new HDWalletProvider(
          process.env.PK,
          `https://rpc-mumbai.maticvigil.com/v1/3d8e023feb718b64c09bd40bf0ce1b49a5061daa`
        ),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
    ropsten: {
      provider: () =>
        new HDWalletProvider(
          process.env.MNENOMIC,
          `https://speedy-nodes-nyc.moralis.io/4c4be40d09f80112d07cb29c/eth/ropsten`
        ),
      network_id: 3,
      gasPrice: 10e9,
      skipDryRun: true
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.6.12", // Fetch exact version from solc-bin (default: truffle's version)
    },
  },

  // Plugins
  plugins: ["truffle-plugin-verify"],

  // API keys
  api_keys: {
    etherscan: process.env.ETHERSCAN,
    polygonscan: process.env.POLYSCAN,
  },
};
