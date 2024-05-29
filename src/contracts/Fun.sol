// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

contract Fun {
    uint256 public x;
    constructor() {
        x = 0;        
    }

    function changeX(uint256 _x) public {
        x = _x;
    }

    function getX() public view returns (uint256) {
        return x;
    }
}