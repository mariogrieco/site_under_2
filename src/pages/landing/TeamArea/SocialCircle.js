import React from 'react'

import styles from './SocialCircle.scss'

const SocialCircle = ({
  imgUrl
}) => {
  return (
    <div className={styles.SocialCircle}>
      <div className={styles.SocialCircleImg} style={{
        backgroundImage: `url(${imgUrl})`
      }}>
      </div>
    </div>
  )
}

export default SocialCircle
