import styles from './Footer.module.css'
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="https://www.instagram.com/hugobrod_/"><FaInstagramSquare /></a>
      <a href="https://www.linkedin.com/in/hugo-barbosa-rodrigues-090797243/"><FaLinkedin /></a>
      <a href="https://github.com/hugobr72"><FaGithubSquare /></a>
      <a href="https://api.whatsapp.com/send?phone=5535997164602&text=Ol%C3%A1%2C%20Seja%20bem%20vindo!"><FaWhatsappSquare /></a>
    </footer>
  )
}

export default Footer