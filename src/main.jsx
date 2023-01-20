import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "@material-tailwind/react"
import { MaterialTailwindControllerProvider } from "@/context"
import "../public/css/tailwind.css"

// #131621
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <MaterialTailwindControllerProvider>
          <div className="rounded-[5px] border-[red]">
            <App />
          </div>
        </MaterialTailwindControllerProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
