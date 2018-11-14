import React from 'react'

import HeadingArea from '../HeadingArea'
import styles from './TeamArea.scss'

import TeamAreaBox from './TeamAreaBox'

export default () => {
  return (
    <div className={styles.TeamArea}>
      <HeadingArea title='Our Team'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      </HeadingArea>
      <div className={styles.TeamAreaLayout}>
        <TeamAreaBox />
        <TeamAreaBox />
        <TeamAreaBox />
      </div>
    </div>
  )
}
