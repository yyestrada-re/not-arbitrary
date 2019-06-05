import React from 'react';
import {View, Text,  StyleSheet, Image , PermissionsAndroid, Platform} from 'react-native';
import AsyncStorage from 'react-native';

export default class Carpool extends React.Component {
  state = { // set current state
    currentLongitude: null, //Initial Longitude
    currentLatitude: null, //Initial Latitude
 }
 componentDidMount = () => {
  var that = this;

  //checl for system permissions
  if(Platform.OS === 'ios'){
    this.callLocation(that);
  }else{
    async function requestLocationPermission() {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,{
            'title': 'Location Access Required',
            'message': 'This app needs to access your location'
          }
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          that.callLocation(that);
        } else {
          alert("Permission Denied");
        }
      } catch (err) {
        console.warn(err)
      }
    }
    requestLocationPermission();
  }    
 }

 callLocation(that){ //function gives current location
    navigator.geolocation.getCurrentPosition(
       (position) => {
          const currentLongitude = JSON.stringify(position.coords.longitude); //getting the Longitude from the location json
          const currentLatitude = JSON.stringify(position.coords.latitude); //getting the Latitude from the location json
          this.storeData(currentLatitude, currentLongitude);
          that.setState({ currentLongitude:currentLongitude }); //Setting state Longitude to re re-render the Longitude Text
          that.setState({ currentLatitude:currentLatitude }); //Setting state Latitude to re re-render the Longitude Text
       },
       (error) => alert(error.message),
       { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
 }

 componentWillUnmount = () => {
    navigator.geolocation.clearWatch(this.watchID);
 }

storeData = async (lat, long) => { //return a link instead
    var url = 'geo:0,0?q=' + 'lat,long';
    try {
     await AsyncStorage.setItem('urlOne', JSON.stringify(url));
   } catch (error) {
        console.warn(error)
   }
 }

 getData = async(key) => {
     try {
         const value = await AsyncStorage.getItem(key)
         if(value !== null) {
            return(JSON.parse(url));
         }
     } catch(error) {
        console.warn(error)
     }
 }

 render() {
    return (
       <View style = {styles.container}>
          <Text style = {styles.boldText}>
             You are Here
          </Text>
          <Text style={{justifyContent:'center',alignItems: 'center',marginTop:16}}>
            Longitude: {this.state.currentLongitude}
          </Text>
          <Text style={{justifyContent:'center',alignItems: 'center',marginTop:16}}>
            Latitude: {this.state.currentLatitude}
          </Text>
       </View>
    )
 }
}
const styles = StyleSheet.create ({
 container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 50,
    padding:16,
    backgroundColor:'white'
 },
 boldText: {
    fontSize: 30,
    color: 'red',
 }
})