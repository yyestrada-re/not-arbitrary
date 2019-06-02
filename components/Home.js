import React from 'react';
import { StyleSheet, ImageBackground, Image, View, Text, Button } from 'react-native';
import { Font } from 'expo';
import { ScrollView } from 'react-native-gesture-handler';

export default class Home extends React.Component {

  render() {
    return(
      <ScrollView style = {styles.infographics}>
            <View style = {styles.container}>
                <Text>hola</Text>
            </View>

            <View style = {styles.container}>
                <Text>hola</Text>
            </View>

            <View style = {styles.container}>
                <Text>hola</Text>
            </View>

            <View style = {styles.container}>
                <Text>hola</Text>
            </View>

            <View style = {styles.container}>
                <Text>hola</Text>
            </View>

            <View style = {styles.container}>
                <Text>hola</Text>
            </View>

            <View style = {{height: 100, width: 400}}/>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  infographics: {
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    backgroundColor: '#384D5C' //'#1B384F'
  },
  container: {
    width: 340,
    height: 200,
    //backgroundColor: '#ffd1d1',
    borderColor: '#000000',
    borderWidth: 2,
    justifyContent: 'center',
    marginTop: 40,
    marginLeft: 10
  },
  header: {
    color: '#89AF46',
    fontSize: 20,
    fontFamily: 'sans-serif',
    //marginTop: 50,
    fontWeight: 'bold',
    marginTop: 15,
    marginLeft: 40
  },
  redirect: {
    width: 130,
    height: 30,
    marginTop: 30,
    marginLeft: 215
  },
  column: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: 320
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    flex: 1
  },
  tiny: {
    width: 30,
    height: 30,
    marginLeft: 15,
    marginTop: 10
  },
  list: {
    fontFamily: 'sans-serif',
    color: '#fff',
    fontSize: 15,
    marginTop: 21,
    marginLeft: 8
  },
  cont: {
    fontFamily: 'sans-serif',
    color: '#fff',
    fontSize: 15,
    marginTop: 4,
    marginLeft: 55
  },
  specialBolded: {
    fontWeight: 'bold', 
    fontFamily: 'sans-serif',
    color: '#89AF46',
    fontSize: 15,
    marginTop: 21,
    marginLeft: 18
  }
});


