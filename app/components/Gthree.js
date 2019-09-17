import React, { Component } from 'react'

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    FlatList,
    TouchableOpacity,
    YellowBox

} from "react-native";

// import AndroidTextInputNativeComponent from 'react-native/Libraries/Components/TextInput/AndroidTextInputNativeComponent';
//引入redux
// import storage from "../storage/index.js"; 
import store from '../store'
// 我们平时的完整写法,我们也可以不写.js,甚至我们创建的名称是index的话作为默认,也可以不写
import {
    getChangeInputValue,
    getOnChangeData,
    getOpeniD
} from "../store/actionCreators";
// import { ON_CHANGE_DATA, CHANGE_INPUT_VALUE, DELETE_ID } from "../store/actionTypes";  // 因为有了actionCreators统一管理action，就不用在这里使用actiontype了
export default class Gthree extends Component {
    constructor(props) {
        super(props)
        YellowBox.ignoreWarnings([
            'Warning: Each child in a list should have a unique'
        ])
        // console.warn(store.getState())
        this.state = store.getState()
        store.subscribe(this._handleStoreChange)//我们的组件去订阅store，就是说，只要store里的数据改变，subscribe里面就会执行某些事件
    }

    render() {
        return (
            <View style={styles.content}>
                <View style={{ width: "100%", marginBottom: 10 }}>
                    <TextInput
                        placeholder={'Write Something...'}
                        placeholderTextColor={'#BBBBBB'}
                        style={styles.tInput}
                        onChangeText={this._handleInputChange}
                        value={this.state.inputValue}
                    />

                    <TouchableOpacity
                        style={{ marginTop: 10 }}
                        onPress={this._onChangeData}
                    >
                        <View style={styles.btnSty}><Text style={styles.btnTxtSty}>Click Me</Text></View>
                    </TouchableOpacity>
                </View>
                <FlatList
                    keyExtractor={this._renderKey}
                    data={this.state.list}
                    renderItem={this._renderItem}
                    style={{ width: "100%" }}
                />
            </View >
        )
    }
    _onChangeData = () => {
        //创建一个action行为
        const action = getOnChangeData()
        store.dispatch(action)
    }

    _handleStoreChange = () => {
        // console.warn('store change')
        this.setState(store.getState())
    }

    _handleInputChange = e => {
        const action = getChangeInputValue(e)
        store.dispatch(action)
        // const action = {
        //     type: CHANGE_INPUT_VALUE,
        //     value: e,
        // } // 创建了一个行为action，你帮我去改变inputvalue的值
        // store.dispatch(action)
        //通过dispatch把我们的行为action传递给store  store就相当于一个仓库,他并不会管理数据而是自动推送给reducers来管理
    }

    _renderKey = ({ index }) => {
        return index
    }
    _renderItem = ({ item, index }) => {
        // console.warn(index)
        return (
            <View style={styles.row}>
                <Text >{item}</Text>
                <TouchableOpacity
                    onPress={() => this._openId(index)}
                    style={styles.rowTouch}
                >
                    <Text style={styles.rowTouchTxt}>delete</Text>
                </TouchableOpacity>
            </View>
        )
    }
    _openId = (e) => {
        // console.warn(e)
        const action = getOpeniD(e)
        store.dispatch(action)
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        width: "100%",
        padding: 10,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: "#f5fcff",
        paddingTop: 50,
    },
    tInput: {
        width: "100%",
        height: 33,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: 'lightblue',
        borderRadius: 5,
    },
    row: {
        fontSize: 24,
        padding: 42,
        borderWidth: 1,
        borderColor: 'lightblue',
        flexDirection: 'row',
        position: 'relative'
    },
    btnSty: {
        width: '100%',
        height: 33,
        lineHeight: 33,
        backgroundColor: "#841584",
        alignItems: 'center',
    },
    btnTxtSty: {
        fontSize: 16,
        lineHeight: 33,
        color: "#fff",
    },
    rowTouch: {
        width: 60,
        height: 33,
        backgroundColor: 'red',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 10,
        bottom: 10
    },
    rowTouchTxt: {
        fontSize: 14,
        color: "#fff",
    }

})