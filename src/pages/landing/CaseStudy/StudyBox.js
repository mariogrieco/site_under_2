import React from 'react'

import styles from './StudyBox..scss';

export default ({
  children,
  title,
  imgUrl
}) => {
  return (
    <figure className={styles.StudyBox}>
      <div className={styles.StudyBoxImgContainer}>
        <div style={{
          backgroundImage: `url(${imgUrl})`
        }}></div>
      </div>
      <figcaption className={styles.StudyBoxFigcaption}>
        <span className={styles.StudyBoxTitle}>
          {title}
        </span>
        <p className={styles.StudyBoxP}>
          {children}
        </p>
      </figcaption>
    </figure>
  )
}
