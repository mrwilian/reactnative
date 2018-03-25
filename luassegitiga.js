import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text, TextInput,
  View
} from 'react-native';

export default class Luastumpeng extends Component {
  constructor(props){
    super(props)
    this.state = {
      alas:0,
      tinggi:0,
      luas:0
    };
  }

  render() {
    return (
      <View style = {{flex:1,backgroundColor:'#DADFE1'}}>

        <View style={{backgroundColor:'#6C7A89'}}>
           <Text style = {{padding: 10, fontSize: 20, color: '#DADFE1', textAlign:'center'}} >
            Menghitung Luas Segitiga
          </Text>
         </View>

        <View style={{margin:20,padding: 10, backgroundColor:'#6C7A89'}}>
            <TextInput style = {{height: 40}}
              placeholder="Alas"
              onChangeText={(alas)=>this.setState({alas})}
              keyboardType = 'numeric'
            />
            <TextInput style = {{height: 40}}
              placeholder="Tinggi"
              onChangeText={(tinggi)=>this.setState({tinggi})}
              keyboardType = 'numeric'
            />
            <Button
              onPress={()=>this.setState({
                luas: (0.5*this.state.alas*this.state.tinggi)
              })}
              title="Hitung"
              color="#95A5A6"
              accessibilityLabel="Calculate"
            />
       </View>

        <View style={{margin:20, backgroundColor:'#6C7A89'}}>
          <Text style = {{padding: 10, fontSize: 20, color: '#fff'}} >
              Luas Segitiga = {this.state.luas} {"\n"}
          </Text>
         </View>
   </View>
    );
  }
}
AppRegistry.registerComponent('AppForm2', () => HitungVolumeBalok);
