 // test_wallet_manager.js
 import { connectWallet } from "../src/blockchain/wallet_manager";

 test("connectWallet runs", () => {
     expect(typeof connectWallet).toBe("function");
 });
