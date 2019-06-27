import React from 'react'
import MyPage from './MyPage';
import { createStackNavigator } from "react-navigation";
import { StackNavOptions } from '../../../constants/styles';
import MyRoom from './MyRoom';
import PickedRoom from './PickedRoom';
import BackButton from "../../../components/feedback/button/BackButton";

const defaultNavOptions = ({ navigation }) => {
    const { routeName } = navigation.state;

    switch (routeName) {
        default:
            return {
                headerBackImage:<BackButton/>,
                headerBackTitle: null
            };
    }
};

let Stacks = {
    MyPage: { screen: MyPage, navigationOptions:defaultNavOptions },
    MyRoom: { screen: MyRoom, navigationOptions:defaultNavOptions },
    PickedRoom: { screen: PickedRoom, navigationOptions:defaultNavOptions },
}

export const MyPageStacks = Object.keys(Stacks).reduce((acc, cur) => {
    acc[cur] = cur;
    return acc;
}, {});

const StackNavigator = createStackNavigator(Stacks, {
    initialRouteName: MyPageStacks.MyPage,
    defaultNavigationOptions: StackNavOptions,
    headerLayoutPreset: 'center' 
});

export default StackNavigator;