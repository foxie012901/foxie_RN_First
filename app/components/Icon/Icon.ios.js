import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
} from "react-native";


import IconFont from 'react-native-vector-icons/IconFont'

export default class Icon extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        // console.warn('ios')
    }

    render() {
        let { name, size, color } = this.props.data
        return (
            <View>
                <IconFont
                    name={name}
                    size={size}
                    color={color}
                />
            </View>
        )
    }
}