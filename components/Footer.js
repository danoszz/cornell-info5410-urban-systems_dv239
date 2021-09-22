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
        Project by Daan van der Zwaag, 2021
      </a>
      <div>
        <a href="#m" target="_blank" rel="noopener noreferrer">
          View video on Youtube<span>↗</span>
        </a>
        <a
          href="https://github.com/danoszz/cornell-info5410-urban-systems_dv239"
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
