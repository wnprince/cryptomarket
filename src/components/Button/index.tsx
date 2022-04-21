import React from 'react'
import classnames from 'classnames'
import styles from '../../styles/components.module.css'

interface Props extends React.HTMLProps<HTMLButtonElement> {
    children: any
    variant?: 'md' | 'lg'
}

const Button: React.FC<Props> = (props) => {
    const { children, as, type, variant = 'md', ...mainProps } = props
    return (
        <button className={classnames(styles[variant], styles.button)} {...mainProps}>
            {children}
        </button>
    )
}

export default Button