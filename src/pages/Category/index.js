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
			page: 10,	//tab标签可视个数
			tabItemHeight: 46,
		}
	}
	renderContent = tab => (
		<div style={{ backgroundColor: '#fff' }}>
			<p>Content of {tab.title}</p>
		</div>
	)
	componentDidMount() {
		this.props.getCategory();
		let contHeight = this.contElem.clientHeight;
		let _page = Math.round(contHeight / this.state.tabItemHeight);
		this.setState({ page: _page });
	}
	render() {
		let { page } = this.state;
		let { category } = this.props.category;
		return (
			<Layout>
				{/* <SearchBar /> */}
				<div style={{height: '90vh'}}>
					<div ref={el => this.contElem = el}>
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
