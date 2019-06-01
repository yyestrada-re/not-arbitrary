import React from "react";
import {Text, View} from 'react-native';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image source = {require('../assets/home.png')}> 
      </Image>
      </View>
    );
  }
}

class QuestionsScreen extends React.Component {
  render() {
    return (
      <View> style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image source = {require('../assets/questions.png')}>
        </Image>
      </View>
    );
  }
}

class RecycleScreen extends React.Component {
  render() {
    return (
      <View> style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image source = {require('../assets/recycle.png')}>
        </Image>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator ({
  Default: HomeScreen,
  Questions: QuestionsScreen,
  Recycle: RecycleScreen,
})

export default createAppContainer(TabNavigator)