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
        <img url={imgUrl} alt='imgUrl' />
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
