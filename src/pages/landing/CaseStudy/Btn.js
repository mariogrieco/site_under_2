import React from 'react'

import cn from 'classnames'
import styles from './Btn.scss'

function Btn ({
  propStyles,
  className,
  onClick,
  disabled
}) {
  return (
    <div
      onClick={onClick}
      className={cn(
        styles.Btn,
        disabled ? styles.BtnDisabled : false,
        className
      )}
      style={propStyles}
    >
      X
    </div>
  )
}

export default Btn;
