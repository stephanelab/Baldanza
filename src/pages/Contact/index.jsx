import baldanza from "../../assets/image_banniere.webp"
import RDV_button from "../../components/Bouton_RDV"
import "./styles.scss"
import { useState } from "react"

export default function Contact() {
  //Mettre la variable showtoast à 1 pendant 3 secondes, une fois que le message est envoyé (pour afficher le toast "message envoyé")
  const [showToast, setShowToast] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/stephane.labrot@gmail.com",
        {
          method: "POST",
          body: formData,
        },
      )

      const result = await response.json()

      console.log("FormSubmit response :", result)

      setShowToast(true)
      e.target.reset()

      setTimeout(() => {
        setShowToast(false)
      }, 3000)
    } catch (error) {
      console.error("Erreur envoi form :", error)
    }
  }

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
              {/* <!-- Elfsight Google Reviews | Untitled Google Reviews --> */}
              <div className="avis-g pb-4">
                <script
                  src="https://elfsightcdn.com/platform.js"
                  async
                ></script>
                <div
                  class="elfsight-app-af6e619e-2cb7-441c-a8ba-5c45165d9ea9"
                  data-elfsight-app-lazy
                ></div>
              </div>
              <RDV_button />
            </div>
          </div>
        </div>
      </section>
      <section className="formulaire_contact py-4 px-5">
        <h2>Une question, un renseignement ? C’est ici que ça se passe</h2>
        <form className="p-4" onSubmit={handleSubmit}>
          <input type="hidden" name="_captcha" value="false" />
          <input type="text" name="_honey" hidden />
          <div className="mb-3 row">
            <div className="col-md-2">
              <label className="form-label">Nom</label>
            </div>
            <div className="col-auto">
              <input type="text" name="nom" className="form-control" required />
            </div>
          </div>
          <div className="mb-3 row">
            <div className="col-md-2">
              <label className="form-label">Prénom</label>
            </div>
            <div className="col-auto">
              <input
                type="text"
                name="prenom"
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="mb-3 row">
            {" "}
            <div className="col-md-2">
              <label className="form-label">Téléphone</label>
            </div>{" "}
            <div className="col-auto">
              <input type="tel" name="telephone" className="form-control" />
            </div>
          </div>
          <div className="mb-3 row">
            {" "}
            <div className="col-md-2">
              <label className="form-label">Message</label>
            </div>{" "}
            <div className="col 12 col-md-10">
              <textarea
                name="message"
                className="form-control"
                rows="5"
                required
              />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-baldanza">
              Envoyer
            </button>
          </div>
        </form>
        {showToast && (
          <div
            className="toast show position-fixed top-0 end-0 m-3 shadow"
            role="alert"
            style={{ zIndex: 9999 }}
          >
            <div class="toast-body">✓ Votre message a bien été envoyé.</div>
          </div>
        )}
      </section>
      <section className="map-container py-4 px-5">
        <h2>Où me trouver ?</h2>
        <iframe
          title="Baldanza"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2900.1554695058385!2d5.604769276693954!3d43.373773171116774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c999126438e053%3A0xa96085a64de48e4c!2sBALDANZA%20esth%C3%A9tique!5e0!3m2!1sfr!2sfr!4v1781083628836!5m2!1sfr!2sfr"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <p>
          Infos pratiques pour se rendre au cabinet:
          <br />- Se garer devant le laboratoire de la Destrousse et le
          contourner par la droite (au niveau des boites aux lettres) jusqu'au
          fond du bâtiment (le cabinet se trouve derrière le laboratoire)
          <br />- Ou se garer sur le parking visiteur de la résidence coté
          Moulin puis monter les escaliers au fond, tourner à droite (dernière
          porte)
        </p>
      </section>
    </div>
  )
}
