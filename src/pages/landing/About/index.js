import React, { memo } from 'react'
import styles from './About.scss'

const About =  () => {
  return (
    <div className={styles.About}>
      <span className={styles.AboutTitle}>
        About us
      </span>
      <p>
        BitCraft is a creative software development agency based in Atlanta, Georgia. We design world-class infrastructures to support the tech products of
        tomorrow. We pride ourselves on our engineering standards, our understanding of our clients' business needs, and our desire to impact and power-up
        any business or individual that we interact with. Our team is proficient in designing and developing cloud infrastructures to power cross-platform mobile
        apps, interactive web apps, and fully automated systems.
      </p>
    </div>
  )
}

export default memo(About)
