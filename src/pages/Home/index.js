import React, { Component } from 'react'
import Layout from '../../components/Layout'
import './index.scss'
import Request from '../../utils/request';
import { WingBlank, Carousel, Icon, Button, ListView, PullToRefresh } from 'antd-mobile'
import SearchBar from '../../components/SearchBar'
import RecommendList from './recommendList'

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
            menuList: [
                [{
                    'icon': '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png.webp',
                    'name': '京东超市'
                }, {
                    'icon': '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/39401/17/2391/5859/5cc06fcfE2ad40668/28cda0a571b4a576.png.webp',
                    'name': '数码电器'
                }, {
                    'icon': '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/17169/3/4127/4611/5c2f35cfEd87b0dd5/65c0cdc1362635fc.png.webp',
                    'name': '服饰美妆'
                }, {
                    'icon': '//m.360buyimg.com/mobilecms/s120x120_jfs/t17725/156/1767366877/17404/f45d418b/5ad87bf0N66c5db7c.png.webp',
                    'name': '京东生鲜'
                }, {
                    'icon': '//m.360buyimg.com/mobilecms/s120x120_jfs/t16990/157/2001547525/17770/a7b93378/5ae01befN2494769f.png.webp',
                    'name': '京东到家'
                }, {
                    'icon': '//m.360buyimg.com/mobilecms/s120x120_jfs/t18454/342/2607665324/6406/273daced/5b03b74eN3541598d.png.webp',
                    'name': '充值缴费'
                }, {
                    'icon': '//m.360buyimg.com/mobilecms/s120x120_jfs/t22228/270/207441984/11564/88140ab7/5b03fae3N67f78fe3.png.webp',
                    'name': '9.9元拼'
                }, {
                    'icon': '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/7068/29/8987/5605/5c120da2Ecae1cc3a/016033c7ef3e0c6c.png.webp',
                    'name': '领券'
                }, {
                    'icon': '//m.360buyimg.com/mobilecms/s120x120_jfs/t17116/175/2673385904/6610/50f5ef50/5b03b7aeNf3a7fa37.png.webp',
                    'name': '借钱'
                }, {
                    'icon': '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/22262/9/1470/4527/5c120cd0E5d3c6c66/4792ec307a853e9f.png.webp',
                    'name': 'PLUS会员'
                }],
                [{
                    'icon': '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/14555/23/1446/4195/5c120e71E947f3ca1/cdbad904f61e1fb7.png.webp',
                    'name': '海囤全球'
                }, {
                    'icon': '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/32245/22/2820/6521/5c6df9b3E1466dcd3/9f4cd68276f4e971.png.webp',
                    'name': '京东拍卖'
                }, {
                    'icon': '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/25651/12/1391/4836/5c120c34Eb93a70fa/3a1735f6a79d0721.png.webp',
                    'name': '唯品会'
                }, {
                    'icon': '//m.360buyimg.com/mobilecms/s120x120_jfs/t28723/45/1332082024/6421/ead422d3/5cdd0be3Nfce1ba98.jpg.dpg',
                    'name': '玩3C'
                }, {
                    'icon': '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/19699/10/1440/6755/5c120ca6Eaa521f62/f9d57f39e55c7321.png.webp',
                    'name': '沃尔玛'
                }, {
                    'icon': '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/19745/21/1415/4886/5c120cbbEe58af0bf/4d19bf58d42fc9c4.png.webp',
                    'name': '美妆馆'
                }, {
                    'icon': '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/27748/22/1419/4913/5c120d0eEa52ea62f/3c2b78a40edc97b2.png.webp',
                    'name': '京东旅行'
                }, {
                    'icon': '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/14996/29/2195/11094/5c1afdb7Ee54cf069/d6ab6a0f64fee068.png.webp',
                    'name': '拍拍二手'
                }, {
                    'icon': '//m.360buyimg.com/mobilecms/s120x120_jfs/t5842/205/151189300/13247/a6de2d/591d94edNc42fb94d.png.webp',
                    'name': '物流查询'
                }, {
                    'icon': '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/28873/5/1455/6885/5c120bb9Eb6610bee/29d349f92aeb6eaf.png.webp',
                    'name': '全部'
                }]
            ],
            secondsList: [
                {
                    'img': '//img14.360buyimg.com/n1/s150x150_jfs/t1/47391/4/7630/323388/5d5656deEb8c0c72b/7ee45fd887014edb.jpg.dpg',
                    'price': '49.9',
                    'origin': '59.8'
                },
                {
                    'img': '//img14.360buyimg.com/n1/s150x150_jfs/t1/102896/26/2893/150012/5dd791d7Ed6826134/5b89ec1af90e69ca.jpg.dpg',
                    'price': '1899',
                    'origin': '3799'
                },
                {
                    'img': '//img14.360buyimg.com/n1/s150x150_jfs/t1/44577/33/15427/200042/5dce4b9dE9c7a3745/712df55b3b68756a.jpg.dpg',
                    'price': '54.9',
                    'origin': '108'
                },
                {
                    'img': '//img14.360buyimg.com/n1/s150x150_jfs/t1/51275/34/16586/83979/5dd4f984Ef7ac78eb/c218c7afe9952559.jpg.dpg',
                    'price': '208',
                    'origin': '520'
                },
                {
                    'img': '//img14.360buyimg.com/n1/s150x150_jfs/t1/99177/28/2765/32653/5dd64245E3431fc01/2d7daac0c509dbbf.jpg.dpg',
                    'price': '2889',
                    'origin': '3599'
                },
                {
                    'img': '//img14.360buyimg.com/n1/s150x150_jfs/t1/47908/15/16377/190915/5dd4d9a0E22873906/61154a3037db3eb1.jpg.dpg',
                    'price': '298',
                    'origin': '993'
                },
                {
                    'img': '//img14.360buyimg.com/n1/s150x150_jfs/t1/49294/4/15946/143741/5dce578cE08fa9387/f9a65dd992845118.jpg.dpg',
                    'price': '239',
                    'origin': '598'
                },
                {
                    'img': '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png.webp',
                    'price': '49.9',
                    'origin': '59.8'
                }
            ],
        }
    }
    renderBanner(){
        let {bannerList} = this.state;
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
                    ))
                }
            </Carousel>
        )
    }
    renderMenu() {
        let { menuList } = this.state;
        const menuSlide = data => (
            <ul className="flex flex-x-full flex-wrap menu-list">
                {
                    data.map((item,i) => (
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
                    menuList.map((item, i) => (
                        <div key={'m-' + i}>
                            {menuSlide(item)}
                        </div>
                    ))
                }
            </Carousel>
        )
    }
    renderSeconds() {
        let { secondsList } = this.state;
        return (
            <ul className="flex">
                {secondsList.map((item,i) => {
                    return (
                        <li key={'s-'+i}>
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
            <Layout style={{ paddingBottom: '120px' }} curTab="index">
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
                                <a className="fr align-center">更多秒杀<Icon type="right" /></a>
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

export default HomePage