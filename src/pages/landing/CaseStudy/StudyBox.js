import React from 'react'
import cn from 'classnames'

import styles from './StudyBox..scss';

export default ({
  children,
  title,
  imgUrl,
  tags
}) => {
  return (
    <figure className={cn(styles.StudyBox, !imgUrl ? styles.StudyBoxNoImg : false)}>
      {imgUrl &&
        <div className={styles.StudyBoxImgContainer}>
          <div style={{
            backgroundImage: `url(${imgUrl})`
          }}></div>
        </div>
      }
      <figcaption className={styles.StudyBoxFigcaption}>
        <span className={styles.StudyBoxTitle}>
          {title}
        </span>
        <p className={styles.StudyBoxP}>
          {children}
        </p>
        {tags && <div className={styles.StudyBoxTags}>
          {
            tags.map(item => {
              return (<span>{item}</span>)
            })
          }
        </div>
        }
      </figcaption>
    </figure>
  )
}
