require("@nomicfoundation/hardhat-toolbox");

// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.
require("./tasks/faucet");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 1337 // We set 1337 to make interacting with MetaMask simpler
    },
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/QGkOldgHcks-Cd3t8jjmNgc5_u14ZyYH',
      accounts: ['3193b329608788d5894cb2b211a1453d1d476fdf5a9ca55d912154cfc28597d9']
    }
  }
};
