import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { Provider } from 'react-redux';
import store from './store';

import Home from './components/home';
import Sketch from './components/Sketch';
import Pattern from './components/Pattern';
import Transpose from './components/transpose';
import MyHistory from './components/myHistory';
import Tutorial from './components/tutorial';
import About from './about';
import Palette from './components/Palette';
import { AppLoading } from 'expo';
import {Asset} from 'expo-asset';

const RootStack = createStackNavigator(
    {
        Home,
        Sketch,
        Pattern,
        Transpose,
        Palette
    },
    { initialRouteName: 'Home' }
);
const DrawerNav = createDrawerNavigator({
    Home: Home,
    Tutorial: Tutorial,
},
    {
        drawerPosition: 'right',
        drawerBackgroundColor: "#FCF6E4"
    });
const appNavigator = createSwitchNavigator({
    Drawer: DrawerNav,
    stack: RootStack,
});
const AppContainer = createAppContainer(appNavigator);
class App extends Component {
    state = {
        isReady: false,
    };
    render() {
        if (!this.state.isReady) {
            return (
                <AppLoading
                    startAsync={this._cacheResourcesAsync}
                    onFinish={() => this.setState({ isReady: true })}
                    onError={console.warn}
                />
            );
        }
        return (
            <Provider store={store}>
                <AppContainer /> 
            </Provider>
        );
    }
    async _cacheResourcesAsync() {
        
        const images = [require('./icons/logo.png')];

        const cacheImages = images.map(image => {
            return Asset.fromModule(image).downloadAsync();
        });
        return Promise.all(cacheImages);
    }
}

export default App;