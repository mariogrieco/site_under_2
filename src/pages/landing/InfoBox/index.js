import React, { memo } from 'react'

import HeadingArea from '../HeadingArea'
import Input from 'antd/lib/input'
import Select from 'antd/lib/select' 
import Checkbox from 'antd/lib/checkbox'
import Buttom from 'antd/lib/button'

import styles from './InfoBox.scss'

function InfoBox () {
  return (
  <div className={styles.InfoBox}>
      <HeadingArea propsStyles={{
        padding: '0px 0px 50px 0px',
        maxWidth: '550px',
        margin: '0 auto'
      }} title='Get More info'>
        Drop us your email and kind of service/information you’re
        interested in and we”ll reach you to answer any question.
      </HeadingArea>
     
     <div className={styles.InfoBoxGroup}>
       <Input placeholder='Enter your email' className={styles.InfoBoxInput} />
       <Select defaultValue='1' className={styles.InfoBoxSelect}>
          <option value="1">Provide me with a quote</option>
       </Select>
     </div>

      <Checkbox className={styles.InfoBoxCheckbox}>
        <span className={styles.InfoBoxCheckboxSpan}>
          Checkbox to also sign-up developmetn articles,
          case studies, and BitCraft news
        </span>
      </Checkbox>

      <Buttom className={styles.InfoBoxBtn}>
        Submit
      </Buttom>
    </div>
  )
}

export default memo(InfoBox)
