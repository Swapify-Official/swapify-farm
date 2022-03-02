pragma solidity 0.6.12;

import './Ownable.sol';

contract Permissible is Ownable {
    mapping(address => bool) private allowed_accounts;

    constructor() internal {
        allowed_accounts[owner()] = true;
    }

    /**
     * @dev Throws if called by any account other than any of the Permissibles.
     */
    modifier onlyPermissible() {
        require(isPermissible(), "Permissible: caller is not in the list of Permissibles");
        _;
    }
    /**
     * @dev Returns true if the caller is among the list of permitted accounts.
     * Only allowed for external accounts.
     */
    function isPermissible() public view returns (bool) {
        return allowed_accounts[msg.sender];
    }
    /**
     * @dev Adds the address to the list of permitted accounts.
     * Only external accounts should be added.
     * Adding a contract address will not be permitted to do transaction.
     */
    function addPermittedAccount(address _account) public onlyOwner {
        allowed_accounts[_account] = true;
    }
    /**
     * @dev Removes or deactivate the address from the list of permitted accounts.
     */
    function removePermittedAccount(address _account) public onlyOwner {
        allowed_accounts[_account] = false;
    }
}