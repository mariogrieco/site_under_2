import React, { memo } from 'react'

import styles from './Header.scss'

const Header = ({
  children
}) => {
  return (
    <div className={styles.Header}>
      BODY
    </div>
  )
}

export default memo(Header)
