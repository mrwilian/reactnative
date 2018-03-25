import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.containerMain}>

        <View style={styles.box1}>
          <Text style={styles.text1}>Pendidikan Teknik Informatika</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.text2}>Slider</Text>
        </View>
        <View style={styles.box3}>
          <View style={styles.inbox1}>
            <View style={styles.inbox2}>
              <Text style={styles.text2}>1</Text>
            </View>
            <View style={styles.inbox2}>
              <Text style={styles.text2}>2</Text>
            </View>
            <View style={styles.inbox2}>
              <Text style={styles.text2}>3</Text>
            </View>
            <View style={styles.inbox2}>
              <Text style={styles.text2}>4</Text>
            </View>
          </View>
          <View style={styles.inbox1}>
            <View style={styles.inbox2}>
              <Text style={styles.text2}>5</Text>
            </View>
            <View style={styles.inbox2}>
              <Text style={styles.text2}>6</Text>
            </View>
            <View style={styles.inbox2}>
              <Text style={styles.text2}>7</Text>
            </View>
            <View style={styles.inbox2}>
              <Text style={styles.text2}>8</Text>
            </View>
          </View>
        </View>
        <View style={styles.box4}>
          <Text style={styles.text3}>#JaenKuliahdiPTI</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: '#C5EFF7',
    flexDirection: 'column'
  },

  box1: {
    flex: 2,
    backgroundColor: '#1F3A93',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  box2: {
    flex: 4,
    backgroundColor: '#3498DB',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  box3: {
    flex: 4,
    backgroundColor: '#81CFE0',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },

  box4: {
    flex: 2,
    backgroundColor: '#1F3A93',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  inbox1: {
    flex: 4,
    backgroundColor: '#81CFE0',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },

  inbox2: {
    flex: 4,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },
  text1: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  text2: {
    fontSize: 30,
  },
  text3: {
    fontSize: 30,
    color: 'white',
  },
});
