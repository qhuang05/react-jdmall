import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { TabBar } from 'antd-mobile'
import './index.scss'

class JDTabBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 0
        }
    }
    componentDidMount = () => {
        let { pathname: path } = window.location;
        if (path == '/') {
            this.setState({ selectedTab: 0 })
        } else if (path == '/category') {
            this.setState({ selectedTab: 1 })
        } else if (path = '/user') {
            this.setState({ selectedTab: 2 })
        }
    }
    componentWillUnMount = () => {
        this.setState = (state, callback)=>{
            return;
        }
    }
    render() {
        return (
            <div className="tab-bar">
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    className="tab-bar"
                >
                    <TabBar.Item
                        title=""
                        key="index"
                        selected={this.state.selectedTab == 0}
                        icon={
                            <Link to="/">
                                <div className="icon-center">
                                    <img className="nav-img" src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/81741/30/12345/4140/5d9c4b13E726f0a1e/82c582e7c375e4b3.png" />
                                </div>
                            </Link>
                        }
                        selectedIcon={
                            <div className="icon-center">
                                <img className="nav-img" src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/67550/26/12426/5094/5d9c4b13Eea435a3f/81328b0609c60a3c.png" />
                            </div>
                        }
                        onPress={e => { this.setState({ selectedTab: 0 }) }}
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        title=""
                        key="category"
                        selected={this.state.selectedTab == 1}
                        icon={
                            <Link to="/category">
                                <div className="icon-center">
                                    <img className="nav-img" src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/56507/6/12787/3168/5d9c4b12Ef363dd8d/4af32f42575509d8.png" />
                                </div>
                            </Link>
                        }
                        selectedIcon={
                            <div className="icon-center">
                                <img className="nav-img" src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/48787/24/12910/3390/5d9c4b12Ee63270e4/4481f5b3dbad979d.png" />
                            </div>
                        }
                        onPress={e => { this.setState({ selectedTab: 1 }) }}
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        title=""
                        key="user"
                        selected={this.state.selectedTab == 2}
                        icon={
                            <Link to="/user">
                                <div className="icon-center">
                                    <img className="nav-img" src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/56206/13/12652/2957/5d9c4b13E503bcd76/1c8543653685e80e.png" />
                                </div>
                            </Link>
                        }
                        selectedIcon={
                            <div className="icon-center">
                                <img className="nav-img" src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/47480/36/12929/3209/5d9c4b13E97caa63a/4dc0ec8a7e47c2b7.png" />
                            </div>
                        }
                        onPress={e => { this.setState({ selectedTab: 2 }) }}
                    >
                    </TabBar.Item>
                </TabBar>
            </div>
        )
    }
}

export default JDTabBar