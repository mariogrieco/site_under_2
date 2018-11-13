import React, { memo } from 'react'

import styles from './ProcessArea.scss'
import HeadingArea from '../HeadingArea'
import TrianglesLayout from '../TrianglesLayout'

const ProcessArea = ({
  children
}) => {
  return (
    <div className={styles.ProcessArea}>
      <HeadingArea
       title='Our Process'
       propsStyles={{
         paddingBottom: '90px'
       }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      </HeadingArea>
      <TrianglesLayout />
      <div className={styles.ProcessAreaBody}>
        {children}
      </div>
    </div>
  )
}

export default memo(ProcessArea)