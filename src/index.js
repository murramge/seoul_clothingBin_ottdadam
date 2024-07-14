import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { StateProvider } from "./context/StateContext";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <StateProvider>
        <App />
      </StateProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
