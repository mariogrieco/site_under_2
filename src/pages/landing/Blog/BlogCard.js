import React from 'react'

import styles from './BlogCard.scss'

const BlogCard = ({
  title,
  children,
  imgUrl
}) => {
  return (
    <div className={styles.BlogCard}>
      <div className={styles.BlogCardImgContainer}>
        <div className={styles.BlogCardImg}  style={{
          backgroundImage: `url(${imgUrl})`
        }}>
        </div>
      </div>
      <div className={styles.BlogCardSummary}>
        <span>
          {title}
        </span>
        <p>
          {children}
        </p>
      </div>
    </div>
  )
}

export default BlogCard
