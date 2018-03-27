import React, { Component } from 'react';
import { StyleSheet, Text, Button, TextInput, View
} from 'react-native';

export default class Cuaca extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kota: '',
      forecast: {
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
                temp: responseJson.main.temp,
                pressure: responseJson.main.pressure,
                humidity: responseJson.main.humidity,
                sunrise: responseJson.sys.sunrise,
                sunset: responseJson.sys.sunset,
                speed: responseJson.wind.speed,
                sea_level: responseJson.main.sea_level,
                grnd_level: responseJson.main.grnd_level
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
              accessibilityLabel="Klik untuk melihat"
            />
          </View>
      </View>

      <View style={styles.Hasil}>
          <View style={styles.box31}>
            <View style={styles.box312}>
              <Text style={styles.text3}>Temp : {this.state.forecast.temp} {'°C'}</Text>
            </View>
            <View style={styles.box312}>
              <Text style={styles.text3}>Main : {this.state.forecast.main}</Text>
            </View>
            <View style={styles.box312}>
              <Text style={styles.text3}>Sunrise : {this.state.forecast.sunrise}</Text>
            </View>
            <View style={styles.box312}>
              <Text style={styles.text3}>Pressure : {this.state.forecast.pressure}</Text>
            </View>
            <View style={styles.box312}>
              <Text style={styles.text3}>Sea Level : {this.state.forecast.sea_level}</Text>
            </View>
          </View>

          <View style={styles.box31}>
            <View style={styles.box312}>
              <Text style={styles.text3}>Wind Speed : {this.state.forecast.speed}</Text>
            </View>
            <View style={styles.box312}>
              <Text style={styles.text3}>Main Desc : {this.state.forecast.description}</Text>
            </View>
            <View style={styles.box312}>
              <Text style={styles.text3}>sunset : {this.state.forecast.sunset}</Text>
            </View>
            <View style={styles.box312}>
              <Text style={styles.text3}>Humidity : {this.state.forecast.humidity}</Text>
            </View>
            <View style={styles.box312}>
              <Text style={styles.text3}>Ground Level : {this.state.forecast.grnd_level}</Text>
            </View>
          </View>
      </View>

      <View style={styles.Footer}>
          <Text style={{ textAlign: 'center', padding: 20, fontSize: 14, color: '#FFFFFF'}} >©Mr Wilian</Text>
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
  box31: {
  flex: 4,
  backgroundColor: '#E3F2FD',
  justifyContent: 'space-around',
  margin: 10
  },
  box312: {
  flex: 1,
  backgroundColor: '#ABB7B7',
  justifyContent: 'space-around',
  alignItems: 'center',
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
    justifyContent: 'center',
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 5,
    color: '#0D47A1'
  },
  textBox: {
    margin: 10,
    justifyContent: 'center',
    backgroundColor: '#E3F2FD'
  },
  text3: {
  fontSize: 14,
  color: '#FFFFFF'
  }

});
