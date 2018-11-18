import React from 'react'

import cn from 'classnames'

import Button from 'antd/lib/button'
import styles from './JobPost.scss'

const JobPost = ({
  imgUrl,
  title,
  description,
  btnLabel,
  pink,
  orange
}) => {
  return (
    <div className={
      cn(styles.JobPost,
        pink ? styles.JobPostPink : null,
        orange ? styles.JobPostOrange : null
      )}>
      <div className={styles.JobPostContainer}>
        <div className={styles.JobPostImg} style={{
          backgroundImage: `url(${imgUrl})`
        }}>
        </div>
      </div>

      <div>
        <div className={styles.JobPostTitle}>
          {title}
        </div>
        <div className={styles.JobPostDescription}>
          {description}
        </div>
      </div>

      <div>
        <Button className={styles.JobPostBtn}>
          {btnLabel}
        </Button>
      </div>
    </div>
  )
}

export default JobPost
