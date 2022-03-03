const MasterChef = artifacts.require("MasterChef.sol");
const SwapifyToken = artifacts.require("SwapifyToken.sol");
const SwapifyPool = artifacts.require("SwapifyPool.sol");

module.exports = async function (deployer) {
  const owner = "0xCDB1c8BD7f31f6EfaeDe6B616d669561292D9Ea5";
  await deployer.deploy(SwapifyToken);
  await SwapifyToken.deployed();
  await deployer.deploy(SwapifyPool, SwapifyToken.address);
  await SwapifyPool.deployed();

  await deployer.deploy(
    MasterChef,
    SwapifyToken.address,
    SwapifyPool.address,
    owner,
    0,
    0
  );
};
