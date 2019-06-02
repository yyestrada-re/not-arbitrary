import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class partedos extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/sadparrot.gif')} />
        <Text style={styles.paragraph}>
          <Text style = {styles.bolded}>I didn't finish, but can you really blame me? Just pretend this works :)</Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 5,
    flexDirection: 'row'
  },
  paragraph: {
    margin: 5,
    marginTop: 0,
    marginRight: 140,
    fontSize: 14,
    //fontWeight: 'bold',
    marginLeft: 10
  },
  logo: {
    height: 140,
    width: 150,
    marginLeft: 5,
    marginTop: 0,
    justifyContent: 'flex-start'
  },
  bolded: {
      fontWeight: 'bold'
  }
});
