import React, { memo } from 'react'
import Triangle from '../../Triangle'

import styles from './Layout.scss'

const LayoutTriangleArea = () => {
  return (
    <div className={styles.LayoutTriangleArea}>
       <Triangle
          viewBox={'0 0 1000 90'}
          minHeight={'90px'}
          points={'1000 0 1000 90 0 90'}
          fill="#ebebfb"
        />
        <Triangle
          viewBox={'0 0 1000 50'}
          minHeight={'200px'}
          points={'1000 0 1000 50 0 50'}
          fill="white"
        />
    </div>
  )
}

export default memo(LayoutTriangleArea)
