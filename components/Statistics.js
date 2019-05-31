import React from 'react';
import { StyleSheet, ImageBackground, Image, View, Text, Button } from 'react-native';
import { Font } from 'expo';

export default class Statistics extends React.Component {
    static navigationOptions = {header: null} 

    componentDidMount() {
        Font.loadAsync({'Karla': require('../assets/fonts/Karla-Regular.ttf')});
        Font.loadAsync({'Space-Mono': require('../assets/fonts/SpaceMono-Regular.ttf')});
    }

    state = { fontLoaded: false};
    
    async componentDidMount() {
        await Font.loadAsync({'Karla': require('../assets/fonts/Karla-Regular.ttf'),});
        await Font.loadAsync({'Space-Mono': require('../assets/fonts/SpaceMono-Regular.ttf'),});
        this.setState({fontLoaded: true});
    }

    render() {
        return(
            <View style = {styles.infographics}>
              {this.state.fontLoaded ? (<Text style={styles.statsText}>“The percentage of Chicago’s total waste that is recycled through the city’s blue cart program is 9.71 percent, the worst rate in the nation” (Ruppenthal)</Text>) : null}
            </View>
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
    statsText: {
      color: '#fff',
      fontSize: 20,
      fontFamily: 'Space-Mono'
    },
    textBox: {
      width: 200,
      height: 175,
      fontFamily: 'sans-serif',
      fontSize: 14,
      color: '#fff',
      borderColor: '#fff',
      borderWidth: 2,
      justifyContent: 'center',
      marginTop: 50,
      padding: 20
    },
    redirect: {
      width: 80,
      height: 30,
      marginTop: 30
    }
});


