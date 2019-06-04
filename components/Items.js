import React from 'react';
import { StyleSheet, ImageBackground, Image, View, Text, Button } from 'react-native';
import { Font } from 'expo';
import { ScrollView } from 'react-native-gesture-handler';

export default class Items extends React.Component {
  static navigationOptions = {header: null} 

  componentDidMount() {
    Font.loadAsync({'Space-Mono': require('../assets/fonts/SpaceMono-Regular.ttf')});
  }

  state = { fontLoaded: false};
    
  async componentDidMount() {
    await Font.loadAsync({'Space-Mono': require('../assets/fonts/SpaceMono-Regular.ttf'),});
    this.setState({fontLoaded: true});
  };

  render() {
    return(
      <ScrollView>
        <View style = {styles.infographics}>
          <Image
            style = {{marginTop: 40, height: 200, marginLeft: 80, width: 200}}
            source = {require('../assets/cancel.png')}
          />
          <Text style={styles.header}>The following CANNOT BE placed</Text>
          <Text style = {{marginLeft: 100, fontFamily: 'sans-serif', fontSize: 20, color: '#FF4545', fontWeight: 'bold'}}> in a recycling bin </Text>     
          <View style={ styles.column }>
            <View style={ styles.row }>

              {/*wire hanger*/}
              <Image source = {require('../assets/evilparrot.gif')} style = {styles.tiny}/>
              <Text style = {styles.list}>
                <Text style = {styles.specialBolded}>DO NOT</Text>
                {"\t"}recycle wire hangers! {"\t\t\t\t\t\t"}
              </Text>

              <Image source = {require('../assets/evilparrot.gif')} style = {styles.tiny}/>
              <Text style = {styles.list}>
                <Text style = {styles.specialBolded}>DO NOT</Text>
                {"\t"}recycle any food or liquid!
              </Text>

              <Image source = {require('../assets/evilparrot.gif')} style = {styles.tiny}/>
              <Text style = {styles.list}>
                <Text style = {styles.specialBolded}>DO NOT</Text>
                {"\t"}recycle soiled paper fibers!
              </Text>

              <Image source = {require('../assets/evilparrot.gif')} style = {styles.tiny}/>
              <Text style = {styles.list}>
                <Text style = {styles.specialBolded}>DO NOT</Text>
                {"\t"}recycle rechargeable batteries!
              </Text>

              <Image source = {require('../assets/evilparrot.gif')} style = {styles.tiny}/>
              <Text style = {styles.list}>
                <Text style = {styles.specialBolded}>DO NOT</Text>
                {"\t"}recycle plastic bags/wrap!
              </Text>

              <Image source = {require('../assets/evilparrot.gif')} style = {styles.tiny}/>
              <Text style = {styles.list}>
                <Text style = {styles.specialBolded}>DO NOT</Text>
                {"\t"}recycle any scrap metal! {"\t\t\t"}
              </Text>

              <Image source = {require('../assets/evilparrot.gif')} style = {styles.tiny}/>
              <Text style = {styles.list}>
                <Text style = {styles.specialBolded}>DO NOT</Text>
                {"\t"}recycle any pharmaceuticals!
              </Text>

              <Image source = {require('../assets/evilparrot.gif')} style = {styles.tiny}/>
              <Text style = {styles.list}>
                <Text style = {styles.specialBolded}>DO NOT</Text>
                {"\t"}recycle any household 
              </Text>
              <Text style = {styles.cont}>chemicals (bleach, paint thinner, etc)!</Text>

              <Image source = {require('../assets/evilparrot.gif')} style = {styles.tiny}/>
              <Text style = {styles.list}>
                <Text style = {styles.specialBolded}>DO NOT</Text>
                {"\t"}recycle any oil-based paint!
              </Text>

              <Image source = {require('../assets/evilparrot.gif')} style = {styles.tiny}/>
              <Text style = {styles.list}>
                <Text style = {styles.specialBolded}>DO NOT</Text>
                {"\t"}recycle any light bulbs! {"\t\t"}
              </Text>

              <Image source = {require('../assets/evilparrot.gif')} style = {styles.tiny}/>
              <Text style = {styles.list}>
                <Text style = {styles.specialBolded}>DO NOT</Text>
                {"\t"}recycle any motor oil!! {"\t\t\t"}
              </Text>

              <Image source = {require('../assets/evilparrot.gif')} style = {styles.tiny}/>
              <Text style = {styles.list}>
                <Text style = {styles.specialBolded}>DO NOT</Text>
                {"\t"}recycle any polystyrene {"\t\t"}
              </Text>

              <Image source = {require('../assets/evilparrot.gif')} style = {styles.tiny}/>
              <Text style = {styles.list}>
                <Text style = {styles.specialBolded}>DO NOT</Text>
                {"\t"}recycle any hardback books!
              </Text>

              <Image source = {require('../assets/evilparrot.gif')} style = {styles.tiny}/>
              <Text style = {styles.list}>
                <Text style = {styles.specialBolded}>DO NOT</Text>
                {"\t"}recycle any disposable utensils
              </Text>
              <Text style = {styles.cont}>even the biodegradable ones!</Text>
            </View>
          </View>

          <Text style = {{marginTop: 20, marginLeft: 20, fontSize: 15, fontFamily: 'sans-serif', color: '#fff'}}>
              <Text style = {{fontWeight: 'bold'}}>Source: </Text>
              Groot Industries, Inc.
          </Text>
          
          <View style = {styles.redirect}>
            <Button
              title="So what CAN I recycle?"
              color= '#5990BF'
              onPress={() => this.props.navigation.navigate('Recycle')}
            /> 
          </View>

          <View style = {{height: 50, width: 300}}/>
        </View>
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
  header: {
    color: '#FF4545',
    fontSize: 20,
    fontFamily: 'sans-serif',
    //marginTop: 50,
    fontWeight: 'bold',
    marginTop: 15,
    marginLeft: 25
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
    marginTop: 6,
    marginLeft: 50
  },
  specialBolded: {
    fontWeight: 'bold', 
    fontFamily: 'sans-serif',
    color: '#FF4545',
    fontSize: 15,
    marginTop: 21,
    marginLeft: 18
  }
});


