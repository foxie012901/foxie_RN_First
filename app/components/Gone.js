import React, { Component } from 'react'

import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    FlatList,
    Dimensions,
    Button,
    TouchableOpacity,
    TouchableHighlight,
    ActivityIndicator,
    Navigator
} from "react-native";
//引入样式
import styles from "./GoneStyle";

//图片轮播
import Swiper from 'react-native-swiper'
//请求数据
import { Net } from '../request.js'
//图标字体
import CXIcon from "../CXIcon.js";
import IconFont from 'react-native-vector-icons/IconFont'



//引入路由组件
import { Actions } from 'react-native-router-flux'

export default class Gone extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imgList: [],
            isShow: true,
            mIconList: [
                {
                    "icon": "file",
                    "text": '威震天'
                },
                {
                    "icon": "picture",
                    "text": '震荡波'
                },
                {
                    "icon": "collection2",
                    "text": '声波'
                },
                {
                    "icon": "gallery",
                    "text": '轰隆隆'
                },
                {
                    "icon": "qrcode",
                    "text": '红蜘蛛'
                },
                {
                    "icon": "scan",
                    "text": '闹翻天'
                },
                {
                    "icon": "cog",
                    "text": '惊天雷'
                },
                {
                    "icon": "ser",
                    "text": '大力神'
                }
            ],
            heroList: [
                {
                    "url": require('../images/wzt.png'),
                    "name": '威震天',
                    id: 0
                },
                {
                    "url": require('../images/zdb.png'),
                    "name": '震荡波',
                    id: 1
                },
                {
                    "url": require('../images/sb.png'),
                    "name": '声波',
                    id: 2
                },
                {
                    "url": require('../images/hzz.png'),
                    "name": '红蜘蛛',
                    id: 3
                },
                {
                    "url": require('../images/jtl.png'),
                    "name": '惊天雷',
                    id: 4
                },
                {
                    "url": require('../images/nft.png'),
                    "name": '闹翻天',
                    id: 5
                }
            ]
        }
    }

    doRequest = (url, dataName) => {
        return Net(url, null).then(res => {
            // console.warn(res)
            let { meta, data } = res
            if (meta.status === 200) {
                this.setState({
                    [dataName]: data.list
                })
            }
            // console.warn(this.state.imgList)
        })
    }


    goDecList = () => {
        // console.warn('aaa')
        // alert('哈哈')
        Actions.declist();
    }

    goDetails = (item) => {
        // console.warn('aaa')
        // alert('哈哈')
        Actions.details({ data: item });
    }

    async componentDidMount() {
        await Promise.all([
            this.doRequest('homes/swipe', 'imgList')
        ])
        this.setState({
            isShow: false
        })
    }



    render() {

        let Loading = (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><ActivityIndicator
            animating={this.state.isShow} // loading组件开关
            color="skyblue"
            size="large" /></View>)

        let PageW = (
            <ScrollView>
                <Header />
                <News />
                <IconPage data={this.state.mIconList} />
                <SwiperPlay data={this.state.imgList} />
                <PlayHome data={this.state.heroList} goDetails={this.goDetails} />
                <OtherImg goDecList={this.goDecList} />
            </ScrollView>
        )


        return (
            <View style={styles.container}>

                {
                    this.state.isShow ? Loading : PageW
                }


                {/* <Header></Header>
                <News></News>
                <SwiperPlay data={this.state.imgList}></SwiperPlay> */}
            </View>
        )
    }
}

//图片banner
class OtherImg extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={{ marginBottom: 10 }}>
                <View style={styles.OtherImgTitleContent}>
                    <Text style={styles.OtherImgTitleTxt}>G1大电影</Text>
                    <View style={styles.OtherImgTitleLine}></View>
                </View>
                <View style={styles.OtherImgView}>
                    <TouchableHighlight onPress={this.props.goDecList}>
                        <Image
                            source={require('../images/banner.png')}
                            style={{ width: 344, height: 90, borderRadius: 5 }}></Image>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

//PlayHome组件
function PlayHome(props) {
    let { data } = props
    return (
        <View style={styles.playHomeContanier}>
            <View style={styles.playHomeTitle}>
                <View style={styles.playHomeTitleViewLeft}>
                    <IconFont name="jiantou" size={22} color="#000" />
                    <Text style={{ fontSize: 15, color: "#333", fontWeight: "bold" }}>我是标题</Text>
                </View>
                <View style={styles.playHomeTitleViewRight}>
                    <Text style={{ fontSize: 12, color: 'blue' }}>更多</Text>
                </View>
            </View>
            <View style={styles.playHomeView}>
                {
                    data.map((item, i) => (

                        <TouchableHighlight
                            key={i}
                            onPress={()=>{props.goDetails(JSON.stringify(item))}}
                            style={styles.playHomeViewItem}>
                            <View>
                                <Image source={item.url} style={styles.playHomeViewItemImg}></Image>
                                <Text style={styles.playHomeViewItemTxt}>{item.name}</Text>
                            </View>
                        </TouchableHighlight>
                    ))
                }
            </View>
        </View>
    )
}


//icon组件
function IconPage(props) {
    let { data } = props
    return (
        <View style={styles.iconContent}>
            {
                data.map((item, i) => (
                    <TouchableOpacity style={styles.iconTouchContent}
                        onPress={() => { alert('点击了', null, null) }}
                        key={i}>
                        <IconFont name={item.icon} size={30} color="#0079FF" />
                        <Text style={styles.logoContentBtnTxt}>{item.text}</Text>

                    </TouchableOpacity>
                ))
            }
        </View>
    )


}

//轮播图组件
function SwiperPlay(props) {
    let { data } = props
    // console.warn(data)
    return (
        <View style={{ width: "100%", height: 90, paddingLeft: 15 }}>
            {
                data.length ? <Swiper
                    style={styles.wrapper}
                    showsButtons={false}
                    loop={true}
                    autoplay={true}
                    horizontal={true}>
                    {
                        data.map((item, i) => {
                            return <View key={i} style={styles.sildes}>
                                <Image source={{ uri: item.original }} style={{ borderRadius: 5, width: '100%', height: '100%' }}></Image>
                            </View>
                        })
                    }
                </Swiper> : null
            }

        </View>
    )

}
//头部UI组件
function Header(props) {

    return (
        <View style={styles.headerContainer}>
            <View style={styles.TopBg}>
                <Text style={styles.foxConTxt}>霸天虎</Text>
                <Text style={styles.foxConTxtChange}>小红之家</Text>
            </View>

            <View style={styles.headerBox}>
                <View style={styles.logoContent}>
                    <Image source={require('../images/Decepticons.jpg')} style={styles.carLogo}></Image>
                    <Text style={styles.logoContentTxt}>红蜘蛛@小红</Text>
                    <TouchableOpacity
                        onPress={() => { alert('瞅你咋地', null, null) }}
                        style={styles.logoContentBtnTouch}
                    >
                        <View style={styles.logoContentBtn}>
                            <Text style={styles.logoContentBtnTxt}>你瞅啥啊</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.logoBottom}>
                    <Text style={styles.logoBottomTxt}>温馨提示:威震天把擎天柱给干了</Text>
                </View>
            </View>
        </View>
    )
}


function News(props) {

    return (
        <View style={styles.lingContent}>
            <IconFont name="ling" size={22} color="#0079FF" />
            <Text>站内消息:威震天被宇宙大帝给改造了...</Text>
        </View>
    )

}

