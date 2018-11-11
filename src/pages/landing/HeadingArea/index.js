import React, { memo } from 'react'
import styles from './HeadingArea.scss'

const HeadingArea =  ({
  title,
  children,
  id,
  propsStyles
}) => {
  return (
    <div className={styles.HeadingArea} id={id} style={propsStyles||{}}>
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
