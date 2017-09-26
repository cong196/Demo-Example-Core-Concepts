import React, { Component } from 'react'
import { Text, View,TextInput,TouchableOpacity,TouchableWithoutFeedback } from 'react-native'

export default class Opacity extends Component {
  constructor(props){
    super(props);
   
  }
    render() {
      return (
        <View>
            <TouchableOpacity
                onPress={()=>{ alert("Bạn đã bấm nút") }}
            >
                <View style={{height:50,width:80, backgroundColor:'red', padding:10, margin:10}}>
                    <Text>Bấm</Text>
                    <TouchableWithoutFeedback
                        onPress={()=>{alert("Bấm vào Blue")}}
                    >
                            <View style={{width:20,height:20,backgroundColor:'blue'}}>
                            </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableOpacity>
        </View>
      )
    }
}
