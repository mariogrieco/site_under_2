import React from 'react'

import HeadingArea from '../HeadingArea'
import Input from 'antd/lib/input'
import Select from 'antd/lib/select' 
import Checkbox from 'antd/lib/checkbox'
import Buttom from 'antd/lib/button'

import styles from './InfoBox.scss'

export default function InfoBox () {
  return (
    <div className={styles.InfoBox}>
      <HeadingArea title='Get More info'>
        Drop us your email and kind of service/information you’re
        interested in and we”ll reach you to answer any question.
      </HeadingArea>
      <Input placeholder='Enter your email' />
      <Select defaultValue='1'>
        <option value="1">Provide me with a quote</option>
      </Select>

      <Checkbox>
        Checkbox to also sign-up developmetn articles,
        case studies, and BitCraft news
      </Checkbox>

      <Buttom>
        Submit
      </Buttom>
    </div>
  )
}
