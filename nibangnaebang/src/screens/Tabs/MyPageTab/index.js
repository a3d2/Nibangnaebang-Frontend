import React from 'react'
import MyPage from './MyPage';
import { createStackNavigator } from "react-navigation";
import { StackNavOptions } from '../../../constants/styles';

const defaultNavOptions = ({ navigation }) => {
    const { routeName } = navigation.state;

    switch (routeName) {
    }
};

let Stacks = {
    MyPage: { screen: MyPage, navigationOptions:defaultNavOptions },
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