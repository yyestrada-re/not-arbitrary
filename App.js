import { createStackNavigator, createAppContainer} from 'react-navigation';
import Initial from './components/Initial'
import Statistics from './components/Statistics'
import Contaminated from './components/Contaminated'

const RootStack = createStackNavigator({
  Default: {
    screen: Initial
  },
  Stats: {
    screen: Statistics
  },
  Contaminate: {
    screen: Contaminated
  }
});

const App = createAppContainer(RootStack);

export default App;