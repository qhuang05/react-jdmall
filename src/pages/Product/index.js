import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Request from '@/utils/request';
import { ListView, PullToRefresh, Menu } from 'antd-mobile';
import SearchBar from '@/components/SearchBar'
import './index.scss'

const initData = [
    {
      value: '1',
      label: 'Food',
    }, {
      value: '2',
      label: 'Supermarket',
    },
    {
      value: '3',
      label: 'Extra',
      isLeaf: true,
    },
  ];
class ScrollListPage extends Component {
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
            // 筛选条件
            show: false,
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
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(scrollTop>listTop){
            ReactDOM.findDOMNode(this.fixedCont).style.position = 'fixed';
        } else{
            ReactDOM.findDOMNode(this.fixedCont).style.position = 'static';
        }
    }
    componentDidMount() { 
        this.getListData();
    }
    handleClick = e => {
        console.log('ccc')
        this.setState({
            show: !this.state.show
        })
        e.preventDefault();
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
        const menuEl = (
            <Menu
              className="single-multi-foo-menu"
              data={initData}
              value={['1']}
              level={1}
            //   onChange={this.onChange}
            //   onOk={this.onOk}
            //   onCancel={this.onCancel}
              height={document.documentElement.clientHeight * 0.6}
              multiSelect
            />
          );
        return (
            <>
                <SearchBar flag="category" />
                <div style={{'position': 'relative'}}>
                    <a onClick={this.handleClick} style={{padding: '20px', display:'inline-block'}}>综合</a>
                    {this.state.show ? menuEl : null}
                </div>
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

export default ScrollListPage;