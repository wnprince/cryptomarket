import React from 'react'
import classnames from 'classnames'

import { ButtonProps } from '../../config'
import styles from '../../styles/components.module.css'

const Button: React.FC<ButtonProps> = (props) => {
    const { children, as, type, variant = 'md', ...mainProps } = props
    return (
        <button className={classnames(styles[variant], styles.button)} {...mainProps}>
            {children}
        </button>
    )
}

export default Button