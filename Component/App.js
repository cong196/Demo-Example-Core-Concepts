import React, {Component} from 'react';
import {Dimensions,View,Text,TouchableOpacity} from 'react-native';

const { height } = Dimensions.get('window');
import State from './State';
import Style from './Style';
import FlexBox from './FlexBox';
import FlatListt from './FlatList';
import TextInPutt from './TextInPut';
import ScrollViewDemo from './ScrollView';
import ImageDemo from './Image';
import Opacity from './Opacity'
export default class App extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <Opacity />
    )
  }
}
