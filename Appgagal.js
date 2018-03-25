import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text, TextInput,
  View
} from 'react-native';

export default class Waktu extends Component {
  constructor(props){
    super(props)
    this.state = {
      detik:0,
      menit:0,
      jam:0,
      waktu:0,
    };
  }

  render() {
    return (
      <View style = {{flex:1,backgroundColor:'#DADFE1'}}>

        <View style={{backgroundColor:'#6C7A89'}}>
           <Text style = {{padding: 10, fontSize: 20, color: '#DADFE1', textAlign:'center'}} >
            Konversi Jam, Menit, Detik
          </Text>
         </View>

        <View style={{margin:20,padding: 10, backgroundColor:'#6C7A89'}}>
            <TextInput style = {{height: 40}}
              placeholder="Waktu Dalam Detik"
              onChangeText={(waktu)=>this.setState({waktu})}
              keyboardType = 'numeric'
            />
            <Button
              onPress={()=>this.setState({
                menit: (this.state.waktu/60),
                detik: (this.state.waktu%60),
                jam: (this.state.waktu/360)
              })}
              title="Hitung"
              color="#95A5A6"
              accessibilityLabel="Calculate"
            />
       </View>

        <View style={{margin:20, backgroundColor:'#6C7A89'}}>
          <Text style = {{padding: 10, fontSize: 20, color: '#fff'}} >
              Jam = {this.state.jam} {"\n"}
              Menit = {this.state.menit} {"\n"}
              Detik = {this.state.detik} {"\n"}
          </Text>
         </View>
   </View>
    );
  }
}
AppRegistry.registerComponent('AppForm2', () => HitungVolumeBalok);
