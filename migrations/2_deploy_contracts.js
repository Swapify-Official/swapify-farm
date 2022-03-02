const MasterChef = artifacts.require("MasterChef.sol");
const Cake = artifacts.require("CakeToken.sol");
const Syrup = artifacts.require("SyrupBar.sol");

module.exports = async function (deployer) {
  await deployer.deploy(
    MasterChef,
    "0xFB11E6DE27DAc774aB1eaD576f60173052680228",
    "0xCdF5EBcFB2B9608Ee81Ff043100aBBc45c9E4599",
    "0x8871eE0752C9099698e78a2A065d42D295bcf23E",
    0,
    0
  );
};
