import React, {Component} from 'react';
import {Dimensions,View,Text,TouchableOpacity, StyleSheet} from 'react-native';

const { height } = Dimensions.get('window');

export default class FelxBox extends Component {
  
  render() {
    return (
        <View style={ styles.container }>
            <View style={{backgroundColor:'green', flex: 1}}></View>
            <View style={{backgroundColor:'blue',flex: 3, flexDirection:'row'}}>
                <View style={{backgroundColor:'white',flex: 1}}></View>
                <View style={{backgroundColor:'black',flex: 1}}></View>
            </View>
            <View style={{backgroundColor:'yellow',flex: 2}}></View>
        </View>
    )
  }
}
var styles = StyleSheet.create({
    container:{
        height:400,width: 400, backgroundColor: 'red',
        flexDirection :'row'
    },

    textview:{
        fontSize: 40, color:"white"
    }
})