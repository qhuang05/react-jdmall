import React, { Component } from 'react'
import ReactDOM from 'react-dom'
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
    async getListData(page = 1, pageSize = this.state.pageSize) {
        this.setState({ isLoading: true });
        let res = await Request({
            method: 'post',
            url: '/product/list',
            data: { page, pageSize }
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
        let { page } = this.state;
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
    scrollHandler = (event) => {
        let listTop = ReactDOM.findDOMNode(this.lv).offsetTop;
        let scrollTop = document.documentElement.scrollTop;
        if(scrollTop>listTop){
            ReactDOM.findDOMNode(this.fixedCont).style.position = 'fixed';
        } else{
            ReactDOM.findDOMNode(this.fixedCont).style.position = 'static';
        }
    }
    componentDidMount() { 
        this.getListData();
    }
    render() {
        const renderRow = (rowData, sectionID, rowID) => {
            // console.log(rowData, sectionID, rowID);
            const obj = this.state.list[rowID];
            return (
                <div className="flex flex-y-center list-item" key={rowData.id}>
                    <div>
                        <img src={obj.img} style={{ 'height': '64px' }} />
                    </div>
                    <div>
                        <p>{rowID}</p>
                        <p className="id">id: {obj.id}</p>
                        <p className="title">title: {obj.title}</p>
                    </div>
                </div>
            );
        };
        return (
            <>
                <div style={{ height: '100px' }}>content</div>
                <div style={{ height: '40px', background: 'red' }} ref={el=>this.fixedCont=el} className="sticky-header">sticky content...</div>
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
                    onScroll={this.scrollHandler}
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