import React, { Component } from 'react'
import { Text, View,TextInput,TouchableOpacity,ScrollView,Image } from 'react-native'

export default class ImageDemo extends Component {
  constructor(props){
    super(props);
    this.state={
      text: ""
    }
  }
    render() {
      return (
        <View>
            <Image source={require('./logo_og.png')}
            style={{height:100,width:100}}/>
        </View>
      )
    }
}
