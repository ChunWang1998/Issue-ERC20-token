pragma solidity ^0.4.24;
import "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract BasicERC20Token is StandardToken {
    string public name = "HelloCoin";
    string public symbol = "H@";
    uint8 public decimals = 18;
    uint256 public INITIAL_SUPPLY = 88888;

    constructor() public {
        totalSupply_ = INITIAL_SUPPLY * 10**uint256(decimals);
        balances[msg.sender] = totalSupply_;
    }
}
