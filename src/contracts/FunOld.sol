// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

contract FunOld {
    uint256 public x;
    constructor(uint256 _x) {
        x = _x;        
    }

    function changeX(uint256 _x) public {
        x = _x;
    }

    function getX() public view returns (uint256) {
        return x;
    }
}