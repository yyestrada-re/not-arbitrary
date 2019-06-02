import React from "react";
import {Text, View} from 'react-native';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import Home from './components/Home';
import Effects from './components/Effects';
import Never from './componenets/Never';

const TabNavigator = createBottomTabNavigator ({
  home: Home,
  ques: Effects,
  recy: Never,
})

export default createAppContainer(TabNavigator)