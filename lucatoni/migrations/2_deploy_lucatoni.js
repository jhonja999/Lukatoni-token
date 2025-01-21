// migrations/2_deploy_lucatoni.js
const Lucatoni = artifacts.require("Lucatoni");

module.exports = function(deployer) {
  deployer.deploy(Lucatoni, 1000000); // Desplegando con suministro inicial de tokens
};