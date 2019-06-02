import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class LocationsOne extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/locationOne.jpg')} />
        <Text style={styles.paragraph}>
          <Text style = {styles.bolded}>Location Name:</Text> City of Chicago Drop-off Center
        </Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    //marginTop: 5
    //flexDirection: 'row'
  },
  paragraph: {
    margin: 5,
    marginTop: 0,
    marginRight: 140,
    fontSize: 14,
    //fontWeight: 'bold',
    textAlign: 'left',
  },
  logo: {
    height: 200,
    width: 150,
    marginLeft: 170,
    marginTop: 0,
    justifyContent: 'flex-start'
  },
  bolded: {
      fontWeight: 'bold'
  }
});
