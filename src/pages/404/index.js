import React, { Component } from 'react'
import './index.scss'
import Logo from './images/logo.svg';

export default class ErrorPage extends Component {
    render () {
        return (
            <div className="page">
                <img src={Logo} />
                <p className="text">404 Not Found</p>
            </div>
        )
    }
}