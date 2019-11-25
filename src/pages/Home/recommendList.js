import React, { Component } from 'react'
import './index.scss'
import Request from '../../utils/request';
import { ListView, PullToRefresh } from 'antd-mobile';

class ProductListPage extends Component {
	constructor(props) {
		super(props);
		const dataSource = new ListView.DataSource({
			rowHasChanged: (row1, row2) => row1.id !== row2.id
        });
		this.state = {
			dataSource,
			isLoading: true,
            refreshing: false,
            hasMore: true,
			list: [],
			page: 1,
            pageSize: 20,
		};
	}
	async getListData(page=1, pageSize=this.state.pageSize){
		this.setState({ isLoading: true });
		let res = await Request({
			method: 'post',
			url: '/recommend/list',
			data: {page, pageSize}
		});
		let newData = res.data.data;
        let _list = this.state.refreshing ? [...newData] : [...this.state.list, ...newData];
        let _hasMore = res.data.hasMore;
		this.setState({
			list: _list,
			dataSource: this.state.dataSource.cloneWithRows(_list),
			isLoading: false,
            refreshing: false,
            hasMore: _hasMore
        });
    }
    // 上拉滚动
	onEndReached = (event) => {
        if(!this.state.hasMore || this.state.isLoading){
            return;
        }
		console.log('reach end', event);
		let {page} = this.state;
		this.setState({
			page: ++page
		})
		this.getListData(page);
    }
    // 下拉刷新
	onRefresh = () => {
		this.setState({ refreshing: true });
		this.getListData();
	}
	componentDidMount() {
		this.getListData();
	}
	render() {
		const renderRow = (rowData, sectionID, rowID) => {
            // console.log(rowData, sectionID, rowID);
            const obj = this.state.list[rowID];
			return (
				<div className="recommend-item">
                    <div className="img-wrap">
                        <img src={obj.img} />
                    </div>
                    <div className="info-wrap">
                        <div className="name">
                            {obj.name}
                        </div>
                        <div className="price flex flex-x-full flex-y-center">
                            <span className="red">￥{obj.price}</span>
                            <a className="opt check-similar">看相似</a>
                        </div>
                    </div>
                </div>
			);
		};
		return (
			<>
				<ListView
					ref={el => this.lv = el}
					dataSource={this.state.dataSource}
					renderFooter={() => (
						<div style={{ padding: 30, textAlign: 'center' }}>
							{this.state.isLoading ? 'Loading...' : `${this.state.hasMore ? '' : '没有更多了'}`} 
						</div>
					)}
					renderRow={renderRow}
					onEndReached={this.onEndReached}
					onEndReachedThreshold={10}
					pullToRefresh={
						<PullToRefresh
							refreshing={this.state.refreshing}
							onRefresh={this.onRefresh}
						/>
					}
					onScroll={() => { console.log('scroll'); }}
                    scrollRenderAheadDistance={500}
                    initialListSize={20}
					pageSize={4}
                    useBodyScroll
                    className="product-list"
				/>
			</>
		);
	}
}

export default ProductListPage;