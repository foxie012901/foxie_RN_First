import React,{ Component  } from "react";

import {  View,Text,StyleSheet} from "react-native";

import IconFont from'react-native-vector-icons/IconFont'
import Icon from "./app/components/Icon/Icon";


export default class Main_ extends Component {
    constructor(props){
        super(props)
        this.state ={}
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.fontS}>this is Main_ for ffftest FontIcon</Text>

                {/* <IconFont 
                name = {'cog'}     
                size    =  {26}    
                color  = { '#f00' }
                /> */}
                <Icon data={{name:'cog',size:56,color:'blue'}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'lightblue'
    },
    fontS:{
        fontSize:20,
        color:"#000"
    }
})