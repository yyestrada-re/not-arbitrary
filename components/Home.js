import React from "react";
import { StyleSheet, Image, View, Text, Button, ScrollView } from 'react-native';
import { Font } from 'expo';

export default class Home extends React.Component {
    static navigationOptions = {header: null} 

    componentDidMount() {
        Font.loadAsync({'Karla': require('../assets/fonts/Karla-Regular.ttf')});
        Font.loadAsync({'Space-Mono': require('../assets/fonts/SpaceMono-Regular.ttf')});
    }
    state = { fontLoaded: false};
    
  async componentDidMount() {
    await Font.loadAsync({'pt': require('../assets/fonts/pt.ttf'),});
    this.setState({fontLoaded: true});
  }
  
  render(){
    return( 
        <View style = {styles.background}>
            <View style = {styles.container}>
                <Text>home screen</Text>
            </View>
        </View>
    );
}}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#384D5C',
        flex: 1,
        width: '100%',
        height: '100%'
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
    }
});
  
