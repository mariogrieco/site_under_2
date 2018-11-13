import React from 'react'

import styles from './ProcessArea.scss'
import HeadingArea from '../HeadingArea'

export default ({
  children
}) => {
  return (
    <div classNames={styles.ProcessArea}>
      <HeadingArea
       title='Our Process'
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      </HeadingArea>
      {children}
    </div>
  )
}
