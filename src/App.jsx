// Remplacement de createBrowserRouter par createHashRouter pour adaptation sur gitHub pages
// import { createBrowserRouter } from "react-router-dom"
import { createHashRouter } from "react-router-dom"
import Accueil from "./pages/Accueil"
import Prestations from "./pages/Prestations"
import About from "./pages/A-Propos"
import Contact from "./pages/Contact"
import MainLayout from "./layout/MainLayout"

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Accueil /> },
      { path: "prestations", element: <Prestations /> },
      { path: "a-propos", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]

// const App = createBrowserRouter(routes)
const App = createHashRouter(routes)

export default App
