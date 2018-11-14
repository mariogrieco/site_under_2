import React, { memo } from 'react'
import styles from './HeadingArea.scss'

import cn from 'classnames'

const HeadingArea =  ({
  title,
  children,
  id,
  propsStyles,
  textAlignleft
}) => {
  return (
    <div className={cn(
      styles.HeadingArea,
      textAlignleft ? styles.HeadingAreaLeft : null
      )} id={id} style={propsStyles||{}}>
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
