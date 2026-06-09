export default function Accordion_body({ prestation }) {
  return (
    <ul>
      <li>
        <h2>{prestation.name}</h2>
        <ul>
          <li>
            <p>Durée : {prestation.durée}</p>
          </li>
          <li>
            <p>Prix : {prestation.prix} €</p>
          </li>
        </ul>
      </li>
    </ul>
  )
}
