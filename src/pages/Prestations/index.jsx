import "./styles.scss"
import soins from "../../datas/soins"

export default function Prestations() {
  return (
    <div className="prestations">
      <h1 className="text-center">Prestations</h1>
      {soins.map((soin) => (
        <div className="dropdown">
          <button
            className="btn dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
          >
            {soin.name}
          </button>
        </div>
      ))}
    </div>
  )
}
