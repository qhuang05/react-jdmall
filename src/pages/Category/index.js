import React, { Component } from 'react'
import Layout from '@/pages/Layout'
import SearchBar from '@/components/SearchBar'
import { Tabs, WhiteSpace } from 'antd-mobile';

const tabs = [
	{ title: '1st Tab' },
	{ title: '2nd Tab' },
	{ title: '3rd Tab' },
	{ title: '4th Tab' },
	{ title: '5th Tab' },
	{ title: '6th Tab' },
	{ title: '7th Tab' },
	{ title: '8th Tab' },
	{ title: '9th Tab' },
];
class CategoryPage extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Layout>
				<SearchBar />
				<div style={{ height: 200 }}>
					<Tabs tabs={tabs}
						initialPage={'t2'}
						tabBarPosition="left"
						tabDirection="vertical"
					>
						<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
							Content of first tab
						</div>
						<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
							Content of second tab
						</div>
						<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
							Content of third tab
						</div>
					</Tabs>
				</div>
			</Layout>
		)
	}
}

export default CategoryPage
