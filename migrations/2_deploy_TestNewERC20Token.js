const BasicERC20Token = artifacts.require("BasicERC20Token");

module.exports = function (deployer) {
  deployer.deploy(BasicERC20Token);
};

