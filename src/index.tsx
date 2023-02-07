import React from "react";
import ReactDOM from "react-dom/client";
import { createServer } from "miragejs";

import { App } from "./App";

createServer({
  routes() {
    this.namespace = 'api';

    this.get("/transactions", () => {
      return [
        {
          id: 1,
          title: "Freelancer de WebSite",
          type: "deposit",
          category: "Dev",
          amount: 6000,
          createdAt: new Date("2021-02-12 09:00:00"),
        },
      ];
    });
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
