import React from "react";
import {Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import Home from './components/Home';
import Effects from './components/Effects';
import Never from './componenets/Never';

export default createBottomTabNavigator( 
  {
    home: Home,
    ques: Effects,
    recy: Never,
  },
  {
    defaultNavigationOptions: ({ navigation}) => ({
      tabBarIcon: ({ focused, horizontal, tintColor}) => {
        const { routeName } = navigation.state
        let icon
        if (routeName === 'home') {
          icon = require('../assets/home.png')
        } else if (routeName === 'ques') {
          icon = require('../assets/questions.png')
        } else {
          icon = require('../assets/recycle')
        }
        return <img src={icon}></img>
      }
    })
  }
)
