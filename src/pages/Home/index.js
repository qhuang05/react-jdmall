import React, { Component } from 'react'
import Layout from '../../components/Layout'
import './index.scss'
import { SearchBar, WingBlank, Carousel} from 'antd-mobile'

class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: ['1', '2', '3'],
            imgHeight: 176,
        }
    }
    render() {
        return (
            <Layout>
                <div className="slider-wrapper">
                    <SearchBar className="search-bar" />
                    <WingBlank>
                        <Carousel className="space-carousel"
                            frameOverflow="visible"
                            cellSpacing={10}
                            slideWidth={0.8}
                            autoplay
                            infinite
                            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                            afterChange={index => this.setState({ slideIndex: index })}
                        >
                            {this.state.data.map((val, index) => (
                                <a
                                    key={val}
                                    href="http://www.alipay.com"
                                    style={{
                                        display: 'block',
                                        position: 'relative',
                                        top: this.state.slideIndex === index ? -10 : 0,
                                        height: this.state.imgHeight,
                                        boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                                    }}
                                >
                                    <img
                                        src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                                        alt=""
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
            </Layout>
        )
    }
}

export default HomePage