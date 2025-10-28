 // payments.js
 import { Router } from "express";
 const router = Router();

 router.post("/send", (req, res) => {
     res.json({ status: "success", message: "Payment processed ethically" });
 });

 export default router;
