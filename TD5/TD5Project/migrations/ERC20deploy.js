let MyContract = artifacts.require("./token.sol");

module.exports = function(deployer) {
  deployer.deploy(MyContract);
};