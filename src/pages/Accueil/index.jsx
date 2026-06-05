import Banner_Image from "../../assets/Image_bannière.webp"
import "./styles.scss"
import soins from "../../datas/soins"

export default function Accueil() {
  return (
    <div className="accueil">
      <section className="banner container-fluid d-flex flex-column align-items-center gap-4 py-4">
        <h1>
          <span>BALDANZA</span>
        </h1>
        <img src={Banner_Image} alt="Bannière Baldanza" />
        <p>Horaire : du lundi au vendredi de 9h à 18h30</p>
        <a
          className="btn btn-lg btn-baldanza"
          href="https://www.planity.com/baldanza-13112-la-destrousse"
          target="_blank"
          rel="noopener noreferrer"
        >
          Prendre rendez-vous
        </a>
      </section>
      <section className="consultation_gratuite container-fluid d-flex justify-content-evenly align-items-center my-4">
        <h2>Consultation gratuite</h2>
        <a
          className="btn btn-lg btn-baldanza"
          href="https://www.planity.com/baldanza-13112-la-destrousse"
          target="_blank"
          rel="noopener noreferrer"
        >
          Prendre rendez-vous
        </a>
      </section>
      <section className="soins py-5">
        <div className="row row-cols-1 row-cols-md-2 g-5 px-5">
          {soins.map((soin) => (
            <div className="col" key={soin.id}>
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
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
