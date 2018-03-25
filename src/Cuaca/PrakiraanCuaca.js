import React, { Component } from 'react';
import {Style, Text, View, TextInput} from 'react-native';

export default class PrakiraanCuaca extends Component{

  constructor(props){
    super(props);
    this.state={
      kota: ''
    };
  };
  render(){
    return(
      <View>
      <Text>Masukkan Nama Kota lalu tekan enter</Text>
      <TextInput
      onSubmitEditting={
        getWeather= () => {
        (event)=>this.setState({kota:event.nativeEvent.text})
          let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + this.state.city + '&appid=09a28dad552f1d7f254b2ec3ef7ff1e3&units=metric';
          fetch(url)
          .then((response) => response.json())
          .then((responseJson) => {
            console.log(responseJson);
            this.setState({
              forecast: {
                main:responseJson.weather[0].main,
                description: responseJson.weather[0].description,
                temp: responseJson.main.temp
                }
              });
            }
          )
        };
      }
      />
      <Text>Kota : {this.state.kota}</Text>

      </View>
    );
  }
}
