import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

import { Card } from 'react-native-paper';
import Locations from './Locations';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Card>
          <Locations/>
          <Locations />
          <Locations />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#384D5C',
    padding: 8,
    width: '100%',
    height: '100%',
    borderColor: '#AAABA7',
    marginTop: 10
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    //textAlign: 'left',
  },
});
