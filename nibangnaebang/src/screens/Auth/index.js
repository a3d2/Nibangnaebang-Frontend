import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from './Login';
import { StackNavOptions } from "../../constants/styles";
import RegisterInfo from './Register/RegisterInfo';
import RegisterAuth from './Register/RegisterAuth';
import RegisterComplete from './Register/RegisterComplete';
import RegisterGender from './Register/RegisterGender';

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
    RegisterInfo: { screen: RegisterInfo, navigationOptions:defaultNavOptions },
    RegisterAuth: { screen: RegisterAuth, navigationOptions:defaultNavOptions },
    RegisterComplete: { screen: RegisterComplete, navigationOptions:defaultNavOptions },
    RegisterGender: { screen: RegisterGender, navigationOptions:defaultNavOptions},
}

export const AuthStacks = Object.keys(Stacks).reduce((acc, cur) => {
    acc[cur] = cur;
    return acc;
}, {});

const StackNavigator = createStackNavigator(Stacks, {
    initialRouteName: AuthStacks.RegisterGender,
    defaultNavigationOptions: StackNavOptions,
    headerLayoutPreset: 'center' 
});

const AuthContainer = createAppContainer(StackNavigator);

export default AuthContainer;