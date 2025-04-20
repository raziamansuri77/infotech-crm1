import React from "react";
import { Routes, Route } from "react-router-dom";
import LeadManagement from "./components/lead management/LeadManagement";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LeadManagement />} />
  
    </Routes>
  );
}

export default App;
