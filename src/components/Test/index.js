import React, { Component } from 'react'
import styless from './index.module.scss'

export default class Test extends Component {
    render() {
        return (
            <div className={`active ${styless['test']}`}>
                <a className="active">this a a test</a>
            </div>
        )
    }
}
