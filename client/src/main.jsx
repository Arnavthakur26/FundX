import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Sepolia } from "@thirdweb-dev/chains";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import { BrowserRouter as Router } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <ThirdwebProvider activeChain={Sepolia}>
    <Router>
      <App />
    </Router>
  </ThirdwebProvider>
);
