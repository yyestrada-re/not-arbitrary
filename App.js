import { createStackNavigator, createAppContainer} from 'react-navigation';

import Initial from './components/Initial'
import Statistics from './components/Statistics'
import Contaminated from './components/Contaminated'

import Apartments from './components/Apartments'
import Home from './components/Home';

const RootStack = createStackNavigator({
  Default: {
    screen: Initial
  },
  Stats: {
    screen: Statistics
  },
  Contaminate: {
    screen: Contaminated
  },
  Apartments: {
    screen: Apartments
  },
  Home: {
    screen: Home
  }
});

const App = createAppContainer(RootStack);

export default App;