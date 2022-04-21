import React from 'react'

import LinkGroup from '../components/LinkGroup'
import LogoSm from '../assets/images/logo-sm.png'
import styles from '../styles/layout.module.css'

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <img src={LogoSm} alt='' />
      <div>
        <LinkGroup
          title='Community'
          links={['Twitter', 'Facebook', 'Discord', 'Reddit']}
        />
        <LinkGroup
          title='About'
          links={['About us', 'Careers', 'Privacy', 'News']}
        />
        <LinkGroup
          title='Learn'
          links={['Blog', 'Newsletter', 'FAQ', 'Crypto basics']}
        />
        <LinkGroup
          title='Support'
          links={['Help center', 'Contact us', 'Account', 'Payments']}
        />
      </div>
    </div>
  )
}

export default Footer