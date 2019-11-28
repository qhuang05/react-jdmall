import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCategory } from '@/actions/category'
import Layout from '@/pages/Layout'
import SearchBar from '@/components/SearchBar'
import { Tabs, WhiteSpace } from 'antd-mobile';
import styles from './index.module.scss'

class CategoryPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tabItemHeight: 46,
			tabsHeight: 'auto', //tab总高度
			page: 10,	//tab标签可视个数
		}
	}
	componentDidMount() {
		this.props.getCategory();
		// let maxHeight = this.contElem.clientHeight;
		// let contHeight = this.state.tabItemHeight*
		// let _page = Math.round(contHeight / this.state.tabItemHeight);
		// this.setState({ page: _page });
	}
	renderContent = tab => (
		<div style={{ backgroundColor: '#fff' }}>
			<p>Content of {tab.title}</p>
		</div>
	)
	render() {
		let { page } = this.state;
		let { category } = this.props.category;
		
		console.log(this.props.category.length);	
		return (
			<Layout>
				{/* <SearchBar /> */}
				<div ref={el => this.contElem = el} style={{height: '90vh'}}>
					<div style={{height: this.state.tabsHeight}}>
						<Tabs
							tabs={category}
							tabBarPosition="left"
							tabDirection="vertical"
							renderTabBar={props => <Tabs.DefaultTabBar {...props} page={page} />}
						>
							{this.renderContent}
						</Tabs>
					</div>
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
