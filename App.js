import { createStackNavigator, createAppContainer} from 'react-navigation';
import Initial from './components/Initial'
import Statistics from './components/Statistics'

const RootStack = createStackNavigator({
  Default: {
    screen: Initial
  },
  Stats: {
    screen: Statistics
  }
});

const App = createAppContainer(RootStack);

export default App;