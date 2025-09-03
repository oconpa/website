import { GeistProvider, CssBaseline } from "@geist-ui/core";
import { createRoot } from "react-dom/client";
import { awsconfig } from "./aws-config";
import { Amplify } from "aws-amplify";
import { StrictMode } from "react";
import { App } from "./App.tsx";

import "./index.css";

Amplify.configure(awsconfig);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GeistProvider themeType="dark">
      <CssBaseline />
      <App />
    </GeistProvider>
  </StrictMode>
);
