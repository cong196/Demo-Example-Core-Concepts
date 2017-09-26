import React, {Component} from 'react';
import {Dimensions,View,Text,TouchableOpacity, StyleSheet,
        FlatList
} from 'react-native';

const { height } = Dimensions.get('window');

export default class FlatListt extends Component {

    constructor(props){
        super(props);
        this.state={
            mang:[{"id":1,"ten":"Đạt"},
                    {"id":2,"ten":"Nam"},
                    {"id":3,"ten":"An"}]
        }
    }
  
  render() {
    return (
        <FlatList 
            data={this.state.mang}
            data={this.state.mang}
            renderItem={
                ({item})=>
                <View style={{padding:10,borderBottomWidth:1}}>
                    <Text style={{fontSize: 40}}>{item.id}</Text>
                    <Text style={{fontSize: 40}}>{item.ten}</Text>
                </View>
            }
        />
    )
  }
}
