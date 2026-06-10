import baldanza from "../../assets/image_banniere.webp"
import RDV_button from "../../components/Bouton_RDV"
import "./styles.scss"

export default function Contact() {
  return (
    <div className="contact">
      <section className="renseignements py-4">
        <h1 className="text-center">Contact</h1>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 align-items-center text-center">
            <img
              src={baldanza}
              alt="grand logo baldanza"
              className="col p-4"
            ></img>
            <div className="col py-4">
              <p>
                459 avenue de la Solobie
                <br />
                13112 La Destrousse
                <br />
                Tel. : 07-50-20-58-44
              </p>
              <p>Horaire : du lundi au vendredi de 9h à 18h30</p>
              <RDV_button />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
