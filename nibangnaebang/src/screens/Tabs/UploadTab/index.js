import React from 'react'
import Upload from './Upload';
import { createStackNavigator } from "react-navigation";
import { StackNavOptions } from '../../../constants/styles';

const defaultNavOptions = ({ navigation }) => {
    const { routeName } = navigation.state;

    switch (routeName) {
    }
};

let Stacks = {
    Upload: { screen: Upload, navigationOptions:defaultNavOptions },
}

export const UploadStacks = Object.keys(Stacks).reduce((acc, cur) => {
    acc[cur] = cur;
    return acc;
}, {});

const StackNavigator = createStackNavigator(Stacks, {
    initialRouteName: UploadStacks.Upload,
    defaultNavigationOptions: StackNavOptions,
    headerLayoutPreset: 'center' 
});

export default StackNavigator;