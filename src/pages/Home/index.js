import React, { Component } from 'react'
import Layout from '../../components/Layout'
import './index.scss'
import { WingBlank, Carousel } from 'antd-mobile'
import SearchBar from '../../components/SearchBar'

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bannerList: [
                '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/81413/28/14227/125713/5dbbef9fE41000194/5781fd740f1cf619.jpg!cr_1125x445_0_171!q70.jpg.dpg',
                '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/86804/31/2230/127552/5dccf247E6d9ca7a8/a153475e8ef3ab4b.jpg!cr_1125x445_0_171!q70.jpg.dpg',
                '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/91538/35/1275/99931/5dbbf626Ed9e6f56c/6f5681b0d1362012.jpg!cr_1125x445_0_171!q70.jpg.dpg',
                '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/44992/7/15917/183114/5dce08e5Ea4a1b8f3/a72336b64cd456b8.jpg!cr_1125x445_0_171!q70.jpg.dpg'
            ],
            imgHeight: 176,
        }
    }
    render() {
        return (
            <Layout>
                <div className="slider-wrapper">
                    <SearchBar />
                    <WingBlank>
                        <Carousel
                            autoplay={true}
                            infinite
                            dotActiveStyle={{background:'#f23030'}}
                        >
                            {this.state.bannerList.map(item => (
                                <a
                                    key={item}
                                    href="#"
                                    style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
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
                            ))}
                        </Carousel>
                    </WingBlank>
                </div>
                <div>
                    <img src="//m.360buyimg.com/mobilecms/jfs/t1/102432/40/2489/97288/5dceac2cE62b5b966/64f2312fc0674fe6.gif" width="100%" />
                </div>
            </Layout>
        )
    }
}

export default HomePage