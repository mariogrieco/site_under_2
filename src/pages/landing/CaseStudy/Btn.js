import React from 'react'

import cn from 'classnames'
import styles from './Btn.scss'

function Btn ({
  propStyles,
  className,
  onClick,
  disabled,
  left
}) {
  return (
    <div
      onClick={onClick}
      className={cn(
        styles.Btn,
        disabled ? styles.BtnDisabled : false,
        left ? styles.BtnLeft : false,
        className
      )}
      style={propStyles}
    >
      {/* X */}
    </div>
  )
}

export default Btn;
