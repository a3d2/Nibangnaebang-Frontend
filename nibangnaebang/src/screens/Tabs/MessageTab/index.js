import React from 'react'
import Message from './Message';
import { createStackNavigator } from "react-navigation";
import { StackNavOptions } from '../../../constants/styles';

const defaultNavOptions = ({ navigation }) => {
    const { routeName } = navigation.state;

    switch (routeName) {
    }
};

let Stacks = {
    Message: { screen: Message, navigationOptions:defaultNavOptions },
}

export const MessageStacks = Object.keys(Stacks).reduce((acc, cur) => {
    acc[cur] = cur;
    return acc;
}, {});

const StackNavigator = createStackNavigator(Stacks, {
    initialRouteName: MessageStacks.Message,
    defaultNavigationOptions: StackNavOptions,
    headerLayoutPreset: 'center' 
});

export default StackNavigator;