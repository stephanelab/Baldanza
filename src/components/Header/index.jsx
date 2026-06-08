import { NavLink } from "react-router-dom"
import logo from "../../assets/Logo_BALDANZA.svg"
import "./styles.scss"

export default function Header() {
  return (
    <header>
      <nav
        id="navbar"
        className="navbar navbar-expand-lg fixed-top navbarScroll"
        role="navigation"
        aria-label="Barre de navigation"
      >
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} alt="Logo Baldanza" width="50" height="50" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Afficher le menu de navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/">
                  Accueil
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/prestations">
                  Prestations
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/a-propos">
                  À propos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
