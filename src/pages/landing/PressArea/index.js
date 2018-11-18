import React, { memo } from 'react'

import HeadingArea from '../HeadingArea'
import StudyBox from '../CaseStudy/StudyBox'

import styles from './PressArea.scss'

 const PressArea = () => {
  return (
    <div className={styles.PressArea}>
      <div className={styles.PressAreaBody}>
        <HeadingArea whiteStyle propsStyles={{
          backgroundColor: 'transparent',
          color: 'white'
        }} title='Press' textAlignleft>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam.
        </HeadingArea>
        <StudyBox imgUrl='/public/images/demo.png' title='Dolore sit amet consecure'>
           Lorem ipsum dolor sit amet, dola eiusmod tempor doras. consectetur adipiing elit, sed do
        </StudyBox>
        <StudyBox
          title='Dolore sit amet consecure'
          tags={['Dolore', 'AMETN', 'Team']}
        >
           Lorem ipsum dolor sit amet, dola eiusmod tempor doras. consectetur adipiing elit, sed do
           Lorem ipsum dolor sit amet, dola eiusmod tempor doras. consectetur adipiing elit, sed do
           Lorem ipsum dolor sit amet, dola eiusmod tempor doras. consectetur adipiing elit, sed do
        </StudyBox>
      </div>
    </div>
  )
}

export default memo(PressArea)
