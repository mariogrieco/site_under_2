import React, { memo } from 'react'

import styles from './CostumerBox.scss'

const CostumerBox = ({
  avatar,
  name,
  position,
  children
}) => {
  return (
    <div className={styles.CostumerBox}>
      <span className={styles.CostumerBoxP}>
       {children}
      </span>
      <div className={styles.CostumerBoxSummary}>
        <div className={styles.CostumerBoxAvatar} style={{
          backgroundImage: `url(${avatar||''})`
        }}>
        </div>
        <div className={styles.CostumerBoxInfo}>
          <span className={styles.CostumerBoxName}>
            {name}
          </span>
          <span className={styles.CostumerBoxPosition}>
            {position}
          </span>
        </div>
      </div>
    </div>
  )
}

export default memo(CostumerBox)
