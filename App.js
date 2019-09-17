/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
//导入 react基础包
import {
  Platform,//用来提供平台监测功能的, 监测ios还是android,用来设定某些平台可用和不可用
  SafeAreaView,
  StyleSheet,  //样式相关组件,样式名采用驼峰命名法,值涉及到文本的用引号包起来 
  ScrollView,
  View,  //用来布局的
  Text,  //文本节点,所有文本必须放在这个里面
  StatusBar,
  Dimensions,
  YellowBox
} from 'react-native';
//导入开发所需组件,从react-native中导入
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//引入字体组件
import IconFont from 'react-native-vector-icons/IconFont'

// 导入 Tabbar 相关的组件
import TabNavigator from "react-native-tab-navigator"

//导入tab栏的组件
import Gone from './app/components/Gone'
import Gtwo from './app/components/Gtwo'
import Gthree from './app/components/Gthree'
import Gfour from './app/components/Gfour'

export default class App extends Component {
  constructor(props) {
    super(props)
    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
      'Warning: componentWillUpdate is deprecated',
      'Warning: ViewPagerAndroid has been extracted from react-native'
    ])

    this.state = {
      selectedTab: 'gone' // 选中的tab栏名称
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <TabNavigator> 

          <TabNavigator.Item
            selected={this.state.selectedTab === 'gone'}
            title='G1'
            renderIcon={() => <IconFont name={'home'} size={25} color={'gray'} /> } // 未选中状态下，展示的图标
            renderSelectedIcon={() => <IconFont name={'home'} size={25} color={'#0079ff'} />} // 选中状态下展示的图标
            onPress={() => this.setState({ selectedTab: 'gone' })}
          >
            <Gone />
          </TabNavigator.Item>




          <TabNavigator.Item
            selected={this.state.selectedTab === 'gtwo'}
            title='G2'
            renderIcon={() => <IconFont name={'star'} size={25} color={'gray'} />} // 未选中状态下，展示的图标
            renderSelectedIcon={() => <IconFont name={'star'} size={25} color={'#0079ff'} />} // 选中状态下展示的图标
            onPress={() => this.setState({ selectedTab: 'gtwo' })}
          >
            <Gtwo />
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'gthree'}
            title='G3'
            badgeText="9"
            renderIcon={() => <IconFont name={'earth'} size={25} color={'gray'} />} // 未选中状态下，展示的图标
            renderSelectedIcon={() => <IconFont name={'earth'} size={25} color={'#0079ff'} />} // 选中状态下展示的图标
            onPress={() => this.setState({ selectedTab: 'gthree' })}
          >
            <Gthree />
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'gfour'}
            title='G4'
            renderIcon={() => <IconFont name={'my'} size={25} color={'gray'} />} // 未选中状态下，展示的图标
            renderSelectedIcon={() => <IconFont name={'my'} size={25} color={'#0079ff'} />} // 选中状态下展示的图标
            onPress={() => this.setState({ selectedTab: 'gfour' })}
          >
            <Gfour />
          </TabNavigator.Item>

        </TabNavigator>


      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});

