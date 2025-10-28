 // App.jsx
 import React from "react";
 import Dashboard from "./components/Dashboard";
 import ComplianceStatus from "./components/ComplianceStatus";
 import TransactionHistory from "./components/TransactionHistory";

 export default function App() {
     return (
         <div>
             <h1>🌱 EthicPay-AI</h1>
             <Dashboard />
             <ComplianceStatus status={true} />
             <TransactionHistory />
         </div>
     );
 }
