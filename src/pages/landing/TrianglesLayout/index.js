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
          points={'1000 0 1000 90 0 90'}
          fill="#edeefb"
        />
        <div className={styles.TrianglesLayoutBody}>
          {children}
        </div>
        <Triangle
          viewBox={'90 1000 0 0'}
          minHeight={'90px'}
          points={'90 0 90 1000 0 1000'}
          fill="#edeefb"
        />
      </div>
    </div>
  )
}

export default memo(TrianglesLayout)
