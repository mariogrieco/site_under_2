import React, { memo } from 'react'

import styles from './ClientBoxLayout.scss'

const ClientBoxLayout = ({
  children
}) => {
  return (
    <div className={styles.ClientBoxLayout}>
      {children}
    </div>
  )
}

export default memo(ClientBoxLayout)
