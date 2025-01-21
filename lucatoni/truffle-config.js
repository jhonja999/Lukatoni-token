module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,  // Cambiado a 7545 para Ganache GUI
      network_id: "*",
      gas: 6721975,
      gasPrice: 20000000000,
      from: "0xeAf296e84b6A1F85eB7106AD5b9CeE89285DB739" // Reemplaza con una de tus direcciones de Ganache
    }
  },
  compilers: {
    solc: {evmVersion: "london",
      version: "0.8.19",  // Versión específica de solidity
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
          
        }
      }
    }
  }
};