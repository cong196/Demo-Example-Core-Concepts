import React, {Component} from 'react';
import {Dimensions,View,Text,TouchableOpacity} from 'react-native';

const { height } = Dimensions.get('window');

export default class State extends Component {
  constructor(props) {
    super(props);
    this.state={
      text:'An'
    }
  }
  render() {
    return (
    <View>
      <TouchableOpacity
          
            onPress={()=>{
                this.setState({
                    text: "Đạt"
                })
            }}
      >
              <Text style ={{fontSize: 40}}>Đổi</Text>
          
      </TouchableOpacity>

        <Text style ={{fontSize: 40}}>{this.state.text}</Text>
    </View>
    )
  }
}
