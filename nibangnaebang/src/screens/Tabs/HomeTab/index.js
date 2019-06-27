import React from 'react'
import Home from './Home';
import { createStackNavigator } from "react-navigation";
import { StackNavOptions } from '../../../constants/styles';
import RoomDetail from './Room/RoomDetail';
import BackButton from "../../../components/feedback/button/BackButton";

const defaultNavOptions = ({ navigation }) => {
    const { routeName } = navigation.state;

    switch (routeName) {
        case HomeStacks.Home:
            return {
                header: null,
                headerBackTitle: null
            };
        default:
            return {
                headerBackImage:<BackButton/>,
                headerBackTitle: null
            };
    }
};

let Stacks = {
    Home: { screen: Home, navigationOptions:defaultNavOptions },
    RoomDetail: { screen: RoomDetail, navigationOptions:defaultNavOptions  }
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