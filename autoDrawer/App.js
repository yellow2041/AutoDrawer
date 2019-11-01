import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Home from './home';
import Sketch from './Sketch';
import Pattern from './Pattern';
import Transpose from './transpose';
import MyHistory from './myHistory';
import Tutorial from './tutorial';
import About from './about';

const RootStack = createStackNavigator(
    {
        Home,
        Sketch,
        Pattern,
        Transpose
    },
    { initialRouteName: 'Home' }
);
const DrawerNav = createDrawerNavigator({
    Home:Home,
    Tutorial:Tutorial,
},
{
    drawerPosition: 'right',
    drawerBackgroundColor: "#FCF6E4"
});
const appNavigator = createSwitchNavigator({
    Drawer:DrawerNav,
    stack:RootStack,
});
class App extends Component {
    render(){
        return(
            <RootStack />
        );
    }
}

export default createAppContainer(appNavigator);