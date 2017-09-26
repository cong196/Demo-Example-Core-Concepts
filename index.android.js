/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry
} from 'react-native';
import App from './Component/App'

export default class HelloWorld extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
