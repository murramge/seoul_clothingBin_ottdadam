import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import { StateProvider } from "./context/StateContext";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <StateProvider>
        <App />
      </StateProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
