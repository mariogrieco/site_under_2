import React, {
  // Fragment
} from 'react'
import styles from './Layout.scss';
import cn from 'classnames'

export default ({
  LeftArea,
  RightArea,
  reverse
}) => {
  return (
    <div className={cn(styles.StepAreaLayout, reverse ? styles.StepAreaLayoutReverse : null)}>
      {reverse? RightArea : LeftArea}
      {reverse? LeftArea : RightArea}
    </div>
  )
}
