import React from 'react'

import HeadingArea from '../HeadingArea'
import SocialCircle from './SocialCircle'
import styles from './TeamArea.scss'

import Row from 'antd/lib/row'
import Col from 'antd/lib/col'

import TeamAreaBox from './TeamAreaBox'

export default () => {
  return (
    <div className={styles.TeamArea}>
      <HeadingArea title='Our Team'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      </HeadingArea>
      <div className={styles.TeamAreaLayout}>
        <Row gutter={36}>
          <Col sm={24} md={10} lg={8}>
            <TeamAreaBox title='Glade stella' imgUrl='/public/images/demo3.png'>
              CEO FOUNDER
              <br />
              <SocialCircle imgUrl='/public/images/twit.png' />
              <SocialCircle imgUrl='/public/images/face.png' />
              <SocialCircle imgUrl='/public/images/insta.png' />
            </TeamAreaBox>
          </Col>
          <Col sm={24} md={10} lg={8}>
            <TeamAreaBox title='Glade stella' imgUrl='/public/images/demo3.png'>
              CEO FOUNDER
              <br />
              <SocialCircle imgUrl='/public/images/twit.png' />
              <SocialCircle imgUrl='/public/images/face.png' />
              <SocialCircle imgUrl='/public/images/insta.png' />
            </TeamAreaBox>
          </Col>
          <Col sm={24} md={10} lg={8}>
           <TeamAreaBox title='Glade stella' imgUrl='/public/images/demo3.png'>
              CEO FOUNDER
              <br />
              <SocialCircle imgUrl='/public/images/twit.png' />
              <SocialCircle imgUrl='/public/images/face.png' />
              <SocialCircle imgUrl='/public/images/insta.png' />
            </TeamAreaBox>
          </Col>
        </Row>
      </div>
    </div>
  )
}
