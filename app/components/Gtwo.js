import React, { Component } from 'react'

import {
    View,
    Text,
    StyleSheet,
    PanResponder,
} from "react-native";

const CIRCLE_SIZE = 40
const CIRCLE_COLOR = "blue"
const CIRCLE_HIGHLIGHT_COLOR = "green"
export default class Gtwo extends Component {
    _panResponder = {}
    _previousLeft = 0
    _previousTop = 0
    _circleStyles = {}
    circle = null
    constructor(props) {
        super(props)

        this.state = {
            numberActiveTouches: 0,
            moveX: 0,
            moveY: 0,
            x0: 0,
            y0: 0,
            dx: 0,
            dy: 0,
            vx: 0,
            vy: 0
        }
    }
    componentWillMount() {
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
            onMoveShouldSetPanResponder: this._hanleMoveShouldSetPanResponder,
            onPanResponderGrant: this._handlePanResponderGrant,
            onPanResponderMove: this._handlePanResponderMove,
            onPanResponderRelease: this._handlePanResponderEnd,
            onPanResponderTerminate: this._handlePanResponderEnd
        })
        this._previousLeft = 20
        this._previousTop = 84
        this._circleStyles = {
            style: { left: this._previousLeft, top: this._previousTop }
        }
    }
    componentDidMount() {
        this._updatePosition();
    }
    render() {

        return (
            <View style={styles.container}>
                <View
                    ref={circle => {
                        this.circle = circle
                    }}
                    style={styles.circle}
                    {...this._panResponder.panHandlers}
                />
                <Text>
                    {this.state.numberActiveTouches} touches,
                    dx:{this.state.dx},
                    dy:{this.state.dy},
                    vx:{this.state.vx},
                    vy:{this.state.vy}
                </Text>
            </View>
        )
    }
    // _higelight和_unHighlight提供给PanResponder的其他地方进行调用
    //为用户提供视觉反馈
    _highlight = () => {
        this.circle &&
            this.circle.setNativeProps({
                style: { backgroundColor: CIRCLE_HIGHLIGHT_COLOR }
            })
    }
    _unHeightlight = () => {
        this.circle &&
            this.circle.setNativeProps({ style: { backgroundColor: CIRCLE_COLOR } })
    }
    //使用setNativeProps直接控制当前位置
    _updatePosition = () => {
        this.circle && this.circle.setNativeProps(this._circleStyles)
    }
    _handleStartShouldSetPanResponder = (event, gestureState) => {
        //当用户按下时,需要被激活吗?
        return true
    }
    _hanleMoveShouldSetPanResponder = (event, gestureState) => {
        return true
    }

    _handlePanResponderGrant = (event, gestureState) => {
        this._highlight();
    }
    _handlePanResponderMove = (event, gestureState) => {
        this.setState({
            stateID: gestureState.stateID,
            moveX: gestureState.moveX,
            moveY: gestureState.moveY,
            x0: gestureState.x0,
            y0: gestureState.y0,
            dx: gestureState.dx,
            dy: gestureState.dy,
            vx: gestureState.vx,
            vy: gestureState.vy,
            numberActiveTouches: gestureState.numberActiveTouches
        })
        this._circleStyles.style.left = this._previousLeft + gestureState.dx
        this._circleStyles.style.top = this._previousTop + gestureState.dy
        this._updatePosition();
    }
    _handlePanResponderEnd = (event, gestureState) => {
        this._unHeightlight();
        this._previousLeft += gestureState.dx;
        this._previousTop += gestureState.dy;
    }
}

const styles = StyleSheet.create({
    circle: {
        width: CIRCLE_SIZE,
        height: CIRCLE_SIZE,
        borderRadius: CIRCLE_SIZE / 2,
        backgroundColor: CIRCLE_COLOR,
        position: "absolute",
        left: 0,
        top: 0
    },
    container: { flex: 1, paddingTop: 64 }
})