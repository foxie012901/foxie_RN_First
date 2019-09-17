import React, { Component } from "react";
import {
    View,
    Text,
    Image,
} from "react-native";

import styles from "./DetailsStyle";

export default class
    Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data:''
        }
    }
    componentDidMount() {
        this.setState({
            data:JSON.parse(this.props.data)
        })
    }
    render() {
        let data = this.state.data
        return (
            <View style={styles.container}>
                <View style={styles.left}>
                    <Image
                    source={data.url}
                    style={{ width:100}}
                    ></Image>
                </View>
                <View style={styles.right}>
                    <Text>{data.name}</Text>
                </View>
            </View>
        )
    }
}