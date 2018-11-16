import React from 'react'

import styles from './TeamAreaBox.scss'

export default ({
  title,
  children,
  imgUrl
}) => {
  return (
    <div className={styles.TeamAreaBox}>
      <div className={styles.TeamAreaBoxImgContainer}>
        <div className={styles.TeamAreaBoxImg} style={{
          backgroundImage: `url(${imgUrl})`
        }}>
        </div>
      </div>
      <div className={styles.TeamAreaBoxSummary}>
        <span>
          {title}
        </span>
        <p>
          {children}
        </p>
      </div>
    </div>
  )
}
