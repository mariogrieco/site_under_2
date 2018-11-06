import React from 'react'
import Triangle from '../../Triangle'
import styles from './Layout.scss'

export default ({ children }) => {
  return (
    <div className={styles.Layout}>
      <div className={styles.LayoutBody}>
        {children}
      </div>
      <span className={styles.LayoutImg}>
        &nbsp;
      </span>
      <div className={styles.LayoutTriangleArea}>
        <Triangle minHeight={'200px'} />
      </div>
    </div>
  )
}
