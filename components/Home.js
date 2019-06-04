import React, {Component} from 'react';
import {TouchableOpacity, Image, Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

import Locations from './Locations';
import { ScrollView } from 'react-native-gesture-handler';

export default class Home extends React.Component {
  static route = {
    navigationBar: {
      visible: false,
    },
  };

  render() {
    return (
      <ScrollView style = {styles.container}>
        <View>
          <Locations/>
        </View>  
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#384D5C',
    width: '100%',
    height: '100%',
    borderColor: '#AAABA7'
  }
});
