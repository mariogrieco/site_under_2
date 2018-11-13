import React from 'react'
import PropTypes from 'prop-types'

import styles from './ProcessBox.scss'
import cn from 'classnames'

export default function ProcessBox ({
  title,
  children,
  imgUrl,
  arrow
}) {
  const arrowClassName = arrow ? styles[`ProcessAreaArrow${arrow}`] : styles['ProcessAreaArrowHidden']
  const arrowContainerClassName = arrow ? styles[`ProcessAreaArrow`] : undefined
  return (
    <div className={styles.ProcessBox}>
      <div className={styles.ProcessBoxImg} style={{
        backgroundImage: `url(${imgUrl})`
      }}>
      </div>
      <div className={styles.ProcessBoxInfo}>
        <span className={styles.ProcessBoxTitle}>
          {title}
        </span>
        <div className={styles.ProcessBoxP}>
          {children}
        </div>
      </div>
      <div className={cn(arrowClassName, arrowContainerClassName)}>
        &nbsp;
      </div>
    </div>
  )
}

ProcessBox.propTypes = {
  arrow: PropTypes.oneOfType(['left', 'right', 'bottom', 'top'])
}
