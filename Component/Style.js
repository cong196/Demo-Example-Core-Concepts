import React, {Component} from 'react';
import {Dimensions,View,Text,TouchableOpacity, StyleSheet} from 'react-native';

const { height } = Dimensions.get('window');

export default class Style extends Component {
  
  render() {
    return (
        <View style={ styles.container }>
            <Text style={ styles.textview }>Demo Style</Text>
        </View>
    )
  }
}

var styles = StyleSheet.create({
    container:{
        height:400,width: 400, backgroundColor: 'red'
    },

    textview:{
        fontSize: 40, color:"white"
    }
})