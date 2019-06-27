import React from 'react'
import { createStackNavigator } from "react-navigation";
import { StackNavOptions } from '../../../constants/styles';
import Message from './Message/Message';
import MessageDetail from './Message/MessageDetail';
import BackButton from "../../../components/feedback/button/BackButton";

const defaultNavOptions = ({ navigation }) => {
    const { routeName } = navigation.state;

    switch (routeName) {
        default:
            return {
                title:'쪽지함',
                headerBackImage:<BackButton/>,
                headerBackTitle: null
            };
    }
};

let Stacks = {
    Message: { screen: Message, navigationOptions:defaultNavOptions },
    MessageDetail: { screen: MessageDetail, navigationOptions:defaultNavOptions },
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