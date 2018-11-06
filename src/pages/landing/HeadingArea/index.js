import React, { memo } from 'react'
import styles from './HeadingArea.scss'

const HeadingArea =  ({
  title,
  children,
  id
}) => {
  return (
    <div className={styles.HeadingArea} id={id}>
      <span className={styles.HeadingAreaTitle}>
        {title}
      </span>
      <p>
        {children}
      </p>
    </div>
  )
}

export default memo(HeadingArea)
