import React from 'react'

import styles from './Layout.scss'

export default ({ children }) => {
  return (
    <div className={styles.Layout}>
      {children}
    </div>
  )
}
