import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import Home from './home';
import Sketch from './Sketch';
import Pattern from './Pattern';
import Transpose from './transpose';
import MyHistory from './myHistory';
import Tutorial from './tutorial';
import About from './about';
import Palette from './Palette';
import reducers from './reducers';
import { AppLoading } from 'expo';
import {Asset} from 'expo-asset';

const store = createStore(reducers);

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
            <AppContainer />
        );
    }
    async _cacheResourcesAsync() {
        const images = [require('./logo.png')];

        const cacheImages = images.map(image => {
            return Asset.fromModule(image).downloadAsync();
        });
        return Promise.all(cacheImages);
    }
}

export default App;