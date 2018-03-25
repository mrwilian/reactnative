import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  Text, TextInput,
  View
} from 'react-native';


export default class volumebalok extends Component {
  constructor(props){
    super(props)
    this.state = {
      panjang:0,
      tinggi:0,
      lebar:0,
      volume:0,
    };
  }

  render() {
    return (
      <View style = {{flex:1,backgroundColor:'#DADFE1'}}>

        <View style={{backgroundColor:'#6C7A89'}}>
           <Text style = {{padding: 10, fontSize: 20, color: '#DADFE1', textAlign:'center'}} >
            Menghitung Volume Balok
          </Text>
         </View>

        <View style={{margin:20,padding: 10, backgroundColor:'#6C7A89'}}>
            <TextInput style = {{height: 40}}
              placeholder="Panjang"
              onChangeText={(panjang)=>this.setState({panjang})}
              keyboardType = 'numeric'
            />
            <TextInput style = {{height: 40}}
              placeholder="Lebar"
              onChangeText={(lebar)=>this.setState({lebar})}
              keyboardType = 'numeric'
            />
            <TextInput style = {{height: 40}}
              placeholder="Tinggi"
              onChangeText={(tinggi)=>this.setState({tinggi})}
              keyboardType = 'numeric'
            />
            <Button
              onPress={()=>this.setState({
                volume: (this.state.panjang*this.state.tinggi*this.state.lebar)
              })}
              title="Hitung"
              color="#95A5A6"
              accessibilityLabel="Calculate"
            />
       </View>

        <View style={{margin:20, backgroundColor:'#6C7A89'}}>
          <Text style = {{padding: 10, fontSize: 20, color: '#fff'}} >
              Volume Balok = {this.state.volume} {"\n"}
          </Text>
         </View>
   </View>
    );
  }
}
