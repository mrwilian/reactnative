import React, { Component } from 'react';
import { StyleSheet, Text, Button, TextInput, View
} from 'react-native';

export default class Cuaca extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kota: '',
      forecast: {
        main: '',
        description: '',
        temp: 0
      }
    };
  }

getWeather= () => {
let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + this.state.kota +'&appid=85a3f37c10b33c300b45fa1501ae9f7f&units=metric';
fetch (url)
.then ((response) => response.json())
.then((responseJson) => {
            //console.log(responseJson);
            this.setState({
              forecast: {
                main: responseJson.weather[0].main,
                description: responseJson.weather[0].description,
                temp: responseJson.main.temp
              }
            });
          });
        }

  render() {
    return (
    <View style={styles.containerMain}>

      <View style={styles.Header}>
          <Text style={{ textAlign: 'center', padding: 30, fontSize: 25, color: '#FFFFFF'}} >Cuaca</Text>
      </View>

      <View style={styles.box}>
          <Text style={{ textAlign: 'center', padding: 3, fontSize: 20, color: '#FFFFFF'}}>Masukkan Nama Kota</Text>

          <View style={styles.textBox}>
          <TextInput style = {{height: 50, textAlign: 'center'}}
              placeholder="Masukkan Nama Kota"
              onChangeText={(kota)=>this.setState({kota})}
          />
          </View>

          <View style={styles.buttonStyle}>
          <Button
              onPress={
                () => this.getWeather()
              }
              title="Lihat"
              color="#BDC3C7"
              accessibilityLabel="Klik untuk melihat"
            />
          </View>
      </View>


      <View style={styles.Hasil}>
        <Text style ={{ padding: 10, fontSize: 20 }} >
          City = {this.state.kota} {'\n'}
          Weather = {this.state.forecast.main} {'\n'}
          Description = {this.state.forecast.description} {'\n'}
          Temp = {this.state.forecast.temp} {'°C'}
        </Text>
      </View>

      <View style={styles.Footer}>
          <Text style={{ textAlign: 'center', padding: 20, fontSize: 14, color: '#FFFFFF'}} >©Mr.Wilian</Text>
      </View>

</View>
    );
  }
}


const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#ABB7B7',
    flex: 1
  },
  Header: {
    flex: 1,
    backgroundColor: '#6C7A89'
  },
  Footer: {
    flex: 0.6,
    backgroundColor: '#6C7A89',
  },
  box: {
    flex: 2,
    backgroundColor: '#95A5A6',
    margin: 10
  },
  Hasil: {
    flex: 4,
    backgroundColor: '#E3F2FD',
    margin: 10,
    flexDirection: 'row'
  },
  buttonStyle: {
    flex: 1,
    margin: 10,
    justifyContent: 'center'
  },
  textBox: {
    margin: 10,
    justifyContent: 'center',
    backgroundColor: '#E3F2FD'
  }

});