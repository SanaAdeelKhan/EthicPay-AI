 // app.js
 import express from "express";
 import paymentsRoute from "./routes/payments.js";

 const app = express();
 app.use(express.json());
 app.use("/api/payments", paymentsRoute);

 app.listen(5000, () => console.log("✅ Backend running on port 5000"));
