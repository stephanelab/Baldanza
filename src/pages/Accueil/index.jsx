import Banner_Image from "../../assets/image_banniere.webp"
import "./styles.scss"
import soins from "../../datas/soins"
import RDV_button from "../../components/Bouton_RDV"
import { Link } from "react-router-dom"

export default function Accueil() {
  return (
    <div className="accueil">
      <section className="banner container-fluid d-flex flex-column align-items-center gap-4 py-4">
        <h1>BALDANZA</h1>
        <img src={Banner_Image} alt="Bannière Baldanza" />
        <p>Horaire : du lundi au vendredi de 9h à 18h30</p>
        <RDV_button />
      </section>
      <section className="consultation_gratuite container-fluid d-flex flex-column flex-md-row justify-content-evenly align-items-center my-4 gap-3">
        <h2>Consultation gratuite</h2>
        <RDV_button />
      </section>
      <section className="soins py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 gy-5 gx-md-5 px-2 px-md-5">
            {soins.map((soin, index) => (
              <div className="col" key={soin.id} data-aos="fade-up">
                <Link
                  to={`/prestations?soin=${index}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div className="card h-100">
                    <img
                      src={soin.photo}
                      className="card-img-top"
                      alt={soin.name}
                    />
                    <div className="card-img">
                      <h2 className="card-title text-center">{soin.name}</h2>
                      <p className="card-text px-3">{soin.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
