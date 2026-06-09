import "./styles.scss"

export default function Footer() {
  return (
    <footer>
      <div className="d-flex justify-content-end me-5 gap-4">
        <a href="https://www.instagram.com/baldanza_esthetic/" target="_blank">
          <i className="fa-brands fa-square-instagram"></i>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61574824632815"
          target="_blank"
        >
          <i className="fa-brands fa-square-facebook"></i>
        </a>
      </div>
    </footer>
  )
}
