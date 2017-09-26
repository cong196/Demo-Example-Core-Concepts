import React, { Component } from 'react'
import { Text, View,TextInput,TouchableOpacity } from 'react-native'

export default class TextInPutt extends Component {
  constructor(props){
    super(props);
    this.state={
      text: ""
    }
  }
    render() {
      return (
         <View>
            <TextInput
              placeholder={"Nhập dữ liệu vào đây ."}
              onChangeText={(text)=>{this.setState({text:text})}}
              value = {this.state.text}
            />

            <TouchableOpacity
              onPress={()=>{alert(this.state.text)}}
            >
                <View style = {{height: 50, width: 50}}>
                    <Text>Get Nội dung</Text>
                </View>
            </TouchableOpacity>
         </View>
      )
    }
}
