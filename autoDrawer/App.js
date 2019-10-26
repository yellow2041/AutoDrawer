import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from './home';
import Sketch from './Sketch';
import Pattern from './Pattern';
import Transpose from './transpose';

const RootStack = createStackNavigator(
    {
        Home,
        Sketch,
        Pattern,
        Transpose
    },
    { initialRouteName: 'Home' }
);

const App = createAppContainer(RootStack);

export default App;