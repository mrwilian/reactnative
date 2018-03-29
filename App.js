import React, { Component } from 'react';
import {
  StyleSheet, Text,
  View,
} from 'react-native';
import Layout from './src/latihan/Layout'
import VolumeBalok from './src/latihan/VolumeBalok'
import PrakiraanCuaca from './src/Cuaca/PrakiraanCuaca'
import CuacaBox from './src/Cuaca/CuacaBox'
export default class App extends Component {
  render(){
    return (
        <  CuacaBox />
    );
  }
}
