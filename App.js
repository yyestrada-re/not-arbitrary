import { createStackNavigator, createAppContainer} from 'react-navigation';

import Initial from './components/Initial'
import Statistics from './components/Statistics'
import Contaminated from './components/Contaminated'

import Apartments from './components/Apartments'
import Home from './components/Home';
import NavBar from './components/NavBar';
import Recycle from './components/Recycle'

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
  },
  NavBar: {
    screen: NavBar
  },
  Recycle: {
    screen: Recycle
  },
  Initial: {
    screen: Initial
  }
});

const App = createAppContainer(RootStack);

export default App;