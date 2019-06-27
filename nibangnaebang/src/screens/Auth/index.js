import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from './Login';
import { StackNavOptions } from "../../constants/styles";

const defaultNavOptions = ({ navigation }) => {
    const { routeName } = navigation.state;

    switch (routeName) {
        default:
            return {
                header: null,
                headerBackTitle: null
            };
    }
};

let Stacks = {
    Login: { screen: Login, navigationOptions:defaultNavOptions },
}

export const AuthStacks = Object.keys(Stacks).reduce((acc, cur) => {
    acc[cur] = cur;
    return acc;
}, {});

const StackNavigator = createStackNavigator(Stacks, {
    initialRouteName: AuthStacks.Login,
    defaultNavigationOptions: StackNavOptions,
    headerLayoutPreset: 'center' 
});

const AuthContainer = createAppContainer(StackNavigator);

export default AuthContainer;