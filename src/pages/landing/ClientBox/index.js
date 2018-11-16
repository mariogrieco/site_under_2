import React, { memo } from 'react'
import styles from './ClientBox.scss'

function ClientBox ({
  imgUrl
}) {
  return (
    <div className={styles.ClientBox}>
      <div className={styles.ClientBoxImg} style={{
        backgroundImage: `url(${imgUrl})`
      }}>
      </div>
    </div>
  )
}

export default memo(ClientBox)
