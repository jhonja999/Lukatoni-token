// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Lucatoni is ERC20, Ownable {
    constructor(uint256 initialSupply) ERC20("Lucatoni", "LUCA") Ownable() {
        _mint(msg.sender, initialSupply);
    }
}