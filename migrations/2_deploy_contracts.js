const MasterChef = artifacts.require("MasterChef.sol");
const SwapifyToken = artifacts.require("SwapifyToken.sol");
const SwapifyPool = artifacts.require("SwapifyPool.sol");

module.exports = async function (deployer, network, accounts) {
  const owner = accounts[0];
  await deployer.deploy(SwapifyToken);
  const SWY = await SwapifyToken.deployed();
  await deployer.deploy(SwapifyPool, SwapifyToken.address);
  const SWYPOOL = await SwapifyPool.deployed();

  await deployer.deploy(
    MasterChef,
    SwapifyToken.address,
    SwapifyPool.address,
    owner,
    0,
    0
  );

  await MasterChef.deployed();

  await SWY.addPermittedAccount(MasterChef.address);
  await SWYPOOL.addPermittedAccount(MasterChef.address);
};
