 // ComplianceStatus.jsx
 import React from "react";

 export default function ComplianceStatus({ status }) {
     return <p>Status: {status ? "✅ Compliant" : "⚠️ Not Compliant"}</p>;
 }
