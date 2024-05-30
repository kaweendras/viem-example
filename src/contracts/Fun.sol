// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

contract Fun {
    uint256 public x;

    event XChanged(uint _from , uint _to);
    constructor(uint256 _x) {
        emit XChanged(x, _x);
        x = _x;        
    }

    function changeX(uint256 _x) public {
        emit XChanged(x, _x);
        x = _x;
    }

    function getX() public view returns (uint256) {
        return x;
    }
}