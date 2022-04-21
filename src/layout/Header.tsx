import React from 'react'

import Logo from '../assets/images/logo.png'
import styles from '../styles/layout.module.css'

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <img src={Logo} alt='' />
    </div>
  )
}

export default Header