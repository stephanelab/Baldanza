import "./styles.scss"
import soins from "../../datas/soins"
import RDV_button from "../../components/Bouton_RDV"
import Accordion_body from "../../components/Accordion-body"

export default function Prestations() {
  return (
    <div className="prestations d-flex flex-column gap-4 py-4">
      <h1 className="text-center">Prestations</h1>
      <div
        className="accordion d-flex flex-column gap-4 mx-5"
        id="accordionPrestations"
      >
        {soins.map((soin, index) => (
          <div className="accordion-item" key={soin.name}>
            <h2 className="accordion-header d-flex">
              <button
                className="accordion-button collapsed d-flex justify-content-between"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse-${index}`}
                aria-expanded="false"
                aria-controls={`collapse-${index}`}
              >
                <span className="prestation-title">{soin.name}</span>
              </button>
            </h2>

            <div
              id={`collapse-${index}`}
              className="accordion-collapse collapse"
              data-bs-parent="#accordionPrestations"
            >
              <div className="accordion-body">
                <div className="row">
                  <div className="col-lg-9">
                    {" "}
                    {soin.prestations.map((prestation) => (
                      <Accordion_body
                        key={prestation.id}
                        prestation={prestation}
                      />
                    ))}
                  </div>
                  <div className="col-lg-3">
                    <div className="sticky-top rdv-sticky pt-5">
                      <RDV_button />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
