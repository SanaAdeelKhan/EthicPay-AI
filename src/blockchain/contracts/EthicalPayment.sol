 // EthicalPayment.sol
 // Solidity smart contract for transparent ethical payments

 pragma solidity ^0.8.0;

 contract EthicalPayment {
     address public owner;
     event PaymentSent(address from, address to, uint amount);

     constructor() {
         owner = msg.sender;
     }

     function sendPayment(address payable recipient) public payable {
         require(msg.value > 0, "Amount must be greater than zero");
         recipient.transfer(msg.value);
         emit PaymentSent(msg.sender, recipient, msg.value);
     }
 }
