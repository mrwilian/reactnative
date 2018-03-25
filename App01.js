import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text, TextInput,
  View
} from 'react-native';

export default class Konversi extends Component {
  constructor(props){
    super(props)
    this.state = {
      cm:0,
      inch:0,
      // luas:0
    };
  }

  render() {
    return (
      <View style = {{flex:1,backgroundColor:'#bbdefb'}}>

        <View style={{backgroundColor:'#2196f3'}}>
           <Text style = {{padding: 10, fontSize: 20, color: 'white', textAlign:'center'}} >
            Konversi CM ke Inchi
          </Text>
         </View>

        <View style={{margin:20,padding: 10, backgroundColor:'#e3f2fd'}}>
            <TextInput style = {{height: 40}}
              placeholder="Satuan"
              onChangeText={(cm)=>this.setState({cm})}
              onChangeText={(inch)=>this.setState({inch})}
              keyboardType = 'numeric'
           /* />
             <TextInput style = {{height: 40}}
               placeholder="Satuan  Inchi"
               onChangeText={(inch)=>this.setState({inch})}
               keyboardType = 'numeric'*/
             />

            <Button
              onPress={()=>this.setState({
                inch: (this.state.cm*0.394)
              })}
              title="Konversi CM"
              accessibilityLabel="Klik untuk mengkonversi"
            />
                   <Button
              onPress={()=>this.setState({
                cm: (this.state.inch*2.54)
              })}
              title="Konversi Inchi"
              accessibilityLabel="Klik untuk mengkonversi"
            />
       </View>

        <View style={{margin:20, backgroundColor:'#90caf9'}}>
          <Text style = {{padding: 10, fontSize: 20}} >
              cm =  {this.state.cm} {"\n"}
              inch =  {this.state.inch} {"\n"}
          </Text>
         </View>
   </View>
    );
  }
}
AppRegistry.registerComponent('AppForm2', () >= HitungLuasSegitiga);
