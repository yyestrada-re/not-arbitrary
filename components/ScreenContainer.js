import React, { Component } from 'react';
import {createStackNavigator, createAppContainer } from 'react-navigation';

import Initial from './components/Initial.js';
import Statistics from './components/Statistics.js';

const RootStack = createStackNavigator(
{
  InitialScreen: { screen: Initial },
  StatisticsScreen: { screen: Statistics },
}
);

const Container = createAppContainer(RootStack);

export default Container;