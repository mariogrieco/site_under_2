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
        <TeamAreaBox title='Glade stella' imgUrl='/public/images/demo3.png'>
          CEO FOUNDER
        </TeamAreaBox>
      </div>
    </div>
  )
}
