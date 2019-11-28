import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getBannerList, getMenuPanel, getSecondKills } from '@/actions/home'
import Layout from '@/pages/Layout'
import SearchBar from '@/components/SearchBar'
import { WingBlank, Carousel, Icon } from 'antd-mobile'
import RecommendList from './recommendList'
import LazyLoad from 'react-lazyload'
import { Transition } from 'react-transition-group'
import classnames from 'classnames'
import styles from './index.module.scss'

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
                            <LazyLoad height="200">
                                <img
                                    src={item}
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </LazyLoad>
                        </a>
                    ))
                }
            </Carousel>
        )
    }
    renderMenu() {
        let { menuPanel } = this.props.home;
        const slideItem = data => (
            <ul className={classnames('flex flex-x-full flex-wrap', styles['menu-list'])}>
                {
                    data.map((item, i) => (
                        <li key={'s-' + i} className="menu-item" className={styles['menu-item']}>
                            <LazyLoad height="200">
                                <img src={item.icon} />
                            </LazyLoad>
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
                                <LazyLoad throttle={200} height={200}>
                                    {/* <img src={item.img} /> */}
                                    <Transition
                                        timeout={0}
                                        in={true}
                                        enter={false}
                                        exit={false} 
                                        appear={true}
                                        unmountOnExit={false}
                                    >
                                        {status=>(<img src={item.img} className={`fade fade-${status}`} />)}
                                    </Transition>
                                </LazyLoad>
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
            <Layout curTab="index" isShowToolBar={true}>
                <section className={styles['slider-wrap']}>
                    <SearchBar />
                    <WingBlank>
                        {this.renderBanner()}
                    </WingBlank>
                </section>
                <section className={styles['menu-wrap']}>
                    {this.renderMenu()}
                </section>
                <LazyLoad height="200">
                    <img src="//m.360buyimg.com/mobilecms/jfs/t1/102432/40/2489/97288/5dceac2cE62b5b966/64f2312fc0674fe6.gif" width="100%" />
                </LazyLoad>
                <section className={styles['sec-kill']}>
                    <WingBlank>
                        <div className={styles['wrap']}>
                            <div className={styles['tit']}>
                                <div className={styles['tit-img']}></div>
                                <a className="fr tc-y">更多秒杀<Icon type="right" /></a>
                            </div>
                            <div className={styles['list-wrap']}>
                                {this.renderSeconds()}
                            </div>
                        </div>
                    </WingBlank>
                </section>
                <section className={styles['recommend']}>
                    <WingBlank>
                        <div className={styles['wrap']}>
                            <h3 className={styles['tit']}>
                                <LazyLoad height="200">
                                    <img src="//img11.360buyimg.com/jdphoto/jfs/t1/31601/22/15554/14040/5cc2a86fEbdb1098b/88174b36f85283b6.png" />
                                </LazyLoad>
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
