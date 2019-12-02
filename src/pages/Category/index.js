import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { getCategory } from '@/actions/category'
import Layout from '@/pages/Layout'
import SearchBar from '@/components/SearchBar'
import { Tabs } from 'antd-mobile';
import styles from './index.module.scss'
import LazyLoad from 'react-lazyload'
import { Transition } from 'react-transition-group'
import {InjectUnmount} from '@/utils/injectUnmount.js'

@InjectUnmount
class CategoryPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tabItemHeight: 46,
			tabsHeight: '100vh', //tab总高度
			page: 1,	//tab标签可视个数
		}
	}
	// 初始化分类区域高度
	initContHeight(){
		let winHeight = document.documentElement.clientHeight || document.body.clientHeight,
			// height1 = ReactDOM.findDOMNode()
			height1 = document.querySelector('.search-bar').clientHeight,
			height2 = document.querySelector('.tab-bar').clientHeight,
			maxHeight = winHeight - height1 - height2;
		let _tabsHeight = maxHeight;
		this.setState({
			page: Math.round(maxHeight/this.state.tabItemHeight),
			tabsHeight: _tabsHeight
		})
		let tabbarHeight = this.props.category.category.length*this.state.tabItemHeight;
		document.querySelector('.am-tabs-default-bar-content').style.height = tabbarHeight + 'px';
	}
	renderContent = tab => {
		return (
			<div className={styles['tab-body']}>
				{
					tab.subcg.map(item => (
						<div className={styles['items-box']} key={item.id}>
							<h4>{item.title}</h4>
							<ul className="clearfix">
								{
									item.items.map((sItem,sIndex) => (
										<li className={styles['c-item']} key={sIndex}>
											<img src={sItem.img} />
											<p>{sItem.name}</p>
										</li>
									))
								}
							</ul>
						</div>	
					))
				}
			</div>
		)
	}
	async componentDidMount() {
		await this.props.getCategory();
		this.initContHeight();
	}
	// componentWillUnmount(){
    //     this.setState = (state, callback) => {
    //         return;
    //     }
    // }
	render() {
		let { category } = this.props.category;
		let { page } = this.state;
		return (
			<Layout>
				<SearchBar isHistory={true} flag="category" />
				<div style={{height: this.state.tabsHeight, 'background': '#fff'}}>
					<Tabs
						tabs={category}
						tabBarPosition="left"
						tabDirection="vertical"
						renderTabBar={props => <Tabs.DefaultTabBar {...props} page={page} />}
						usePaged={false}
					>
						{this.renderContent}
					</Tabs>
				</div>
			</Layout>
		)
	}
}

export default connect(
	state => (
		{
			user: state.user,
			category: state.category
		}
	),
	{ getCategory }
)(CategoryPage)
