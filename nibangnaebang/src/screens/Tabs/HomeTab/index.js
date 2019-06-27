import React from 'react'
import Home from './Home';
import { createStackNavigator } from "react-navigation";
import { StackNavOptions } from '../../../constants/styles';
import RoomDetail from './Room/RoomDetail';

const defaultNavOptions = ({ navigation }) => {
    const { routeName } = navigation.state;

    switch (routeName) {
    }
};

let Stacks = {
    Home: { screen: Home, navigationOptions:defaultNavOptions },
    RoomDeatil: { screen: RoomDetail, navigationOptions:defaultNavOptions  }
}

export const HomeStacks = Object.keys(Stacks).reduce((acc, cur) => {
    acc[cur] = cur;
    return acc;
}, {});

const StackNavigator = createStackNavigator(Stacks, {
    initialRouteName: HomeStacks.Home,
    defaultNavigationOptions: StackNavOptions,
    headerLayoutPreset: 'center' 
});

export default StackNavigator;