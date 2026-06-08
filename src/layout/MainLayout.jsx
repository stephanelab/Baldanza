import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../styles/styles.scss"
import AOS from "aos"
import { useEffect } from "react"

//Ajout de l'en-tête et du bas de page à la mise en page principale
export default function MainLayout() {
  //initialisation de la bibliothèque AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    })
  }, [])
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
