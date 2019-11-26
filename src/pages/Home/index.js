import React, { Component } from 'react'
import { connect } from 'react-redux'
import Layout from '@/pages/Layout'
import { getBannerList, getMenuPanel, getSecondKills } from '@/actions/home'
import { WingBlank, Carousel, Icon } from 'antd-mobile'
import SearchBar from '@/components/SearchBar'
import RecommendList from './recommendList'
import './index.scss'

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bannerHeight: 176,
        }
    }
    renderBanner() {
        let { bannerList } = this.props.home;
        return (
            <Carousel
                autoplay={true}
                infinite
                dotActiveStyle={{ background: '#f23030' }}
            >
                {
                    bannerList.map(item => (
                        <a
                            key={item}
                            href="#"
                            style={{ display: 'inline-block', width: '100%', height: this.state.bannerHeight }}
                        >
                            <img
                                src={item}
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))
                }
            </Carousel>
        )
    }
    renderMenu() {
        let { menuPanel } = this.props.home;
        const slideItem = data => (
            <ul className="flex flex-x-full flex-wrap menu-list">
                {
                    data.map((item, i) => (
                        <li key={'s-' + i} className="menu-item">
                            <img src={item.icon} />
                            <p>{item.name}</p>
                        </li>
                    ))
                }
            </ul>
        );
        return (
            <Carousel
                autoplay={false}
                infinite
                dotActiveStyle={{ background: '#f23030' }}
            >
                {
                    menuPanel.map((item, i) => (
                        <div key={'m-' + i}>
                            {slideItem(item)}
                        </div>
                    ))
                }
            </Carousel>
        )
    }
    renderSeconds() {
        let { secondKills } = this.props.home;
        return (
            <ul className="flex">
                {secondKills.map((item, i) => {
                    return (
                        <li key={'s-' + i}>
                            <a>
                                <img src={item.img} />
                                <p className="red">{item.price}</p>
                                <p className="text-del">{item.origin}</p>
                            </a>
                        </li>
                    )
                })}
            </ul>
        )
    }
    componentDidMount() {
        this.props.getBannerList();
        this.props.getMenuPanel();
        this.props.getSecondKills();
    }
    render() {
        return (
            <Layout curTab="index">
                <section className="slider-wrap">
                    <SearchBar />
                    <WingBlank>
                        {this.renderBanner()}
                    </WingBlank>
                </section>
                <section className="menu-wrap">
                    {this.renderMenu()}
                </section>
                <img src="//m.360buyimg.com/mobilecms/jfs/t1/102432/40/2489/97288/5dceac2cE62b5b966/64f2312fc0674fe6.gif" width="100%" />
                <section className="sec-kill">
                    <WingBlank>
                        <div className="wrap">
                            <div className="tit">
                                <div className="tit-img"></div>
                                <a className="fr tc-y">更多秒杀<Icon type="right" /></a>
                            </div>
                            <div className="list-wrap">
                                {this.renderSeconds()}
                            </div>
                        </div>
                    </WingBlank>
                </section>
                <section className="recommend">
                    <WingBlank>
                        <div className="wrap">
                            <h3 className="tit">
                                <img src="//img11.360buyimg.com/jdphoto/jfs/t1/31601/22/15554/14040/5cc2a86fEbdb1098b/88174b36f85283b6.png" />
                            </h3>
                            <RecommendList />
                        </div>
                    </WingBlank>
                </section>
            </Layout>
        )
    }
}

export default connect(
    state => ({
        user: state.user,
        home: state.home
    }),
    { getBannerList, getMenuPanel, getSecondKills }
)(HomePage)