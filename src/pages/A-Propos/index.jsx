import photo_profil from "../../assets/profil.webp"
import dipl from "../../assets/image_banniere.webp"
import RDV_button from "../../components/Bouton_RDV"
import "./styles.scss"

export default function About() {
  return (
    <div className="About">
      <section className="intro py-4">
        <h1 className="text-center">A propos de moi</h1>
        <div className="container row align-items-center text-center">
          <div className="col">
            <img src={photo_profil} alt="photo de profil"></img>
          </div>
          <div className="col py-4">
            <RDV_button />
          </div>
        </div>
      </section>
      <section className="moi py-4 px-5">
        <h2>Qui suis-je ?</h2>
        <p>
          Je suis infirmière diplômée et je serai ravie de vous accueillir pour
          prendre soin de vous.
        </p>
        <p>
          Pour toutes questions ou devis n'hésitez pas à prendre rendez vous,
          pour une consultation offerte ou me contacter sur instagram
          (baldanza_esthetic)
        </p>
      </section>
      <section className="diplomes py-4 px-5">
        <h2>Mes diplômes</h2>
        <div className="row row-cols-1 row-cols-md-2 align-items-center text-center">
          <img src={dipl} className="col py-4"></img>
          <img src={dipl} className="col py-4"></img>
        </div>
      </section>
    </div>
  )
}
