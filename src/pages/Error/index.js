import React, { Component } from 'react'
import styles from './index.module.scss'
import Logo from './images/logo.svg';

export default class ErrorPage extends Component {
    render () {
        return (
            <div className={styles.page}>
                <img src={Logo} />
                <p className={styles.text}>404 Not Found</p>
            </div>
        )
    }
}