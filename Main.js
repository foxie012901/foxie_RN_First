// Main 是本项目的根组件
import React, { Component } from "react"
import { View } from 'react-native'

// 导入路由相关的组件 yarn add react-native-router-flux
// Router: 就相当于 昨天我们所学的  HashRouter
// Stack: 这是一个分组的容器，他不表示具体的路由，专门用来给路由分组的
// Scene：就表示一个具体的路由规则，好比 昨天学到的 Route
import { Router, Stack, Scene } from "react-native-router-flux";

//导入App组件
import App from './App'
import DecList from './app/components/DecList/DecList'
import Details from "./app/components/Details/Details";

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <Router>
                <Stack>
                    {/* 配置路由规则 */}
                    {/* 注意，所有的路由规则，都应该写到这个位置 */}
                    {/* 第一个 Scene 就是默认要展示的首页 */}
                    {/* key 属性，表示路由的规则名称，将来可以使用这个 key ，进行编程式导航，每一个路由规则，都应该提供一个 唯一的key， key不能重复 */}
                    <Scene key='app' component={App} title='' hideNavBar={true} />
                    <Scene key='declist' component={DecList} title='霸天虎列表页' hideNavBar={false} />
                    <Scene key='details' component={Details} title='英雄介绍' hideNavBar={false} />
                </Stack>
            </Router>
        )
    }
}