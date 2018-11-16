import React, { PureComponent } from 'react'

import styles from './ModalNavBar.scss'

class ModalNavBar extends PureComponent {
  render() {
    let menuConfig = this.props.menuConfig

    return (
      <div className={styles.ModalNavBar}>
        <div className={styles.ModalNavBarContainer}>
          <span className={styles.ModalNavBarCloses}></span>
        </div>
        <nav>
          <ul>
            {menuConfig.map(item => {
              return (<li>{item.label}</li>)
            })}
          </ul>
        </nav>
      </div>
    )
  }
}

export default ModalNavBar
