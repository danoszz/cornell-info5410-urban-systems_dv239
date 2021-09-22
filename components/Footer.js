import React from "react"
import styles from "../styles/Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://daanvanderzwaag.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Daan van der Zwaag, INFO 5410 Urban Systems, Cornell Tech, NYC
      </a>
      <a
        href="https://daanvanderzwaag.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        See project on Github <span>↗</span>
      </a>
    </footer>
  )
}

export default Footer
