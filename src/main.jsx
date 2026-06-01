import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import App from "./App.jsx"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={App} />
  </StrictMode>,
)
