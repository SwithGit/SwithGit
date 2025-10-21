import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppLayout from "./layouts/AppLayout/AppLayout";

const App: React.FC = () => {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
};

export default App;
