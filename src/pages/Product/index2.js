import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import Request from '../../utils/request';
import { ListView, PullToRefresh } from 'antd-mobile';

function ListWrap(props) {
    return (
        <div className="am-list-body list-body">
            {props.children}
        </div>
    );
}
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
            list: [],
            page: 1,
            pageSize: 20,
            height: document.documentElement.clientHeight*3/4
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
        this.setState({
            list: _list,
            dataSource: this.state.dataSource.cloneWithRows(_list),
            isLoading: false,
            refreshing: false,
        });
    }
    // 上拉滚动
    onEndReached = (event) => {
        if (this.state.isLoading && !this.state.hasMore) {
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
    componentDidMount() {
        // const h = document.documentElement.clientHeight - ReactDOM.findDOMNode(this.lv).parentNode.offsetTop;
        const h = document.documentElement.clientHeight - ReactDOM.findDOMNode(this.header).clientHeight;
        console.log(h)
        this.setState({
            height: h
        })
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
                <div className="list-fixed-header" ref={el=>this.header = el}>
                    fixed header
                </div>
                <ListView
                    ref={el => this.lv = el}
                    dataSource={this.state.dataSource}
                    renderFooter={() => (
                        <div style={{ padding: 30, textAlign: 'center' }}>
                            {this.state.isLoading ? 'Loading...' : 'Loaded'}
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
                    renderBodyComponent={() => <ListWrap />}
                    className="product-list"
                    style={{
                        height: this.state.height,
                        overflow: 'auto',
                    }}
                />
            </>
        );
    }
}

export default ProductListPage;