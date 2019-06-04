import React from 'react';
import { StyleSheet, ImageBackground, Image, View, Text, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class Recycle extends React.Component {
  static navigationOptions = {header: null} 

  render() {
    return(
      <ScrollView>
        <View style = {styles.infographics}>
          <Image
            style = {{marginTop: 40, height: 200, marginLeft: 80, width: 200}}
            source = {require('../assets/recycle-sign.png')}
          />
          <Text style={styles.header}>The following CAN BE placed</Text>
          <Text style = {{marginLeft: 90, fontFamily: 'sans-serif', fontSize: 20, color: '#89AF46', fontWeight: 'bold'}}> in a recycling bin </Text>     
          <View style={ styles.column }>
            <View style={ styles.row }>

              <Image source = {require('../assets/scienceparrot.gif')} style = {styles.tiny}/>
              <Text style = {styles.list}>
                <Text style = {styles.specialBolded}>YOU MAY</Text>
                {"\t"}recycle paper, including
              </Text>
              <Text style = {styles.cont}>both glossy and non-glossy</Text>
              <Text style = {styles.cont}>magazines! {"\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"}</Text>

              <Image source = {require('../assets/scienceparrot.gif')} style = {styles.tiny}/>
              <Text style = {styles.list}>
                <Text style = {styles.specialBolded}>YOU MAY</Text>
                {"\t"}recycle any corrugated
              </Text>
              <Text style = {styles.cont}>cardboard! {"\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"}</Text>

              <Image source = {require('../assets/scienceparrot.gif')} style = {styles.tiny}/>
              <Text style = {styles.list}>
                <Text style = {styles.specialBolded}>YOU MAY</Text>
                {"\t"}recycle paperboard or 
              </Text>
              <Text style = {styles.cont}> chipboard (cereal boxes, tissue boxes, etc)! {"\t\t"}</Text>

              <Image source = {require('../assets/scienceparrot.gif')} style = {styles.tiny}/>
              <Text style = {styles.list}>
                <Text style = {styles.specialBolded}>YOU MAY</Text>
                {"\t"}recycle all plastic bottles and
              </Text>
              <Text style = {styles.cont}>containers with the following symbols: {"\t\t\n"}</Text>
            </View>
          </View>
          
          <Image source = {require('../assets/recycling-num.png')} style = {{marginLeft: 30}}/>
          
          <View style={ styles.column }>
            <View style={ styles.row }>
              <Image source = {require('../assets/scienceparrot.gif')} style = {styles.tiny}/>
              <Text style = {styles.list}>
                <Text style = {styles.specialBolded}>YOU MAY</Text>
                {"\t"}recycle plastic bags/wrap!
              </Text>

              <Image source = {require('../assets/scienceparrot.gif')} style = {styles.tiny}/>
              <Text style = {styles.list}>
                <Text style = {styles.specialBolded}>YOU MAY</Text>
                {"\t"}recycle any scrap metal! {"\t\t\t"}
              </Text>

              <Image source = {require('../assets/scienceparrot.gif')} style = {styles.tiny}/>
              <Text style = {styles.list}>
                <Text style = {styles.specialBolded}>YOU MAY</Text>
                {"\t"}recycle any pharmaceuticals!
              </Text>

              <Image source = {require('../assets/scienceparrot.gif')} style = {styles.tiny}/>
              <Text style = {styles.list}>
                <Text style = {styles.specialBolded}>YOU MAY</Text>
                {"\t"}recycle any household 
              </Text>
              <Text style = {styles.cont}>chemicals (bleach, paint thinner, etc)!</Text>

              <Image source = {require('../assets/scienceparrot.gif')} style = {styles.tiny}/>
              <Text style = {styles.list}>
                <Text style = {styles.specialBolded}>YOU MAY</Text>
                {"\t"}recycle any oil-based paint!
              </Text>

              <Image source = {require('../assets/scienceparrot.gif')} style = {styles.tiny}/>
              <Text style = {styles.list}>
                <Text style = {styles.specialBolded}>YOU MAY</Text>
                {"\t"}recycle any light bulbs! {"\t\t"}
              </Text>

              <Image source = {require('../assets/scienceparrot.gif')} style = {styles.tiny}/>
              <Text style = {styles.list}>
                <Text style = {styles.specialBolded}>YOU MAY</Text>
                {"\t"}recycle any motor oil!! {"\t\t\t"}
              </Text>
            </View>
            <View style = {styles.backwards}>
                    <Button
                        title = "Go Back"
                        color= '#5990BF'
                        onPress={() => this.props.navigation.navigate('Items')}
                    />
                </View>
            <View style = {{height: 50, width: 300}}/>
          </View>
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
  backwards: {
    width: 90,
    height: 10,
    marginTop: 20,
    marginLeft: 25
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


