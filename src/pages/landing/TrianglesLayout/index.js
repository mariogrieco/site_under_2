import React, { memo } from 'react'

import Triangle from '../../../Triangle'
import styles from './TrianglesLayout.scss'

const TrianglesLayout = ({
  Heading,
  children
}) => {
  return (
    <div className={styles.TrianglesLayout}>
      <div className={styles.TrianglesLayoutWhiteArea}>
        {Heading}
      </div>
      <div className={styles.TrianglesLayoutGrayArea}>
        <Triangle
          viewBox={'0 0 1000 90'}
          minHeight={'90px'}
          points={'2000 0 2000 180 0 0'}
          fill="white"
        />
        <div className={styles.TrianglesLayoutBody}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default memo(TrianglesLayout)
