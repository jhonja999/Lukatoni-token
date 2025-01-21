# Lucatoni Token

Este proyecto implementa una criptomoneda llamada **Lucatoni** utilizando Solidity, Truffle y Ganache.

## Requisitos Previos

1. **Node.js** y **npm**: Asegúrate de tener instalados Node.js (versión LTS recomendada) y npm.
2. **Truffle**: Instalación global de Truffle.
   ```bash
   npm install -g truffle

![Image](https://github.com/user-attachments/assets/923a67a0-a380-46f9-899c-ff41ed6b34ce)

# Lucatoni - Educational Cryptocurrency

Este proyecto implementa una criptomoneda educativa llamada "Lucatoni". **Nota:** Este proyecto es únicamente para fines educativos y no tiene valor monetario ni está diseñado para aplicaciones comerciales.

## Requisitos Previos

Asegúrate de tener instalados los siguientes programas:

- [Node.js](https://nodejs.org/) (versión 14 o superior). Usa el NVM un manager si las versiones nuevas son inestables para esta se uso Node 18
- [Ganache](https://trufflesuite.com/ganache/) para redes locales de Ethereum.
- [Truffle Suite](https://trufflesuite.com/) para compilar, desplegar y probar contratos inteligentes.
- [Metamask](https://metamask.io/) como billetera de prueba para interactuar con tu token.

## Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DEL_REPOSITORIO>
   ```

2. Instala las dependencias necesarias:

   ```bash
   npm install
   ```

3. Configura tu red local:

   - Asegúrate de que Ganache esté en ejecución en `127.0.0.1:7545`.
   - Configura Metamask para conectarse a tu red local.

## Archivos Clave

### `truffle-config.js`
Este archivo contiene la configuración de Truffle para la red local Ganache.

```javascript
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,  // Cambiado a 7545 para Ganache GUI
      network_id: "*",
      gas: 6721975,
      gasPrice: 20000000000,
      from: "<DIRECCIÓN_GANACHE>" // Reemplaza con una dirección de Ganache
    }
  },
  compilers: {
    solc: {
      version: "0.8.19", // Versión específica de Solidity
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  }
};
```

### `1_initial_migration.js`
Despliega las migraciones iniciales del contrato.

```javascript
const Migrations = artifacts.require("Migrations");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
```

### `2_deploy_lucatoni.js`
Despliega el contrato del token Lucatoni con un suministro inicial.

```javascript
const Lucatoni = artifacts.require("Lucatoni");

module.exports = function(deployer) {
  deployer.deploy(Lucatoni, 1000000); // Desplegando con suministro inicial de tokens
};
```

## Despliegue

1. Compila los contratos inteligentes:

   ```bash
   truffle compile
   ```

2. Migra los contratos a la red local:

   ```bash
   truffle migrate --network development
   ```

3. Verifica el despliegue:

   ```bash
   truffle console --network development
   ```

   Dentro de la consola de Truffle, puedes interactuar con tu contrato:

   ```javascript
   const lucatoni = await Lucatoni.deployed();
   const totalSupply = await lucatoni.totalSupply();
   console.log(totalSupply.toString());
   ```

## Pruebas

Ejecuta las pruebas unitarias:

```bash
truffle test
```

## Interacción

Usa Metamask o cualquier herramienta como [Remix](https://remix.ethereum.org/) para interactuar con tu contrato inteligente y transferir tokens entre cuentas.

---

**Aviso Legal:** Este proyecto es únicamente para fines educativos. No utilices este código para aplicaciones financieras o comerciales.
