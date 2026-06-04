import Banner_Image from "../../assets/Image_bannière.webp"
import "./styles.scss"

export default function Accueil() {
  return (
    <section className="banner d-flex flex-column align-items-center gap-4 py-4">
      <h1>
        <span>BALDANZA</span>
      </h1>
      <img src={Banner_Image} alt="Bannière Baldanza" />
      <p>Horaire : du lundi au vendredi de 9h à 18h30</p>
      <a
        class="btn"
        href="https://www.planity.com/baldanza-13112-la-destrousse"
        target="_blank"
      >
        <h3>Prendre rendez-vous</h3>
      </a>
    </section>
  )
}
