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
      <div>
        <a
          href="https://daanvanderzwaag.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          View video on Youtube<span>↗</span>
        </a>
        <a
          href="https://daanvanderzwaag.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          View code on Github <span>↗</span>
        </a>
      </div>
    </footer>
  )
}

export default Footer
