import React, { Component } from 'react'
import { Text, View,TextInput,TouchableOpacity,ScrollView } from 'react-native'

export default class ScrollViewDemo extends Component {
  constructor(props){
    super(props);
    this.state={
      text: ""
    }
  }
    render() {
      return (
        <ScrollView>
         <View>
             <View style ={{height:400, backgroundColor:'red'}}>
            </View>
            <Text>845809450-34950-3495-0-23</Text>
            <View style ={{height:400, backgroundColor:'green'}}>
            </View>
            <Text>845809450-34950-3495-0-23</Text>
         </View>
         </ScrollView>
      )
    }
}
